import { useState, useEffect } from 'react';
import { translations, defaultLang } from './i18n';
import jaazLogo from './assets/jaaz_gradient.svg';
import './App.css';

function App() {
  const [lang, setLang] = useState(defaultLang);
  const t = translations[lang];

  const [index, setIndex] = useState(0);

  const keywords = t.keywords; // 当前语言的关键词数组
  const keyword = keywords[index];

  // 自动循环更新关键词
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % keywords.length);
    }, 2500); // 每 2.5 秒切换一次

    return () => clearInterval(interval);
  }, [keywords]);

  const toggleLang = () => {
    setLang(lang === 'en' ? 'zh' : 'en');
  };

  return (
    <div className="container">
      <button className="lang-toggle" onClick={toggleLang}>
        {t.switchLang}
      </button>

      <img src={jaazLogo} alt="Jaaz Logo" className="logo" />
      <h1 className="headline">
  {t.headlinePrefix}
  <span className="flip-wrapper">
    <span key={keyword} className="flip-word">{keyword}</span>
  </span>
  {t.headlineSuffix}
</h1>

      <div className="download-group">
        <a className="btn mac" href="https://github.com/11cafe/localart/releases/latest/download/Jaaz-1.0.10-arm64.dmg">
          {t.downloadMac}
        </a>
        <a className="btn windows" href="https://github.com/11cafe/localart/releases/latest/download/Jaaz-Setup-1.0.10.exe">
          {t.downloadWindows}
        </a>
      </div>

    </div>
  );
}

export default App;
