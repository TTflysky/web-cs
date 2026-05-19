# ========================================
# 部署派恩斯微网站到 GitHub web-cs 仓库
# ========================================

## 第一步：复制文件到工作目录
把 D:\workbuddy任务列表\2026-05-18-task-9\pines-microsite\ 整个文件夹
复制到你想放项目的地方（比如 D:\Projects\web-cs\）

## 第二步：初始化 Git 仓库
打开终端（CMD 或 PowerShell），执行以下命令：

```bash
# 进入项目目录
cd D:\Projects\web-cs

# 初始化 Git
git init

# 添加所有文件
git add .

# 提交
git commit -m "initial: 派恩斯金属微网站 v1.0 - 11页完整工业网站"

# 关联远程仓库
git remote add origin https://github.com/ttflysky/web-cs.git

# 推送
git push -u origin main
```

## 第三步：启用 GitHub Pages
1. 浏览器打开 https://github.com/ttflysky/web-cs
2. 点 Settings → Pages
3. Source 选 "Deploy from a branch"
4. Branch 选 main，目录选 / (root)
5. 点 Save
6. 等1-2分钟，访问 https://ttflysky.github.io/web-cs/ 就能看到了

## 第四步：以后更新内容

```bash
# 改完 data/*.json 后执行：
cd D:\Projects\web-cs
git add .
git commit -m "更新产品数据"
git push
```
GitHub Pages 会自动部署，等1-2分钟刷新网页即生效。

## 第五步：手机/远程编辑
直接打开 GitHub 网页：
1. 访问 https://github.com/ttflysky/web-cs
2. 点开 data/ 目录
3. 点开 xxx.json 文件
4. 点编辑按钮（铅笔图标）
5. 改内容 → 点 Commit changes
