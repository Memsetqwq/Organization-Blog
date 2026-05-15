# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

科成开放原子开源社团官网，一个静态社团介绍网站，当前版本为 v0.8。

## 开发命令

```bash
npm install    # 安装依赖
npm run dev    # 开发模式（热重载）
npm run build  # 生产构建
npm run clean  # 清理构建缓存
```

构建产物输出至 `dist/` 目录，可直接部署至 GitHub Pages 等静态托管服务。

## 架构结构

```
src/
├── index.html      # 主页面入口（单页应用）
├── css/theme.css   # 所有样式，含亮暗主题变量
├── js/
│   ├── theme.js     # 主题管理器（ThemeManager）
│   └── main.js      # 国际化、WebGL 背景、动画、弹窗
└── images/         # 封面图片资源
```

### 关键模块

**ThemeManager (theme.js)**
- 管理亮/暗主题切换，支持 localStorage 持久化
- 监听系统级 `prefers-color-scheme` 变化
- `window.toggleTheme()` 为全局入口

**国际化 (main.js)**
- 中英文切换，`lang` 全局变量控制
- `T` 对象存储所有翻译文本
- `applyLang()` 函数更新页面所有 `id` 元素的文本内容

**WebGL 背景 (main.js)**
- Hero 区域全屏 WebGL shader 背景
- 使用 noise 函数生成动态纹理效果
- 动画持续运行不受页面可见性限制

**滚动动画 (main.js)**
- `IntersectionObserver` 驱动淡入动画
- `.an` 类元素进入视口时添加 `.in` 类触发动画
- 导航高亮跟随滚动位置自动切换

**加入我们弹窗 (main.js)**
- 点击"加入我们"打开模态框
- 提交表单通过 `mailto:` 链接唤起邮件客户端

## 提交规范

- `feat:` 新功能
- `fix:` 问题修复
- `docs:` 文档更新
- `style:` 代码格式调整
- `refactor:` 重构

## 版本管理

**重要：默认分支策略**
- 所有更新默认提交至当前版本分支（如 `Version_0.7`），**不直接推送至 `main`**
- 只有用户明确要求"推送到 main"或"合并到 main"时，才执行分支合并和 main 推送
- 创建新版本时，基于 `main` 创建新分支（如 `Version_0.8`），完成后合并回 `main`

**推送流程：**
1. 用户未明确要求 → 推送到当前版本分支（如 `Version_0.7`）
2. 用户明确要求推送到 main → 合并版本分支至 main，然后推送

## 技术栈

- Parcel 2.x（构建工具）
- 原生 JavaScript（无框架）
- CSS 变量 + data-theme 属性（主题系统）
- WebGL（Shader 背景）
- IntersectionObserver（滚动动画）
