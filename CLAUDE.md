# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

科成开放原子开源社团官网，一个静态多页面网站，当前版本为 **v1.1**。

详细技术文档请查看 [技术栈.md](./技术栈.md)。

## 开发命令

```bash
npm install    # 安装依赖（parcel 构建工具）
npm run dev    # 开发模式（热重载）
npm run build  # 生产构建
npm run clean  # 清理构建缓存
```

构建产物输出至 `dist/` 目录，可直接部署至 GitHub Pages 等静态托管服务。

## 架构结构

```
src/
├── index.html           # 首页（主落地页）
├── about.html           # 社团简介页
├── news.html            # 新闻列表页
├── news-detail.html     # 新闻详情页
├── projects.html        # 导航站页
├── login.html           # 管理员登录页
├── admin.html           # 管理后台（仪表盘）
├── css/
│   └── theme.css        # 所有样式，含亮暗主题变量
├── js/
│   ├── theme.js         # 主题管理器（ThemeManager）
│   ├── main.js          # 核心逻辑（i18n、动画、轮播、弹窗）
│   └── db.js            # 本地数据库管理器
├── images/              # 图片资源（封面图、Logo 等）
└── data/
    └── news.json        # 新闻数据
```

### 核心模块

**ThemeManager (theme.js)**
- 管理亮/暗主题切换，支持 localStorage 持久化
- 监听系统级 `prefers-color-scheme` 变化
- `window.toggleTheme()` 为全局入口
- 支持主题状态回调监听

**国际化 (main.js)**
- 中英文切换，`lang` 全局变量控制
- `T` 对象存储所有翻译文本
- `applyLang()` 函数更新页面所有 `id` 元素的文本内容

**滚动动画 (main.js)**
- `IntersectionObserver` 驱动淡入动画
- `.an` 类元素进入视口时添加 `.in` 类触发动画
- `.d1` ~ `.d6` 延迟阶梯控制动画顺序

**背景轮播 (main.js)**
- Hero 区域 CSS 背景图轮播
- 支持自动播放、触摸滑动、指示器点击、箭头导航

**数据库 (db.js)**
- localStorage 模拟数据库
- 支持申请记录的 CRUD 操作
- 管理员验证、统计数据、CSV 导出

**模态框 (main.js)**
- "加入我们"申请弹窗
- 邮件链接提交（mailto:）

## 提交规范

- `feat:` 新功能
- `fix:` 问题修复
- `docs:` 文档更新
- `style:` 代码格式调整
- `refactor:` 重构

## 版本管理

**重要：默认分支策略**
- 所有更新默认提交至当前版本分支（如 `Version_1.1`），**不直接推送至 `main`**
- 只有用户明确要求"推送到 main"或"合并到 main"时，才执行分支合并和 main 推送
- 创建新版本时，基于 `main` 创建新分支（如 `Version_1.2`），完成后合并回 `main`

**推送流程：**
1. 用户未明确要求 → 推送到当前版本分支（如 `Version_1.1`）
2. 用户明确要求推送到 main → 合并版本分支至 main，然后推送

## 技术栈速查

| 技术 | 说明 |
|------|------|
| Parcel 2.x | 零配置构建工具 |
| 原生 JavaScript | 无框架依赖 |
| CSS 变量 + data-theme | 主题系统 |
| IntersectionObserver | 滚动动画 |
| localStorage | 本地数据存储 |
| GitHub Actions | CI/CD 自动化部署 |

## 页面对应关系

| 页面 | 主要功能模块 |
|------|-------------|
| index.html | Hero轮播、社团介绍、技术方向、近期动态、核心团队、开源项目、加入我们弹窗 |
| about.html | 社团详情、组织架构、技术方向、荣誉成果 |
| news.html | 新闻列表、分页加载、懒加载图片 |
| news-detail.html | 新闻详情、URL参数解析 |
| projects.html | 外部资源链接导航 |
| login.html | 管理员登录表单 |
| admin.html | 登录验证、统计数据、申请列表、筛选搜索、删除、CSV导出 |

## 注意事项

- 所有页面共用同一套 CSS 和 JS 文件
- 图片使用相对路径，封面图位于 `images/` 目录
- 管理后台需登录后才能访问（sessionStorage 验证）
- 新闻数据从 `data/news.json` 异步加载
- 移动端 768px 以下显示汉堡菜单