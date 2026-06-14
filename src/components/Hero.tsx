import { Language } from '../types';
import { translations } from '../translations';
import { ChevronRight, ArrowDown, Award, Users, CheckCircle2 } from 'lucide-react';
// @ts-ignore
import heroImage from '../assets/images/hero_premium_ny_1781374947311.jpg';
import { motion } from 'motion/react';
import GorillaGlass from './GorillaGlass';

interface HeroProps {
  language: Language;
}

export default function Hero({ language }: HeroProps) {
  const t = translations[language];

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero-section" className="relative min-h-screen lg:min-h-[780px] overflow-hidden bg-deep-bg pt-28 pb-16 flex items-center">
      
      {/* Background NYC Panorama Image with overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          src={heroImage}
          alt="NYC Skyline Background"
          className="w-full h-full object-cover object-center pointer-events-none"
          referrerPolicy="no-referrer"
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1.02, opacity: 0.55 }}
          transition={{ duration: 2.2, ease: "easeOut" }}
        />
        {/* Rich bronze-black elegant gradient to protect contract readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#110E0C] via-[#110E0C]/90 to-[#110E0C]/35 sm:via-[#110E0C]/85 lg:from-[#110E0C]/95 lg:via-[#110E0C]/80 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#110E0C] via-transparent to-[#110E0C]/40" />
      </div>

      {/* Subtle glow accents */}
      <div className="absolute top-1/4 right-0 w-[50vw] h-[50vh] bg-gradient-to-bl from-gold/5 via-transparent to-transparent opacity-60 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gold/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-full px-4 sm:px-12 lg:px-16 xl:px-24 relative z-10 w-full flex flex-col justify-center py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Text Content Block with Left-to-Right dynamic animation */}
          <div id="hero-text-container" className="lg:col-span-7 xl:col-span-7 max-w-2xl xl:max-w-3xl space-y-8 text-left">
            
            {/* Main Headlines - Classic Serif Layout with Left-to-Right reveal */}
            <div className="space-y-6">
              <motion.h1 
                id="hero-headline" 
                className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[96px] leading-[1.08] tracking-tight text-white font-light"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
              >
                {t.hero.titleFirst} <br />
                <span className="italic text-gold font-serif block mt-3 whitespace-nowrap text-2xl sm:text-3.5xl md:text-4.5xl lg:text-5xl xl:text-6xl 2xl:text-[72px] tracking-tight">
                  {t.hero.titleHighlight}
                </span>
               </motion.h1>

              {/* Premium Quality prep label - elegantly styled below the title, with NO surrounding badge box */}
              <motion.p
                id="hero-badge-subtitle"
                className="font-serif italic text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-[#DFC49E] tracking-normal font-light leading-tight mt-3"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
              >
                {t.hero.badge}
              </motion.p>
              
              {/* White beautifully styled Cormorant Garamond description */}
              <motion.p 
                id="hero-subtitle" 
                className="font-serif text-base sm:text-lg lg:text-xl text-white/90 font-light leading-relaxed max-w-2xl xl:max-w-3xl mt-4"
                initial={{ opacity: 0, x: -35 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.6 }}
              >
                {t.hero.subtitle}
              </motion.p>
            </div>

            {/* Action buttons with left-to-right fade */}
            <motion.div 
              id="hero-cta-group" 
              className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-2"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            >
              <button
                id="hero-btn-quiz"
                onClick={() => handleScroll('quiz-section')}
                className="group flex items-center justify-center space-x-2 bg-gold text-black hover:bg-gold-light active:scale-95 px-8 py-3.5 rounded-xl font-sans text-xs uppercase tracking-widest font-bold transition-all shadow-[0_10px_35px_rgba(197,160,89,0.2)] cursor-pointer"
              >
                <span>{t.hero.ctaTest}</span>
                <ChevronRight size={14} className="transform group-hover:translate-x-1 precision-transform duration-200" />
              </button>

              <button
                id="hero-btn-trial"
                onClick={() => handleScroll('trial-section')}
                className="flex items-center justify-center space-x-2 bg-[#1B1512]/90 text-white hover:bg-[#251E1A] border border-border-dark hover:border-gold/50 active:scale-95 px-8 py-3.5 rounded-xl font-sans text-xs uppercase tracking-widest font-bold transition-all cursor-pointer"
              >
                <span>{t.hero.ctaTrial}</span>
              </button>
            </motion.div>

            {/* Core Stats Row - styled as beautiful liquid glass card and placed inside text flow */}
            <motion.div 
              id="hero-stats-row" 
              className="mt-8 max-w-[580px] w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
            >
              <GorillaGlass className="grid grid-cols-3 gap-2 sm:gap-4 p-5 sm:p-6 shadow-[0_20px_45px_rgba(0,0,0,0.5)] rounded-2xl">
                <div id="hero-stat-1" className="space-y-2 text-center flex flex-col items-center justify-center">
                  <div className="flex items-center justify-center space-x-2 text-gold">
                    <Users size={18} className="shrink-0" />
                    <span className="font-serif italic text-2xl sm:text-3xl lg:text-[34px] font-semibold leading-none whitespace-nowrap">350+</span>
                  </div>
                  <div className="font-sans text-[10px] sm:text-[11px] text-gray-400 uppercase tracking-widest leading-normal">
                    {t.hero.statStudents}
                  </div>
                </div>

                <div id="hero-stat-2" className="space-y-2 text-center flex flex-col items-center justify-center border-l border-white/5 border-r">
                  <div className="flex items-center justify-center space-x-2 text-gold">
                    <Award size={18} className="shrink-0" />
                    <span className="font-serif italic text-2xl sm:text-3xl lg:text-[34px] font-semibold leading-none whitespace-nowrap">4.9+</span>
                  </div>
                  <div className="font-sans text-[10px] sm:text-[11px] text-gray-400 uppercase tracking-widest leading-normal">
                    {t.hero.statRating}
                  </div>
                </div>

                <div id="hero-stat-3" className="space-y-2 text-center flex flex-col items-center justify-center">
                  <div className="flex items-center justify-center space-x-2 text-gold">
                    <CheckCircle2 size={18} className="shrink-0" />
                    <span className="font-serif italic text-2xl sm:text-3xl lg:text-[34px] font-semibold leading-none whitespace-nowrap">98%</span>
                  </div>
                  <div className="font-sans text-[10px] sm:text-[11px] text-gray-400 uppercase tracking-widest leading-normal">
                    {t.hero.statRelocation}
                  </div>
                </div>
              </GorillaGlass>
            </motion.div>
          </div>

          {/* Right Column is empty on desktop grid flow */}
          <div className="hidden lg:block lg:col-span-5" />

        </div>

        {/* New York Integration Block - styled cleanly with no surrounding glass box background */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.7 }}
          className="lg:absolute lg:right-16 xl:right-24 lg:bottom-12 xl:bottom-20 max-w-sm sm:max-w-md text-left lg:text-right p-0 pt-10 lg:pt-0"
        >
          <div id="hero-floating-badge" className="space-y-2.5">
            <h4 className="font-serif italic text-3xl sm:text-4xl lg:text-5xl text-white font-medium leading-none">
              New York Integration
            </h4>
            <p className="font-serif italic text-base sm:text-lg lg:text-xl text-[#DFC49E] font-light leading-relaxed">
              {language === 'ru' 
                ? 'Семинар по визовой адаптации и интеграции в культуру США стартует сегодня.' 
                : 'Visa adaptation & cultural integration pipeline active for spring cohorts.'}
            </p>
          </div>
        </motion.div>

        {/* Scroll down mouse animation */}
        <div 
          id="hero-scroll-indicator"
          onClick={() => handleScroll('levels-section')}
          className="hidden lg:flex flex-col items-center justify-center cursor-pointer mt-8 py-2 space-y-1 text-gray-500 hover:text-gold transition-colors"
        >
          <span className="font-mono text-[9px] tracking-widest uppercase">{t.hero.scrolledDown}</span>
          <ArrowDown size={14} className="animate-bounce text-gold" />
        </div>
      </div>
    </section>
  );
}
