import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { BookOpen, UserCheck, Send, CheckCircle, Download, FileSpreadsheet, FileCheck } from 'lucide-react';
import GorillaGlass from './GorillaGlass';
// @ts-ignore
import usConfidenceImg from '../assets/images/us_career_success_1781374963054.jpg';

interface TrialProps {
  language: Language;
}

export default function TrialLesson({ language }: TrialProps) {
  const t = translations[language];

  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [target, setTarget] = useState<string>('');
  const [sent, setSent] = useState<boolean>(false);
  const [downGuide, setDownGuide] = useState<boolean>(false);
  const [showStatusBanner, setShowStatusBanner] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && phone) {
      setSent(true);
    }
  };

  const handleDownloadGuide = () => {
    setDownGuide(true);
    // Simulating instant download receipt. Replaced native alert() with neat inline banner state.
    setTimeout(() => {
      setDownGuide(false);
      setShowStatusBanner(true);
      setTimeout(() => setShowStatusBanner(false), 5000);
    }, 1000);
  };

  return (
    <section id="trial-section" className="relative py-24 sm:py-32 bg-luxury-diamonds border-t border-b border-border-dark min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Luxury background decorations */}
      <div className="luxury-curves" />
      <div className="luxury-overlay-waves" />
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-gold/[0.015] rounded-full blur-[100px] pointer-events-none" />
 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Block: Creative visual & Guide download */}
          <div id="trial-teaser-container" className="lg:col-span-6 space-y-8">
            <div className="space-y-4 max-w-xl">
              <h2 id="trial-title" className="premium-section-title text-2xl sm:text-3xl text-white leading-tight">
                {t.trial.title}
              </h2>
              <p id="trial-subtitle" className="poriadok-copy text-xl sm:text-2xl text-[#F5DED0] leading-relaxed">
                {t.trial.subtitle}
              </p>
            </div>
 
            {/* Static visual layout */}
            <GorillaGlass className="grid grid-cols-1 sm:grid-cols-12 gap-6 p-5 rounded-2xl relative overflow-hidden">
              <div className="sm:col-span-4 rounded-xl overflow-hidden aspect-square sm:aspect-[4/5] bg-[#111115] border border-white/10">
                <img
                  id="trial-cta-graphic"
                  src={usConfidenceImg}
                  alt="California Success"
                  className="w-full h-full object-cover animate-fade-in"
                  referrerPolicy="no-referrer"
                />
              </div>
 
              <div id="trial-guide-incentive" className="sm:col-span-8 flex flex-col justify-between py-2 space-y-4">
                <div className="space-y-1">
                  <h4 className="poriadok-copy text-xl text-white">«Культурный код США 2026»</h4>
                  <p className="poriadok-copy text-base text-[#F5DED0] leading-relaxed">
                    {language === 'ru' 
                      ? 'Полная дорожная книга: американский юмор, правила общения в Whole Foods и Starbucks, тонкости банковских транзакций.' 
                      : 'Step-by-step guidance: American hospitality culture, slang dictionary, tax brackets, and credit scores overview.'}
                  </p>
                </div>
 
                <div>
                  <button
                    id="trial-download-bonus-btn"
                    onClick={handleDownloadGuide}
                    disabled={downGuide}
                    className="inline-flex items-center space-x-2 bg-white/[0.03] hover:bg-gold hover:text-black text-gold border border-white/10 p-2.5 px-4 rounded-xl font-mono text-[10px] uppercase font-bold tracking-widest active:scale-95 transition-all text-left cursor-pointer"
                  >
                    <Download size={13} className={downGuide ? 'animate-bounce' : ''} />
                    <span>{downGuide ? 'Downloading...' : 'Скачать PDF Гайд'}</span>
                  </button>
                </div>
              </div>
            </GorillaGlass>
 
            {/* Floating state status alert replacement */}
            {showStatusBanner && (
               <div className="bg-emerald-500/10 border border-emerald-500/25 p-4 rounded-lg flex items-center space-x-3 text-emerald-400 animate-fade-in">
                <FileCheck size={16} />
                <span className="poriadok-copy text-base">
                  {language === 'ru' 
                    ? 'Гайд "Культурный Код США 2026.pdf" успешно скачан!' 
                    : 'Guidebook "US Cultural Code 2026.pdf" downloaded successfully!'}
                </span>
              </div>
            )}
          </div>
 
          {/* Right Block: Elegant responsive enrollment form */}
          <GorillaGlass id="trial-form-container" className="lg:col-span-6 p-6 sm:p-10 relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold/[0.015] rounded-full blur-2xl pointer-events-none" />
            
            {!sent ? (
              <form id="trial-assessment-form" onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="space-y-1.5">
                  <h3 id="trial-form-title" className="poriadok-copy text-2xl text-white">
                    {t.trial.formTitle}
                  </h3>
                  <p className="poriadok-copy text-base text-[#D6B7A8]">
                     {language === 'ru' ? 'Заполните поля, и наш методист забронирует слот.' : 'Enter details to claim custom diagnostic evaluation slot.'}
                  </p>
                </div>
 
                <div className="space-y-4">
                  {/* Name field */}
                  <div className="space-y-1.5 flex flex-col">
                    <label className="poriadok-copy text-base text-[#D6B7A8]">{t.trial.nameLabel}</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Алекс"
                      className="w-full bg-[#0F0F0F]/60 backdrop-blur-sm border border-white/10 focus:border-gold rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                    />
                  </div>
 
                  {/* Phone field */}
                  <div className="space-y-1.5 flex flex-col">
                    <label className="poriadok-copy text-base text-[#D6B7A8]">{t.trial.phoneLabel}</label>
                    <input
                      type="text"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+7 / @telegram..."
                      className="w-full bg-[#0F0F0F]/60 backdrop-blur-sm border border-white/10 focus:border-gold rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                    />
                  </div>
 
                  {/* Goal field */}
                  <div className="space-y-1.5 flex flex-col">
                    <label className="poriadok-copy text-base text-[#D6B7A8]">{t.trial.targetLabel}</label>
                    <input
                      type="text"
                      value={target}
                      onChange={(e) => setTarget(e.target.value)}
                      placeholder={t.trial.targetPlaceholder}
                      className="w-full bg-[#0F0F0F]/60 backdrop-blur-sm border border-white/10 focus:border-gold rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Terms notification check */}
                <p className="poriadok-copy text-base text-[#A98C7F] leading-snug">
                  {language === 'ru' 
                    ? 'Нажимая на кнопку, вы соглашаетесь с обработкой персональных данных. Наш сервис абсолютно конфиденциален.' 
                    : 'We guarantee full privacy alignment in accordance with state laws. Relinquish fear of unauthorized exposure.'}
                </p>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-gold hover:bg-gold-light text-black py-4 rounded-xl font-sans text-xs uppercase tracking-widest font-bold transition-all active:scale-95 flex items-center justify-center space-x-2 cursor-pointer shadow-md"
                >
                  <Send size={13} />
                  <span>{t.trial.submitBtn}</span>
                </button>
              </form>
            ) : (
              <div id="trial-form-completed-msg" className="py-12 text-center space-y-6 relative z-10 animate-fade-in">
                <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-xl">
                  <UserCheck size={32} strokeWidth={2} />
                </div>

                <div className="space-y-2">
                  <h4 className="poriadok-copy text-2xl text-white">
                    {language === 'ru' ? 'Заявка принята!' : 'Assessment Slot Registered!'}
                  </h4>
                  <p className="font-sans text-sm text-[#A0A0A0] max-w-sm mx-auto leading-relaxed font-light">
                    {t.trial.successMsg}
                  </p>
                </div>

                <button
                  id="trial-success-back-btn"
                  onClick={() => {
                    setSent(false);
                    setName('');
                    setPhone('');
                    setTarget('');
                  }}
                  className="bg-white/[0.03] hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white font-mono text-[10px] uppercase tracking-widest px-6 py-2.5 rounded-xl transition-all cursor-pointer font-bold"
                >
                  {language === 'ru' ? 'Отправить другую форму' : 'Submit another inquiry'}
                </button>
              </div>
            )}
          </GorillaGlass>

        </div>
      </div>
    </section>
  );
}
