import { getLocaleID, getString } from "../utils/locale";

export class WebLLMSidebar {
  static registerReaderSidebar() {
    // rootURI is injected into global scope by bootstrap.js
    const iconPath = rootURI + "content/icons/C1.png";

    Zotero.ItemPaneManager.registerSection({
      paneID: "zotero-c1life",
      pluginID: addon.data.config.addonID,
      header: {
        l10nID: getLocaleID("webllm-assistant-head-text"),
        icon: iconPath,
      },
      sidenav: {
        l10nID: getLocaleID("webllm-assistant-sidenav-tooltip"),
        icon: iconPath,
      },
      
      bodyXHTML: '<browser disableglobalhistory="true" remote="true" maychangeremoteness="true" type="content" flex="1" id="web-llm-browser" style="width: 100%; min-height: calc(100vh - 120px); border: none; flex: 1;" src="https://gemini.google.com/app" />',

      onInit: ({ body }) => {
        body.style.display = "flex";
        body.style.flex = "1";
        body.style.flexDirection = "column";
        body.style.minHeight = "calc(100vh - 120px)";

        const browser = body.querySelector("#web-llm-browser") as any;
        if (browser) {
          browser.setAttribute("useragent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36");
        }
      },

      onItemChange: ({ setEnabled, tabType }) => {
        setEnabled(tabType === "reader");
        return true;
      },
      
      onRender: ({ body, item }) => {
      }
    });
  }
}
