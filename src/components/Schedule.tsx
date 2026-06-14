import { useState, useEffect } from 'react';
import { Language } from '../types';
import { translations, scheduleClasses } from '../translations';
import { Calendar, Clock, Filter, Check, ShieldAlert, Sparkles } from 'lucide-react';
import GorillaGlass from './GorillaGlass';

interface ScheduleProps {
  language: Language;
}

export default function Schedule({ language }: ScheduleProps) {
  const t = translations[language];
  const list = scheduleClasses[language];

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [reservedIds, setReservedIds] = useState<string[]>([]);
  
  // Real-time US Clocks State
  const [usClocks, setUsClocks] = useState({
    est: '',
    pst: '',
    local: ''
  });

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();

      // Format options for US timezones
      const estFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/New_York',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });

      const pstFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Los_Angeles',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });

      const localFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Europe/Moscow',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });

      setUsClocks({
        est: estFormatter.format(now),
        pst: pstFormatter.format(now),
        local: localFormatter.format(now)
      });
    };

    updateTimes();
    const timer = setInterval(updateTimes, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleBook = (id: string) => {
    if (!reservedIds.includes(id)) {
      setReservedIds([...reservedIds, id]);
    }
  };

  const categories = [
    { key: 'all', ru: 'Все', en: 'All' },
    { key: 'visa', ru: 'Визы', en: 'Visa' },
    { key: 'speech', ru: 'Разговорный', en: 'Speaking' },
    { key: 'slang', ru: 'Сленг', en: 'Slang & Idioms' },
    { key: 'culture', ru: 'Культура/Быт', en: 'US Adaptation' }
  ];

  const filteredClasses = activeCategory === 'all'
    ? list
    : list.filter((item) => item.category === activeCategory);

  return (
    <section id="schedule-section" className="relative py-24 sm:py-32 xl:py-44 bg-luxury-diamonds border-b border-border-dark min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Luxury background decorations */}
      <div className="luxury-curves" />
      <div className="luxury-overlay-waves" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/[0.01] rounded-full blur-[100px] pointer-events-none" />
 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left w-full">
        
        {/* Header Title */}
        <div id="schedule-header" className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-gold/5 border border-gold/20 px-3 py-1.5 rounded-full">
              <Calendar size={13} className="text-gold" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-gold font-bold">Relocation Sessions</span>
            </div>
            <h2 id="schedule-title" className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight">
              {t.schedule.title}
            </h2>
            <p id="schedule-subtitle" className="font-serif text-xl sm:text-2xl lg:text-3xl text-gray-300 italic font-light">
              {t.schedule.subtitle}
            </p>
          </div>
 
          {/* Real-time US Clocks */}
          <div id="schedule-world-clocks" className="shadow-xl">
            <GorillaGlass className="p-6 flex flex-wrap gap-6 items-center rounded-[1.25rem]">
              <div className="flex items-center space-x-2">
                <Clock size={16} className="text-gold animate-pulse" />
                <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                  {t.schedule.liveTime}:
                </span>
              </div>
              
              <div className="flex gap-5">
                <div id="clock-est">
                  <span className="font-mono text-[9px] text-gray-500 block uppercase font-bold tracking-widest">EST (New York)</span>
                  <span className="font-mono text-xs sm:text-sm text-white font-bold">{usClocks.est || '11:00:00 AM'}</span>
                </div>
                <div id="clock-pst" className="border-l border-border-dark pl-5 font-light">
                  <span className="font-mono text-[9px] text-gray-500 block uppercase font-bold tracking-widest">PST (Los Angeles)</span>
                  <span className="font-mono text-xs sm:text-sm text-white font-bold">{usClocks.pst || '08:00:00 AM'}</span>
                </div>
                <div id="clock-msc" className="border-l border-border-dark pl-5">
                  <span className="font-mono text-[9px] text-gold-light block uppercase font-bold tracking-widest">Moscow / Warsaw</span>
                  <span className="font-mono text-xs sm:text-sm text-gold font-bold">{usClocks.local || '06:00:00 PM'}</span>
                </div>
              </div>
            </GorillaGlass>
          </div>
        </div>
 
        {/* Filters Panel */}
        <div id="schedule-category-filters" className="flex flex-wrap gap-2.5 mb-10">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.key;
            return (
              <button
                id={`filter-btn-${cat.key}`}
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-6 py-2.5 rounded-full font-serif text-sm tracking-wide font-semibold transition-all border cursor-pointer ${
                  isSelected
                    ? 'bg-gold text-black border-transparent shadow-[0_4px_15px_rgba(197,160,89,0.15)]'
                    : 'bg-white/[0.02] text-gray-400 border-white/10 hover:border-gold/30 hover:text-white'
                }`}
              >
                {language === 'ru' ? cat.ru : cat.en}
              </button>
            );
          })}
        </div>
 
        {/* Classes Table */}
        <div id="schedule-table-wrapper" className="shadow-2xl">
          <GorillaGlass className="rounded-[1.5rem]">
            <div className="divide-y divide-border-dark font-light">
            {filteredClasses.length > 0 ? (
              filteredClasses.map((item) => {
                const isBooked = reservedIds.includes(item.id);
                const limitSpots = isBooked ? item.spotsLeft - 1 : item.spotsLeft;
 
                return (
                  <div
                    id={`schedule-row-${item.id}`}
                    key={item.id}
                    className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-gold/[0.015] transition-colors"
                  >
                    {/* Time & Badge */}
                    <div className="flex items-start space-x-4 md:w-1/4">
                      <div className="bg-gold/10 border border-gold/20 p-2.5 rounded-xl text-gold">
                        <Clock size={16} />
                      </div>
                      <div>
                        <p className="font-mono text-sm sm:text-base text-white font-bold leading-none">
                          {item.time}
                        </p>
                        <span className="inline-block mt-2 px-2.5 py-1 bg-white/5 rounded text-[9px] font-mono text-gray-400 uppercase font-bold tracking-widest">
                          Level {item.level}
                        </span>
                      </div>
                    </div>
 
                    {/* Class Details */}
                    <div className="space-y-1.5 md:w-2/5 text-left">
                      <h4 className="font-serif italic text-lg sm:text-xl lg:text-2xl text-white font-normal">
                        {item.title}
                      </h4>
                      <p className="font-serif text-sm sm:text-base text-gray-400 font-light">
                        {language === 'ru' ? `Преподаватель: ${item.teacher}` : `Lead Educator: ${item.teacher}`}
                      </p>
                    </div>
 
                    {/* Spots Limit Label */}
                    <div className="flex items-center space-x-2 md:w-1/6">
                      <div className={`w-1.5 h-1.5 rounded-full ${limitSpots <= 1 ? 'bg-rose-500 animate-pulse' : 'bg-gold'}`} />
                      <span className="font-serif text-sm sm:text-base text-gray-400">
                        {t.schedule.spotsLeft.replace('{{spots}}', String(limitSpots))}
                      </span>
                    </div>
 
                    {/* Booking Action */}
                    <div className="text-right md:w-1/6">
                      <button
                        id={`schedule-book-btn-${item.id}`}
                        onClick={() => handleBook(item.id)}
                        disabled={isBooked}
                        className={`w-full py-3 sm:py-3.5 rounded-xl font-serif text-xs uppercase tracking-widest font-bold transition-all cursor-pointer ${
                          isBooked
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            : 'bg-white/[0.03] hover:bg-gold hover:text-black border border-white/10 text-gold hover:border-transparent active:scale-95'
                        }`}
                      >
                        {isBooked ? (
                          <span className="flex items-center justify-center space-x-1 uppercase tracking-widest text-[10px]">
                            <Check size={11} />
                            <span>{t.schedule.spotSelected}</span>
                          </span>
                        ) : (
                          t.schedule.bookSpot
                        )}
                      </button>
                    </div>
 
                  </div>
                );
              })
            ) : (
              <div className="p-8 text-center text-gray-500 text-sm">
                {language === 'ru' ? 'В этой категории сегодня сессий не запланировано' : 'No schedules available for this category today'}
              </div>
            )}
          </div>
          </GorillaGlass>
        </div>

      </div>
    </section>
  );
}
