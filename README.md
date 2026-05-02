# 科成开放原子开源社团

<p align="center">
  <img src="./社团图标.jpg" alt="社团图标" width="120">
</p>

<p align="center">
  <strong>因开放而精彩，因开源而未来</strong>
</p>

<p align="center">
  <a href="mailto:opensource@kecheng.edu.cn">联系我们</a>
</p>

---

## 社团简介

科成开放原子开源社团成立于 **2024年1月11日**，是[开放原子开源基金会](https://openatomfoundation.org/)联合腾讯公司共同出资发起、由电子科技大学成都学院支持建设的高校学生社团。

社团以计算机技术和软件开发为主要领域，以推动开源事业为驱动力，致力于打造国内开源基础软件新生态，明确将自身定位为 **连接校园与产业的开源人才培养基地**。

## 技术方向

| 技术方向 | 简介 |
|---------|------|
| **OpenHarmony** (开源鸿蒙) | 分布式操作系统学习与应用开发 |
| **openEuler** (欧拉) | 企业级 Linux 操作系统研究 |
| **OpenTenBase** (腾讯数据库) | 开源数据库内核开发与优化 |

## 社团架构

| 部门 | 职责 |
|-----|------|
| 外联部 | 负责对外交流与企业合作对接 |
| 宣策部 | 负责品牌宣传与活动策划 |
| 项目部 | 负责技术开发与开源项目维护 |
| 组织部 | 负责社团日常管理与活动组织 |
| 秘书处 | 负责行政管理与文档工作 |

## 核心成员

| 姓名 | 职位 |
|-----|------|
| 陈圣夫 | 会长 |
| 李枨 | 副会长 |
| 李星谕 | 副会长 |
| 柴诗雨 | 副会长 |
| 林涛 | 副会长 |

## 荣誉奖项

- **开放原子菁英团奖** - 全国仅 3 个团队入选 (2025)
- **校源行优秀指导教师** - 指导老师魏雨东 (2025)
- **春耕计划优秀组织高校** - 社团组织工作获全国性认可 (2025)
- **OpenTenBase 核心贡献挑战赛** - 社团成员荣获竞赛奖项 (2024)

---

## 版本历史

本仓库采用分支管理，每个版本独立迭代：

| 分支 | 版本 | 描述 |
|-----|------|------|
| [Version_0.1](https://github.com/Memsetqwq/Organization-Blog/tree/Version_0.1) | 经典三栏版 | 经典三栏布局，Shader 背景动画，支持深色/浅色主题切换 |
| [Version_0.2](https://github.com/Memsetqwq/Organization-Blog/tree/Version_0.2) | 全屏沉浸版 | 全屏沉浸式设计，滚动动画，现代化卡片布局 |
| [Version_0.3](https://github.com/Memsetqwq/Organization-Blog/tree/Version_0.3) | 精致优化版 | 基于 v2 优化，添加系统级明暗主题，WebGL 背景增强 |
| [main](https://github.com/Memsetqwq/Organization-Blog/tree/main) | 主分支 | 包含所有版本的最新整合 |

### 各版本特性对比

| 特性 | v0.1 | v0.2 | v0.3 |
|-----|------|------|------|
| 布局 | 三栏布局 | 全屏分栏 | 全屏分栏 |
| 动画 | Shader 背景 | 滚动渐入动画 | 滚动渐入动画 |
| 主题 | 深色/浅色手动切换 | 仅暗色 | 系统级明暗自适应 |
| 导航 | 顶部固定栏 | 毛玻璃导航栏 | 毛玻璃导航栏 |
| 图片 | 外部引用 | 外部引用 | 外部引用 |
| 二维码 | ❌ | ✅ | ✅ |

---

## 项目结构

```
Organization-Blog/
├── 社团图标.jpg                    # 社团标志
├── 社团微信公众号二维码.png           # 微信公众号二维码
├── 初版示例.html                    # Version_0.1 - 经典三栏版
├── v2.html                         # Version_0.2 - 全屏沉浸版
├── v3.html                         # Version_0.3 - 精致优化版
├── README.md                       # 项目总览文档
└── docs/
    ├── README_v0.1.md             # Version_0.1 详细文档
    ├── README_v0.2.md             # Version_0.2 详细文档
    └── README_v0.3.md             # Version_0.3 详细文档
```

---

## 本地运行

```bash
# 直接用浏览器打开任意版本
open 初版示例.html      # v0.1
open v2.html           # v0.2
open v3.html           # v0.3

# 或使用 Python 简易服务器
python -m http.server 8080
# 然后访问 http://localhost:8080
```

---

## 贡献指南

欢迎提交 Issue 和 Pull Request！

### 提交规范

- `feat:` 新功能
- `fix:` 问题修复
- `docs:` 文档更新
- `style:` 代码格式调整
- `refactor:` 重构

---

<p align="center">
  Made with ❤️
</p>
