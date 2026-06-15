import { useState, FormEvent } from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { ShieldCheck, User, Video, GraduationCap, Play, Trophy, Sparkles, BookOpen, AlertCircle, FileText, Check, Star } from 'lucide-react';
import GorillaGlass from './GorillaGlass';
// @ts-ignore
import cabinetBgImage from '../assets/images/cabinet_nyc_evening_bg_1781436602583.jpg';

interface CabinetProps {
  language: Language;
}

export default function Cabinet({ language }: CabinetProps) {
  const t = translations[language];

  const [activeTab, setActiveTab] = useState<'overview' | 'simulator' | 'resume'>('overview');
  
  // User login states
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem('vip_student_logged_in') === 'true';
  });
  const [userName, setUserName] = useState<string>(() => {
    return localStorage.getItem('vip_student_name') || '';
  });
  const [userEmail, setUserEmail] = useState<string>(() => {
    return localStorage.getItem('vip_student_email') || '';
  });
  const [userPhone, setUserPhone] = useState<string>(() => {
    return localStorage.getItem('vip_student_phone') || '';
  });

  // Form input states
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputPhone, setInputPhone] = useState('');

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (inputName.trim() && inputEmail.trim() && inputPhone.trim()) {
      localStorage.setItem('vip_student_logged_in', 'true');
      localStorage.setItem('vip_student_name', inputName.trim());
      localStorage.setItem('vip_student_email', inputEmail.trim());
      localStorage.setItem('vip_student_phone', inputPhone.trim());
      setUserName(inputName.trim());
      setUserEmail(inputEmail.trim());
      setUserPhone(inputPhone.trim());
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('vip_student_logged_in');
    localStorage.removeItem('vip_student_name');
    localStorage.removeItem('vip_student_email');
    localStorage.removeItem('vip_student_phone');
    setIsLoggedIn(false);
    setUserName('');
    setUserEmail('');
    setUserPhone('');
    setInputName('');
    setInputEmail('');
    setInputPhone('');
  };
  
  // Progress tracker variables
  const [streakDays, setStreakDays] = useState<number>(14);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  
  // Visa simulator state
  const [currentSimQuestion, setCurrentSimQuestion] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, 'approved' | 'denied'>>({});
  const [simCompleted, setSimCompleted] = useState<boolean>(false);

  const mockLessons = [
    { id: 'v1', title: 'Как вести себя на интервью по визе O-1', duration: '14 мин', category: 'visa', teacher: 'John Henderson', locked: false },
    { id: 'v2', title: 'Договор аренды в США (Lease Agreement)', duration: '22 мин', category: 'culture', teacher: 'Ekaterina Vdovenko', locked: false },
    { id: 'v3', title: 'Как открыть счет в Chase без SSN', duration: '18 мин', category: 'culture', teacher: 'Ekaterina Vdovenko', locked: true },
    { id: 'v4', title: 'Small Talk каноны: от работы до хобби', duration: '25 мин', category: 'speech', teacher: 'Marcus Oliveira', locked: true },
  ];

  const simQuestions = [
    {
      question: 'Consular Officer: "Why do you want to travel to the United States?"',
      options: [
        {
          text: 'Choice A: "I got a visa petition. I want to search for a developer job there, move my family, and eventually buy a house in California."',
          outcome: 'denied',
          explanation: '❌ REJECTED. This answer directly flags permanent immigrant intent. Under non-immigrant categories (or before permanent residency triggers), saying you want to move permanently leads immediately to rejection under section 214(b) (presumption of immigrant intent).',
          explanationRu: '❌ НЕВЕРНО. Такой ответ прямо показывает намерение переехать на постоянной основе. Для неиммиграционных категорий это риск: фраза о работе, семье и покупке дома может привести к отказу по статье 214(b), потому что консул увидит иммиграционный мотив.'
        },
        {
          text: 'Choice B: "I am travelling to coordinate local operations and deliver expert leadership per my approved petition. My focus is strictly aligned with the key deliverables and system timelines outlined in my case file."',
          outcome: 'approved',
          explanation: '🏆 APPROVED! This formula matches the visa status bounds, links direct to the petition, is specific, professional, and avoids permanent residency landmines.',
          explanationRu: '🏆 ВЕРНО. Формулировка остаётся в рамках визового статуса, ссылается на одобренную петицию, звучит профессионально и не создаёт ощущения, что вы едете нарушать условия пребывания.'
        }
      ]
    },
    {
      question: 'Consular Officer: "What is your professional background, and why are you extraordinary?"',
      options: [
        {
          text: 'Choice A: "I have been designing websites for 10 years, I have won some design awards, and bloggers have written articles about my projects."',
          outcome: 'denied',
          explanation: '❌ REJECTED. Too vague and defensive. Consulates are not design judges; they look for official statutory alignment matching your specific petition evidence.',
          explanationRu: '❌ НЕВЕРНО. Ответ слишком общий и звучит как попытка убедить без опоры на доказательства. Консулу нужны не эмоции и не общие достижения, а чёткая связь с критериями вашей петиции.'
        },
        {
          text: 'Choice B: "I am a leading software architect with critical evidence approved in my petition, showing significant public media coverage, high-remuneration contracts, and lead development roles at major technology products."',
          outcome: 'approved',
          explanation: '🏆 APPROVED! Focuses precisely on approved statutory petition criteria, matches legal standards, and exhibits high institutional confidence.',
          explanationRu: '🏆 ВЕРНО. Ответ точно опирается на подтверждённые критерии петиции: публичное признание, высокий уровень оплаты и ключевые роли в значимых проектах. Это звучит уверенно и юридически аккуратно.'
        }
      ]
    }
  ];

  const handleLessonToggle = (id: string) => {
    if (completedLessons.includes(id)) {
      setCompletedLessons(completedLessons.filter((item) => item !== id));
    } else {
      setCompletedLessons([...completedLessons, id]);
    }
  };

  const calculateVisaApprovalChance = () => {
    const answeredCount = Object.keys(selectedAnswers).length;
    if (answeredCount === 0) return 30; // base score
    
    let approvedCount = 0;
    Object.values(selectedAnswers).forEach((status) => {
      if (status === 'approved') approvedCount++;
    });

    if (answeredCount === 1) {
      return approvedCount === 1 ? 65 : 15;
    }
    // and for 2 questions
    return approvedCount === 2 ? 98 : approvedCount === 1 ? 55 : 10;
  };

  const handleSelectSimAnswer = (outcome: 'approved' | 'denied') => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentSimQuestion]: outcome,
    });
  };

  const handleNextSimQuestion = () => {
    if (currentSimQuestion < simQuestions.length - 1) {
      setCurrentSimQuestion(currentSimQuestion + 1);
    } else {
      setSimCompleted(true);
    }
  };

  const handleRestartSim = () => {
    setCurrentSimQuestion(0);
    setSelectedAnswers({});
    setSimCompleted(false);
  };

  return (
    <section id="cabinet-section" className="relative py-24 sm:py-32 bg-deep-bg border-t border-b border-border-dark scroll-mt-20 min-h-screen flex flex-col justify-center overflow-hidden">
      
      {/* Background NYC Panorama Image with overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={cabinetBgImage}
          alt="Cabinet NY Skyline"
          className="w-full h-full object-cover object-center filter brightness-[0.45] scale-102"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#210e07]/65 via-transparent to-[#08070a]/95" />
      </div>

      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gold/[0.015] rounded-full blur-[150px] pointer-events-none" />
 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left w-full">
        
        {/* Section Header */}
        <div id="cabinet-header" className="max-w-3xl mb-12 space-y-4">
          <h2 id="cabinet-title" className="premium-section-title text-2xl sm:text-3xl text-white leading-tight">
            {t.cabinet.title}
          </h2>
          <p id="cabinet-subtitle" className="poriadok-copy text-xl sm:text-2xl text-[#F5DED0] leading-relaxed">
             {t.cabinet.subtitle}
          </p>
        </div>
 
        {/* Dashboard Frame Container with Tab switchers */}
        <div id="cabinet-dashboard-card" className="bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.15)] min-h-[600px] flex flex-col relative">
          
          {isLoggedIn ? (
            <>
              {/* Top Tabs Bar Selector */}
              <div id="cabinet-tabs" className="bg-white/[0.01] border-b border-white/10 p-4 flex flex-wrap gap-2 justify-start sm:justify-start items-center backdrop-blur-md">
                
                {/* Tab 1 */}
                <button
                  id="tab-btn-overview"
                  onClick={() => setActiveTab('overview')}
                  className={`px-5 py-2.5 rounded-xl font-sans text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center space-x-2 border ${
                    activeTab === 'overview'
                      ? 'bg-gold/15 text-gold border-gold/40 shadow-inner'
                      : 'text-gray-400 border-transparent hover:text-white hover:bg-white/5'
                  }`}
                >
                  <User size={14} />
                  <span>{t.cabinet.tabOverview}</span>
                </button>
     
                {/* Tab 2 */}
                <button
                  id="tab-btn-simulator"
                  onClick={() => setActiveTab('simulator')}
                  className={`px-5 py-2.5 rounded-xl font-sans text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center space-x-2 border ${
                    activeTab === 'simulator'
                      ? 'bg-gold/15 text-gold border-gold/40 shadow-inner'
                      : 'text-gray-400 border-transparent hover:text-white hover:bg-white/5'
                  }`}
                >
                  <GraduationCap size={14} />
                  <span>{t.cabinet.tabSimulator}</span>
                </button>

                {/* Tab 3 */}
                <button
                  id="tab-btn-resume"
                  onClick={() => setActiveTab('resume')}
                  className={`px-5 py-2.5 rounded-xl font-sans text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center space-x-2 border ${
                    activeTab === 'resume'
                      ? 'bg-gold/15 text-gold border-gold/40 shadow-inner'
                      : 'text-gray-400 border-transparent hover:text-white hover:bg-white/5'
                  }`}
                >
                  <FileText size={14} />
                  <span>{language === 'ru' ? 'Резюме для США (Standards)' : 'US CV Standards'}</span>
                </button>

                {/* Dynamic Login and Logout controller block */}
                <div className="ml-auto flex items-center space-x-3.5">
                  <div className="hidden xl:flex items-center space-x-2 bg-gold/5 px-3 py-1.5 rounded-lg border border-gold/10">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="poriadok-copy text-sm text-gold-light">
                      {language === 'ru' ? `Профиль: ${userName}` : `Profile: ${userName}`} (VIP)
                    </span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="text-[10px] font-mono uppercase tracking-widest text-gray-400 hover:text-rose-400 transition-colors cursor-pointer px-3 py-1.5 rounded-lg border border-white/5 bg-white/5 hover:bg-rose-500/10 hover:border-rose-500/20 font-bold"
                  >
                    {language === 'ru' ? 'Выйти' : 'Log Out'}
                  </button>
                </div>
              </div>

              {/* Tab Contents Frame */}
              <div id="cabinet-tab-viewport" className="p-6 sm:p-8 flex-1">
            
            {/* OVERVIEW MODULE */}
            {activeTab === 'overview' && (
              <div id="overview-module" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fade-in text-left">
                
                {/* Left Mini Column: User details, streaks */}
                <div className="lg:col-span-4 space-y-6">
                  {/* Student Welcome profile card */}
                  <GorillaGlass className="p-5 rounded-2xl space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-full bg-gold/5 border border-gold/20 flex items-center justify-center text-gold text-sm font-bold font-mono">
                        {userName ? userName.trim().split(' ').map(n => n[0]).filter(Boolean).join('').slice(0, 2).toUpperCase() : 'AL'}
                      </div>
                      <div>
                        <h4 className="poriadok-copy text-lg text-white">
                          {language === 'ru' ? `Добро пожаловать, ${userName || 'Алекс'}!` : `Welcome back, ${userName || 'Alex'}!`}
                        </h4>
                        <p className="poriadok-copy text-base text-gold-light">
                          {language === 'ru' ? 'Премиум подписка' : 'Premium Student'}
                        </p>
                      </div>
                    </div>

                    <p className="poriadok-copy text-base text-[#D6B7A8]">
                      {t.cabinet.userTarget}
                    </p>

                    {/* Streak Ticker */}
                    <div className="bg-white/[0.01] p-3 rounded-lg border border-white/5 flex items-center space-x-2">
                      <Trophy size={14} className="text-gold" />
                      <span className="font-sans text-xs text-gray-300 font-light">
                        {t.cabinet.streak.replace('{{days}}', String(streakDays))}
                      </span>
                    </div>
                  </GorillaGlass>

                  {/* Level adaptation bar meter */}
                  <GorillaGlass className="p-5 rounded-2xl space-y-4 text-left">
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                        {t.cabinet.progress}
                      </span>
                      <span className="font-mono text-sm text-gold font-bold">45%</span>
                    </div>

                    <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                      <div className="bg-gold h-full" style={{ width: '45%' }} />
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="bg-white/[0.01] p-2.5 rounded-lg border border-white/5 text-center">
                        <span className="font-mono text-xs font-bold text-gold block">4 / 12</span>
                        <span className="font-sans text-[10px] text-gray-500 font-light">{language === 'ru' ? 'Диалогов изучено' : 'Mockups Done'}</span>
                      </div>
                      <div className="bg-white/[0.01] p-2.5 rounded-lg border border-white/5 text-center">
                        <span className="font-mono text-xs font-bold text-gold block">180+</span>
                        <span className="font-sans text-[10px] text-gray-500 font-light">{language === 'ru' ? 'Слов выучено' : 'USA Slang Keys'}</span>
                      </div>
                    </div>
                  </GorillaGlass>
                </div>

                {/* Right Column: Recommended Syllabus Video Lesson checkouts */}
                <div className="lg:col-span-8 space-y-4">
                  <h4 className="poriadok-copy text-xl text-white flex items-center space-x-2">
                    <Video size={17} className="text-gold" />
                    <span>{t.cabinet.mockLessonsHeader}</span>
                  </h4>

                  <div className="grid grid-cols-1 gap-3">
                    {mockLessons.map((lesson) => {
                      const isComplete = completedLessons.includes(lesson.id);
                      return (
                        <GorillaGlass
                          id={`mock-lesson-${lesson.id}`}
                          key={lesson.id}
                          isInteractive={!lesson.locked}
                          className={`p-4 rounded-xl flex items-center justify-between gap-4 ${
                            lesson.locked 
                              ? 'opacity-40' 
                              : isComplete 
                                ? 'bg-emerald-500/[0.04] border-emerald-500/20' 
                                : ''
                          }`}
                        >
                          <div className="flex items-center space-x-3 text-left">
                            <button
                              disabled={lesson.locked}
                              className={`w-9 h-9 rounded-lg flex items-center justify-center cursor-pointer ${
                                lesson.locked 
                                  ? 'bg-gray-800 text-gray-600' 
                                  : isComplete 
                                    ? 'bg-emerald-500/10 text-emerald-400' 
                                    : 'bg-gold/10 text-gold hover:bg-gold hover:text-black transition-colors'
                              }`}
                            >
                              <Play size={11} fill={lesson.locked ? "none" : isComplete ? "none" : "currentColor"} />
                            </button>
                            <div>
                              <p className="font-sans text-xs sm:text-sm font-semibold text-white">{lesson.title}</p>
                              <div className="flex items-center space-x-2 text-[10px] text-gray-500 mt-1 font-mono uppercase tracking-wider">
                                <span>{lesson.duration}</span>
                                <span>•</span>
                                <span className="text-gold/80">{lesson.teacher}</span>
                              </div>
                            </div>
                          </div>

                          {/* Action toggle checkbox */}
                          {!lesson.locked ? (
                            <button
                              id={`lesson-check-${lesson.id}`}
                              onClick={() => handleLessonToggle(lesson.id)}
                              className={`px-3 py-1.5 rounded-lg text-[9px] font-mono tracking-widest uppercase font-bold transition-all cursor-pointer ${
                                isComplete
                                  ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20'
                                  : 'bg-white/[0.02] text-gray-400 border border-white/5 hover:bg-white/5 hover:text-white'
                              }`}
                            >
                              {isComplete ? (language === 'ru' ? 'Готово' : 'Complete') : (language === 'ru' ? 'Отметить' : 'Mark Done')}
                            </button>
                          ) : (
                            <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-gold/80">
                              {language === 'ru' ? 'VIP доступ' : 'VIP LOCK'}
                            </span>
                          )}

                        </GorillaGlass>
                      );
                    })}
                  </div>
                </div>

              </div>
            )}

            {/* VISA INTERVIEW SIMULATOR MODULE */}
            {activeTab === 'simulator' && (
              <div id="simulator-module" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fade-in text-left">
                
                {/* Simulator main controller column */}
                <div className="lg:col-span-8 space-y-6">
                  <div className="space-y-1.5">
                    <h4 className="poriadok-copy text-xl text-white flex items-center space-x-2">
                      <GraduationCap size={18} className="text-gold" />
                      <span>{t.cabinet.visaHeading}</span>
                    </h4>
                    <p className="font-sans text-xs text-[#A0A0A0] font-light leading-relaxed">
                      {t.cabinet.visaIntro}
                    </p>
                  </div>

                  {!simCompleted ? (
                    <GorillaGlass className="p-5 sm:p-6 rounded-2xl space-y-6">
                      
                      {/* Interactive question dialogue frame */}
                      <GorillaGlass className="p-5 rounded-xl space-y-3 relative overflow-hidden !bg-white/[0.02]">
                        <div className="absolute top-0 left-0 w-0.5 h-full bg-gold animate-pulse" />
                        <span className="font-mono text-[9px] uppercase tracking-widest text-[#9D9DA5] font-bold">
                          {language === 'ru' ? 'Окно консульского интервью' : 'Consulate Interrogation Window'}
                        </span>
                        <p id="sim-question-text" className="font-sans text-sm sm:text-base text-white font-semibold leading-normal">
                          {simQuestions[currentSimQuestion].question}
                        </p>
                      </GorillaGlass>

                      {/* Response choices radio slots */}
                      <div className="space-y-3">
                        <span className="font-mono text-[10px] uppercase text-gray-400 font-bold block tracking-wider">
                          {language === 'ru' ? 'Выберите стратегию ответа:' : 'Select your response strategy:'}
                        </span>
                        
                        {simQuestions[currentSimQuestion].options.map((option, idx) => {
                          const isChosen = selectedAnswers[currentSimQuestion] === option.outcome;
                          return (
                            <GorillaGlass
                              id={`sim-option-${currentSimQuestion}-${idx}`}
                              key={idx}
                              onClick={() => handleSelectSimAnswer(option.outcome as 'approved' | 'denied')}
                              isInteractive
                              isSelected={isChosen}
                              className="p-4 rounded-xl text-left"
                            >
                              <div className="flex items-start space-x-3">
                                <div className={`w-3.5 h-3.5 rounded-full border mt-0.5 flex items-center justify-center ${
                                  isChosen ? 'border-gold bg-gold' : 'border-gray-600'
                                }`}>
                                  {isChosen && <div className="w-1 h-1 bg-black rounded-full" />}
                                </div>
                                <p className="font-sans text-xs sm:text-sm font-light leading-relaxed">{option.text}</p>
                              </div>
                            </GorillaGlass>
                          );
                        })}
                      </div>

                      {/* Outcome Explanation view block if key is chosen */}
                      {selectedAnswers[currentSimQuestion] !== undefined && (
                        <div id="sim-explanation-box" className={`p-4 rounded-xl border backdrop-blur-md text-xs sm:text-sm leading-relaxed ${
                          selectedAnswers[currentSimQuestion] === 'approved' 
                            ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300 shadow-[0_10px_30px_rgba(16,185,129,0.05)]'
                            : 'bg-rose-500/10 border-rose-500/20 text-rose-300 shadow-[0_10px_30px_rgba(244,63,94,0.05)]'
                        }`}>
                          <div className="flex items-center space-x-1.5 mb-1.5">
                            <AlertCircle size={14} className="flex-shrink-0" />
                            <span className="font-mono text-[9px] uppercase font-black tracking-widest leading-none">
                              {language === 'ru' ? 'Разбор ответа' : 'Diagnostic Explanation'}
                            </span>
                          </div>
                          <p className="font-sans font-light">
                            {(() => {
                              const selectedOption = simQuestions[currentSimQuestion].options.find(
                                (opt) => opt.outcome === selectedAnswers[currentSimQuestion]
                              );
                              return language === 'ru'
                                ? selectedOption?.explanationRu
                                : selectedOption?.explanation;
                            })()}
                          </p>
                        </div>
                      )}

                      {/* Direction Stepper Button */}
                      <div className="flex justify-end pt-4 border-t border-border-dark">
                        <button
                          id="sim-next-btn"
                          disabled={selectedAnswers[currentSimQuestion] === undefined}
                          onClick={handleNextSimQuestion}
                          className={`bg-[#0F0F0F] border border-border-dark hover:border-gold hover:bg-gold hover:text-black text-gold font-mono text-[10px] uppercase tracking-widest font-bold px-6 py-2.5 rounded-lg transition-all ${
                            selectedAnswers[currentSimQuestion] === undefined ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                          }`}
                        >
                          {currentSimQuestion === simQuestions.length - 1 ? (language === 'ru' ? 'Показать итоговый отчёт' : 'Show Final report') : t.cabinet.nextSimQuestion}
                        </button>
                      </div>

                    </GorillaGlass>
                  ) : (
                    <GorillaGlass id="sim-completed-report" className="p-6 rounded-2xl text-center space-y-6 animate-fade-in">
                      <div className="w-16 h-16 rounded-full bg-gold/5 border border-gold/20 flex items-center justify-center text-gold mx-auto font-mono text-xl font-bold">
                        {calculateVisaApprovalChance()}%
                      </div>

                      <div className="space-y-2">
                        <h5 className="poriadok-copy text-xl text-white">
                          {calculateVisaApprovalChance() >= 90 ? t.cabinet.visaApproved : 'Требуется доработка формулировок'}
                        </h5>
                        <p className="font-sans text-xs text-[#A0A0A0] max-w-sm mx-auto leading-relaxed font-light">
                          {calculateVisaApprovalChance() >= 90
                            ? 'Вы отлично понимаете правила визовой логики на английском языке. С такими ответами у вас максимальные шансы на O-1/EB-1/L-1.'
                            : 'Вы допустили ошибки, которые вызовут подозрение в иммиграционных интересах или нерегулируемом трудоустройстве. Наш курс исправит формулировки.'}
                        </p>
                      </div>

                      <button
                        id="sim-restart-btn"
                        onClick={handleRestartSim}
                        className="bg-white/[0.02] hover:bg-white/10 border border-white/10 text-gray-300 font-mono text-[9px] uppercase tracking-widest font-bold px-6 py-2.5 rounded-lg transition-all cursor-pointer"
                      >
                        Запустить симулятор заново
                      </button>
                    </GorillaGlass>
                  )}

                </div>

                {/* Right Side Info Stats meters gauge */}
                <GorillaGlass className="lg:col-span-4 p-5 rounded-2xl space-y-6">
                  <h4 className="font-mono text-[10px] uppercase text-[#9D9DA5] font-bold tracking-widest pb-3 border-b border-white/5 block">
                    {language === 'ru' ? 'Панель шансов на одобрение визы' : 'Visa Approval Dashboard'}
                  </h4>
                  
                  {/* Score Indicator */}
                  <div className="space-y-1 text-center py-4 bg-white/[0.01] rounded-lg border border-white/5">
                    <span className="text-[9px] font-mono text-gray-500 block uppercase font-bold tracking-widest">
                      {language === 'ru' ? 'Индекс визового успеха' : 'Visa Success Index'}
                    </span>
                    <span id="calculated-visa-index" className="font-serif text-3xl text-gold font-normal">{calculateVisaApprovalChance()}%</span>
                  </div>

                  <div className="space-y-4">
                    <div id="sim-bullet-1" className="flex items-start space-x-2.5">
                      <div className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold text-xs font-mono">1</div>
                      <p className="poriadok-copy text-base text-[#D6B7A8] leading-snug">Имитируйте допросы по категории F-1, O-1, L-1, EB-1, H-1B</p>
                    </div>

                    <div id="sim-bullet-2" className="flex items-start space-x-2.5">
                      <div className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold text-xs font-mono">2</div>
                      <p className="poriadok-copy text-base text-[#D6B7A8] leading-snug">Проговаривайте фразы голосом по шаблону</p>
                    </div>

                    <div id="sim-bullet-3" className="flex items-start space-x-2.5">
                      <div className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold text-xs font-mono">3</div>
                      <p className="poriadok-copy text-base text-[#D6B7A8] leading-snug">Получайте рецензию от бывших консульских работников США</p>
                    </div>
                  </div>
                </GorillaGlass>

              </div>
            )}

            {/* US CV & RESUME STANDARDS MODULE */}
            {activeTab === 'resume' && (
              <div id="resume-module" className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start animate-fade-in text-left">
                
                {/* CV Standards block 1: Ru/Eu - BAD format */}
                <div className="bg-rose-500/[0.01] backdrop-blur-xl border border-rose-500/20 p-5 sm:p-6 rounded-2xl space-y-4 shadow-[0_20px_40px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.05)]">
                  <div className="flex items-center space-x-2 pb-3 border-b border-rose-500/10">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                    <span className="font-mono text-[9px] uppercase text-rose-400 font-bold tracking-widest">
                      Типичный СНГ-Формат (Ошибки при отправке в США)
                    </span>
                  </div>

                  <ul className="space-y-3 font-sans text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                    <li className="flex items-start space-x-2">
                      <span className="text-rose-500 font-extrabold pr-1">✖</span>
                      <span><strong>Фотография на резюме:</strong> В США это категорически запрещено из-за законов против дискриминации (anti-discrimination laws). Американские рекрутеры сразу удаляют резюме с фото.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-rose-500 font-extrabold pr-1">✖</span>
                      <span><strong>Семейное положение, возраст, пол:</strong> Указание личных данных (женат/замужем, 32 года) — грубейшая ошибка, подставляющая компанию под юридические риски.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-rose-500 font-extrabold pr-1">✖</span>
                      <span><strong>Простые обязанности вместо результатов:</strong> Фразы типа "Разрабатывал веб-сервисы, писал код" не котируются. Американцев интересуют метрики и коммерческая прибыль.</span>
                    </li>
                  </ul>
                </div>

                {/* CV Standards block 2: US Standard - APPROVED format */}
                <div className="bg-emerald-500/[0.01] backdrop-blur-xl border border-emerald-500/25 p-5 sm:p-6 rounded-2xl space-y-4 shadow-[0_20px_40px_rgba(197,160,89,0.05),inset_0_1px_1px_rgba(255,255,255,0.05)]">
                  <div className="flex items-center space-x-2 pb-3 border-b border-emerald-500/10">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="font-mono text-[9px] uppercase text-emerald-400 font-bold tracking-widest">
                      Американский Стандарт (ATS-Compliant)
                    </span>
                  </div>

                  <ul className="space-y-3 font-sans text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                    <li className="flex items-start space-x-2">
                      <span className="text-gold font-black pr-1">✔</span>
                      <span><strong>Полная анонимность личных данных:</strong> Никаких фотографий, даты рождения, семейного положения. Только Name, Location, Email, LinkedIn и Phone.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-gold font-black pr-1">✔</span>
                      <span><strong>Фокус на достижениях (Action+Result):</strong> Пишите по формуле Google XYZ: "Increased query speed by 35% through optimizing PostgreSQL queries, resulting in $120k server costs decrease annually."</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-gold font-black pr-1">✔</span>
                      <span><strong>Совместимость с ATS-трекерами:</strong> Простой одноколоночный формат на чистом белом фоне без цветных кружков интерфейса и графических шкал навыков в процентах.</span>
                    </li>
                  </ul>
                </div>

              </div>
            )}

          </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center p-6 sm:p-12 max-w-md mx-auto w-full space-y-6 animate-fade-in text-center my-8 relative z-10">
            {/* Custom stylized non-password VIP gate */}
            <div className="space-y-3">
              <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold mx-auto shadow-[0_0_20px_rgba(204,167,110,0.15)]">
                <ShieldCheck size={26} />
              </div>
              <h3 className="premium-section-title text-2xl sm:text-3xl text-white leading-tight">
                {language === 'ru' ? 'Вход в VIP Кабинет' : 'VIP Cabin Entry'}
              </h3>
              <p className="poriadok-copy text-lg text-[#F5DED0] max-w-sm leading-relaxed">
                {language === 'ru' 
                  ? 'Введите свои данные для тестирования и моментального получения гостевого доступа к платформе.' 
                  : 'Enter your credentials to test the interactive learning workspace as our exclusive guest.'}
              </p>
            </div>

            <form onSubmit={handleLogin} className="w-full space-y-4 text-left">
              <div className="space-y-1.5">
                <label className="poriadok-copy text-base text-[#F9EEDD] block opacity-90">
                  {language === 'ru' ? 'Ваше имя' : 'Your Name'}
                </label>
                <input
                  type="text"
                  required
                  value={inputName}
                  onChange={(e) => setInputName(e.target.value)}
                  placeholder={language === 'ru' ? 'Александр' : 'Alexander'}
                  className="w-full bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-gold/50 focus:bg-white/[0.06] outline-none transition-all font-sans"
                />
              </div>

              <div className="space-y-1.5">
                <label className="poriadok-copy text-base text-[#F9EEDD] block opacity-90">
                  {language === 'ru' ? 'Электронная почта' : 'Email address'}
                </label>
                <input
                  type="email"
                  required
                  value={inputEmail}
                  onChange={(e) => setInputEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-gold/50 focus:bg-white/[0.06] outline-none transition-all font-sans"
                />
              </div>

              <div className="space-y-1.5">
                <label className="poriadok-copy text-base text-[#F9EEDD] block opacity-90">
                  {language === 'ru' ? 'Номер телефона' : 'Phone number'}
                </label>
                <input
                  type="tel"
                  required
                  value={inputPhone}
                  onChange={(e) => setInputPhone(e.target.value)}
                  placeholder="+7 (999) 000-00-00"
                  className="w-full bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-gold/50 focus:bg-white/[0.06] outline-none transition-all font-sans"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gold hover:bg-gold-light text-black font-semibold rounded-xl py-3.5 text-xs uppercase tracking-widest transition-all cursor-pointer shadow-[0_5px_15px_rgba(229,195,142,0.15)] hover:shadow-[0_8px_25px_rgba(249,238,221,0.3)] text-center"
              >
                {language === 'ru' ? 'Продолжить' : 'Log In & Open Platform'}
              </button>
            </form>
          </div>
        )}

      </div>

    </div>
  </section>
  );
}
