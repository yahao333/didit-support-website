import { useState } from 'react'
import './App.css'
import { translations } from './locales'

function App() {
  const [activeTab, setActiveTab] = useState('support')
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem('didit-language') || 'en'
    } catch {
      return 'en'
    }
  })

  const handleLanguageChange = (lang) => {
    setLanguage(lang)
    localStorage.setItem('didit-language', lang)
  }

  const t = translations[language]

  const tabs = [
    { id: 'support', label: t.nav.support },
    { id: 'privacy', label: t.nav.privacy },
    { id: 'terms', label: t.nav.terms },
  ]

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1 className="app-name">{t.appName}</h1>
          <p className="app-tagline">{t.tagline}</p>
        </div>
      </header>

      <div className="header-controls">
        <div className="language-selector">
          <button
            className={`lang-btn ${language === 'en' ? 'active' : ''}`}
            onClick={() => handleLanguageChange('en')}
          >
            EN
          </button>
          <span className="lang-divider">|</span>
          <button
            className={`lang-btn ${language === 'zh' ? 'active' : ''}`}
            onClick={() => handleLanguageChange('zh')}
          >
            中文
          </button>
        </div>
      </div>

      <nav className="nav-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <main className="main-content">
        {activeTab === 'support' && (
          <section className="content-section">
            <h2>{t.support.title}</h2>
            <div className="support-card">
              <h3>{t.support.contactTitle}</h3>
              <p>{t.support.contactDesc}</p>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-label">{t.support.email}</span>
                  <a href="mailto:apprank@outlook.com">apprank@outlook.com</a>
                </div>
              </div>
            </div>

            <div className="support-card">
              <h3>{t.support.faqTitle}</h3>
              <div className="faq-list">
                {t.support.faqs.map((faq, index) => (
                  <details key={index} className="faq-item">
                    <summary>{faq.q}</summary>
                    <p>{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeTab === 'privacy' && (
          <section className="content-section">
            <h2>{t.privacy.title}</h2>
            <div className="policy-content">
              <p className="last-updated">{t.privacy.lastUpdated}</p>

              <h3>{t.privacy.dataCollection}</h3>
              <p>{t.privacy.dataCollectionDesc}</p>
              <ul>
                {t.privacy.dataCollectionList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h3>{t.privacy.localStorage}</h3>
              <p>{t.privacy.localStorageDesc}</p>

              <h3>{t.privacy.contact}</h3>
              <p>
                {t.privacy.contactDesc}
                <a href="mailto:apprank@outlook.com">apprank@outlook.com</a>
              </p>
            </div>
          </section>
        )}

        {activeTab === 'terms' && (
          <section className="content-section">
            <h2>{t.terms.title}</h2>
            <div className="policy-content">
              <p className="last-updated">{t.terms.lastUpdated}</p>

              <h3>{t.terms.license}</h3>
              <p>{t.terms.licenseDesc}</p>

              <h3>{t.terms.disclaimer}</h3>
              <ul>
                {t.terms.disclaimerList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h3>{t.terms.limitation}</h3>
              <p>{t.terms.limitationDesc}</p>
            </div>
          </section>
        )}
      </main>

      <footer className="footer">
        <p>{t.footer}</p>
      </footer>
    </div>
  )
}

export default App
