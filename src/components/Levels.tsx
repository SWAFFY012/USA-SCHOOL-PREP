import { useState } from 'react';
import { Language } from '../types';
import { translations, levelsData } from '../translations';
import { Compass, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import GorillaGlass from './GorillaGlass';

interface LevelsProps {
  language: Language;
}

export default function Levels({ language }: LevelsProps) {
  const t = translations[language];
  const list = levelsData[language];
  const [selectedId, setSelectedId] = useState<string>('b2');

  const activeLevel = list.find((item) => item.id === selectedId) || list[2];

  return (
    <section id="levels-section" className="relative bg-luxury-diamonds py-24 sm:py-32 border-t border-b border-border-dark overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Luxury background decorations */}
      <div className="luxury-curves" />
      <div className="luxury-overlay-waves" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold/[0.03] rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header */}
        <motion.div 
          id="levels-header" 
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center space-x-2 bg-gold/5 border border-gold/20 px-3 py-1.5 rounded-full">
            <Compass size={13} className="text-gold" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-gold font-bold">Relocation Pathway</span>
          </div>
          <h2 id="levels-title" className="font-serif text-3xl sm:text-4xl text-white font-normal tracking-tight">
            {t.levels.title}
          </h2>
          <p id="levels-subtitle" className="font-serif text-lg sm:text-xl text-gray-300 italic font-light max-w-2xl mx-auto">
            {t.levels.subtitle}
          </p>
        </motion.div>

        {/* Dashboard Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Level Cards List with left-to-right cascade list view */}
          <motion.div 
            id="levels-cards-wrapper" 
            className="lg:col-span-5 space-y-4"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            {list.map((level) => {
              const isSelected = level.id === selectedId;
              return (
                <GorillaGlass
                  id={`level-card-${level.id}`}
                  key={level.id}
                  onClick={() => setSelectedId(level.id)}
                  isInteractive
                  isSelected={isSelected}
                  className="p-5 rounded-2xl text-left"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-gold font-bold">
                      {level.badge}
                    </span>
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(197,160,89,0.8)]" />
                    )}
                  </div>
                  <h3 className="font-serif italic text-lg sm:text-xl text-white mt-1.5 font-medium">
                    {level.name}
                  </h3>
                  <div className="flex items-center space-x-1.5 mt-2">
                    <Compass size={11} className="text-gold/50" />
                    <p className="font-sans text-xs sm:text-sm text-gold/80 font-normal">{level.usGoal}</p>
                  </div>
                </GorillaGlass>
              );
            })}
          </motion.div>

          {/* Detailed Relocation Goal Inspector with scale-in from right */}
          <motion.div 
            id="level-inspector-panel" 
            className="lg:col-span-7 bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.12)] rounded-3xl p-6 sm:p-12 relative overflow-hidden"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {/* Ambient Backlight */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-gold/[0.04] rounded-full blur-[50px] pointer-events-none" />
            
            <div className="space-y-6 relative z-10 text-left">
              {/* Badge & Label */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex px-3 py-1 bg-gold/10 text-gold rounded-full text-[10px] font-mono font-bold tracking-wider uppercase border border-gold/20">
                  {activeLevel.name}
                </span>
                <span className="font-mono text-[10px] text-gray-500 font-bold uppercase tracking-widest">• Objective Goal</span>
              </div>

              {/* USA target subtitle */}
              <div className="space-y-2">
                <h3 className="font-serif italic text-xl sm:text-2.5xl text-white">
                  {activeLevel.usGoal}
                </h3>
                <p className="font-serif text-base sm:text-lg text-gray-300 leading-relaxed font-light">
                  {activeLevel.description}
                </p>
              </div>

              {/* What situations we parse details */}
              <div className="pt-6 border-t border-border-dark space-y-4">
                <h4 className="font-mono text-[10px] uppercase tracking-widest text-[#808080] font-bold">
                  {language === 'ru' ? 'Практические кейсы в США:' : 'Practical US Use Cases:'}
                </h4>
                
                <div id="scenarios-list" className="space-y-3">
                  {activeLevel.scenarios.map((scenario, index) => (
                    <GorillaGlass
                      id={`level-scenario-${index}`}
                      key={index}
                      isInteractive
                      className="flex items-start space-x-3 p-4 sm:p-5 rounded-2xl"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/5 border border-gold/20 flex items-center justify-center text-gold text-xs font-bold font-mono">
                        {index + 1}
                      </div>
                      <div className="space-y-0.5">
                        <p className="font-serif text-base sm:text-lg text-gray-200 font-medium">
                          {scenario}
                        </p>
                        <p className="font-serif text-sm text-gray-400 font-light italic">
                          {language === 'ru' ? 'Имитация диалога, преодоление психологического барьера, глоссарий' : 'Linguistic simulation, stress test & dictionary alignment'}
                        </p>
                      </div>
                    </GorillaGlass>
                  ))}
                </div>
              </div>

              {/* Call to actions dynamically linking to the evaluation quiz */}
              <div id="level-inspector-footer" className="pt-6 text-right">
                <button
                  id="level-cta-test-btn"
                  onClick={() => {
                    const quizEl = document.getElementById('quiz-section');
                    if (quizEl) quizEl.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center space-x-1 text-[11px] font-mono uppercase tracking-widest text-gold font-bold hover:text-gold-light transition-colors cursor-pointer group"
                >
                  <span>{language === 'ru' ? 'Оценить себя по этой шкале' : 'Test your skills instantly'}</span>
                  <ArrowRight size={13} className="transform group-hover:translate-x-1.5 transition-transform duration-200" />
                </button>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
