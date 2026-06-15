import { Language } from '../types';
import { translations } from '../translations';
import { Layers, Bookmark, CheckCircle2, Clock } from 'lucide-react';
import GorillaGlass from './GorillaGlass';

interface FormatsProps {
  language: Language;
}

export default function Formats({ language }: FormatsProps) {
  const t = translations[language];

  return (
    <section id="formats-section" className="relative py-24 sm:py-32 bg-luxury-grid border-t border-b border-border-dark min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Luxury Background patterns and glow */}
      <div className="luxury-curves" />
      <div className="luxury-overlay-waves" />
      <div className="absolute top-10 left-1/3 w-80 h-80 bg-gold/[0.015] rounded-full blur-[120px] pointer-events-none" />
 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left w-full">
        
        {/* Header Section */}
        <div id="formats-header" className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 id="formats-title" className="premium-section-title text-2xl sm:text-3xl text-white leading-tight">
            {t.formats.title}
          </h2>
          <p id="formats-subtitle" className="poriadok-copy text-xl sm:text-2xl text-[#F5DED0] leading-relaxed max-w-xl mx-auto">
            {t.formats.subtitle}
          </p>
        </div>
 
        {/* 3 Formats Cards Deck */}
        <div id="formats-cards-deck" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {t.formats.formatsList.map((format, idx) => {
            const isVip = idx === 0;
            return (
              <GorillaGlass
                id={`format-card-${idx}`}
                key={idx}
                isInteractive
                isSelected={isVip}
                className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl"
              >
                {/* Decorative glow for VIP */}
                {isVip && (
                  <div className="absolute -top-12 -right-12 w-28 h-28 bg-gold/[0.03] rounded-full blur-2xl pointer-events-none" />
                )}

                <div className="space-y-6">
                  {/* Icon or Status Badge */}
                  <div className="flex items-center justify-between">
                    <div className="bg-gold/5 border border-gold/15 w-11 h-11 rounded-lg flex items-center justify-center text-gold">
                      <Bookmark size={18} />
                    </div>
                    {isVip && (
                      <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-[9px] font-mono font-bold tracking-widest rounded-full uppercase border border-gold/25">
                        {language === 'ru' ? 'Премиум выбор' : 'Executive Priority'}
                      </span>
                    )}
                  </div>

                  {/* Description Headlines */}
                  <div className="space-y-2">
                    <h3 className="premium-section-title text-lg sm:text-xl text-white leading-tight">
                      {format.title}
                    </h3>
                    <p className="poriadok-copy text-lg text-[#F5DED0] leading-relaxed">
                      {format.desc}
                    </p>
                  </div>

                  {/* Bullet points inclusions lists */}
                  <ul className="space-y-3 pt-4 border-t border-border-dark">
                    {format.features.map((feature, fIdx) => (
                      <li
                        id={`format-${idx}-feat-${fIdx}`}
                        key={fIdx}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle2 size={14} className="text-gold mt-0.5 flex-shrink-0" />
                        <span className="poriadok-copy text-base text-[#F1D4C4]">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footnotes time tracker indicator */}
                <div className="pt-6 mt-6 border-t border-border-dark flex items-center space-x-2 text-gray-500">
                  <Clock size={13} className="text-gold/60" />
                  <span className="poriadok-copy text-base">
                    {format.time}
                  </span>
                </div>

              </GorillaGlass>
            );
          })}
        </div>

        </div>
    </section>
  );
}
