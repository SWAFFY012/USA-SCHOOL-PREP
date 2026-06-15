import React, { useState } from 'react';
import { Language } from '../types';
import { translations, quizQuestions } from '../translations';
import { Eye, CheckCircle2, ChevronRight, ChevronLeft, RotateCcw, Award, FileText, Smartphone, Briefcase, Sparkles } from 'lucide-react';
import GorillaGlass from './GorillaGlass';

interface TestProps {
  language: Language;
}

export default function Test({ language }: TestProps) {
  const t = translations[language];
  const questions = quizQuestions[language];

  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState<boolean>(false);
  const [calculating, setCalculating] = useState<boolean>(false);
  const [finalScore, setFinalScore] = useState<number>(0);

  const [contactName, setContactName] = useState<string>('');
  const [contactPhone, setContactPhone] = useState<string>('');
  const [roadmapUnlocked, setRoadmapUnlocked] = useState<boolean>(false);

  const handleSelectOption = (optIndex: number) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentIdx]: optIndex,
    });
  };

  const handleNext = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      // Calculate final score and trigger loading anim
      let total = 0;
      Object.entries(selectedAnswers).forEach(([qIdx, optIdx]) => {
        const points = questions[Number(qIdx)].options[optIdx as number].points;
        total += points;
      });
      setFinalScore(total);
      setCalculating(true);
      setTimeout(() => {
        setCalculating(false);
        setShowResult(true);
      }, 1200);
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
    }
  };

  const handleRetake = () => {
    setSelectedAnswers({});
    setCurrentIdx(0);
    setShowResult(false);
    setRoadmapUnlocked(false);
    setContactName('');
    setContactPhone('');
  };

  const handleUnlockRoadmap = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactName && contactPhone) {
      setRoadmapUnlocked(true);
    }
  };

  // Determine Level from points
  const getLevelName = (score: number) => {
    if (score <= 5) return 'A2 - Elementary Survival';
    if (score <= 10) return 'B1 - Intermediate Relocator';
    if (score <= 14) return 'B2 - Business & Visa Ready';
    return 'C1 - Presidential Talents (Advanced)';
  };

  const levelNameClean = getLevelName(finalScore);

  return (
    <section id="quiz-section" className="relative py-24 sm:py-32 xl:py-44 bg-luxury-grid border-b border-border-dark min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Luxury background decorations */}
      <div className="luxury-curves" />
      <div className="luxury-overlay-waves" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-gold/[0.02] rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-left w-full">
        {/* Header Title */}
        <div id="quiz-header" className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <h2 id="quiz-title" className="premium-section-title text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            {t.quiz.title}
          </h2>
          <p id="quiz-subtitle" className="poriadok-copy text-xl sm:text-2xl lg:text-3xl text-[#F5DED0] leading-relaxed max-w-2xl mx-auto">
            {t.quiz.subtitle}
          </p>
        </div>
 
        <div id="quiz-box-card" className="w-full">
          <GorillaGlass className="p-8 sm:p-14 shadow-2xl rounded-[2rem]">
            
            {/* CALCULATING STATE */}
          {calculating && (
            <div id="quiz-calculating-container" className="py-20 text-center space-y-6 animate-pulse">
               <div className="w-16 h-16 border-4 border-gold border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="font-mono text-xs sm:text-sm tracking-wider text-gold font-bold uppercase">{t.quiz.calculating}</p>
            </div>
          )}
 
          {/* QUIZ FORM STATE */}
          {!calculating && !showResult && (
            <div id="quiz-stepper-container" className="space-y-10">
              {/* Question number and simple progress bar */}
              <div className="flex items-center justify-between">
                <span className="poriadok-copy text-base sm:text-lg text-[#F4D0BA]">
                  {t.quiz.questionTitle.replace('{{current}}', String(currentIdx + 1)).replace('{{total}}', String(questions.length))}
                </span>
                <span className="poriadok-copy text-base sm:text-lg text-[#D6B7A8]">
                  {Math.round(((currentIdx + 1) / questions.length) * 100)}%
                </span>
              </div>
 
              {/* Progress bar line */}
              <div className="w-full bg-[#1A1A1A] h-1.5 rounded-full overflow-hidden">
                <div 
                  className="bg-gold h-full transition-all duration-300"
                  style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
                />
              </div>
 
              {/* Question Text */}
              <h3 id="quiz-question-text" className="premium-section-title text-2xl sm:text-3xl lg:text-4xl text-white leading-normal">
                {questions[currentIdx].question}
              </h3>
 
              {/* Multiple Options Radio Cards */}
              <div id="quiz-options-grid" className="grid grid-cols-1 gap-5">
                {questions[currentIdx].options.map((option, idx) => {
                  const isSelected = selectedAnswers[currentIdx] === idx;
                  return (
                    <GorillaGlass
                      id={`quiz-option-${idx}`}
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      isInteractive
                      isSelected={isSelected}
                      className="p-6 text-left rounded-[1.25rem]"
                    >
                      <div className="flex items-center space-x-4">
                        <span className="premium-radio" data-selected={isSelected} aria-hidden="true" />
                        <p className="poriadok-copy text-lg sm:text-xl lg:text-2xl text-gray-100">
                          {option.text}
                        </p>
                      </div>
                    </GorillaGlass>
                  );
                })}
              </div>

              {/* Prev / Next buttons */}
              <div id="quiz-actions" className="flex justify-between items-center pt-8 border-t border-border-dark">
                <button
                  id="quiz-prev-btn"
                  onClick={handlePrev}
                  disabled={currentIdx === 0}
                  className={`flex items-center space-x-1.5 font-mono text-[10px] sm:text-xs uppercase font-bold tracking-widest ${
                    currentIdx === 0 ? 'text-gray-700 cursor-not-allowed' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <ChevronLeft size={14} />
                  <span>{t.quiz.prevBtn}</span>
                </button>

                <button
                  id="quiz-next-btn"
                  onClick={handleNext}
                  disabled={selectedAnswers[currentIdx] === undefined}
                  className={`flex items-center space-x-2.5 bg-gold text-black px-8 py-4 rounded-xl font-serif text-sm uppercase tracking-widest font-bold hover:bg-gold-light transition-all ${
                    selectedAnswers[currentIdx] === undefined ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer shadow-md'
                  }`}
                >
                  <span>{currentIdx === questions.length - 1 ? t.quiz.finishBtn : t.quiz.nextBtn}</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* QUIZ RESULT REPORT */}
          {showResult && (
            <div id="quiz-report-container" className="space-y-12 animate-fade-in text-left">
              
              {/* Congratulation Card */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-border-dark pb-8 gap-4">
                <div className="space-y-3">
                  <div className="inline-flex items-center space-x-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1.5 rounded-full text-xs font-mono font-bold">
                    <CheckCircle2 size={12} />
                    <span>{language === 'ru' ? 'Диагностика завершена' : 'Diagnostics Complete'}</span>
                  </div>
                  <h3 id="quiz-result-header" className="font-serif text-3xl sm:text-4xl text-white font-normal tracking-tight">
                    {t.quiz.resultTitle.replace('{{level}}', levelNameClean)}
                  </h3>
                  <p className="font-serif text-base sm:text-lg text-gray-300 font-light max-w-full">
                    {t.quiz.levelAdvice}
                  </p>
                </div>

                <button
                  id="quiz-retake-btn"
                  onClick={handleRetake}
                  className="flex items-center space-x-1 px-4 py-2 border border-white/5 hover:border-gold/20 rounded-full text-[10px] sm:text-xs tracking-wider font-mono uppercase text-gray-400 hover:text-gold transition-colors"
                >
                  <RotateCcw size={13} />
                  <span>{t.quiz.retakeBtn}</span>
                </button>
              </div>

              {/* ROADMAP ACTION OR CONTENT BLOCK */}
              {!roadmapUnlocked ? (
                <div id="quiz-lock-screen">
                  <GorillaGlass className="p-8 sm:p-10 rounded-[1.5rem]">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold/[0.03] rounded-full blur-[40px] pointer-events-none" />
                    
                    <div className="space-y-6 max-w-2xl relative z-10">
                      <h4 className="font-serif italic text-xl sm:text-2xl text-white flex items-center space-x-2.5 font-medium">
                        <Award size={20} className="text-gold" />
                        <span>{language === 'ru' ? 'Получить Дорожную Карту в PDF-формате:' : 'Unlock relocation roadmap file:'}</span>
                      </h4>
                      <p className="font-serif text-base sm:text-lg text-gray-300 font-light leading-relaxed">
                        {language === 'ru' 
                          ? 'Мы оформили для вашего уровня пошаговый PDF-трекер со всеми необходимыми темами, шаблонами диалогов и часами подготовки.'
                          : 'Unlock fully detailed relocation tracks with standard DMV forms, visa statements, and dialogue patterns.'}
                      </p>
   
                      <form id="roadmap-unlock-form" onSubmit={handleUnlockRoadmap} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        <div className="space-y-1.5 flex flex-col">
                          <label className="font-mono text-[9px] uppercase text-gray-500 font-bold tracking-widest">{t.trial.nameLabel}</label>
                          <input
                            type="text"
                            required
                            value={contactName}
                            onChange={(e) => setContactName(e.target.value)}
                            placeholder="Алекс"
                            className="w-full bg-[#0F0F0F]/60 backdrop-blur-sm border border-white/10 focus:border-gold rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors font-medium font-serif"
                          />
                        </div>
                        <div className="space-y-1.5 flex flex-col">
                          <label className="font-mono text-[9px] uppercase text-gray-500 font-bold tracking-widest">{t.trial.phoneLabel}</label>
                          <input
                            type="text"
                            required
                            value={contactPhone}
                            onChange={(e) => setContactPhone(e.target.value)}
                            placeholder="+7 / +998..."
                            className="w-full bg-[#0F0F0F]/60 backdrop-blur-sm border border-white/10 focus:border-gold rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors font-medium font-serif"
                          />
                        </div>
                        <button
                          type="submit"
                          className="sm:col-span-2 bg-gold hover:bg-gold-light text-black font-semibold py-4 rounded-xl text-xs uppercase tracking-widest transition-all shadow-md mt-2 cursor-pointer font-serif"
                        >
                          {language === 'ru' ? 'Забрать карту и записаться на разбор' : 'Unlock and register track'}
                        </button>
                      </form>
                    </div>
                  </GorillaGlass>
                </div>
              ) : (
                <div id="quiz-unlocked-roadmap" className="space-y-10 animate-fade-in">
                  <div className="p-5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl text-base font-serif font-light italic">
                    {t.quiz.congrats}
                  </div>
   
                  <div className="space-y-4">
                    <h4 className="font-serif italic text-2xl text-white flex items-center space-x-2">
                      <FileText size={20} className="text-gold" />
                      <span>{t.quiz.roadmapTitle}</span>
                    </h4>
                    <p className="font-serif text-lg sm:text-xl text-gray-300 italic font-light max-w-3xl">
                      {t.quiz.roadmapDesc}
                    </p>
                  </div>
   
                  {/* Roadmap Timelines Milestones */}
                  <div id="roadmap-timeline" className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    {/* Mile 1 */}
                    <GorillaGlass className="p-6 sm:p-8 shadow-md rounded-[1.25rem]">
                      <div className="space-y-4">
                        <div className="w-10 h-10 rounded-lg bg-gold/5 border border-gold/20 flex items-center justify-center text-gold">
                          <Award size={18} />
                        </div>
                        <h5 className="font-serif italic text-lg text-white">
                          {t.quiz.points.visaTitle}
                        </h5>
                        <p className="font-serif text-base text-gray-300 leading-relaxed font-light italic">
                          {t.quiz.points.visaDesc}
                        </p>
                      </div>
                    </GorillaGlass>
   
                    {/* Mile 2 */}
                    <GorillaGlass className="p-6 sm:p-8 shadow-md rounded-[1.25rem]">
                      <div className="space-y-4">
                        <div className="w-10 h-10 rounded-lg bg-gold/5 border border-gold/20 flex items-center justify-center text-gold">
                          <Smartphone size={18} />
                        </div>
                        <h5 className="font-serif italic text-lg text-white">
                          {t.quiz.points.everydayTitle}
                        </h5>
                        <p className="font-serif text-base text-gray-300 leading-relaxed font-light italic">
                          {t.quiz.points.everydayDesc}
                        </p>
                      </div>
                    </GorillaGlass>
   
                    {/* Mile 3 */}
                    <GorillaGlass className="p-6 sm:p-8 shadow-md rounded-[1.25rem]">
                      <div className="space-y-4">
                        <div className="w-10 h-10 rounded-lg bg-gold/5 border border-gold/20 flex items-center justify-center text-gold">
                          <Briefcase size={18} />
                        </div>
                        <h5 className="font-serif italic text-lg text-white">
                          {t.quiz.points.professionalTitle}
                        </h5>
                        <p className="font-serif text-base text-gray-300 leading-relaxed font-light italic">
                          {t.quiz.points.professionalDesc}
                        </p>
                      </div>
                    </GorillaGlass>
 
                  </div>
                </div>
              )}

            </div>
          )}

          </GorillaGlass>
        </div>
      </div>
    </section>
  );
}
