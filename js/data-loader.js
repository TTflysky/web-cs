/**
 * 派恩斯微网站 - 数据加载引擎
 * 从 data/*.json 读取数据，动态渲染页面
 * 修改 data/ 下的 JSON 文件即可更新网站内容，无需改动 HTML
 */
const PinesData = {
  // 缓存已加载的数据
  _cache: {},

  /**
   * 加载一个 JSON 数据文件
   * @param {string} name - 文件名（不含路径和扩展名，如 'products'）
   * @returns {Promise<any>}
   */
  async load(name) {
    if (this._cache[name]) return this._cache[name];
    try {
      const resp = await fetch(`data/${name}.json?_t=${Date.now()}`);
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      this._cache[name] = await resp.json();
      return this._cache[name];
    } catch (e) {
      console.warn(`[PinesData] 加载 data/${name}.json 失败:`, e.message);
      return null;
    }
  },

  /** 清空缓存（强制重新加载） */
  refresh() { this._cache = {}; },

  // ======================== 渲染函数 ========================

  /**
   * 渲染产品卡片网格
   * @param {string} selector - 容器选择器
   * @param {object} [opts] - 选项 { gridClass, linkPrefix }
   */
  async renderProducts(selector, opts = {}) {
    const products = await this.load('products');
    if (!products) return;

    const container = document.querySelector(selector);
    if (!container) return;

    const gridClass = opts.gridClass || 'products-grid';
    const grid = container.querySelector(`.${gridClass}`) || container;
    grid.innerHTML = '';

    products.forEach(p => {
      const specsHtml = Object.entries(p.specs || {})
        .map(([k, v]) => `<div class="spec-item"><span class="spec-label">${k}：</span><span>${v}</span></div>`)
        .join('');

      const subtypesHtml = (p.subtypes && p.subtypes.length > 0)
        ? `<div class="spec-item"><span class="spec-label">产品种类：</span><span>${p.subtypes.join('、')}</span></div>`
        : '';

      const card = document.createElement('div');
      card.className = 'product-card';
      // Create image with fallback to old_images
      const imgHtml = p.old_images && p.old_images.length > 0
        ? `<img src="${p.image}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;"
              onerror="this.src='${p.old_images[0]}';this.onerror=null;">`
        : `<img src="${p.image}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;">`;
      card.innerHTML = `
        <div class="product-image">${imgHtml}</div>
        <div class="product-info">
          <h4>${p.name}</h4>
          <p class="product-desc">${p.desc}</p>
          <div class="product-specs">${subtypesHtml}${specsHtml}</div>
          <a href="${p.link || '#'}" class="btn-view">查看详情</a>
        </div>`;
      grid.appendChild(card);
    });
  },

  /**
   * 渲染案例卡片网格
   * @param {string} selector - 容器选择器
   */
  async renderCases(selector) {
    const cases = await this.load('cases');
    if (!cases) return;

    const container = document.querySelector(selector);
    if (!container) return;

    container.innerHTML = '';
    cases.forEach(c => {
      const card = document.createElement('div');
      card.className = 'case-card';
      card.innerHTML = `
        <div class="case-image">
          <img src="${c.image}" alt="${c.title}" style="width:100%;height:100%;object-fit:cover;">
        </div>
        <div class="case-info">
          <h4>${c.title}</h4>
          <p>${c.desc}</p>
          <div class="case-meta">
            <span><i class="fas fa-industry"></i> ${c.category}</span>
            <span><i class="fas fa-calendar"></i> ${c.year}年</span>
          </div>
          <a href="case-detail.html" class="btn-view">查看详情</a>
        </div>`;
      container.appendChild(card);
    });
  },

  /**
   * 渲染新闻列表
   * @param {string} selector - 容器选择器
   */
  async renderNews(selector) {
    const news = await this.load('news');
    if (!news) return;

    const container = document.querySelector(selector);
    if (!container) return;

    container.innerHTML = '';
    news.forEach(n => {
      const card = document.createElement('div');
      card.className = 'news-card';
      card.innerHTML = `
        <div class="news-image">
          <img src="${n.image}" alt="${n.title}" style="width:100%;height:100%;object-fit:cover;">
        </div>
        <div class="news-content">
          <h3>${n.title}</h3>
          <p>${n.summary}</p>
          <div class="news-meta">
            <span><i class="far fa-calendar-alt"></i> ${n.date}</span>
            <span class="news-tag">${n.category}</span>
          </div>
          <a href="news-detail.html" class="btn-view">阅读更多</a>
        </div>`;
      container.appendChild(card);
    });
  },

  /**
   * 渲染公司基本信息
   * @param {object} [company] - 可选，传入已加载的公司数据
   */
  async renderCompanyInfo() {
    const company = await this.load('company');
    if (!company) return;

    // 公司简介段落
    document.querySelectorAll('.about-text p').forEach((el, i) => {
      if (company.intro_paragraphs[i]) el.textContent = company.intro_paragraphs[i];
    });

    // 统计数据
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach((card, i) => {
      if (company.stats[i]) {
        const icon = card.querySelector('i');
        const h4 = card.querySelector('h4');
        const p = card.querySelector('p');
        if (icon) icon.className = `fas fa-${company.stats[i].icon}`;
        if (h4) h4.textContent = company.stats[i].label;
        if (p) p.textContent = company.stats[i].desc;
      }
    });

    // 时间线
    const timelineContainer = document.querySelector('.timeline-container');
    if (timelineContainer && company.milestones.length > 0) {
      timelineContainer.innerHTML = '';
      company.milestones.forEach(m => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        item.innerHTML = `
          <div class="timeline-year">${m.year}</div>
          <div class="timeline-content">
            <h4>${m.title}</h4>
            <p>${m.desc}</p>
          </div>`;
        timelineContainer.appendChild(item);
      });
    }

    // 联系信息
    const phoneEls = document.querySelectorAll('[data-phone]');
    phoneEls.forEach(el => el.textContent = company.contact.phone);
    const emailEls = document.querySelectorAll('[data-email]');
    emailEls.forEach(el => el.textContent = company.contact.email);
    const addrEls = document.querySelectorAll('[data-address]');
    addrEls.forEach(el => el.textContent = company.contact.address);
    const zipEls = document.querySelectorAll('[data-zip]');
    zipEls.forEach(el => el.textContent = '邮编：' + company.contact.zip);

    // 企业文化
    if (company.culture) {
      const mottoEl = document.querySelector('[data-motto]');
      if (mottoEl) mottoEl.textContent = company.culture.motto;
      const visionEl = document.querySelector('[data-vision]');
      if (visionEl) visionEl.textContent = company.culture.vision;
      const missionEl = document.querySelector('[data-mission]');
      if (missionEl) missionEl.textContent = company.culture.mission;
      const philosophyEl = document.querySelector('[data-philosophy]');
      if (philosophyEl) philosophyEl.textContent = company.culture.philosophy;
    }

    // 质检设备（列出到 advantages 页面）
    if (company.quality_equipment) {
      const eqContainer = document.querySelector('[data-quality-equipment]');
      if (eqContainer) {
        eqContainer.innerHTML = '';
        company.quality_equipment.forEach(item => {
          const card = document.createElement('div');
          card.className = 'quality-card';
          card.innerHTML = `<i class="fas fa-microscope"></i><h5>${item}</h5><p>精密检测设备</p>`;
          eqContainer.appendChild(card);
        });
      }
    }
  },

  /**
   * 渲染荣誉资质
   * @param {string} selector - 容器选择器
   */
  async renderHonors(selector) {
    const company = await this.load('company');
    if (!company) return;

    const container = document.querySelector(selector);
    if (!container) return;

    container.innerHTML = '';
    company.certifications.forEach(cert => {
      const card = document.createElement('div');
      card.className = 'honor-card';
      card.innerHTML = `
        <div class="honor-icon">
          <i class="fas fa-${cert.icon}"></i>
        </div>
        <h4>${cert.title}</h4>
        <p>${cert.desc}</p>`;
      container.appendChild(card);
    });
  }
};

// 如果 DOM 已加载则自动初始化
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => PinesData.autoInit());
} else {
  PinesData.autoInit();
}

// 自动检测需要渲染的模块（通过 data-pines-* 属性标记容器）
PinesData.autoInit = async function() {
  const els = document.querySelectorAll('[data-pines-render]');
  for (const el of els) {
    const renderType = el.getAttribute('data-pines-render');
    switch (renderType) {
      case 'products':
        await this.renderProducts('#' + el.id);
        break;
      case 'products-grid':
        await this.renderProducts('#' + el.id, { gridClass: el.getAttribute('data-grid-class') || 'products-grid' });
        break;
      case 'cases':
        await this.renderCases('#' + el.id);
        break;
      case 'news':
        await this.renderNews('#' + el.id);
        break;
      case 'honors':
        await this.renderHonors('#' + el.id);
        break;
    }
  }
  // 公司信息自动填充
  await this.renderCompanyInfo();
};
