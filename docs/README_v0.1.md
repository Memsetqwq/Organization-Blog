# Version_0.1 - 经典三栏版

<p align="center">
  <img src="../社团图标.jpg" alt="社团图标" width="100">
</p>

<p align="center">
  <strong>Version 0.1 | 经典三栏布局 | Shader 动画</strong>
</p>

---

## 版本简介

Version_0.1 是社官网的初始版本，采用经典的三栏式布局设计。左侧为社团简介与联系方式，中间展示最新动态，右侧呈现社团档案与核心成员信息。页面支持深色/浅色主题切换，Shader 画布为左侧栏提供动态视觉背景。

## 核心功能特性

### 布局架构

| 区域 | 位置 | 功能 |
|-----|------|------|
| 左侧栏 | 宽度 21% | 社团简介、联系方式、加入按钮 |
| 中间栏 | 自适应 | 最新动态、活动资讯 |
| 右侧栏 | 宽度 25% | 社团档案、核心成员、荣誉 |

### 交互功能

- **深色/浅色主题切换**：手动切换全局配色方案
- **中英双语切换**：支持中文与英文界面
- **Shader 动画背景**：WebGL 实现的动态噪声纹理
- **申请加入弹窗**：模态框收集入社申请

### 技术实现

| 技术点 | 说明 |
|-------|------|
| CSS 变量主题系统 | 通过 CSS 变量实现主题快速切换 |
| WebGL Shader | 自定义 GLSL 片元着色器 |
| CSS Grid/Flexbox | 三栏响应式布局 |
| CSS Mix-blend-mode | 文字与背景差异混合效果 |

## 项目结构

```
docs/
└── README_v0.1.md     # 本文档

仓库根目录:
├── 社团图标.jpg        # 社团标志
├── 初版示例.html       # 主页入口
└── README.md          # 项目总览
```

## 本地运行

```bash
# 方式一：直接打开
open 初版示例.html

# 方式二：本地服务器
python -m http.server 8080
# 访问 http://localhost:8080/初版示例.html
```

## 使用说明

### 主题切换

点击顶部导航栏右侧的 **DARK/LIGHT** 按钮可在深色与浅色主题间切换。

### 语言切换

点击 **EN/中** 按钮可切换中英文界面，所有文案将实时更新。

### 查看动态

中间栏展示最新的社团活动资讯，点击标题可跳转至微信推文原文。

### 申请加入

点击左侧栏底部的 **加入我们** 按钮，填写表单后提交申请。

## 浏览器兼容

| 浏览器 | 支持版本 |
|-------|---------|
| Chrome | 80+ |
| Firefox | 75+ |
| Safari | 13+ |
| Edge | 80+ |

> 注意：Shader 动画需要 WebGL 支持，老旧浏览器可能无法正常显示。

## 版本演进

```
Version_0.1 ──┬── Version_0.2 (全屏沉浸版)
              └── Version_0.3 (精致优化版)
```

- **→ Version_0.2**：升级为全屏沉浸式设计，滚动动画，现代化卡片布局
- **→ Version_0.3**：基于 v0.2 优化主题系统，支持系统级明暗自适应

## 贡献指南

欢迎提交 Issue 和 Pull Request！

---

<p align="center">
  <a href="https://github.com/Memsetqwq/Organization-Blog/tree/Version_0.1">查看分支</a>
  ·
  <a href="https://github.com/Memsetqwq/Organization-Blog/issues">反馈问题</a>
</p>
