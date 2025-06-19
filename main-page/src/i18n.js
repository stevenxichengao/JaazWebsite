// src/i18n.js

const translations = {
    en: {
      headlinePrefix: "AI-powered",
      headlineSuffix: "design agent",
      keywords: ["poster", "icon", "logo", "branding", "web", "UI"],
      downloadMac: "Download for macOS",
      downloadWindows: "Download for Windows",
      switchLang: "切换中文"
    },
    zh: {
      headlinePrefix: "AI 驱动的",
      headlineSuffix: "设计智能体",
      keywords: ["海报", "图标", "标志", "品牌", "网页", "界面"],
      downloadMac: "下载 macOS 版本",
      downloadWindows: "下载 Windows 版本",
      switchLang: "Switch to English"
    }
  };
  
  // 默认语言：根据浏览器语言判断
  const defaultLang = (navigator.language || navigator.languages[0]).startsWith('zh') ? 'zh' : 'en';
  
  export { translations, defaultLang };
  