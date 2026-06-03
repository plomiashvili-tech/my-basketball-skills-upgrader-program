export type Lang = "en" | "ka";

export const translations = {
  en: {
    nav: {
      lessons: "Lessons",
      pricing: "Pricing",
      parentDashboard: "Parent dashboard",
      startFree: "Start free",
      start: "Start",
    },
    home: {
      badge: "Ages 7 and up · Step-by-step training",
      heroTitle: "Upgrade your basketball skills",
      heroTitleHighlight: "one lesson at a time",
      heroDesc:
        "From holding the ball for the first time to a step-back three. Built for kids age 7 and up, flexible enough for players already 1–2 years in. Parents follow along on a simple dashboard.",
      startFree: "Start free for 1 month",
      browseLessons: "Browse lessons",
      freePlanNote: "Beginners get the first month free. 3, 6, and 12-month programs available.",
      firstLesson: "First lesson, free",
      watch: "Watch",
      tracksTitle: "Built for every starting point",
      tracksDesc: "Pick the track that matches your current level. You can re-take the placement at any time.",
      seeLessons: "See {level} lessons →",
      whyTitle: "Why parents and kids choose us",
      sampleTitle: "Sample lessons",
      sampleDesc: "A peek at how each lesson is structured.",
      allLessons: "All lessons",
      ctaTitle: "Ready to start?",
      ctaDesc: "Beginners get the first month free. No credit card needed.",
      ctaButton: "See plans",
    },
    features: [
      {
        title: "Starts from Lesson 0",
        body: "Brand-new player? We assume nothing. The first lesson is literally how to hold the ball. Every later skill builds on the last.",
        icon: "🏀",
      },
      {
        title: "Flexible for experienced kids",
        body: "Already played for 1–2 years? Skip the basics. Take a quick placement check and jump into intermediate moves that fix the weak hand and add real game skills.",
        icon: "⚡",
      },
      {
        title: "Every lesson has video + drills",
        body: "Watch the demo, then follow the drill list. Short videos (10–25 minutes) that fit between school and dinner.",
        icon: "📺",
      },
      {
        title: "Parents stay in the loop",
        body: "A simple dashboard shows which lessons your child watched, time spent, and which drills they marked complete. Live webcam view is coming next.",
        icon: "👪",
      },
    ],
    lessons: {
      pageTitle: "Pick a track that fits the player",
      badge: "Lessons library",
      desc: "Beginners should start at the top of the beginner track (Lesson 0). Already played 1–2 years? The intermediate track has shortcuts that skip the basics and focus on cleaning up the weak hand, change-of-direction moves, and shooting under control.",
      allLessons: "All lessons",
      noLessons: "No lessons yet at this level.",
    },
    lessonDetail: {
      backLink: "← All lessons",
      drillsTitle: "Drills to complete",
      drillsDesc: "Mark each one off as you finish. Your parent dashboard will show your progress.",
      forParents: "For parents",
      openDashboard: "Open parent dashboard",
      previous: "Previous",
      next: "Next",
      min: "min",
      ages: "Ages",
    },
    pricing: {
      badge: "Pricing",
      title: "Choose how long you want to train",
      desc: "Beginners start with one month free. After that, pick a 3, 6, or 12-month plan — longer plans cost less per month.",
      free: "Free",
      faqTitle: "FAQ",
      faqs: [
        {
          q: "Is the free month really free?",
          a: "Yes. Beginners can take their entire first month with no credit card on file. You'll only be asked to pick a paid plan if you choose to continue.",
        },
        {
          q: "What if my child is already playing for 1–2 years?",
          a: "We recommend the 3 or 6 month plan. The intermediate track skips Lesson 0 basics and focuses on the weak hand, crossover, and shooting under control.",
        },
        {
          q: "Can two children share one account?",
          a: "Right now each account is for one player so progress is tracked correctly. We're working on a family plan for siblings.",
        },
        {
          q: "When is live parent webcam view available?",
          a: "It's in development. The progress dashboard is live today; live webcam view ships with the 6 and 12 month plans first.",
        },
      ],
    },
    parent: {
      badge: "Parent dashboard · Demo data",
      trainingOf: "'s training",
      desc: "See which lessons your child watched, which drills they finished, and how long they spent training. Live webcam view is coming with the 6 and 12-month plans.",
      lessonsStarted: "Lessons started this week",
      totalTime: "Total training time",
      currentTrack: "Current track",
      recentActivity: "Recent activity",
      seeAll: "See all lessons →",
      lastSeen: "Last seen:",
      drills: "drills",
      webcamTitle: "Live webcam view",
      webcamDesc: "Watch your child do drills live from your phone or computer. Available with the 6 and 12-month plans.",
      comingSoon: "Coming soon",
    },
    card: {
      play: "▶ Play lesson",
      min: "min",
      age: "Age",
    },
    footer: {
      tagline: "Train smart, ages 7+.",
      built: "Built with Next.js · YouTube-embedded lessons · Parent-friendly progress",
    },
    levelLabel: {
      beginner: "Beginner (start from 0)",
      intermediate: "Intermediate (1–2 yrs experience)",
      advanced: "Advanced",
    },
    levelDescription: {
      beginner:
        "Brand new to basketball. Lessons start at Lesson 0 — how to hold the ball — and build one step at a time.",
      intermediate:
        "Already played for 1–2 years. Lessons focus on cleaning up the weak hand, change-of-direction moves, and shooting under control.",
      advanced:
        "Confident with the basics. Lessons add finishing creativity, off-the-dribble shooting, and game-speed reads.",
    },
  },

  ka: {
    nav: {
      lessons: "გაკვეთილები",
      pricing: "ფასები",
      parentDashboard: "მშობლის პანელი",
      startFree: "უფასოდ დაწყება",
      start: "დაწყება",
    },
    home: {
      badge: "7 წლიდან · ნაბიჯ-ნაბიჯ ვარჯიში",
      heroTitle: "გაიუმჯობესე კალათბურთის უნარები",
      heroTitleHighlight: "გაკვეთილი გაკვეთილის მიყოლებით",
      heroDesc:
        "ბურთის პირველი შეხებიდან სტეფ-ბექ სამ-ქულიანამდე. შექმნილია 7 წლიდან ბავშვებისთვის, მოქნილია 1–2 წლის გამოცდილების მქონე მოთამაშეებისთვის. მშობლები ყოველთვის ინფორმირებული არიან.",
      startFree: "1 თვე უფასოდ",
      browseLessons: "გაკვეთილების ნახვა",
      freePlanNote: "დამწყებებისთვის პირველი თვე უფასოა. ხელმისაწვდომია 3, 6 და 12-თვიანი პროგრამები.",
      firstLesson: "პირველი გაკვეთილი, უფასო",
      watch: "ნახვა",
      tracksTitle: "შექმნილია ნებისმიერი საწყისი დონისთვის",
      tracksDesc: "აირჩიე ტრეკი, რომელიც შეესაბამება შენს მიმდინარე დონეს. განახლება შეგიძლია ნებისმიერ დროს.",
      seeLessons: "ნახე {level} გაკვეთილები →",
      whyTitle: "რატომ გვირჩევენ მშობლები და ბავშვები",
      sampleTitle: "გაკვეთილების ნიმუში",
      sampleDesc: "შეხედეთ, როგორ არის სტრუქტურირებული თითოეული გაკვეთილი.",
      allLessons: "ყველა გაკვეთილი",
      ctaTitle: "მზად ხარ დასაწყებად?",
      ctaDesc: "დამწყებებისთვის პირველი თვე უფასოა. საკრედიტო ბარათი არ არის საჭირო.",
      ctaButton: "პლანების ნახვა",
    },
    features: [
      {
        title: "იწყება გაკვეთილი 0-დან",
        body: "სრული დამწყები? ვარაუდობთ, რომ არარაფერი იცი. პირველი გაკვეთილი სწავლებს ბურთის დაჭერას. ყოველი შემდეგი უნარი წინაზე დგება.",
        icon: "🏀",
      },
      {
        title: "მოქნილია გამოცდილი ბავშვებისთვის",
        body: "უკვე 1–2 წელია თამაშობ? გამოტოვე საფუძვლები. გაიარე სწრაფი შეფასება და გადადი საშუალო დონის მოძრაობებზე.",
        icon: "⚡",
      },
      {
        title: "ყველა გაკვეთილს აქვს ვიდეო + სავარჯიშოები",
        body: "ნახე დემო, შემდეგ მიჰყევი სავარჯიშოების სიას. მოკლე ვიდეოები (10–25 წუთი), რომლებიც სკოლასა და სახლს შორის ჯდება.",
        icon: "📺",
      },
      {
        title: "მშობლები ყოველთვის ინფორმირებული არიან",
        body: "მარტივი პანელი გვიჩვენებს, რომელი გაკვეთილები ნახა შვილმა, გატარებული დრო და შესრულებული სავარჯიშოები.",
        icon: "👪",
      },
    ],
    lessons: {
      pageTitle: "აირჩიე ტრეკი, რომელიც მოთამაშეს ერგება",
      badge: "გაკვეთილების ბიბლიოთეკა",
      desc: "დამწყებებმა უნდა დაიწყონ დამწყებთა ტრეკის დასაწყისიდან (გაკვეთილი 0). უკვე 1–2 წელია თამაშობ? საშუალო ტრეკი ფოკუსირებულია სუსტ ხელზე, მიმართულების შეცვლაზე და სროლის კონტროლზე.",
      allLessons: "ყველა გაკვეთილი",
      noLessons: "ამ დონეზე ჯერ გაკვეთილები არ არის.",
    },
    lessonDetail: {
      backLink: "← ყველა გაკვეთილი",
      drillsTitle: "შესასრულებელი სავარჯიშოები",
      drillsDesc: "მონიშნე თითოეული დასრულების შემდეგ. მშობლის პანელი გამოჩვენებს შენს პროგრესს.",
      forParents: "მშობლებისთვის",
      openDashboard: "მშობლის პანელის გახსნა",
      previous: "წინა",
      next: "შემდეგი",
      min: "წთ",
      ages: "ასაკი",
    },
    pricing: {
      badge: "ფასები",
      title: "აირჩიე მომზადების ხანგრძლივობა",
      desc: "დამწყებები იწყებენ ერთი თვით უფასოდ. შემდეგ, აირჩიე 3, 6 ან 12-თვიანი პლანი — გრძელი პლანები ნაკლებ ღირს თვეში.",
      free: "უფასო",
      faqTitle: "ხშირად დასმული კითხვები",
      faqs: [
        {
          q: "უფასო თვე ნამდვილად უფასოა?",
          a: "დიახ. დამწყებებს შეუძლიათ პირველი სრული თვე საკრედიტო ბარათის გარეშე. ფასიანი პლანი მოგთხოვება მხოლოდ გაგრძელების შემთხვევაში.",
        },
        {
          q: "რა მოხდება, თუ ჩემი შვილი უკვე 1–2 წელია თამაშობს?",
          a: "გირჩევთ 3 ან 6-თვიან პლანს. საშუალო ტრეკი გამოტოვებს საფუძვლებს და ფოკუსირდება სუსტ ხელზე, კროსოვერსა და სროლაზე.",
        },
        {
          q: "შეიძლება ორი შვილი ერთ ანგარიშს იყენებდეს?",
          a: "ამჟამად ყოველი ანგარიში ერთი მოთამაშისთვისაა, რათა პროგრესი სწორად ითვლებოდეს. ვმუშაობთ ოჯახური პლანის შექმნაზე.",
        },
        {
          q: "როდის გახდება ხელმისაწვდომი მშობლის პირდაპირი ვებკამერის ხედი?",
          a: "მუშავდება. პროგრესის პანელი დღეს ხელმისაწვდომია; ვებკამერის ხედი 6 და 12-თვიანი პლანებით გამოვა პირველად.",
        },
      ],
    },
    parent: {
      badge: "მშობლის პანელი · სადემო მონაცემები",
      trainingOf: "-ის ვარჯიში",
      desc: "ნახე, რომელი გაკვეთილები უყურა შვილმა, რომელი სავარჯიშოები შეასრულა და რამდენი ხანი ივარჯიშა. ვებკამერის პირდაპირი ხედი 6 და 12-თვიანი პლანებით მოვა.",
      lessonsStarted: "ამ კვირაში დაწყებული გაკვეთილები",
      totalTime: "ვარჯიშის საერთო დრო",
      currentTrack: "მიმდინარე ტრეკი",
      recentActivity: "ბოლო აქტიურობა",
      seeAll: "ყველა გაკვეთილის ნახვა →",
      lastSeen: "ბოლოს ნახული:",
      drills: "სავარჯიშო",
      webcamTitle: "პირდაპირი ვებკამერის ხედი",
      webcamDesc: "უყურე შვილს, როგორ ასრულებს სავარჯიშოებს პირდაპირ ტელეფონიდან ან კომპიუტერიდან. ხელმისაწვდომია 6 და 12-თვიანი პლანებით.",
      comingSoon: "მალე",
    },
    card: {
      play: "▶ გაკვეთილის დაკვრა",
      min: "წთ",
      age: "ასაკი",
    },
    footer: {
      tagline: "ივარჯიშე ჭკვიანურად, 7 წლიდან.",
      built: "შექმნილია Next.js-ით · YouTube გაკვეთილები · მშობელზე ორიენტირებული პროგრესი",
    },
    levelLabel: {
      beginner: "დამწყები (0-დან)",
      intermediate: "საშუალო (1–2 წლის გამოცდილება)",
      advanced: "მოწინავე",
    },
    levelDescription: {
      beginner:
        "სრულიად ახალი კალათბურთში. გაკვეთილები იწყება გაკვეთილი 0-დან — ბურთის დაჭერიდან — და ნელ-ნელა ვითარდება.",
      intermediate:
        "უკვე 1–2 წელია თამაშობ. გაკვეთილები ფოკუსირებულია სუსტი ხელის განვითარებაზე, მიმართულების შეცვლასა და კონტროლირებულ სროლაზე.",
      advanced:
        "საფუძვლები კარგად იცი. გაკვეთილები ამატებს ფინიშის კრეატიულობას, დრიბლინგიდან სროლას და თამაშის სიჩქარეს.",
    },
  },
} as const;

export type Translations = (typeof translations)["en"];
