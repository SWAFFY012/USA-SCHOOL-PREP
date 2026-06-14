import { Language } from '../types';
import { translations, teachersData } from '../translations';
import { Mic, MapPin } from 'lucide-react';
import GorillaGlass from './GorillaGlass';

interface TeachersProps {
  language: Language;
}

export default function Teachers({ language }: TeachersProps) {
  const t = translations[language];
  const list = teachersData[language];

  return (
    <section id="teachers-section" className="relative py-24 sm:py-32 xl:py-44 bg-luxury-grid border-t border-b border-border-dark min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Luxury background decorations */}
      <div className="luxury-curves" />
      <div className="luxury-overlay-waves" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-gold/[0.02] rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left w-full">
        {/* Header Block */}
        <div id="teachers-header" className="max-w-3xl mb-20 space-y-5">
          <div className="inline-flex items-center space-x-2 bg-gold/5 border border-gold/20 px-3 py-1.5 rounded-full">
            <Mic size={13} className="text-gold" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-gold font-bold">Expert Faculty</span>
          </div>
          <h2 id="teachers-title" className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight">
            {t.teachers.title}
          </h2>
          <p id="teachers-subtitle" className="font-serif text-xl sm:text-2xl lg:text-3xl text-gray-300 italic font-light max-w-3xl">
            {t.teachers.subtitle}
          </p>
        </div>
 
        {/* Teachers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {list.map((teacher) => {
            return (
              <GorillaGlass
                id={`teacher-card-${teacher.id}`}
                key={teacher.id}
                isInteractive
                className="hover:shadow-[0_10px_35px_rgba(197,160,89,0.1)] flex flex-col group relative rounded-[1.5rem]"
              >
                {/* Photo frame */}
                <div className="relative aspect-square overflow-hidden bg-gray-900 rounded-t-3xl">
                  <img
                    id={`teacher-img-${teacher.id}`}
                    src={teacher.avatar}
                    alt={teacher.name}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card-bg via-transparent to-transparent opacity-70" />
                  
                  {/* Floating location label */}
                  <div id={`teacher-loc-${teacher.id}`} className="absolute top-4 left-4 bg-black/85 backdrop-blur-md border border-border-dark px-3 py-1.5 rounded-full flex items-center space-x-1.5">
                    <MapPin size={11} className="text-gold" />
                    <span className="font-mono text-[9px] uppercase font-bold text-gray-200 tracking-wider">
                      {teacher.location}
                    </span>
                  </div>
                </div>

                {/* Info Text */}
                <div className="p-8 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-serif italic text-2xl text-white pr-2 font-medium">
                        {teacher.name}
                      </h3>
                      <p className="font-serif text-xs text-gold uppercase tracking-wider font-semibold mt-1">
                        {teacher.role}
                      </p>
                    </div>

                    <p className="font-serif text-base lg:text-lg text-gray-300 leading-relaxed font-light italic">
                      {teacher.bio}
                    </p>
                  </div>

                  {/* Specialty Widgets */}
                  <div className="space-y-4 pt-5 border-t border-border-dark">
                    <div>
                      <span className="font-mono text-[9px] uppercase text-gray-500 font-bold tracking-widest block mb-2">
                        {t.teachers.specialtyLabel}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {teacher.specialty.map((spec, i) => (
                          <span
                             id={`teacher-spec-${teacher.id}-${i}`}
                             key={i}
                             className="text-xs font-serif bg-white/5 hover:bg-white/10 text-gray-200 font-medium px-3.5 py-1.5 rounded-full border border-border-dark transition-colors"
                          >
                             {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="w-full">
                      <GorillaGlass className="p-4 rounded-[0.75rem]" style={{ border: '1px solid rgba(197, 160, 89, 0.15)' }}>
                        <div className="flex items-start space-x-2.5">
                          <Mic size={15} className="text-gold mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-mono text-[9px] uppercase text-gray-400 font-bold tracking-widest">Vocal Accent</p>
                            <p className="font-serif text-xs sm:text-sm text-gold-light mt-0.5">{teacher.accent}</p>
                          </div>
                        </div>
                      </GorillaGlass>
                    </div>
                  </div>
                </div>
              </GorillaGlass>
            );
          })}
        </div>

      </div>
    </section>
  );
}
