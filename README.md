# Zotero-C1LIFE

[![Zotero 9](https://img.shields.io/badge/Zotero-9-green?style=flat-square&logo=zotero&logoColor=CC2936)](https://www.zotero.org)
[![Using Zotero Plugin Template](https://img.shields.io/badge/Using-Zotero%20Plugin%20Template-blue?style=flat-square&logo=github)](https://github.com/windingwind/zotero-plugin-template)
[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg?style=flat-square)](https://www.gnu.org/licenses/agpl-3.0)

[English](README.md) | [简体中文](doc/README-zhCN.md)

## Overview

**Zotero-C1LIFE** is an AI-powered reading assistant plugin for **Zotero 9**. It embeds a web-based LLM (Large Language Model) interface directly into Zotero's PDF reader sidebar, enabling seamless "read and ask" interaction while reviewing academic literature.

The plugin loads [Google Gemini](https://gemini.google.com) in the reader's side panel, allowing researchers to translate, summarize, and discuss paper content without switching between applications.

## Features

- 🧠 **Embedded AI Assistant** — Google Gemini web interface integrated directly into Zotero's reader sidebar
- 📖 **Seamless Reading Experience** — AI panel appears alongside your PDF, no window switching needed
- 🌐 **No API Key Required** — Uses the free web interface of Gemini, no configuration needed
- 🔒 **Privacy First** — All interactions happen in your browser session; no data is stored by the plugin
- 📐 **Adaptive Layout** — The AI panel automatically adjusts to match your reading area height
- 🎨 **Native Integration** — Follows Zotero's UI conventions with proper sidebar icon and tooltip

## Compatibility

| Component | Version |
|-----------|---------|
| Zotero    | 9.0.3+  |
| Platform  | Windows, macOS, Linux |

## Installation

1. Download the latest `zotero-c-1-life.xpi` from the [Releases](https://github.com/TerryWen2023/Zotero-C1LIFE/releases) page
2. In Zotero, go to **Tools** → **Add-ons**
3. Click the ⚙️ gear icon → **Install Add-on From File...**
4. Select the downloaded `.xpi` file
5. Restart Zotero if prompted

## Usage

1. Open any PDF document in Zotero's reader
2. Look for the **C1** icon in the right sidebar navigation
3. Click the icon to open the AI Assistant panel
4. Sign in to your Google account (first time only)
5. Start asking questions about your paper!

### Use Cases

- **Translation**: Paste complex sentences for context-aware academic translation
- **Summarization**: Ask Gemini to summarize sections or the entire paper
- **Concept Explanation**: Get explanations for domain-specific terminology
- **Critical Analysis**: Discuss methodology, findings, and limitations

## Technical Architecture

- **Framework**: Built on [zotero-plugin-template](https://github.com/windingwind/zotero-plugin-template) by windingwind
- **Language**: TypeScript
- **UI Integration**: Uses `Zotero.ItemPaneManager.registerSection()` API for native sidebar embedding
- **Web View**: XUL `<browser>` element with Chrome User-Agent for compatibility
- **Build Tool**: [zotero-plugin-scaffold](https://github.com/northword/zotero-plugin-scaffold)

## Development

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version)
- [Git](https://git-scm.com/)
- Zotero 9.0.3+

### Build from Source

```bash
# Clone the repository
git clone https://github.com/TerryWen2023/Zotero-C1LIFE.git
cd Zotero-C1LIFE

# Install dependencies
npm install

# Build in production mode
npm run build
```

The built XPI will be in `.scaffold/build/zotero-c-1-life.xpi`.

### Development Mode

```bash
# Copy and configure environment
cp .env.example .env
# Edit .env with your Zotero path

# Start development with hot reload
npm start
```

### Project Structure

```
.
├── addon/                    # Static plugin files
│   ├── bootstrap.js          # Plugin lifecycle handler
│   ├── manifest.json         # Plugin manifest
│   ├── content/
│   │   └── icons/
│   │       ├── C1.svg        # Sidebar icon
│   │       └── C1.png        # Original icon source
│   └── locale/               # Localization files
│       ├── en-US/
│       └── zh-CN/
├── src/                      # TypeScript source code
│   ├── index.ts              # Main entry point
│   ├── hooks.ts              # Lifecycle hooks
│   └── modules/
│       └── sidebar.ts        # AI sidebar registration
├── package.json
└── zotero-plugin.config.ts   # Build configuration
```

## Roadmap

- [ ] Support for multiple LLM providers (ChatGPT, Claude, etc.)
- [ ] Text selection → auto-send to AI
- [ ] Conversation history per document
- [ ] Custom prompt templates for common tasks
- [ ] Dark mode icon support

## License

This project is licensed under the [GNU Affero General Public License v3.0](LICENSE).

## Acknowledgments

- [Zotero](https://www.zotero.org/) — The open-source reference manager
- [zotero-plugin-template](https://github.com/windingwind/zotero-plugin-template) — Plugin development template by windingwind
- [zotero-plugin-toolkit](https://github.com/windingwind/zotero-plugin-toolkit) — Plugin development utilities
- [Google Gemini](https://gemini.google.com) — AI assistant
