export interface Chapter {
  id: string;
  title: string;
  description: string;
  pdf: string;
  video: string;
  duration: string;
}

export interface Subject {
  id: string;
  name: string;
  icon: string;
  gradient: string;
  glowColor: string;
  description: string;
  chapters: Chapter[];
}

export const subjects: Subject[] = [
  {
    id: "mathematics",
    name: "Mathematics",
    icon: "calculator",
    gradient: "from-blue-500 to-cyan-400",
    glowColor: "rgba(59,130,246,0.6)",
    description: "Numbers, algebra, geometry, calculus and beyond",
    chapters: [
      { id: "sets", title: "Sets and Functions", description: "Introduction to sets, relations and functions", pdf: "/pdfs/math/sets.pdf", video: "https://www.youtube.com/embed/d_6z_bNUdqE", duration: "45 min" },
      { id: "sequences", title: "Sequences and Series", description: "Arithmetic, geometric progressions and more", pdf: "/pdfs/math/sequences.pdf", video: "https://www.youtube.com/embed/wtnSW7TJUD8", duration: "52 min" },
      { id: "trigonometry", title: "Trigonometry", description: "Angles, ratios and identities", pdf: "/pdfs/math/trigonometry.pdf", video: "https://www.youtube.com/embed/PUB0TaZ7bhA", duration: "60 min" },
      { id: "algebra", title: "Algebra", description: "Polynomials, equations and inequalities", pdf: "/pdfs/math/algebra.pdf", video: "https://www.youtube.com/embed/9ckMQVjmV_Y", duration: "55 min" },
      { id: "coordinate", title: "Coordinate Geometry", description: "Lines, circles and conic sections", pdf: "/pdfs/math/coordinate.pdf", video: "https://www.youtube.com/embed/hzHSb7AE7-I", duration: "48 min" },
      { id: "calculus", title: "Differential Calculus", description: "Limits, derivatives and applications", pdf: "/pdfs/math/calculus.pdf", video: "https://www.youtube.com/embed/WUvTyaaNkzM", duration: "70 min" },
    ],
  },
  {
    id: "physics",
    name: "Physics",
    icon: "atom",
    gradient: "from-sky-500 to-indigo-400",
    glowColor: "rgba(14,165,233,0.6)",
    description: "Laws of nature, motion, energy and the universe",
    chapters: [
      { id: "motion", title: "Laws of Motion", description: "Newton's laws and their applications", pdf: "/pdfs/physics/motion.pdf", video: "https://www.youtube.com/embed/kKKM8Y-u7ds", duration: "55 min" },
      { id: "gravitation", title: "Gravitation", description: "Universal law and satellite motion", pdf: "/pdfs/physics/gravitation.pdf", video: "https://www.youtube.com/embed/MTY1Kje0yLg", duration: "50 min" },
      { id: "waves", title: "Waves and Sound", description: "Wave properties, resonance and acoustics", pdf: "/pdfs/physics/waves.pdf", video: "https://www.youtube.com/embed/tJW_a6JeXD8", duration: "62 min" },
      { id: "optics", title: "Optics", description: "Light, reflection, refraction and lenses", pdf: "/pdfs/physics/optics.pdf", video: "https://www.youtube.com/embed/oh4fYhMCgHs", duration: "58 min" },
      { id: "electricity", title: "Electricity", description: "Current, circuits and Ohm's law", pdf: "/pdfs/physics/electricity.pdf", video: "https://www.youtube.com/embed/MC0tq6fNRwU", duration: "65 min" },
      { id: "magnetism", title: "Magnetism", description: "Magnetic fields, forces and induction", pdf: "/pdfs/physics/magnetism.pdf", video: "https://www.youtube.com/embed/qwasj4-jMOw", duration: "60 min" },
    ],
  },
  {
    id: "chemistry",
    name: "Chemistry",
    icon: "flask-conical",
    gradient: "from-emerald-500 to-teal-400",
    glowColor: "rgba(16,185,129,0.6)",
    description: "Atoms, molecules, reactions and the periodic table",
    chapters: [
      { id: "atomic", title: "Atomic Structure", description: "Models, orbitals and quantum numbers", pdf: "/pdfs/chemistry/atomic.pdf", video: "https://www.youtube.com/embed/W40dtHqgFgk", duration: "55 min" },
      { id: "periodic", title: "Periodic Table", description: "Groups, periods and trends", pdf: "/pdfs/chemistry/periodic.pdf", video: "https://www.youtube.com/embed/rz4Dd1I_fX0", duration: "48 min" },
      { id: "bonding", title: "Chemical Bonding", description: "Ionic, covalent and metallic bonds", pdf: "/pdfs/chemistry/bonding.pdf", video: "https://www.youtube.com/embed/QqjcCvzWwww", duration: "60 min" },
      { id: "thermodynamics", title: "Thermodynamics", description: "Energy changes in chemical reactions", pdf: "/pdfs/chemistry/thermo.pdf", video: "https://www.youtube.com/embed/8N1BxHgsoOw", duration: "52 min" },
      { id: "equilibrium", title: "Chemical Equilibrium", description: "Le Chatelier's principle and equilibrium constants", pdf: "/pdfs/chemistry/equilibrium.pdf", video: "https://www.youtube.com/embed/gfX3zQahb8Y", duration: "57 min" },
      { id: "organic", title: "Organic Chemistry", description: "Hydrocarbons, functional groups and reactions", pdf: "/pdfs/chemistry/organic.pdf", video: "https://www.youtube.com/embed/bSMx0NS0XfY", duration: "72 min" },
    ],
  },
  {
    id: "biology",
    name: "Biology",
    icon: "dna",
    gradient: "from-green-500 to-lime-400",
    glowColor: "rgba(34,197,94,0.6)",
    description: "Life sciences, cells, genetics and ecosystems",
    chapters: [
      { id: "cell", title: "Cell Biology", description: "Structure, organelles and cell division", pdf: "/pdfs/biology/cell.pdf", video: "https://www.youtube.com/embed/8IlzKri08kk", duration: "58 min" },
      { id: "genetics", title: "Genetics", description: "Heredity, DNA and gene expression", pdf: "/pdfs/biology/genetics.pdf", video: "https://www.youtube.com/embed/8m6hHRlKwxY", duration: "65 min" },
      { id: "evolution", title: "Evolution", description: "Natural selection and speciation", pdf: "/pdfs/biology/evolution.pdf", video: "https://www.youtube.com/embed/GhHOjC4oxh8", duration: "50 min" },
      { id: "physiology", title: "Human Physiology", description: "Body systems and their functions", pdf: "/pdfs/biology/physiology.pdf", video: "https://www.youtube.com/embed/URUJD5NEXC8", duration: "70 min" },
      { id: "ecology", title: "Ecology", description: "Ecosystems, food chains and environment", pdf: "/pdfs/biology/ecology.pdf", video: "https://www.youtube.com/embed/izrfZpABKbQ", duration: "45 min" },
      { id: "botany", title: "Botany", description: "Plant structure, photosynthesis and reproduction", pdf: "/pdfs/biology/botany.pdf", video: "https://www.youtube.com/embed/g78utcLQrJ4", duration: "55 min" },
    ],
  },
  {
    id: "history",
    name: "History",
    icon: "landmark",
    gradient: "from-amber-500 to-orange-400",
    glowColor: "rgba(245,158,11,0.6)",
    description: "Ancient civilizations, empires and world events",
    chapters: [
      { id: "ancient-india", title: "Ancient India", description: "Indus Valley to Mauryan Empire", pdf: "/pdfs/history/ancient.pdf", video: "https://www.youtube.com/embed/pgRXgBJp5VY", duration: "55 min" },
      { id: "medieval", title: "Medieval India", description: "Delhi Sultanate and Mughal Empire", pdf: "/pdfs/history/medieval.pdf", video: "https://www.youtube.com/embed/4QHxhTpRNhY", duration: "60 min" },
      { id: "colonial", title: "Colonial India", description: "British rule and independence movement", pdf: "/pdfs/history/colonial.pdf", video: "https://www.youtube.com/embed/5AoQa_DMXXQ", duration: "65 min" },
      { id: "world-war", title: "World Wars", description: "Causes, events and consequences", pdf: "/pdfs/history/worldwar.pdf", video: "https://www.youtube.com/embed/EZHm3jBT3LY", duration: "72 min" },
      { id: "nationalism", title: "Nationalism", description: "Rise of nationalism across the globe", pdf: "/pdfs/history/nationalism.pdf", video: "https://www.youtube.com/embed/PzRhqkQ-PLk", duration: "50 min" },
    ],
  },
  {
    id: "geography",
    name: "Geography",
    icon: "globe",
    gradient: "from-teal-500 to-cyan-400",
    glowColor: "rgba(20,184,166,0.6)",
    description: "Landforms, climate, population and resources",
    chapters: [
      { id: "earth", title: "The Earth", description: "Structure, movements and geological features", pdf: "/pdfs/geo/earth.pdf", video: "https://www.youtube.com/embed/7pqc5Lo4otQ", duration: "48 min" },
      { id: "climate", title: "Climate & Weather", description: "Atmosphere, seasons and weather patterns", pdf: "/pdfs/geo/climate.pdf", video: "https://www.youtube.com/embed/vH298zSCQzY", duration: "55 min" },
      { id: "rivers", title: "Rivers & Landforms", description: "Drainage systems and landform processes", pdf: "/pdfs/geo/rivers.pdf", video: "https://www.youtube.com/embed/PFdlhEHaBH0", duration: "50 min" },
      { id: "population", title: "Population", description: "Distribution, density and migration", pdf: "/pdfs/geo/population.pdf", video: "https://www.youtube.com/embed/o1_D4FscMnU", duration: "45 min" },
      { id: "resources", title: "Natural Resources", description: "Types, uses and conservation", pdf: "/pdfs/geo/resources.pdf", video: "https://www.youtube.com/embed/qImzOPSzRbU", duration: "52 min" },
    ],
  },
  {
    id: "english",
    name: "English",
    icon: "book-open",
    gradient: "from-rose-500 to-pink-400",
    glowColor: "rgba(244,63,94,0.6)",
    description: "Language, literature, grammar and communication",
    chapters: [
      { id: "grammar", title: "Grammar Essentials", description: "Parts of speech, tenses and sentence structure", pdf: "/pdfs/english/grammar.pdf", video: "https://www.youtube.com/embed/aRqkj5FHTKY", duration: "55 min" },
      { id: "prose", title: "Prose and Fiction", description: "Reading comprehension and literary analysis", pdf: "/pdfs/english/prose.pdf", video: "https://www.youtube.com/embed/MSYw502dJNY", duration: "60 min" },
      { id: "poetry", title: "Poetry", description: "Figures of speech, meter and analysis", pdf: "/pdfs/english/poetry.pdf", video: "https://www.youtube.com/embed/JwhouCNq-Fc", duration: "50 min" },
      { id: "writing", title: "Writing Skills", description: "Essays, letters and creative writing", pdf: "/pdfs/english/writing.pdf", video: "https://www.youtube.com/embed/W5SlQe_Y_po", duration: "58 min" },
      { id: "vocabulary", title: "Vocabulary", description: "Word roots, synonyms and usage", pdf: "/pdfs/english/vocabulary.pdf", video: "https://www.youtube.com/embed/5G3GD7rREY8", duration: "42 min" },
    ],
  },
  {
    id: "tamil",
    name: "Tamil",
    icon: "scroll-text",
    gradient: "from-orange-500 to-yellow-400",
    glowColor: "rgba(249,115,22,0.6)",
    description: "Tamil literature, grammar and classical heritage",
    chapters: [
      { id: "ilakkanam", title: "இலக்கணம் (Grammar)", description: "Tamil grammar and sentence construction", pdf: "/pdfs/tamil/grammar.pdf", video: "https://www.youtube.com/embed/sample1", duration: "55 min" },
      { id: "kavithai", title: "கவிதை (Poetry)", description: "Classical and modern Tamil poetry", pdf: "/pdfs/tamil/poetry.pdf", video: "https://www.youtube.com/embed/sample2", duration: "48 min" },
      { id: "nadagam", title: "நாடகம் (Drama)", description: "Tamil drama and performing arts", pdf: "/pdfs/tamil/drama.pdf", video: "https://www.youtube.com/embed/sample3", duration: "52 min" },
      { id: "sangam", title: "சங்க இலக்கியம்", description: "Sangam literature and its significance", pdf: "/pdfs/tamil/sangam.pdf", video: "https://www.youtube.com/embed/sample4", duration: "65 min" },
      { id: "thirukkural", title: "திருக்குறள்", description: "Thiruvalluvar's Kural and its wisdom", pdf: "/pdfs/tamil/kural.pdf", video: "https://www.youtube.com/embed/sample5", duration: "70 min" },
    ],
  },
  {
    id: "economics",
    name: "Economics",
    icon: "trending-up",
    gradient: "from-yellow-500 to-amber-400",
    glowColor: "rgba(234,179,8,0.6)",
    description: "Markets, trade, macro and micro economics",
    chapters: [
      { id: "micro", title: "Microeconomics", description: "Supply, demand and market equilibrium", pdf: "/pdfs/economics/micro.pdf", video: "https://www.youtube.com/embed/VAxzS1MJoiA", duration: "58 min" },
      { id: "macro", title: "Macroeconomics", description: "GDP, inflation and national income", pdf: "/pdfs/economics/macro.pdf", video: "https://www.youtube.com/embed/d8uTB5XorBw", duration: "62 min" },
      { id: "money", title: "Money and Banking", description: "Functions of money, banks and RBI", pdf: "/pdfs/economics/banking.pdf", video: "https://www.youtube.com/embed/oXbDm_fBnmo", duration: "55 min" },
      { id: "trade", title: "International Trade", description: "Exports, imports and balance of payments", pdf: "/pdfs/economics/trade.pdf", video: "https://www.youtube.com/embed/yBhZoVTvS1g", duration: "50 min" },
      { id: "development", title: "Economic Development", description: "Growth theories and development indicators", pdf: "/pdfs/economics/development.pdf", video: "https://www.youtube.com/embed/9GrLcDK7UkQ", duration: "60 min" },
    ],
  },
  {
    id: "commerce",
    name: "Commerce",
    icon: "briefcase",
    gradient: "from-lime-500 to-green-400",
    glowColor: "rgba(132,204,22,0.6)",
    description: "Business, accounting, finance and trade",
    chapters: [
      { id: "accounting", title: "Accounting Basics", description: "Journal, ledger and trial balance", pdf: "/pdfs/commerce/accounting.pdf", video: "https://www.youtube.com/embed/yYX4bvQSqbo", duration: "65 min" },
      { id: "business", title: "Business Studies", description: "Forms of business and management", pdf: "/pdfs/commerce/business.pdf", video: "https://www.youtube.com/embed/2H0MMl1JLvo", duration: "58 min" },
      { id: "finance", title: "Finance Management", description: "Capital, investment and financial planning", pdf: "/pdfs/commerce/finance.pdf", video: "https://www.youtube.com/embed/G3n2rELFCXs", duration: "60 min" },
      { id: "marketing", title: "Marketing", description: "Market research, advertising and sales", pdf: "/pdfs/commerce/marketing.pdf", video: "https://www.youtube.com/embed/Unzc731iCUY", duration: "55 min" },
      { id: "taxation", title: "Taxation", description: "Income tax, GST and tax planning", pdf: "/pdfs/commerce/taxation.pdf", video: "https://www.youtube.com/embed/s26J5zFCKs8", duration: "62 min" },
    ],
  },
  {
    id: "computer-applications",
    name: "Computer Applications",
    icon: "monitor",
    gradient: "from-cyan-500 to-blue-400",
    glowColor: "rgba(6,182,212,0.6)",
    description: "Programming, databases, networking and web",
    chapters: [
      { id: "programming", title: "Programming in C++", description: "Variables, loops, functions and OOP", pdf: "/pdfs/cs/cpp.pdf", video: "https://www.youtube.com/embed/vLnPwxZdW4Y", duration: "72 min" },
      { id: "database", title: "Database Management", description: "SQL, tables and relational databases", pdf: "/pdfs/cs/database.pdf", video: "https://www.youtube.com/embed/HXV3zeQKqGY", duration: "68 min" },
      { id: "networking", title: "Computer Networks", description: "OSI model, protocols and internet", pdf: "/pdfs/cs/networking.pdf", video: "https://www.youtube.com/embed/3QhU9jd03a0", duration: "60 min" },
      { id: "web", title: "Web Development", description: "HTML, CSS and JavaScript basics", pdf: "/pdfs/cs/web.pdf", video: "https://www.youtube.com/embed/PlxWf493en4", duration: "75 min" },
      { id: "os", title: "Operating Systems", description: "Process, memory and file management", pdf: "/pdfs/cs/os.pdf", video: "https://www.youtube.com/embed/26QPDBe-NB8", duration: "65 min" },
    ],
  },
  {
    id: "ai-robotics",
    name: "AI & Robotics",
    icon: "cpu",
    gradient: "from-violet-500 to-fuchsia-400",
    glowColor: "rgba(139,92,246,0.6)",
    description: "Artificial intelligence, ML and robotic systems",
    chapters: [
      { id: "intro-ai", title: "Introduction to AI", description: "History, types and applications of AI", pdf: "/pdfs/ai/intro.pdf", video: "https://www.youtube.com/embed/JMUxmLyrhSk", duration: "58 min" },
      { id: "ml", title: "Machine Learning", description: "Supervised, unsupervised and reinforcement learning", pdf: "/pdfs/ai/ml.pdf", video: "https://www.youtube.com/embed/GwIo3gDZCVQ", duration: "72 min" },
      { id: "neural", title: "Neural Networks", description: "Perceptrons, layers and deep learning", pdf: "/pdfs/ai/neural.pdf", video: "https://www.youtube.com/embed/aircAruvnKk", duration: "68 min" },
      { id: "robotics", title: "Robotics Fundamentals", description: "Sensors, actuators and robot kinematics", pdf: "/pdfs/ai/robotics.pdf", video: "https://www.youtube.com/embed/Bd_yCwpYxhE", duration: "62 min" },
      { id: "nlp", title: "Natural Language Processing", description: "Text processing, chatbots and transformers", pdf: "/pdfs/ai/nlp.pdf", video: "https://www.youtube.com/embed/CMrHM8a3hqw", duration: "75 min" },
    ],
  },
];
