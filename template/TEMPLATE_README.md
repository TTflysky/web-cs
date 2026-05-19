# 工业微网站模板使用指南

## 模板概览

### 技术栈
| 项目 | 技术选型 |
|------|----------|
| HTML | HTML5 语义化标签 |
| CSS | 纯 CSS（自定义变量 + Flexbox/Grid 布局） |
| JavaScript | 原生 JS（ES6+） |
| 图标库 | Font Awesome 6（免费版） |
| 动画 | IntersectionObserver API + CSS3 过渡 |
| 响应式 | 移动优先，三档断点（桌面/平板/手机） |

### 适用场景
- 中小型制造企业官网
- 工业紧固件/金属制品企业展示
- 传统制造业数字化转型基础站点
- 企业品牌形象展示页

---

## 快速开始

### 直接使用（无需构建工具）

```bash
# 1. 解压模板包到任意目录
# 2. 用浏览器打开 index.html 即可预览
# 3. 修改内容后可直接部署
```

**零依赖要求**：无需 Node.js、npm、Webpack 等构建工具，开箱即用。

### 推荐本地开发方式

推荐使用 VS Code + Live Server 插件进行本地开发预览。

---

## 目录结构

```
pines-microsite/
├── index.html              # 首页（单页滚动式）
├── about.html              # 关于我们
├── products.html           # 产品中心
├── product-detail.html     # 产品详情
├── honors.html             # 荣誉资质
├── advantages.html         # 核心优势
├── cases.html              # 应用案例
├── case-detail.html        # 案例详情
├── news.html               # 新闻资讯
├── news-detail.html        # 新闻详情
├── contact.html            # 联系我们
│
├── css/
│   └── style.css           # 全局样式表
│
├── js/
│   ├── data-loader.js       # ★ 数据加载引擎（JSON → 动态渲染）
│   └── main.js              # 全局交互脚本
│
├── data/                    # ★ 数据文件目录（你只需改这里！）
│   ├── company.json         # 公司信息（简介、统计、里程碑、联系方式）
│   ├── products.json        # 产品数据（名称、图片、规格参数）
│   ├── cases.json           # 案例数据（标题、行业、描述）
│   └── news.json            # 新闻数据（标题、摘要、日期）
│
├── images/                 # 图片资源目录
│   ├── hero_background.jpg        # Hero 背景图
│   ├── product_elastic_pins.jpg   # 产品图 - 弹性销
│   ├── product_solid_pins.jpg     # 产品图 - 实心销
│   ├── product_conical_washers.jpg # 产品图 - 锥形垫圈
│   ├── product_nonstandard.jpg    # 产品图 - 非标冲压件
│   ├── case_auto.jpg              # 案例图 - 汽车
│   ├── case_engine.jpg            # 案例图 - 发动机
│   ├── case_gearbox.jpg           # 案例图 - 减速箱
│   ├── case_machinery.jpg         # 案例图 - 机械
│   ├── case_newenergy.jpg         # 案例图 - 新能源
│   ├── case_wind.jpg              # 案例图 - 风电
│   ├── certificate_*.jpg          # 认证证书图
│   ├── news_1.jpg ~ news_4.jpg   # 新闻配图
│
├── template/               # 模板文档（本目录）
│   ├── TEMPLATE_README.md
│   ├── PROJECT_ARCHITECTURE.md
│   ├── STYLE_GUIDE.md
│   ├── CONTENT_FILLING_GUIDE.md
│   └── CHANGELOG.md
│
└── qa-report.md            # QA 检查报告
```

---

## 自定义指南

### 配色方案

打开 `css/style.css`，找到 `:root` 变量定义区域：

```css
:root {
    --primary-color: #1E3A8A;     /* 主色 - 深蓝 */
    --secondary-color: #6B7280;   /* 辅助色 - 灰色 */
    --accent-color: #3B82F6;     /* 强调色 - 亮蓝 */
    --light-bg: #F9FAFB;         /* 浅色背景 */
    --dark-bg: #111827;          /* 深色背景（Footer） */
    --text-primary: #111827;     /* 主文字色 */
    --text-secondary: #6B7280;   /* 辅助文字色 */
    --white: #FFFFFF;
    --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    --radius: 8px;
    --radius-lg: 12px;
}
```

**不同行业配色建议**：

| 行业 | 主色建议 | 强调色建议 |
|------|---------|-----------|
| 机械制造 | #1E3A8A (深蓝) | #3B82F6 (亮蓝) |
| 电子科技 | #2563EB (蓝色) | #10B981 (翠绿) |
| 食品加工 | #059669 (绿色) | #34D399 (浅绿) |
| 建筑工程 | #92400E (棕色) | #D97706 (金色) |
| 医疗器械 | #047857 (墨绿) | #06B6D4 (青色) |

### Logo 替换

1. **文字 Logo**：在 `index.html` 和其他页面的 `<header>` 中修改：
   ```html
   <h1>YOUR_BRAND</h1>           <!-- 品牌缩写 -->
   <span class="logo-text">您的公司全称</span>
   ```

2. **图片 Logo**（可选）：如需使用图片 Logo，在 header 中添加：
   ```html
   <img src="images/logo.png" alt="公司Logo" height="40">
   ```

### 品牌名替换

全局查找替换以下内容：
- `PINS` → 您的品牌缩写
- `派恩斯金属` → 您的品牌中文名
- `安徽派恩斯金属制品有限公司` → 您的公司全称

---

## 数据驱动内容管理（推荐！）

> 无需后台！改一个 JSON 文件，整站内容自动更新。

### 数据文件一览

| 文件 | 管理的内容 |
|------|-----------|
| `data/company.json` | 公司简介、统计数字、发展历程、联系方式、资质证书 |
| `data/products.json` | 所有产品数据（名称、图片、规格参数） |
| `data/cases.json` | 应用案例（标题、行业、描述、年份） |
| `data/news.json` | 新闻资讯（标题、摘要、日期、分类） |

### 更新流程

```
1. 打开 data/xxx.json
2. 修改或添加数据条目
3. 保存 → 提交到 Git
4. 刷新网页 → 自动生效 ✓
```

### 示例：添加新产品

```json
// data/products.json 中加一段：
{
  "id": "new-product",
  "name": "新品名称",
  "image": "images/product_new.jpg",
  "desc": "产品简短描述",
  "link": "product-detail.html",
  "specs": {
    "材质": "不锈钢 304",
    "表面处理": "抛光",
    "执行标准": "GB/T XXXX"
  }
}
```

### 远程编辑（手机也能改）

1. 把仓库推到 GitHub
2. 在 GitHub 网页上直接打开 `data/products.json`
3. 点击编辑图标 ✏️
4. 修改内容 → 提交（Commit）
5. GitHub Pages 自动部署 → 网站更新 ✓

---

## 内容填充指南

### 首页 Hero 区域

文件：`index.html`，搜索 `<section class="hero">`

需要替换的内容：
- 公司名称（`hero-title`）
- 企业口号（`slogan-text`）
- 关键数据（员工数、年产值、认证数）
- Hero 背景图（`images/hero_background.jpg`）

### 产品数据

文件：`products.html` 和 `index.html` 中的产品区域

每个产品卡片包含：
- 产品图片（替换 `src` 路径）
- 产品名称
- 产品描述
- 规格参数（材质、表面处理、执行标准）

### 案例数据

文件：`cases.html` 和 `index.html` 中的案例区域

每个案例包含：
- 案例标题
- 所属行业
- 案例描述
- 案例配图
- 案例详情页（`case-detail.html`）

### 新闻数据

文件：`news.html` 和 `index.html` 中的新闻区域（如存在）

每条新闻包含：
- 标题
- 发布日期
- 分类标签
- 摘要
- 配图
- 新闻详情页（`news-detail.html`）

### 团队信息

文件：`about.html`

可在"企业文化"或"团队介绍"区域替换为实际团队信息。

---

## 部署指南

### GitHub Pages（推荐免费方案）

```bash
# 1. 在 GitHub 创建仓库
# 2. 将项目推送到 GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/用户名/仓库名.git
git push -u origin main

# 3. 进入 Settings > Pages
# 4. 选择 main 分支，根目录
# 5. 等待几分钟即可访问 https://用户名.github.io/仓库名/
```

### Nginx 部署

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/pines-microsite;
    index index.html;

    # 静态资源缓存
    location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
        expires 30d;
        add_header Cache-Control "public, no-transform";
    }
}
```

### 静态托管

支持部署到以下平台：
- **国内**：阿里云 OSS、腾讯云 COS、七牛云
- **国际**：Vercel、Netlify、Cloudflare Pages

---

## 开发指南

### 本地开发

```bash
# 方案1：VS Code + Live Server（推荐）
# 安装 Live Server 插件，右键 index.html → Open with Live Server

# 方案2：Python 内置服务器
python -m http.server 8000

# 方案3：Node.js
npx serve .
```

### 自定义样式

1. **修改变量**：修改 `:root` 中的 CSS 变量可全局更新样式
2. **新增组件**：在 `style.css` 末尾添加新样式，遵循现有命名规范
3. **响应式**：在 `@media (max-width: 768px)` 和 `@media (max-width: 480px)` 块中添加适配样式

### 功能扩展

- **表单提交**：`js/main.js` 中的 `initContactForm()` 函数，可扩展为 AJAX 提交到后端
- **动画**：`js/main.js` 中的 `initScrollAnimations()` 使用 IntersectionObserver，可扩展更多动画元素
- **图片切换**：`product-detail.html` 中的 `changeImage()` 函数，可扩展为图片轮播

### 文件命名约定

```
页面: 英文小写, 用连字符分隔 (如 product-detail.html)
图片: 分类_描述.jpg (如 product_elastic_pins.jpg)
CSS类: 小写, 用连字符分隔 (如 .product-card)
JS函数: camelCase (如 initMobileMenu)
```
