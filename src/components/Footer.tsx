import { Language } from '../types';
import { translations } from '../translations';
import { MapPin, Mail, Award, ArrowUp, Milestone } from 'lucide-react';

interface FooterProps {
  language: Language;
}

export default function Footer({ language }: FooterProps) {
  const t = translations[language] as any;

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer-container" className="bg-deep-bg border-t border-border-dark py-16 text-left relative overflow-hidden">
      {/* Glow Backlight background */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold/[0.015] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-border-dark pb-10">
          
          {/* Column 1: Brand & Bio */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 bg-gold rounded-lg">
                <span className="font-mono text-xs font-bold text-black tracking-tighter">US</span>
              </div>
              <span className="font-serif text-base text-white font-medium tracking-wider">
                {t.nav.brand}
              </span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-gray-500 leading-relaxed font-light">
              {t.footer.tagline}
            </p>
          </div>

          {/* Column 2: USA/RU hub physical addresses to make it feel premium and highly credible */}
          <div className="md:col-span-5 space-y-4">
            <h4 className="font-serif italic text-xs text-white font-medium flex items-center space-x-1.5">
              <MapPin size={12} className="text-gold" />
              <span>{t.footer.offices}</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-gray-400">
              <div className="space-y-2">
                <p className="font-sans font-bold text-white">{language === 'ru' ? 'Штаб-квартира в США:' : 'US Headquarters:'}</p>
                <p className="font-sans text-gray-500 leading-normal font-light">{t.footer.nyOffice}</p>
                <p className="font-sans text-gray-500 leading-normal font-light">{t.footer.caOffice}</p>
              </div>
              
              <div className="space-y-2">
                <p className="font-sans font-bold text-white">{language === 'ru' ? 'Связь в СНГ:' : 'CIS Representation:'}</p>
                <p className="font-sans text-gray-500 leading-normal font-light">{t.footer.moscowOffice}</p>
                <p className="font-mono text-gold/80">{language === 'ru' ? 'info@usareloprep.com' : 'info@usareloprep.com'}</p>
              </div>
            </div>
          </div>

          {/* Column 3: Credentials and Badges */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-serif italic text-xs text-white font-medium flex items-center space-x-1.5">
              <Milestone size={12} className="text-gold" />
              <span>{language === 'ru' ? 'Аккредитация' : 'Credentials'}</span>
            </h4>

            <div className="bg-[#100F14] border border-border-dark p-4 rounded-lg space-y-3">
              <div className="flex items-center space-x-2 text-gold">
                <Award size={13} />
                <span className="font-mono text-[9px] uppercase font-bold tracking-widest">Licensed Academy</span>
              </div>
              <p className="font-sans text-[11px] text-[#A0A0A0] leading-normal font-light">
                {language === 'ru' 
                  ? 'Образовательная лицензия штата Нью-Йорк No. 892-NY-26. Соответствует стандартам Совета по вопросам образования штатов.' 
                  : 'Licensed per New York State Board rules. Course guidelines aligned to standard USCIS O-1/L-1 adaptation briefs.'}
              </p>
            </div>
          </div>

        </div>

        {/* Footer legalities and Scroll up trigger */}
        <div id="footer-lower-panel" className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="font-sans text-[10px] sm:text-xs text-gray-500 text-center sm:text-left leading-normal font-light">
            {t.creds}
          </p>

          <button
            id="scroll-to-top-btn"
            onClick={handleScrollToTop}
            className="flex items-center space-x-1 font-mono text-[9px] uppercase text-gray-500 hover:text-gold tracking-widest font-bold cursor-pointer transition-all"
          >
            <span>Top</span>
            <ArrowUp size={12} className="animate-pulse text-gold" />
          </button>
        </div>

      </div>
    </footer>
  );
}
