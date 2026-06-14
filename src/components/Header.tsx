import { useState, useEffect } from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Globe, User, PhoneCall, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onOpenCabinet: () => void;
}

export default function Header({ language, setLanguage, onOpenCabinet }: HeaderProps) {
  const t = translations[language];
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const sections = [
      'levels-section',
      'quiz-section',
      'teachers-section',
      'schedule-section',
      'formats-section',
      'pricing-section'
    ];

    const handleScrollSpy = () => {
      let currentSection = '';
      
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the section top is above or near the top 200px and the bottom is below 200px
          if (rect.top <= 200 && rect.bottom >= 200) {
            currentSection = sectionId;
            break;
          }
        }
      }

      // Fallback: If at the very bottom of the document, activate pricing-section
      if (!currentSection && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
        currentSection = 'pricing-section';
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    // Let page layouts settle and run initially
    const timer = setTimeout(handleScrollSpy, 200);

    return () => {
      window.removeEventListener('scroll', handleScrollSpy);
      clearTimeout(timer);
    };
  }, []);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 sm:px-6 lg:px-8 pointer-events-none">
      <nav 
        id="header-nav" 
        className="pointer-events-auto max-w-7xl mx-auto bg-black/50 backdrop-blur-xl rounded-full border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.6)] transition-all duration-300"
      >
        <div className="px-3 sm:px-5 py-2.5 flex items-center justify-between">
          {/* Brand Signature - Sophisticated Dark Serif Look */}
          <div 
            id="brand-logo-container"
            className="flex items-center space-x-3 cursor-pointer group" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 bg-gold rounded-full transition-transform duration-300 group-hover:rotate-6">
              <span className="font-serif text-sm sm:text-base font-black text-black">US</span>
            </div>
            <div>
              <div id="brand-main-text" className="font-serif italic text-sm sm:text-base font-bold tracking-tight text-white uppercase group-hover:text-gold transition-colors">
                {t.nav.brand}
              </div>
              <div className="font-mono text-[8px] text-[#A0A0A0] tracking-widest uppercase leading-none mt-0.5">
                Premium Academy
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links with custom indicator dots */}
          <div id="desktop-links" className="hidden lg:flex items-center space-x-7">
            <button
              id="nav-link-levels"
              onClick={() => handleScroll('levels-section')}
              className={`relative group font-sans text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer py-1.5 font-bold ${
                activeSection === 'levels-section'
                  ? 'text-gold drop-shadow-[0_0_8px_rgba(197,160,89,0.55)] scale-105 font-extrabold'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <span>{t.nav.levels}</span>
              <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gold rounded-full transition-all duration-300 shadow-[0_0_10px_#CCA76E] ${
                activeSection === 'levels-section'
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100'
              }`} />
            </button>
            <button
              id="nav-link-quiz"
              onClick={() => handleScroll('quiz-section')}
              className={`relative group font-sans text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer py-1.5 font-bold ${
                activeSection === 'quiz-section'
                  ? 'text-gold drop-shadow-[0_0_8px_rgba(197,160,89,0.55)] scale-105 font-extrabold'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <span>{t.nav.quiz}</span>
              <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gold rounded-full transition-all duration-300 shadow-[0_0_10px_#CCA76E] ${
                activeSection === 'quiz-section'
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100'
              }`} />
            </button>
            <button
              id="nav-link-teachers"
              onClick={() => handleScroll('teachers-section')}
              className={`relative group font-sans text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer py-1.5 font-bold ${
                activeSection === 'teachers-section'
                  ? 'text-gold drop-shadow-[0_0_8px_rgba(197,160,89,0.55)] scale-105 font-extrabold'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <span>{t.nav.teachers}</span>
              <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gold rounded-full transition-all duration-300 shadow-[0_0_10px_#CCA76E] ${
                activeSection === 'teachers-section'
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100'
              }`} />
            </button>
            <button
              id="nav-link-schedule"
              onClick={() => handleScroll('schedule-section')}
              className={`relative group font-sans text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer py-1.5 font-bold ${
                activeSection === 'schedule-section'
                  ? 'text-gold drop-shadow-[0_0_8px_rgba(197,160,89,0.55)] scale-105 font-extrabold'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <span>{t.nav.schedule}</span>
              <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gold rounded-full transition-all duration-300 shadow-[0_0_10px_#CCA76E] ${
                activeSection === 'schedule-section'
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100'
              }`} />
            </button>
            <button
              id="nav-link-formats"
              onClick={() => handleScroll('formats-section')}
              className={`relative group font-sans text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer py-1.5 font-bold ${
                activeSection === 'formats-section'
                  ? 'text-gold drop-shadow-[0_0_8px_rgba(197,160,89,0.55)] scale-105 font-extrabold'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <span>{t.nav.formats}</span>
              <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gold rounded-full transition-all duration-300 shadow-[0_0_10px_#CCA76E] ${
                activeSection === 'formats-section'
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100'
              }`} />
            </button>
            <button
              id="nav-link-pricing"
              onClick={() => handleScroll('pricing-section')}
              className={`relative group font-sans text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer py-1.5 font-bold ${
                activeSection === 'pricing-section'
                  ? 'text-gold drop-shadow-[0_0_8px_rgba(197,160,89,0.55)] scale-105 font-extrabold'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <span>{t.nav.pricing}</span>
              <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gold rounded-full transition-all duration-300 shadow-[0_0_10px_#CCA76E] ${
                activeSection === 'pricing-section'
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100'
              }`} />
            </button>
          </div>

          {/* Action Panel: Cabinet Demo & Language Select */}
          <div id="header-action-panel" className="flex items-center space-x-3 sm:space-x-4">
            {/* Language Switcher */}
            <div id="language-switcher" className="hidden sm:flex items-center bg-white/[0.04] backdrop-blur-md rounded-full p-1 border border-white/10">
              <button
                id="lang-btn-ru"
                onClick={() => setLanguage('ru')}
                className={`px-3 py-1 text-[10px] font-mono rounded-full font-bold transition-all ${
                  language === 'ru'
                    ? 'bg-gold text-black shadow-sm'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                RU
              </button>
              <button
                id="lang-btn-en"
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-[10px] font-mono rounded-full font-bold transition-all ${
                  language === 'en'
                    ? 'bg-gold text-black shadow-sm'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            {/* Cabinet Trigger: "Log in" style dark container pill */}
            <button
              id="header-cabinet-toggle-btn"
              onClick={onOpenCabinet}
              className="flex items-center space-x-1 bg-white/[0.04] hover:bg-white/[0.08] text-gray-300 hover:text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-sans text-xs sm:text-xs font-semibold cursor-pointer border border-white/10 transition-all"
            >
              <User size={13} className="text-gold" />
              <span>{language === 'ru' ? 'Войти' : 'Log in'}</span>
            </button>

            {/* Glowing "Get Started" luminous golden capsule */}
            <button
              id="header-get-started-btn"
              onClick={() => handleScroll('trial-section')}
              className="bg-gradient-to-r from-gold-light via-gold to-gold text-black hover:scale-[1.03] active:scale-95 px-5 py-2 sm:px-6 sm:py-2.5 rounded-full font-sans text-xs uppercase tracking-wider font-bold transition-all shadow-[0_0_20px_rgba(204,167,110,0.35)] hover:shadow-[0_0_35px_rgba(223,196,131,0.7)] flex items-center space-x-1 sm:space-x-1.5 cursor-pointer"
            >
              <span>{language === 'ru' ? 'Начать' : 'Get Started'}</span>
              <span className="font-sans leading-none">→</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
