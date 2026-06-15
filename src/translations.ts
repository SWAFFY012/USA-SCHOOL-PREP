import { Language, LevelDescription, Teacher, PricingPlan, ScheduleClass } from './types';

export const translations = {
  ru: {
    nav: {
      brand: 'USA PREP',
      levels: 'Уровни',
      quiz: 'Тест на уровень',
      teachers: 'Преподаватели',
      schedule: 'Расписание',
      formats: 'Форматы',
      pricing: 'Тарифы',
      cabinet: 'Кабинет VIP',
      bookFree: 'Пробный урок',
    },
    hero: {
      badge: 'Языковая подготовка премиум-класса',
      titleFirst: 'Свободный английский',
      titleHighlight: 'для переезда в США',
      subtitle: 'Премиум-академия для амбициозных профессионалов, предпринимателей и их семей. Преодолейте языковой барьер, успешно пройдите собеседование на визу и почувствуйте себя своим с первого дня в Штатах.',
      statStudents: 'Учеников переехало',
      statRating: 'Рейтинг выпускников',
      statRelocation: 'Визы одобрены',
      ctaTest: 'Пройти тест на уровень',
      ctaTrial: 'Записаться на диагностику',
      scrolledDown: 'Листайте вниз',
    },
    levels: {
      title: 'Карта языковой адаптации',
      subtitle: 'Классические европейские уровни английского, перепроектированные под реальные цели интеграции в американское общество.',
    },
    quiz: {
      title: 'Экспресс-диагностика уровня',
      subtitle: 'Определите ваш реальный уровень владения языком в контексте переезда. В конце вы получите персональную дорожную карту адаптации.',
      startBtn: 'Начать тест за 2 минуты',
      nextBtn: 'Далее',
      prevBtn: 'Назад',
      finishBtn: 'Получить результаты',
      retakeBtn: 'Пройти заново',
      questionTitle: 'Вопрос {{current}} из {{total}}',
      calculating: 'Анализируем ваши ответы...',
      resultTitle: 'Ваш диагностический уровень: {{level}}',
      roadmapTitle: 'Ваша персональная дорожная карта релокации',
      roadmapDesc: 'Мы подготовили пошаговый план прокачки языка под ваши цели в США.',
      levelAdvice: 'Совет эксперта: вам необходимо сфокусироваться на беглости речи и понимании американского сленга.',
      points: {
        visaTitle: 'Подготовка к визовому интервью',
        visaDesc: 'Разработка уверенных формулировок, избавляющих от каверзных вопросов консула.',
        everydayTitle: 'Бытовая адаптация',
        everydayDesc: 'Термины для аренды жилья в NY/California, открытия счетов в Chase/BofA и медицинских страховок.',
        professionalTitle: 'Профессиональный нетворкинг',
        professionalDesc: 'Адаптация резюме под стандарты США, подготовка к питчам и small talk с американскими коллегами.',
      },
      congrats: 'Поздравляем! Наш методист свяжется с вами, чтобы прислать PDF-версию карты.',
    },
    teachers: {
      title: 'Преподаватели из Нью-Йорка, Калифорнии и Майами',
      subtitle: 'Сертифицированные носители языка и русскоязычные коучи с опытом жизни в США от 10 лет. Они знают американские реалии изнутри.',
      listenVoice: 'Прослушать акцент',
      playingVoice: 'Воспроизведение...',
      specialtyLabel: 'Специализация',
    },
    schedule: {
      title: 'Интерактивное расписание занятий',
      subtitle: 'Интегрируйте обучение в свой плотный график. Время занятий автоматически подстраивается под часовые пояса США (EST/PST) и локальное время в СНГ.',
      liveTime: 'Текущее время в США',
      viewAll: 'Все классы',
      bookSpot: 'Забронировать',
      spotSelected: 'Забронировано!',
      spotsLeft: 'Осталось мест: {{spots}}',
      timezoneSelector: 'Часовой пояс',
    },
    formats: {
      title: 'Форматы обучения премиум-уровня',
      subtitle: 'Выберите идеальную плотность и глубину интеграции в языковую среду США.',
      formatsList: [
        {
          title: 'VIP Менторство 1-на-1',
          desc: 'Индивидуальная траектория под ваши дедлайны. Фокус на прохождении собеседования (O-1, L-1, EB-1/EB-2) и защите кейса.',
          features: ['Адаптация под вашу профессию', 'Имитация интервью с экс-визовым офицером', 'Поддержка ментора 24/7 в WhatsApp/Telegram'],
          time: 'В любое удобное время',
        },
        {
          title: 'Интерактивные микрогруппы',
          desc: 'Разговорные сессии по 4 человека. Интенсивная проработка коммуникационных барьеров в американских бизнес-кейсах.',
          features: ['Студенты схожего социального уровня', 'Отработка small talk и бизнес-переговоров', 'Домашние задания на интерактивной платформе'],
          time: 'Утро / Вечер по Москве',
        },
        {
          title: 'Спецкурсы по адаптации в США',
          desc: 'Тематические мастер-классы: от похода в супермаркет Whole Foods до покупки автомобиля или общения в автосервисе.',
          features: ['Только реальная лексика', 'Скрипты диалогов для всех ситуаций', 'Доступ к базе знаний навсегда'],
          time: 'Суббота / Воскресенье',
        },
      ],
    },
    pricing: {
      title: 'Прозрачные инвестиции в ваше будущее',
      subtitle: 'Выберите уровень поддержки, соответствующий вашим масштабам и амбициям. Без скрытых доплат.',
      currencySelect: 'Валюта оплаты',
      popularBadge: 'Самый востребованный',
      buyBtn: 'Инвестировать в подписку',
      perMonth: 'в месяц',
      priceNotice: 'Возможна беспроцентная рассрочка от банков-партнеров',
    },
    trial: {
      title: 'Бесплатный пробный урок и диагностика',
      subtitle: 'За 40 минут мы полностью разберем ваш языковой барьер, построим индивидуальную стратегию подготовки и подарим гайд "Культурный код США 2026".',
      formTitle: 'Забронировать слот на диагностику',
      nameLabel: 'Ваше имя',
      phoneLabel: 'Телефон (Telegram/WhatsApp)',
      targetLabel: 'Основная цель переезда',
      targetPlaceholder: 'Например: виза O-1, работа в IT, роды, запуск стартапа',
      submitBtn: 'Записаться на сессию',
      successMsg: 'Заявка успешно отправлена! Мы свяжемся с вами в Telegram/WhatsApp как можно скорее.',
    },
    cabinet: {
      title: 'Личный кабинет студента VIP-палаты',
      subtitle: 'Загляните внутрь нашей интерактивной платформы. Это интерфейс, в котором вы будете тренироваться каждый день.',
      tabOverview: 'Прогресс и задачи',
      tabSimulator: 'Симулятор визового интервью',
      tabLessons: 'Видеоуроки',
      userWelcome: 'Добро пожаловать, Алекс!',
      userTarget: 'Цель: Переезд в Калифорнию через 3 месяца',
      streak: 'Дней обучения подряд: {{days}}',
      progress: 'Общий прогресс обучения',
      mockLessonsHeader: 'Рекомендованные микро-уроки со скриптами',
      startLessonBtn: 'Смотреть мини-урок',
      visaHeading: 'Интерактивный симулятор собеседования',
      visaIntro: 'Запустите симулятор, чтобы услышать вопросы американского консульского офицера и посмотреть, как правильно на них отвечать для одобрения визы.',
      startSim: 'Начать симуляцию интервью',
      nextSimQuestion: 'Следующий вопрос',
      simAnswerTitle: 'Идеальный шаблон ответа (для одобрения):',
      visaApproved: 'Виза одобрена! С таким ответом у вас максимальные шансы.',
    },
    footer: {
      tagline: 'Премиальное качество подготовки к новой главе в вашей жизни. Ваша американская мечта начинается здесь.',
      offices: 'Наши представители',
      nyOffice: 'Нью-Йорк, Wall Street 14',
      caOffice: 'Лос-Анджелес, Sunset Blvd 9000',
      moscowOffice: 'Москва, Пресненская наб. 12',
      creds: '© 2026 USA RELOCATION PREP ACADEMY INC. Все права защищены. Образовательная лицензия штата Нью-Йорк No. 892-NY-26.',
    },
  },
  en: {
    nav: {
      brand: 'USA PREP',
      levels: 'Levels',
      quiz: 'Level Test',
      teachers: 'Teachers',
      schedule: 'Schedule',
      formats: 'Formats',
      pricing: 'Pricing',
      cabinet: 'VIP Portal',
      bookFree: 'Free Trial',
    },
    hero: {
      badge: 'Premium Language Preparation',
      titleFirst: 'Fluent English',
      titleHighlight: 'for relocation to the US',
      subtitle: 'High-end academy for ambitious professionals, entrepreneurs, and their families. Overcome the language barrier, pass your visa interview, and feel like a local on day one in the States.',
      statStudents: 'Students relocated',
      statRating: 'Graduate rating',
      statRelocation: 'Visas approved',
      ctaTest: 'Take Level Test',
      ctaTrial: 'Book Assessment Session',
      scrolledDown: 'Scroll down',
    },
    levels: {
      title: 'Language Adaptation Map',
      subtitle: 'Classic European English levels re-engineered for real-world integration objectives into American life.',
    },
    quiz: {
      title: 'Express Level Diagnostics',
      subtitle: 'Determine your real English skill level tailored specifically to your US relocation goals. Get a self-guided adaptation roadmap at the end.',
      startBtn: 'Start 2-Minute Quiz',
      nextBtn: 'Next',
      prevBtn: 'Back',
      finishBtn: 'View Results',
      retakeBtn: 'Retake Quiz',
      questionTitle: 'Question {{current}} of {{total}}',
      calculating: 'Analyzing your responses...',
      resultTitle: 'Your Diagnostic Level: {{level}}',
      roadmapTitle: 'Your Personal Relocation Roadmap',
      roadmapDesc: 'We have compiled a step-by-step English preparation plan tailored to your lifestyle goals in the USA.',
      levelAdvice: 'Expert tip: focus heavily on conversational flow and understanding contemporary American slang.',
      points: {
        visaTitle: 'Visa Interview Preparation',
        visaDesc: 'Formulate accurate, confident answers that address tricky officer questions with absolute clarity.',
        everydayTitle: 'New Life Adaptation',
        everydayDesc: 'Key vocabulary for renting high-end apartments in NYC/California, opening bank accounts (Chase, BofA), and setting up insurance.',
        professionalTitle: 'Professional Networking',
        professionalDesc: 'Polishing your executive resume for US recruiters, pitching to investors, and making polite small talk with local colleagues.',
      },
      congrats: 'Congratulations! Our specialist will contact you to send a downloadable PDF version of your customized roadmap.',
    },
    teachers: {
      title: 'Educators Based in NY, California, and Miami',
      subtitle: 'Certified native speakers and dual-culture bilingual coaches with over 10 years of living in the USA. They understand the American mindset from within.',
      listenVoice: 'Listen to accent',
      playingVoice: 'Playing accent...',
      specialtyLabel: 'Specialty',
    },
    schedule: {
      title: 'Interactive Class Schedule',
      subtitle: 'Easily fit classes into your busy schedule. Class times adjust to key US timezones (EST/PST) and your local European time dynamically.',
      liveTime: 'Current Time in major US hubs',
      viewAll: 'All Classes',
      bookSpot: 'Book Seat',
      spotSelected: 'Seat Reserved!',
      spotsLeft: 'Seats left: {{spots}}',
      timezoneSelector: 'Timezone',
    },
    formats: {
      title: 'Premium Training Formats',
      subtitle: 'Select the optimal depth and frequency of your adaptation into the US linguistic and business environment.',
      formatsList: [
        {
          title: '1-on-1 VIP Mentorship',
          desc: 'Individually tailored learning speed alignment. Heavy focus on visa defense strategies (O-1, L-1, EB-1, EB-2) and professional milestones.',
          features: ['Deeply customized for your industry sector', 'Mock interviews designed with ex-consulates', '24/7 priority mentor support via premium chat'],
          time: 'Highly flexible schedulers',
        },
        {
          title: 'Interactive Micro-Groups',
          desc: 'Conversational cohorts limited to 4 like-minded students. Intensive dialogue drills based on modern business scenarios.',
          features: ['A peer group matching your professional standing', 'Active small talk & negotiations simulations', 'High fidelity interactive homework portals'],
          time: 'Morning / Evening slots available',
        },
        {
          title: 'US Life Workshops',
          desc: 'Thematic masterclasses covering specific daily routines: grocery shopping, buying or leasing cars, renting property, and high-end services.',
          features: ['Real-world native vocabulary exclusively', 'Pragmatic prompt-sheets for all life scenarios', 'Lifetime cloud library access'],
          time: 'Weekend schedules',
        },
      ],
    },
    pricing: {
      title: 'Transparent Investments into Your Future',
      subtitle: 'Choose the support plan that fits your ambition. No hidden costs. Outstanding results guaranteed.',
      currencySelect: 'Payment Currency',
      popularBadge: 'Most Popular',
      buyBtn: 'Invest in Subscription',
      perMonth: 'per month',
      priceNotice: 'Installment plans are available from top banking institutions',
    },
    trial: {
      title: 'Free Diagnostic Lesson',
      subtitle: 'During an intensive 40-minute call, we will break down your communication blockers, draft a study roadmap, and gift you the "USA Cultural Code 2026" manual.',
      formTitle: 'Reserve your assessment slot',
      nameLabel: 'Your name',
      phoneLabel: 'Phone (Telegram/WhatsApp)',
      targetLabel: 'Primary relocation focus',
      targetPlaceholder: 'E.g., O-1 visa defense, tech employment, entrepreneurship',
      submitBtn: 'Get Custom Assessment',
      successMsg: 'Booking received! We will match your slot and contact you via Telegram or WhatsApp as soon as possible.',
    },
    cabinet: {
      title: 'VIP Student Portal Preview',
      subtitle: 'Gain a preview of our premium interactive learning environment. This dashboard represents how your portal will operate every single day.',
      tabOverview: 'Daily Roadmap & Stats',
      tabSimulator: 'Visa Interview Simulator',
      tabLessons: 'Syllabus Video Clips',
      userWelcome: 'Welcome, Alex!',
      userTarget: 'Objective: Relocate to California in 3 months',
      streak: 'Current Study Streak: {{days}} days',
      progress: 'Overall Adaptation Score',
      mockLessonsHeader: 'Recommended micro-lectures with scripts',
      startLessonBtn: 'Play micro-lesson',
      visaHeading: 'Interactive Visa Interview Simulator',
      visaIntro: 'Run the simulator to hear questions standard to American consular officers, view perfect answers, and test your readiness to receive an approval stamp.',
      startSim: 'Launch Mock Interview',
      nextSimQuestion: 'Next Question',
      simAnswerTitle: 'Recommended response template (visa approved formulation):',
      visaApproved: 'Visa Approved! This template is highly recommended to secure your O-1/L-1 approval stamp.',
    },
    footer: {
      tagline: 'Unparalleled preparation standards for your new life chapter. Your relocation starts here.',
      offices: 'Local Head Offices',
      nyOffice: 'New York, Wall Street 14',
      caOffice: 'Los Angeles, Sunset Blvd 9000',
      moscowOffice: 'Moscow, Presnenskaya Nab 12',
      creds: '© 2026 USA RELOCATION PREP ACADEMY INC. All rights reserved. Registered education license state of New York No. 892-NY-26.',
    },
  },
};

export const levelsData: Record<Language, LevelDescription[]> = {
  ru: [
    {
      id: 'a2',
      name: 'Elementary (A2)',
      badge: 'Начальный адаптационный',
      usGoal: 'Выживание и базовые бытовые ситуации',
      description: 'Умение заказать такси в Uber, сделать заказ в Starbucks, купить продукты на кассе и спросить дорогу у прохожих на улице.',
      scenarios: [
        'Диалог на кассе супермаркета Trader Joe\'s',
        'Адресная навигация и диалоги с водителями Uber',
        'Распознавание ценников, мер веса и объемов (галлоны, унции, фунты)'
      ]
    },
    {
      id: 'b1',
      name: 'Intermediate (B1)',
      badge: 'Жизненный оптимум',
      usGoal: 'Бытовое обоснование и аренда жилья',
      description: 'Свободное общение с лендлордами, звонки в службы доставки, прохождение тестов на водительские права в DMV США.',
      scenarios: [
        'Звонок лендлорду: обсуждение депозита и контракта аренды',
        'Прохождение теста DMV и беседа с офицером дорожной полиции',
        'Открытие базовых кредитных / дебетовых карт в Chase или Bank of America'
      ]
    },
    {
      id: 'b2',
      name: 'Upper-Intermediate (B2)',
      badge: 'Профессиональный старт',
      usGoal: 'Прохождение визового интервью, работа в США',
      description: 'Успешная защита кейса талантов на интервью. Свободный нетворкинг, прохождение собеседований в американские стартапы.',
      scenarios: [
        'Имитация каверзных вопросов консула на собеседовании на визу O-1/L-1',
        'Анализ резюме по стандартам США и симуляция встречи One-on-One',
        'Уверенный Small Talk с коллегами у кулера (политика, спорт, кино)'
      ]
    },
    {
      id: 'c1',
      name: 'Advanced (C1)',
      badge: 'Экспоненциальная карьера',
      usGoal: 'Лидерство, публичные выступления, питчи',
      description: 'Питчи перед американскими инвесторами в Кремниевой Долине, ведение юридических споров, публичные доклады без акцента.',
      scenarios: [
        'Питчинг стартапа перед акселератором Y Combinator',
        'Анализ контрактов, договоров и юридических терминов NDA/SLA',
        'Дебаты, шутки на американском сленге и поддержание высокого темпа дискуссии'
      ]
    }
  ],
  en: [
    {
      id: 'a2',
      name: 'Elementary (A2)',
      badge: 'Basic Survival Level',
      usGoal: 'Everyday life & navigate simple encounters',
      description: 'Order food at Starbucks, request a ride on Uber, buy basic items at Trader Joe\'s, and ask for help on public transit.',
      scenarios: [
        'Interactions at the Trader Joe\'s checkout counter',
        'Clear coordinate instructions to your local Uber transit drivers',
        'Reading prices and identifying imperial units (gallons, oz, lbs)'
      ]
    },
    {
      id: 'b1',
      name: 'Intermediate (B1)',
      badge: 'Everyday Freedom',
      usGoal: 'Renting properties & casual conversations',
      description: 'Independently rent apartments, call delivery services, pass the US driving written exams at any DMV with high confidence.',
      scenarios: [
        'Pitching direct to a landlord: security deposit limits & lease codes',
        'Overcoming high-stress situations at DMV queues or traffic alerts',
        'Opening checkups, credits, and investments inside Chase or Bank of America'
      ]
    },
    {
      id: 'b2',
      name: 'Upper-Intermediate (B2)',
      badge: 'Career Integration',
      usGoal: 'Visa defense, professional interviews',
      description: 'Describe complex project experience to recruiters. Overcome critical follow-up questions from immigration officers securely.',
      scenarios: [
        'Rehearsing O-1/L-1 officer questions under stress testing',
        'Refocusing resume blocks to align with Silicon Valley/Wall St norms',
        'Navigating rapid professional social triggers (hobbies, movies, tax, sports)'
      ]
    },
    {
      id: 'c1',
      name: 'Advanced (C1)',
      badge: 'Elite Leadership',
      usGoal: 'Keynote speaking, fundraising, legal speed',
      description: 'Pitching direct to US venture capital firms, handling delicate legal disputes, or guiding large corporate meetings.',
      scenarios: [
        'Pitching seed stages live to Y Combinator acceleration judges',
        'Reviewing delicate lines in legal contracts, corporate NDA, or SLA files',
        'Fast-paced social jokes, idioms, political awareness, and debates'
      ]
    }
  ]
};

export const teachersData: Record<Language, Teacher[]> = {
  ru: [
    {
      id: 't1',
      name: 'Джон Хендерсон',
      role: 'Носитель языка, экс-визовый интервьюер',
      location: 'Нью-Йорк, Манхэттен',
      bio: 'Джон более 6 лет проработал в консульствах США. Он знает все триггеры, из-за которых офицеры одобряют или отклоняют визы O-1, L-1, F-1. Научит отвечать коротко и уверенно.',
      specialty: ['Подготовка к визам', 'Бизнес-английский', 'Избавление от русского акцента'],
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
      accent: 'Нью-йоркский деловой акцент (чистый, авторитетный)'
    },
    {
      id: 't2',
      name: 'Екатерина Вдовенко',
      role: 'Старший коуч по языковой адаптации, лингвист',
      location: 'Сан-Франциско, Кремниевая долина',
      bio: 'Переехала в США 12 лет назад. Руководила корпоративным обучением в Google и Airbnb. Помогает адаптировать профессиональную речь айтишников, маркетологов и фаундеров.',
      specialty: ['Собеседования в IT', 'Бытовая адаптация', 'Культурные особенности США'],
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
      accent: 'Западное побережье (смягченный калифорнийский, дружелюбный)'
    },
    {
      id: 't3',
      name: 'Маркус Оливейра',
      role: 'Преподаватель живого разговорного сленга, блогер',
      location: 'Майами-Бич, Флорида',
      bio: 'Родился и вырос на побережье Флориды. Автор курсов по реальному сленгу, мемам и юмору американцев. На его занятиях вы забудете скучные учебники раз и навсегда.',
      specialty: ['Жаргон и идиомы', 'Преодоление барьера', 'Поддержка разговора у кулера'],
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
      accent: 'Южная Флорида (расслабленные интонации, современный сленг)'
    }
  ],
  en: [
    {
      id: 't1',
      name: 'John Henderson',
      role: 'Native Speaker, Former Consular Officer',
      location: 'New York, Manhattan',
      bio: 'John worked inside US consulates for over 6 years. He knows the exact trigger scenarios that cause officers to either stamp or decline O-1, L-1, and F-1 visa paths. He will train you to reply briefly and securely.',
      specialty: ['Visa Interview Prep', 'Business English', 'Accent reduction and voice coaching'],
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
      accent: 'Standard Northeastern Corporate (sharp, expert tone)'
    },
    {
      id: 't2',
      name: 'Ekaterina Vdovenko',
      role: 'Senior Language Adaptation Coach, Linguist',
      location: 'San Francisco, Silicon Valley',
      bio: 'Relocated to the USA 12 years ago. Managed language and team onboarding inside Google and Airbnb. Specializes in aligning tech founders, designers, and managers into US professional structures.',
      specialty: ['IT Job Interviews', 'Daily Adaptation Scenarios', 'American Corporate Norms'],
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
      accent: 'West Coast Standard (soft Californian, highly encouraging)'
    },
    {
      id: 't3',
      name: 'Marcus Oliveira',
      role: 'Idiomatic Language Teacher, Blogger',
      location: 'Miami Beach, Florida',
      bio: 'Born and raised in sunny Southern Florida. Created highly acclaimed digital catalogs focusing on local humor, TikTok/X memes, and slang formulas. Forget boring textbooks forever with Marcus.',
      specialty: ['Idioms and Jargon', 'Speech Blockage removal', 'American Small Talk culture'],
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
      accent: 'South Florida Coast (casual, highly energetic rhythmic)'
    }
  ]
};

export const pricingPlans: Record<Language, PricingPlan[]> = {
  ru: [
    {
      id: 'comfort',
      title: 'Быстрый Старт (Comfort)',
      originalPrice: { usd: 190, rub: 17500 },
      price: { usd: 145, rub: 13500 },
      period: 'месяц',
      features: [
        'Разговорные занятия в мини-группе (3 раза в неделю)',
        'Доступ к платформе 24/7 (база знаний по релокации)',
        'Методический гайд "Культурный код США"',
        'Еженедельный разбор домашних заданий куратором',
        'Подготовка к базовому Small Talk в США'
      ],
      cta: 'Выбрать комфортный старт'
    },
    {
      id: 'premium',
      title: 'Интенсивный США-Переезд (Premium)',
      originalPrice: { usd: 390, rub: 35000 },
      price: { usd: 290, rub: 26500 },
      period: 'месяц',
      badge: 'Рекомендуем',
      features: [
        'Разговорная группа + 2 занятия 1-на-1 с сертифицированным носителем',
        'Полная проработка интервью на визу (O-1 / L-1 / EB / F-1)',
        'Имитация живого собеседования с видеозаписью и разбором ошибок',
        'Шаблоны переписки с арендодателями и американскими банками',
        'Разбор и адаптация вашего резюме на Resume.com стандарты'
      ],
      cta: 'Начать интенсивную адаптацию'
    },
    {
      id: 'vip',
      title: 'VIP Менторство (Executive)',
      originalPrice: { usd: 900, rub: 82000 },
      price: { usd: 690, rub: 63000 },
      period: 'месяц',
      features: [
        'Полностью индивидуальные сессии 1-на-1 с бывшим визовым офицером',
        'Пожизненный личный чат в Telegram с ментором (ответы на любые вопросы)',
        'Коррекция акцента по методике Accent Reduction Training',
        'Сопровождение при создании и защите профессионального кейса талантов',
        'Консультации по релокации бизнеса и привлечению инвестиций'
      ],
      cta: 'Стать VIP-студентом'
    }
  ],
  en: [
    {
      id: 'comfort',
      title: 'Comfort Relocator',
      originalPrice: { usd: 190, rub: 17500 },
      price: { usd: 145, rub: 13500 },
      period: 'month',
      features: [
        'Interactive conversations with study group (3 times / week)',
        '24/7 web desktop platform access to complete guides database',
        'Complete textbook download "USA Cultural DNA 2026"',
        'Homework revision and feedback by assigned educator weekly',
        'Solid grounding in casual small talk formulas and phrases'
      ],
      cta: 'Join Comfort Track'
    },
    {
      id: 'premium',
      title: 'US Immigrant Premium',
      originalPrice: { usd: 390, rub: 35000 },
      price: { usd: 290, rub: 26500 },
      period: 'month',
      badge: 'Recommended',
      features: [
        'All group sessions + 2 custom 1-on-1 hours with native certified speaker',
        'Full mockup simulator preparation for actual visa categories (O-1/L-1/EB)',
        'Recorded simulated interview with consular officer review report',
        'Templates library for contacting local landlords, brokers, and Chase/BofA',
        'Polishing resume structure to match standard US tech/business formats'
      ],
      cta: 'Begin Premium Onboarding'
    },
    {
      id: 'vip',
      title: 'Executive VIP Mentorship',
      originalPrice: { usd: 900, rub: 82000 },
      price: { usd: 690, rub: 63000 },
      period: 'month',
      features: [
        'Fully dedicated 1-on-1 mentorship with former consulate staff',
        'Direct personal Telegram 24/7 text support with immediate priority replies',
        'Accent Reduction Training module (scientifically based sound therapy)',
        'Strategic counseling on building your petition narrative and proof-sheets',
        'Advising on US corporate setups and local investor pitching structures'
      ],
      cta: 'Secure Executive Seat'
    }
  ]
};

export const scheduleClasses: Record<Language, ScheduleClass[]> = {
  ru: [
    { id: 's1', time: '11:00 AM EST (18:00 МСК)', title: 'Секреты прохождения визы O-1/EB-1/EB-2', teacher: 'Джон Хендерсон', spotsLeft: 2, level: 'B1-C1', category: 'visa' },
    { id: 's2', time: '01:00 PM EST (20:00 МСК)', title: 'Аренда квартиры в Нью-Йорке: контракт и кредитная история', teacher: 'Екатерина Вдовенко', spotsLeft: 4, level: 'A2-B2', category: 'culture' },
    { id: 's3', time: '03:00 PM EST (22:00 МСК)', title: 'Разговорный сленг Бруклина: как не сойти за классического туриста', teacher: 'Маркус Оливейра', spotsLeft: 1, level: 'B2-C1', category: 'slang' },
    { id: 's4', time: '07:00 PM EST (02:00 МСК)', title: 'Американская вежливость: Small Talk и границы личных тем', teacher: 'Екатерина Вдовенко', spotsLeft: 3, level: 'All Levels', category: 'speech' }
  ],
  en: [
    { id: 's1', time: '11:00 AM EST (18:00 Warsaw)', title: 'Key Triggers: Defending O-1/EB-1/EB-2 Petitions', teacher: 'John Henderson', spotsLeft: 2, level: 'B1-C1', category: 'visa' },
    { id: 's2', time: '01:00 PM EST (20:00 Warsaw)', title: 'Leasing Real Estate in New York or Miami: Credit Reports', teacher: 'Ekaterina Vdovenko', spotsLeft: 4, level: 'A2-B2', category: 'culture' },
    { id: 's3', time: '03:00 PM EST (22:00 Warsaw)', title: 'Street Level Brooklyn Slang: Bypassing Tourist Patterns', teacher: 'Marcus Oliveira', spotsLeft: 1, level: 'B2-C1', category: 'slang' },
    { id: 's4', time: '07:00 PM EST (02:00 Warsaw)', title: 'Polite Interventions: American Business Small Talk Dynamics', teacher: 'Ekaterina Vdovenko', spotsLeft: 3, level: 'All Levels', category: 'speech' }
  ]
};
export const quizQuestions: Record<Language, {
  question: string;
  options: { text: string; points: number }[];
}[]> = {
  ru: [
    {
      question: 'Зачем конкретно вы переезжаете в США в ближайшее время?',
      options: [
        { text: 'Я подаюсь на O-1/EB-1 визу талантов или приглашен по L-1', points: 4 },
        { text: 'Ищу работу в ИТ / Стартап сфере и хочу закрепиться в Кремниевой Долине', points: 3 },
        { text: 'Хочу переехать, найти любую работу, обустроиться в крупном штате', points: 2 },
        { text: 'Просто путешествие / посмотреть страну, возможно останусь', points: 1 }
      ]
    },
    {
      question: 'Какой фразой вы начнете общение с арендодателем в Майами по поводу квартиры?',
      options: [
        { text: 'Hello, I want to rent this apartment, how much is the price direct?', points: 1 },
        { text: 'Hi, I am interested in touring the unit. Could you send the leasing requirements and application outline?', points: 4 },
        { text: 'Good day, please give me the contract of apartment for read', points: 2 },
        { text: 'Hey, I can pay cash for the flat now, is that fine for you?', points: 3 }
      ]
    },
    {
      question: 'На визовом интервью консул США спрашивает: "What is your purpose of travel?". Что лучше ответить?',
      options: [
        { text: 'Я еду работать и оставаться жить, у меня хорошая петиция', points: 1 },
        { text: 'I am taking a key corporate trip to coordinate systems and deliver expert oversight, maintaining my key focus on overseas execution.', points: 4 },
        { text: 'To travel around the national parks and see San Francisco, maybe visit friends.', points: 2 },
        { text: 'I want to live in the USA because of bad economic state here.', points: 0 }
      ]
    },
    {
      question: 'Как вы понимаете фразу "Let\'s take this offline"?',
      options: [
        { text: 'Нам нужно выключить интернет и созвониться по обычному телефону', points: 1 },
        { text: 'Давайте обсудим эту детальную техническую тему за пределами этого общего созвона', points: 4 },
        { text: 'Завтра встретимся лично в офисе в Нью-Йорке', points: 2 },
        { text: 'Это значит, что созвон заканчивается', points: 1 }
      ]
    }
  ],
  en: [
    {
      question: 'What is your primary relocation pathway to the United States?',
      options: [
        { text: 'O-1/EB-1 Extraordinary Talents, or L-1 Intracompany Transfer', points: 4 },
        { text: 'Applying to local US startups or Silicon Valley tech vacancies', points: 3 },
        { text: 'Renting a place with general family goals, setting up roots anywhere', points: 2 },
        { text: 'Tourism / sightseeing first, planning detailed relocation options later', points: 1 }
      ]
    },
    {
      question: 'How would you open an apartment inquiry email to a high-rise leasing office?',
      options: [
        { text: 'Hello, I want to rent this apartment, how much is the price direct?', points: 1 },
        { text: 'Hi, I am interested in touring the unit. Could you send the leasing requirements and application outline?', points: 4 },
        { text: 'Good day, please give me the contract of apartment for read', points: 2 },
        { text: 'Hey, I can pay cash for the flat now, is that fine for you?', points: 3 }
      ]
    },
    {
      question: 'At your visa interview, the officer asks: "What is your purpose of travel?". What wins approval?',
      options: [
        { text: 'To settle down, buy real estate and eventually find local jobs.', points: 1 },
        { text: 'I am taking a key corporate trip to coordinate systems and deliver expert oversight, maintaining my key focus on overseas execution.', points: 4 },
        { text: 'To travel around the national parks and see San Francisco, maybe visit friends.', points: 2 },
        { text: 'I want to live in the USA because of bad economic state here.', points: 0 }
      ]
    },
    {
      question: 'What does the phrasing "Let\'s take this offline" translate to strictly?',
      options: [
        { text: 'We must turn off our Wi-Fi routers and discuss via basic phone towers.', points: 1 },
        { text: 'To park this complex detail during this main meeting and address it in subsequent brief channels.', points: 4 },
        { text: 'To organize a live physical meet in Manhattan corporate hubs.', points: 2 },
        { text: 'It indicates direct end of standard working hours.', points: 1 }
      ]
    }
  ]
};
