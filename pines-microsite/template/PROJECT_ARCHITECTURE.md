# 项目架构文档

## 完整文件目录树

```
pines-microsite/
│
├── index.html              # 首页（单页滚动式，含6个section）
├── about.html              # 关于我们（子页面）
├── products.html           # 产品中心（子页面）
├── product-detail.html     # 产品详情（子页面）
├── honors.html             # 荣誉资质（子页面）
├── advantages.html         # 核心优势（子页面）
├── cases.html              # 应用案例（子页面）
├── case-detail.html        # 案例详情（子页面）
├── news.html               # 新闻资讯（子页面）
├── news-detail.html        # 新闻详情（子页面）
├── contact.html            # 联系我们（子页面）
│
├── css/
│   └── style.css           # 全局样式（约2000行）
│
├── js/
│   └── main.js             # 全局交互脚本（约250行）
│
├── images/
│   ├── hero_background.jpg           # Hero背景图（2112KB）
│   ├── product_elastic_pins.jpg      # 弹性销产品图
│   ├── product_solid_pins.jpg        # 实心销产品图
│   ├── product_conical_washers.jpg   # 锥形垫圈产品图
│   ├── product_nonstandard.jpg       # 非标冲压件产品图
│   ├── case_auto.jpg                 # 汽车案例图
│   ├── case_engine.jpg               # 发动机案例图
│   ├── case_gearbox.jpg              # 减速箱案例图
│   ├── case_machinery.jpg            # 机械案例图
│   ├── case_newenergy.jpg            # 新能源案例图
│   ├── case_wind.jpg                 # 风电案例图
│   ├── certificate_iatf.jpg          # IATF16949认证证书
│   ├── certificate_iso14001.jpg      # ISO14001认证证书
│   ├── certificate_patent.jpg        # 专利证书
│   ├── news_1.jpg ~ news_4.jpg       # 新闻配图（4张）
│
├── template/
│   ├── TEMPLATE_README.md
│   ├── PROJECT_ARCHITECTURE.md
│   ├── STYLE_GUIDE.md
│   ├── CONTENT_FILLING_GUIDE.md
│   └── CHANGELOG.md
│
└── qa-report.md            # QA质量检查报告
```

---

## 颜色系统

### CSS 变量定义 (`style.css:root`)

```css
:root {
    --primary-color:   #1E3A8A;   /* 主色 - 深蓝 */
    --secondary-color: #6B7280;   /* 辅助色 - 灰 */
    --accent-color:    #3B82F6;   /* 强调色 - 亮蓝 */
    --light-bg:        #F9FAFB;   /* 浅灰背景 */
    --dark-bg:         #111827;   /* 深色背景（Footer） */
    --text-primary:    #111827;   /* 正文色 */
    --text-secondary:  #6B7280;   /* 辅助文本色 */
    --white:           #FFFFFF;
}
```

### 色板

| 用途 | 色值 | CSS变量 | 示例 |
|------|------|---------|------|
| 主色 | `#1E3A8A` | `--primary-color` | 导航激活态、标题、按钮背景 |
| 强调色 | `#3B82F6` | `--accent-color` | Hover态、渐变元素、图标 |
| 辅助色 | `#6B7280` | `--secondary-color` | 副标题、描述文字、未激活链接 |
| 浅背景 | `#F9FAFB` | `--light-bg` | 交替section背景、卡片 |
| 深背景 | `#111827` | `--dark-bg` | Footer背景 |
| 正文字色 | `#111827` | `--text-primary` | 标题、正文 |
| 激活图标色 | `#60A5FA` | (内联) | Hero中的info-item图标 |

### 渐变应用

```css
/* 图标圆形背景渐变 */
background: linear-gradient(135deg, var(--primary-color), var(--accent-color));

/* 页面标题区渐变 */
background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
```

---

## 导航结构

### 主导航（桌面端，8个页面）

```
首页 (index.html)
├── 关于我们 (about.html)
├── 产品中心 (products.html)
│   └── 产品详情 (product-detail.html)
├── 荣誉资质 (honors.html)
├── 核心优势 (advantages.html)
├── 应用案例 (cases.html)
│   └── 案例详情 (case-detail.html)
├── 新闻资讯 (news.html)
│   └── 新闻详情 (news-detail.html)
└── 联系我们 (contact.html)
```

### 移动端底部导航（5个入口）

```
首页 | 关于 | 产品 | 案例 | 联系
```

---

## 组件清单

| 组件名称 | CSS 选择器 | 使用页面 | 说明 |
|----------|-----------|---------|------|
| 顶部导航 | `.header` | 所有页面 | 固定定位，滚动阴影效果 |
| 移动菜单 | `.mobile-menu` | 所有页面 | 从右侧滑入，半透明遮罩 |
| Hero Banner | `.hero` | index.html | 全屏背景图 + 叠加内容 |
| 通用Section | `.section`, `.section-alt` | 所有页面 | 交替深浅背景 |
| 页面标题 | `.page-header` | 子页面 | 渐变背景 + 标题文字 |
| 面包屑 | `.breadcrumb` | 详情页 | 页面路径导航 |
| 产品卡片 | `.product-card` | index, products, product-detail | 图片 + 信息 + 规格 |
| 案例卡片 | `.case-card` | index, cases, case-detail | 图标 + 描述 |
| 统计卡片 | `.stat-card` | index, about | 数字 + 图标 |
| 荣誉卡片 | `.honor-card` | index, honors | 图标+标题+详情 |
| 证书卡片 | `.certificate-card` | honors | 图片+标题 |
| 品质卡片 | `.quality-card` | advantages | 图标+功能+特性列表 |
| 技术卡片 | `.tech-card` | advantages | 图标+说明 |
| 企业文化卡片 | `.culture-card` | about | 图标+价值观 |
| 新闻卡片 | `.news-card` | news, news-detail | 图片+标题+摘要 |
| 表单 | `.contact-form` | index, contact | 联系留言表单 |
| 时间线 | `.timeline` | index, about | 发展历程 |
| 生产流程 | `.process-flow` | index, advantages | 带箭头工作流 |
| 分页 | `.pagination` | news | 页码导航 |
| Footer | `.footer` | 所有页面 | 深色背景，三栏布局 |
| 底部导航(移动) | `.bottom-nav` | 所有页面 | 固定在底部 |
| 回到顶部 | `.back-to-top` | 所有页面 | 固定右下角，滚动出现 |
| 分类链接 | `.category-link` | products, cases, news | 圆角标签式筛选 |

---

## 页面间关系图

```
                    ┌──────────────────┐
                    │   index.html     │ (首页, 单页滚动)
                    │  ─ 6 sections   │
                    └────────┬─────────┘
                             │
         ┌───────────────────┼──────────────────────┐
         ▼                   ▼                      ▼
  ┌─────────────┐   ┌──────────────┐   ┌──────────────────┐
  │ about.html  │   │ products.html│   │   cases.html     │
  │ (关于我们)  │   │ (产品中心)   │   │  (应用案例)      │
  └─────────────┘   └──────┬───────┘   └───────┬──────────┘
                           │                   │
                           ▼                   ▼
                    ┌──────────────┐   ┌──────────────┐
                    │product-detail│   │ case-detail  │
                    │  .html       │   │   .html      │
                    │ (产品详情)   │   │ (案例详情)   │
                    └──────────────┘   └──────────────┘

  ┌──────────────┐   ┌──────────────┐   ┌──────────────┐
  │ honors.html  │   │advantages.html│  │  news.html   │
  │ (荣誉资质)   │   │ (核心优势)   │   │ (新闻资讯)   │
  └──────────────┘   └──────────────┘   └──────┬───────┘
                                               │
                                               ▼
                                        ┌──────────────┐
                                        │ news-detail  │
                                        │   .html      │
                                        │ (新闻详情)   │
                                        └──────────────┘

  ┌──────────────┐
  │ contact.html │
  │ (联系我们)   │
  └──────────────┘
```

### 代码引用关系

```
所有HTML页面 ──── 引用 ────→ css/style.css
所有HTML页面 ──── 引用 ────→ js/main.js
所有HTML页面 ──── 引用 ────→ Font Awesome 6 CDN

index.html ──── 包含指向 ──→ about, products, honors, advantages, cases, contact (锚点链接)
products.html ── 包含指向 ──→ product-detail.html
cases.html ──── 包含指向 ──→ case-detail.html
news.html ──── 包含指向 ──→ news-detail.html
```

---

## 响应式断点

| 断点 | 宽度 | 主要变化 |
|------|------|---------|
| 桌面 | > 768px | 完整水平导航、多列网格、水平流程 |
| 平板 | 481px ~ 768px | 移动菜单出现、2列网格、垂直流程 |
| 手机 | ≤ 480px | 单列布局、缩小字号、紧凑间距 |

### 768px 断点变化（`@media (max-width: 768px)`）

- 桌面导航隐藏，汉堡菜单显示
- Grid 从多列转为 2 列
- 联系表单从双栏转为单栏
- 生产流程从水平转为垂直（箭头旋转90°）
- 页面标题区缩小

### 480px 断点变化（`@media (max-width: 480px)`）

- 所有 Grid 转为单列
- Hero 标题字号进一步缩小
- 产品操作按钮改为垂直排列

### 页面布局结构

```
桌面端 (>768px)：
┌─────────┐ ┌──────────────────────────────────────────┐
│  Header  │  Logo (左) + 导航链接 (右)                │
├─────────┤ ├──────────────────────────────────────────┤
│  Content │  Grid/Flex 水平布局                       │
├─────────┤ ├──────────────────────────────────────────┤
│  Footer  │  3列: Logo | 快速链接 | 联系方式          │
└─────────┘ └──────────────────────────────────────────┘

移动端 (≤768px)：
┌─────────────────────────────────────────────────────┐
│  Header: Logo (左) + 汉堡菜单 (右)                   │
├─────────────────────────────────────────────────────┤
│  Content: 单列垂直布局                               │
├─────────────────────────────────────────────────────┤
│  Footer: 单列垂直布局                                │
├─────────────────────────────────────────────────────┤
│  底部固定导航: 首页 | 关于 | 产品 | 案例 | 联系       │
└─────────────────────────────────────────────────────┘
```
