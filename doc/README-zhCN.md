# Zotero-C1LIFE

[![Zotero 9](https://img.shields.io/badge/Zotero-9-green?style=flat-square&logo=zotero&logoColor=CC2936)](https://www.zotero.org)
[![Using Zotero Plugin Template](https://img.shields.io/badge/Using-Zotero%20Plugin%20Template-blue?style=flat-square&logo=github)](https://github.com/windingwind/zotero-plugin-template)
[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg?style=flat-square)](https://www.gnu.org/licenses/agpl-3.0)

[English](../README.md) | [简体中文](./README-zhCN.md)

## 项目简介

**Zotero-C1LIFE** 是一款面向 **Zotero 9** 的 AI 辅助阅读插件。它在 Zotero PDF 阅读器的右侧边栏中嵌入网页端大语言模型（LLM）界面，让研究者在阅读学术文献时实现无缝的「边看边问」体验。

插件默认加载 [Google Gemini](https://gemini.google.com) 到阅读器侧面板，支持翻译、总结和讨论论文内容，无需在不同应用之间切换。

## 核心功能

- 🧠 **嵌入式 AI 助手** — Google Gemini 网页界面直接集成到 Zotero 阅读器侧边栏
- 📖 **无缝阅读体验** — AI 面板与 PDF 并排显示，无需切换窗口
- 🌐 **免 API Key** — 使用 Gemini 免费网页版，无需任何配置
- 🔒 **隐私优先** — 所有交互都在你的浏览器会话中进行，插件不存储任何数据
- 📐 **自适应布局** — AI 面板自动调整高度，与左侧文档阅读区保持一致
- 🎨 **原生集成** — 遵循 Zotero UI 规范，提供标准的侧边栏图标和工具提示

## 兼容性

| 组件     | 版本     |
|----------|----------|
| Zotero   | 9.0.3+   |
| 操作系统 | Windows、macOS、Linux |

## 安装方法

1. 从 [Releases](https://github.com/TerryWen2023/Zotero-C1LIFE/releases) 页面下载最新的 `zotero-c-1-life.xpi`
2. 在 Zotero 中，点击 **工具** → **附加组件**
3. 点击右上角 ⚙️ 齿轮图标 → **从文件安装附加组件...**
4. 选择下载的 `.xpi` 文件
5. 如有提示，重启 Zotero

## 使用说明

1. 在 Zotero 阅读器中打开任意 PDF 文档
2. 在右侧边栏导航中找到 **C1** 图标
3. 点击图标打开 AI 助手面板
4. 首次使用时登录你的 Google 账号
5. 开始向 AI 提问吧！

### 典型用途

- **学术翻译**：粘贴复杂句子，获取上下文感知的学术翻译
- **论文总结**：让 Gemini 总结章节或整篇论文的核心内容
- **概念解释**：获取领域专业术语的通俗解释
- **批判性分析**：讨论研究方法、实验结果和研究局限性

## 技术架构

- **开发框架**：基于 windingwind 的 [zotero-plugin-template](https://github.com/windingwind/zotero-plugin-template)
- **编程语言**：TypeScript
- **UI 集成**：使用 `Zotero.ItemPaneManager.registerSection()` API 实现原生侧边栏嵌入
- **网页视图**：XUL `<browser>` 元素，配合 Chrome User-Agent 以确保兼容性
- **构建工具**：[zotero-plugin-scaffold](https://github.com/northword/zotero-plugin-scaffold)

## 开发指南

### 环境要求

- [Node.js](https://nodejs.org/) (LTS 版本)
- [Git](https://git-scm.com/)
- Zotero 9.0.3+

### 从源码构建

```bash
# 克隆仓库
git clone https://github.com/TerryWen2023/Zotero-C1LIFE.git
cd Zotero-C1LIFE

# 安装依赖
npm install

# 生产模式构建
npm run build
```

构建产物位于 `.scaffold/build/zotero-c-1-life.xpi`。

### 开发模式

```bash
# 复制并配置环境变量
cp .env.example .env
# 编辑 .env，填入 Zotero 路径

# 启动开发服务器（支持热重载）
npm start
```

### 项目结构

```
.
├── addon/                    # 静态插件文件
│   ├── bootstrap.js          # 插件生命周期处理
│   ├── manifest.json         # 插件清单
│   ├── content/
│   │   └── icons/
│   │       ├── C1.svg        # 侧边栏图标
│   │       └── C1.png        # 原始图标源文件
│   └── locale/               # 本地化文件
│       ├── en-US/
│       └── zh-CN/
├── src/                      # TypeScript 源代码
│   ├── index.ts              # 主入口
│   ├── hooks.ts              # 生命周期钩子
│   └── modules/
│       └── sidebar.ts        # AI 侧边栏注册
├── package.json
└── zotero-plugin.config.ts   # 构建配置
```

## 开发路线图

- [ ] 支持多个 LLM 提供商（ChatGPT、Claude 等）
- [ ] 选中文本 → 自动发送到 AI
- [ ] 按文档保存对话历史
- [ ] 自定义常用任务的提示词模板
- [ ] 深色模式图标适配

## 开源协议

本项目基于 [GNU Affero General Public License v3.0](../LICENSE) 开源。

## 致谢

- [Zotero](https://www.zotero.org/) — 开源文献管理工具
- [zotero-plugin-template](https://github.com/windingwind/zotero-plugin-template) — windingwind 维护的插件开发模板
- [zotero-plugin-toolkit](https://github.com/windingwind/zotero-plugin-toolkit) — 插件开发工具集
- [Google Gemini](https://gemini.google.com) — AI 助手
