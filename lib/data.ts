export const personalInfo = {
  name: "Shubham Rahangdale",
  title: "AI Engineer & ML Enthusiast",
  location: "Bhopal, Madhya Pradesh, India",
  email: "rahangdaleshubham2003@gmail.com",
  phone: "+91 9284941351",
  linkedin: "https://linkedin.com/in/shubham-ai-ml",
  github: "https://github.com/TR0J49",
  roles: [
    "AI Engineer",
    "Machine Learning Developer",
    "Data Scientist",
    "Python Developer",
    "GenAI Enthusiast"
  ],
  bio: `Passionate AI/ML Engineer with hands-on experience in building intelligent systems,
  from fruit freshness detection to banking API assistants. I specialize in Generative AI,
  RAG systems, and full-stack AI application development. Currently pursuing B.Tech in
  AI & ML with a strong foundation in Python, FastAPI, and modern AI frameworks.`
};

export const education = [
  {
    institution: "Sagar Institute of Research and Technology",
    degree: "B.Tech in Artificial Intelligence and Machine Learning",
    cgpa: "7.67 / 10",
    coursework: ["Machine Learning", "Artificial Intelligence", "Data Science", "Computer Vision"],
    current: true
  },
  {
    institution: "C. J. Patel College, Tirora",
    degree: "Class XII",
    percentage: "80.00%",
    current: false
  }
];

export const skills = {
  languages: [
    { name: "Python", level: 95 },
    { name: "SQL", level: 85 },
    { name: "JavaScript", level: 75 }
  ],
  frameworks: [
    { name: "FastAPI", level: 90 },
    { name: "Flask", level: 85 },
    { name: "LangChain", level: 88 },
    { name: "TensorFlow", level: 80 },
    { name: "Scikit-learn", level: 85 }
  ],
  ai_tools: [
    { name: "RAG Systems", level: 90 },
    { name: "Ollama", level: 88 },
    { name: "ChromaDB", level: 85 },
    { name: "FAISS", level: 85 },
    { name: "Gemini API", level: 82 }
  ],
  scraping: [
    { name: "Selenium", level: 90 },
    { name: "Playwright", level: 85 },
    { name: "Beautiful Soup", level: 88 }
  ],
  tools: [
    { name: "Git/GitHub", level: 90 },
    { name: "VS Code", level: 95 },
    { name: "Google Colab", level: 90 },
    { name: "Power BI", level: 75 },
    { name: "pgAdmin 4", level: 80 }
  ],
  data: [
    { name: "NumPy", level: 90 },
    { name: "Pandas", level: 92 },
    { name: "Data Analysis", level: 88 }
  ]
};

export const experiences = [
  {
    title: "Data Analytics Lead",
    company: "Google Developer Group (GDG) On Campus",
    location: "Bhopal",
    period: "GDG Bhopal",
    highlights: [
      "Led data analytics initiatives and promoted Google technologies across campus",
      "Successfully organized major tech events including DevFest and Bhopal ML Day",
      "Mentored 20+ students in data analytics, machine learning, and Google technologies",
      "Built a strong tech community fostering learning and collaboration"
    ],
    tech: ["Data Analytics", "Event Management", "Mentorship", "Google Technologies", "Community Building"]
  },
  {
    title: "AI Intern",
    company: "Inventohack Innovations Pvt. Ltd.",
    location: "Bhopal",
    period: "Accomplished",
    highlights: [
      "Built GreenScan, an AI-based fruit freshness detection system using Gemini API and USDA nutrition datasets",
      "Developed a health-focused food recommendation engine using user profile and dietary constraints",
      "Integrated Flask backend with Android WebView for real-time image-based analysis"
    ],
    tech: ["Gemini API", "Flask", "Python", "Android WebView"]
  },
  {
    title: "AI Engineer Intern",
    company: "Prevoyance IT Solutions Pvt. Ltd.",
    location: "Nagpur",
    period: "Recent",
    highlights: [
      "Developed a Generative AI-powered Banking API Assistant for ICICI Bank using FastAPI, FAISS, ChromaDB, RAG, and Ollama",
      "Enabled multilingual, session-aware conversational search for UPI and banking APIs",
      "Built production-ready AI search system"
    ],
    tech: ["FastAPI", "FAISS", "ChromaDB", "RAG", "Ollama"],
    github: "https://github.com/TR0J49",
    governmentProject: {
      title: "Government Project - protean.gov",
      client: "Ghana International Client",
      highlights: [
        "Worked on a government-associated project via protean.gov for an international client in Ghana",
        "Built automated e-commerce data extraction pipelines using Selenium, Playwright, Beautiful Soup, and Ollama LLM",
        "Developed FastAPI-based REST services and lightweight web dashboards for data validation and analytics"
      ],
      tech: ["Selenium", "Playwright", "Beautiful Soup", "FastAPI", "Ollama LLM", "HTML", "CSS", "JavaScript"]
    }
  }
];

export const projects = [
  {
    title: "Covexis AI - Banking AI Finance Assistant",
    description: "Enterprise AI platform unifying Smart AI Chat, DocIQ (RAG-powered document intelligence), VizIQ (no-code analytics & dashboards), Smart Tasks (AI-powered task management), and Reminders. Built on cutting-edge LLM and RAG technology with 6+ AI modules for maximum productivity.",
    tech: ["LLM", "RAG", "AI Chat", "Document Intelligence", "Data Visualization", "Task Automation"],
    stats: { modules: "6+", privacy: "100% Private", performance: "10x" },
    featured: true
  },
  {
    title: "AI-Powered Smart Bank API Search System",
    description: "Generative AI-powered Banking API Assistant developed for ICICI Bank. Features multilingual, session-aware conversational search for UPI and banking APIs with intelligent query understanding and context retention.",
    tech: ["FastAPI", "FAISS", "ChromaDB", "RAG", "Ollama"],
    github: "https://github.com/TR0J49",
    featured: true,
    highlights: [
      "Built RAG-based conversational AI using FAISS & ChromaDB for semantic API search",
      "Enabled multilingual support with session-aware context for banking queries",
      "Developed production-ready FastAPI backend with Ollama LLM integration"
    ]
  },
  {
    title: "GreenScan - Fruit Freshness Detection",
    description: "AI-based fruit freshness detection system using Gemini API and USDA nutrition datasets with real-time image analysis.",
    tech: ["Gemini API", "Flask", "Python", "Computer Vision"],
    featured: true
  },
  {
    title: "Heart Disease Diagnosis (Deep Learning)",
    description: "Machine Learning model for prediction of cardiovascular diseases. Presented at Anusandhan 2.0 - International Innovation and Research Fair, IIT Mandi.",
    tech: ["Deep Learning", "Python", "Scikit-learn", "TensorFlow"],
    github: "https://github.com/TR0J49",
    featured: true
  },
  {
    title: "E-commerce Data Extraction Pipeline",
    description: "Automated data extraction system for government project with web dashboards for data validation and analytics.",
    tech: ["Selenium", "Playwright", "FastAPI", "Ollama LLM"],
    featured: false
  },
  {
    title: "Passport Agency Customer Management System",
    description: "Freelance project for a passport agency - a comprehensive customer data storage and management system with secure data handling, customer records management, and streamlined application tracking.",
    tech: ["React", "Node.js", "MongoDB", "Express.js"],
    type: "Freelance",
    featured: true
  },
  {
    title: "Krishi Mitra AI - AgriTech Platform",
    description: "Comprehensive AI-powered agricultural platform featuring Crop Recommendation, AI Farming Assistant, Disease Detection, Real-time Market Prices, Smart Sell Recommendations, and a Farmer-Buyer Marketplace where farmers can register, list products, and connect directly with buyers.",
    tech: ["AI/ML", "Computer Vision", "RAG", "React", "Node.js", "MongoDB"],
    stats: { features: "6+", type: "AgriTech", impact: "Farmer Empowerment" },
    featured: true
  }
];

export const publications = [
  {
    title: "A Model for Prediction of Cardiovascular Diseases Using Machine Learning",
    type: "Code Copyright",
    registrationNo: "L-157174/2024",
    event: "Presented at Anusandhan 2.0 – International Innovation and Research Fair, IIT Mandi",
    github: "https://github.com/TR0J49",
    certificate: "/Project_Copyright_Certificate.pdf",
    poster: "/Heart_Disease_Poster.jpg",
    researchPaper: "/Cardio_Research_Paper.pdf",
    highlights: [
      "Developed predictive models using Random Forest, SVM, KNN & Linear Regression for early cardiovascular disease detection",
      "Processed patient datasets comprising age, gender, blood pressure, cholesterol levels & smoking habits for risk analysis",
      "Implemented real-time patient monitoring system with GSM-based instant doctor notification on critical threshold breaches",
      "Designed comparative ML framework analyzing model performance with GridSearchCV optimization techniques"
    ]
  }
];

export const achievements = [
  {
    title: "Data Analytics Lead",
    organization: "Google Developer Group (GDG)",
    description: "Led analytics initiatives and promoted Google technologies"
  },
  {
    title: "Finalist",
    organization: "Machine Learning Matchup Challenge",
    description: "National-level AI/ML competition with 200+ teams"
  },
  {
    title: "4th Place",
    organization: "Version Beta Hackathon",
    description: "AI solution at MANIT Bhopal"
  },
  {
    title: "Top 5",
    organization: "TechNext Hackathon, IIT BHU",
    description: "Data-driven application among top teams"
  }
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Publications", href: "#publications" },
  { name: "Contact", href: "#contact" }
];
