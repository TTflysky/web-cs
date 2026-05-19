# 风格指南

## 色彩系统

### 主色调

| 名称 | 色值 | CSS变量 | 用途 |
|------|------|---------|------|
| 主色 | `#1E3A8A` | `--primary-color` | 导航激活态、标题、主要按钮、图标渐变 |
| 辅色 | `#6B7280` | `--secondary-color` | 副标题、描述文字、未激活链接 |
| 强调色 | `#3B82F6` | `--accent-color` | Hover态、渐变元素、图标 |
| 浅背景 | `#F9FAFB` | `--light-bg` | 交替区块背景 |
| 深背景 | `#111827` | `--dark-bg` | Footer背景、深色区域 |
| 正文色 | `#111827` | `--text-primary` | 标题、正文 |
| 辅助文色 | `#6B7280` | `--text-secondary` | 描述、说明文字 |
| 白色 | `#FFFFFF` | `--white` | 卡片背景、按钮文字 |

### 渐变色

所有圆形图标背景使用固定渐变：
```css
background: linear-gradient(135deg, #1E3A8A, #3B82F6);
```

应用场景：
- 荣誉/案例圆形图标背景 (`.honor-icon`, `.case-icon`)
- 生产流程步骤图标 (`.step-icon`)
- 企业文化图标 (`.culture-icon`)
- 技术优势图标 (`.tech-icon`)
- 页面标题区背景 (`.page-header`)

### 阴影

```css
--shadow:   0 4px 6px -1px rgba(0, 0, 0, 0.1);     /* 默认卡片阴影 */
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);  /* Hover状态阴影 */
```

所有卡片（`.stat-card`, `.honor-card`, `.product-card`, `.case-card` 等）Hover 时从 `--shadow` 提升到 `--shadow-lg`。

---

## 排版系统

### 字体栈

```css
font-family: 'Microsoft YaHei', 'Arial', sans-serif;
```

- 中文优先使用微软雅黑
- 英文使用 Arial
- 回退到系统无衬线字体

### 字号层级

| 用途 | 字号 | 行高 | 页面元素 |
|------|------|------|---------|
| Hero 大标题 | 80px (移动端50px/40px) | - | `.hero-title` |
| Section 标题 | 36px (移动端28px) | - | `.section-title` |
| 页面标题 | 36px | - | `.page-header h1` |
| 卡牌标题 (h4) | 20px | - | `.product-info h4` |
| 副标题 | 18px | - | `.section-subtitle` |
| 正文 | 16px | 1.8 | 段落文字 |
| 小号文字 | 14px | 1.6 | 说明、元数据 |
| 微小文字 | 12px/13px | - | 标签、流程步骤描述 |

---

## 间距系统

### 容器

```css
max-width: 1200px;         /* 内容区最大宽度 */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}
```

### 间距值

| 用途 | 值 | 示例 |
|------|----|------|
| Section 上下间距 | 80px (移动端60px) | `.section { padding: 80px 0 }` |
| 标题下方间距 | 10px (标题)/50px (副标题) | `.section-title { margin-bottom: 10px }` |
| Grid 间距 | 30px | `gap: 30px` |
| 卡片内边距 | 30px / 40px | `.stat-card { padding: 30px }` |
| 导航间距 | 30px | `.nav-desktop { gap: 30px }` |
| 表单元素间距 | 20px | `.form-group { margin-bottom: 20px }` |
| Footer 间距 | 60px padding/40px gap | `.footer { padding: 60px 0 }` |

---

## 组件样式

### 导航

#### 桌面导航
```css
.header {
    position: fixed;     /* 固定顶部 */
    z-index: 1000;       /* 最高层级 */
}
.nav-link.active::after {
    content: '';
    height: 2px;         /* 底部激活指示线 */
    background: var(--primary-color);
}
```

#### 移动端菜单
```css
.mobile-menu {
    position: fixed;
    right: -300px;       /* 默认隐藏（右侧外） */
    width: 300px;
    transition: right 0.3s ease;
}
.mobile-menu.active {
    right: 0;            /* 滑入显示 */
}
```

#### 移动端底部导航
```css
.bottom-nav {
    position: fixed;     /* 固定在底部 */
    bottom: 0;
    z-index: 1000;
    padding: 10px 0;
    display: flex;
    justify-content: space-around;
}
```

### 按钮

| 类型 | 样式 | 用途 |
|------|------|------|
| CTA 按钮 | 白色背景+蓝色文字+50px圆角 | `.hero-cta` |
| 主要按钮 | 蓝色背景+白色文字+8px圆角 | `.btn-submit`, `.btn-view`, `.btn-inquiry` |
| 次要按钮 | 白色背景+蓝色边框+8px圆角 | `.btn-download` |

所有按钮 Hover 时有 `translateY(-2px)` 上移效果。

### 卡片

所有卡片统一样式模式：
```css
.card {
    background: var(--white);
    border-radius: var(--radius-lg);  /* 12px */
    box-shadow: var(--shadow);
    transition: all 0.3s;
}
.card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
}
```

### 表单

```css
.form-group input,
.form-group textarea {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #D1D5DB;
    border-radius: var(--radius);    /* 8px */
    font-family: inherit;
}
.form-group input:focus,
.form-group textarea:focus {
    border-color: var(--primary-color);
    outline: none;
}
```

### 页标题区

```css
.page-header {
    background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
    color: var(--white);
    padding: 60px 0;
    text-align: center;
}
```

---

## 动画效果

### IntersectionObserver 滚动动画

在 `js/main.js` 中通过 IntersectionObserver API 实现：

```javascript
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

// 受动画影响的元素
const elements = document.querySelectorAll(
    '.stat-card, .honor-card, .product-card, .case-card, .quality-card, .process-step, .timeline-item'
);
elements.forEach(function(el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
```

### CSS fadeInUp 动画

```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
/* 应用于所有主要区块标题 */
.section-title, .section-subtitle, .about-text,
.stat-card, .honor-card, .product-card, .case-card {
    animation: fadeInUp 0.6s ease-out;
}
```

### 交互动画

| 元素 | 动画类型 | 参数 |
|------|---------|------|
| 卡片Hover | 上移 | translateY(-5px), 0.3s |
| 按钮Hover | 上移 | translateY(-2px), 0.3s |
| 步骤图标Hover | 放大 | scale(1.1), 0.3s |
| 导航激活 | 底线出现 | 2px height, 0.3s |
| 回到顶部 | 淡入淡出 | opacity 0.3s |
| 返回顶部按钮 | 固定右下 | bottom: 80px, right: 20px |

### 性能优化

- 使用 `throttle` 函数（200ms）优化滚动事件
- 使用 `IntersectionObserver` 替代滚动监听检测可见性
- 使用 `will-change` 提示浏览器进行GPU加速（如需要）
- 使用 CSS3 动画代替 JS 动画
