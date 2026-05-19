# 内容填充指南

本文档提供针对制造企业的内容填充模板，帮助您快速替换占位内容为实际企业信息。

---

## 公司简介模板

### 基本信息

| 字段 | 模板示例 | 说明 |
|------|---------|------|
| 公司全称 | 安徽派恩斯金属制品有限公司 | 工商注册全称 |
| 品牌名称 | PINS | 品牌缩写/商标 |
| 成立年份 | 2019年 | 实际成立年份 |
| 注册资本 | 1000万人民币 | 营业执照信息 |
| 员工人数 | 140+ | 实际在职员工数 |
| 年产值 | 9000万+ | 最新年度产值 |
| 主要产品 | 弹性销、实心销、锥形垫圈、非标冲压件 | 核心产品类目 |
| 认证体系 | IATF16949:2016, ISO14001:2015 | 已获得认证 |

### 公司简介示例（`index.html` / `about.html`）

```html
<div class="about-text">
    <h3>公司简介</h3>
    <p>{{COMPANY_NAME}}（{{BRAND_NAME}}）成立于{{YEAR}}年，注册资本{{REGISTERED_CAPITAL}}，
       现有员工{{EMPLOYEE_COUNT}}余人，年产值超{{ANNUAL_OUTPUT}}。</p>
    <p>公司专注于{{PRODUCTS}}等产品的研发与生产，
       产品广泛应用于{{APPLICATION_FIELDS}}等多个领域。</p>
    <p>公司通过{{CERTIFICATIONS}}认证，确保产品质量稳定可靠。</p>
</div>
```

### 发展历程模板

| 年份 | 里程碑 | 描述 |
|------|--------|------|
| YYYY | 项目筹备 | 团队组建，市场调研 |
| YYYY | 公司成立 | 正式注册成立 |
| YYYY+1 | 产线建设 | 完成生产线布局 |
| YYYY+2 | 产能提升 | 引进设备，产值突破 |
| YYYY+3 | 技术升级 | 获得专利/认证 |
| 当前 | 展望未来 | 持续创新发展方向 |

---

## 产品页面模板

### 产品分类格式

每类产品使用独立的 section，格式如下：

```html
<section class="section" id="product-category-id">
    <div class="container">
        <h2 class="section-title">{{产品分类名称}}</h2>
        <p class="section-subtitle">{{产品分类描述}}</p>
        
        <div class="products-grid">
            <div class="product-card">
                <div class="product-image">
                    <img src="images/{{产品图片}}.jpg" alt="{{产品名称}}">
                </div>
                <div class="product-info">
                    <h4>{{产品名称}}</h4>
                    <p class="product-desc">{{产品描述}}</p>
                    <div class="product-specs">
                        <div class="spec-item">
                            <span class="spec-label">材质：</span>
                            <span>{{材质}}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">表面处理：</span>
                            <span>{{表面处理}}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">执行标准：</span>
                            <span>{{标准}}</span>
                        </div>
                    </div>
                    <a href="product-detail.html?product={{产品ID}}" class="btn-view">查看详情</a>
                </div>
            </div>
        </div>
    </div>
</section>
```

### 产品规格参数格式（`product-detail.html`）

| 规格 | 直径 (mm) | 长度 (mm) | 材质 | 表面处理 |
|------|-----------|-----------|------|---------|
| {{标准号1}} | {{值}} | {{值}} | {{材质}} | {{处理}} |
| {{标准号2}} | {{值}} | {{值}} | {{材质}} | {{处理}} |

---

## 案例分析模板

```html
<div class="case-detail">
    <div class="case-header">
        <h1>{{案例标题}}</h1>
        <div class="case-meta">
            <span><i class="fas fa-industry"></i> {{所属行业}}</span>
            <span><i class="fas fa-calendar"></i> {{实施年份}}</span>
            <span><i class="fas fa-tag"></i> {{产品分类}}</span>
        </div>
    </div>
    
    <div class="case-section">
        <h2>项目背景</h2>
        <p>{{客户需求描述、项目挑战等}}</p>
    </div>
    
    <div class="case-section">
        <h2>解决方案</h2>
        <p>{{提供的产品方案描述}}</p>
        <ul>
            <li>{{方案要点1}}</li>
            <li>{{方案要点2}}</li>
            <li>{{方案要点3}}</li>
        </ul>
    </div>
    
    <div class="case-section">
        <h2>实施效果</h2>
        <div class="case-results">
            <div class="result-item">
                <div class="result-number">{{数值}}%</div>
                <div class="result-label">{{指标}}</div>
            </div>
            ...
        </div>
    </div>
</div>
```

**案例信息格式**：

| 字段 | 范例值 |
|------|--------|
| 标题 | 汽车差速器 |
| 行业 | 汽车制造、工程机械、风力发电等 |
| 年份 | 2024年 |
| 产品分类 | 弹性销系列、实心销系列等 |
| 结果数据 | 产品合格率99.8%，维护成本降低50% |

---

## 新闻模板

### 新闻列表条目（`news.html`）

```html
<div class="news-card">
    <div class="news-image">
        <img src="images/news_xxx.jpg" alt="{{新闻标题}}">
    </div>
    <div class="news-info">
        <div class="news-meta">
            <span><i class="fas fa-calendar"></i> {{YYYY-MM-DD}}</span>
            <span><i class="fas fa-tag"></i> {{分类}}</span>
        </div>
        <h4>{{新闻标题}}</h4>
        <p>{{新闻摘要（1-2句话）}}</p>
        <a href="news-detail.html" class="btn-view">阅读全文</a>
    </div>
</div>
```

### 新闻详情页（`news-detail.html`）

```html
<div class="news-detail">
    <div class="news-header">
        <h1>{{新闻标题}}</h1>
        <div class="news-meta">
            <span><i class="fas fa-calendar"></i> {{日期}}</span>
            <span><i class="fas fa-tag"></i> {{分类}}</span>
            <span><i class="fas fa-eye"></i> 阅读量：{{数字}}</span>
        </div>
    </div>
    
    <div class="news-content">
        <p>{{正文段落1}}</p>
        <h3>{{小标题1}}</h3>
        <p>{{正文段落2}}</p>
        <ul>
            <li>{{列表项1}}</li>
            <li>{{列表项2}}</li>
        </ul>
        ...
    </div>
    
    <div class="news-footer">
        <div class="news-tags">
            <span class="tag">{{标签1}}</span>
            <span class="tag">{{标签2}}</span>
        </div>
    </div>
</div>
```

**新闻分类建议**：
- 公司动态（内部新闻、企业活动）
- 行业资讯（行业新闻、市场动态）
- 产品发布（新品上市、技术升级）
- 展会活动（参展信息、行业会议）

---

## 联系方式模板

### 联系信息格式（`contact.html` / `index.html`）

| 信息项 | 模板值 | 说明 |
|--------|--------|------|
| 公司地址 | 安徽省 [具体地址] | 实际办公/工厂地址 |
| 联系电话 | [电话号码] | 公司总机/销售热线 |
| 电子邮箱 | [邮箱地址] | 业务联系邮箱 |
| 公司网站 | www.example.com | 官方网站域名 |
| 工作时间 | 周一至周五：8:00-17:00 | 客户服务时间 |

### 在线留言表单字段

| 字段 | 必填 | 类型 | 说明 |
|------|------|------|------|
| 姓名 | 是 | text | 联系人姓名 |
| 联系电话 | 是 | tel | 手机/座机 |
| 电子邮箱 | 否 | email | 邮箱地址 |
| 公司名称 | 否 | text | 客户公司 |
| 留言内容 | 是 | textarea | 需求描述 |

---

## 其他内容

### 企业价值观模板

| 价值观 | 描述 |
|--------|------|
| 诚信 | 以诚信为本，建立长期稳定的合作关系 |
| 团结 | 团队协作，共同推动企业发展 |
| 务实 | 脚踏实地，追求实效 |
| 开拓 | 勇于创新，开拓进取 |
| 服务创新 | 持续优化，为客户提供更好的服务 |

### 生产流程模板

```
模具制造 → 分条 → 冲压 → 热处理 → 研磨 → 磷化 → 筛选
```

可根据实际工艺流程增减步骤数量。

### 品质保证模板

| 检测设备 | 功能 | 关键参数 |
|----------|------|---------|
| 光学影像筛选机 | 全自动精密检测 | 精度±0.01mm, 速度3000件/分钟 |
| 三坐标测量仪 | 高精度尺寸测量 | 精度±0.001mm |
| 硬度测试仪 | 材料硬度测试 | 洛氏/布氏/维氏 |
| 全程质量追溯 | 全流程可控 | 原材料→成品 |

### 技术优势模板

| 技术领域 | 描述 |
|----------|------|
| 精密制造技术 | 精密冲压和成型技术，确保尺寸精度 |
| 热处理工艺 | 自主研发热处理工艺，优化力学性能 |
| 表面处理技术 | 多种工艺满足防腐耐磨需求 |
| 全自动检测 | 光学检测设备，零缺陷保证 |
