import { useState } from 'react';
import { Language } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import Levels from './components/Levels';
import Test from './components/Test';
import Teachers from './components/Teachers';
import Schedule from './components/Schedule';
import Formats from './components/Formats';
import Pricing from './components/Pricing';
import TrialLesson from './components/TrialLesson';
import Cabinet from './components/Cabinet';
import Footer from './components/Footer';

export default function App() {
  // Use Russian as default targeted language, with English fallback
  const [language, setLanguage] = useState<Language>('ru');

  // Interactive handler to smoothly scroll to student locker preview
  const handleOpenCabinet = () => {
    const el = document.getElementById('cabinet-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div id="website-app-frame" className="min-h-screen bg-deep-bg text-white selection:bg-gold selection:text-black">
      {/* 1. Header Navigation Bar */}
      <Header 
        language={language} 
        setLanguage={setLanguage} 
        onOpenCabinet={handleOpenCabinet} 
      />

      {/* 2. Professional Hero presentation */}
      <Hero language={language} />

      {/* 3. Path Level Adaptability Map */}
      <Levels language={language} />

      {/* 4. Interactive English level quiz diagnostics */}
      <Test language={language} />

      {/* 5. Charismatic Native and Dual coaches */}
      <Teachers language={language} />

      {/* 6. Live Clock schedules */}
      <Schedule language={language} />

      {/* 7. Format comparison blocks (VIP & Group models) */}
      <Formats language={language} />

      {/* 8. Conversion checkout tariffs */}
      <Pricing language={language} />

      {/* 9. Interactive high fidelity student workspace dashboard */}
      <Cabinet language={language} />

      {/* 10. Free diagnosis lesson & guide download hook */}
      <TrialLesson language={language} />

      {/* 11. Accredited legal footer footprint */}
      <Footer language={language} />
    </div>
  );
}
