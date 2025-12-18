export interface QAPair {
  keywords: string[];
  response: string;
}

export const chatResponses: QAPair[] = [
  // Greetings
  {
    keywords: ['hi', 'hello', 'hey', 'greetings', 'howdy'],
    response: "Hey there! I'm Shubham's AI assistant. I can tell you about his skills, projects, experience, or how to get in touch. What would you like to know?"
  },

  // About
  {
    keywords: ['who', 'about', 'tell me about', 'introduce', 'yourself'],
    response: "Shubham Rahangdale is an AI/ML Engineer from Bhopal, India. He's pursuing B.Tech in AI & ML at SIRT with a 7.67 CGPA. He specializes in Generative AI, RAG systems, and building intelligent applications. He's worked on projects ranging from fruit freshness detection to banking API assistants!"
  },

  // Education
  {
    keywords: ['education', 'study', 'college', 'university', 'degree', 'cgpa', 'qualification'],
    response: "Shubham is pursuing B.Tech in Artificial Intelligence and Machine Learning at Sagar Institute of Research and Technology (SIRT), Bhopal. His current CGPA is 7.67/10. His coursework includes Machine Learning, AI, Data Science, and Computer Vision. He completed Class XII from C.J. Patel College, Tirora with 80%."
  },

  // Skills
  {
    keywords: ['skills', 'technologies', 'tech stack', 'programming', 'languages', 'what can'],
    response: "Shubham is skilled in: Python (95%), FastAPI, Flask, LangChain, RAG systems, TensorFlow, Scikit-learn, Selenium, Playwright, and more. He works with AI tools like Ollama, FAISS, ChromaDB, and Gemini API. He's also proficient in SQL, NumPy, Pandas, and Power BI for data analysis!"
  },

  // Experience
  {
    keywords: ['experience', 'work', 'internship', 'job', 'career', 'professional'],
    response: "Shubham has impressive experience: 1) AI Intern at Inventohack Innovations - built GreenScan fruit freshness detection with Gemini API. 2) AI Engineer Intern at Prevoyance IT Solutions - developed ICICI Bank API Assistant using RAG & Ollama. 3) Government project for Ghana via protean.gov - built e-commerce data extraction pipelines."
  },

  // Projects
  {
    keywords: ['projects', 'portfolio', 'work samples', 'built', 'created', 'developed'],
    response: "Shubham's key projects: 1) AI-Powered Smart Bank API Search - Banking assistant using FastAPI, FAISS, RAG & Ollama. 2) GreenScan - Fruit freshness detection with Gemini API. 3) Heart Disease Diagnosis - ML model with copyright (L-157174/2024), presented at IIT Mandi. Check his GitHub: github.com/TR0J49!"
  },

  // Achievements
  {
    keywords: ['achievements', 'awards', 'recognition', 'hackathon', 'competition', 'accomplishments'],
    response: "Shubham's achievements: Data Analytics Lead at GDG, Finalist in ML Matchup Challenge (200+ teams), 4th Place at Version Beta Hackathon (MANIT Bhopal), Top 5 at TechNext Hackathon (IIT BHU). He also has a Code Copyright (L-157174/2024) for his cardiovascular disease prediction model!"
  },

  // Contact
  {
    keywords: ['contact', 'reach', 'email', 'phone', 'hire', 'connect', 'message'],
    response: "You can reach Shubham at: Email: rahangdaleshubham2003@gmail.com | Phone: +91 9284941351 | LinkedIn: linkedin.com/in/shubham-ai-ml | GitHub: github.com/TR0J49. He's currently open to AI/ML internships and full-time opportunities!"
  },

  // Location
  {
    keywords: ['location', 'where', 'city', 'based', 'live'],
    response: "Shubham is based in Bhopal, Madhya Pradesh, India. He's open to both remote and on-site opportunities!"
  },

  // AI/ML Specific
  {
    keywords: ['rag', 'generative ai', 'llm', 'langchain', 'ollama'],
    response: "Shubham specializes in RAG (Retrieval Augmented Generation) systems! He's built the ICICI Bank API Assistant using LangChain, FAISS, ChromaDB, and Ollama. He has hands-on experience with Gemini API and building production-ready GenAI applications."
  },

  // Web Scraping
  {
    keywords: ['scraping', 'selenium', 'playwright', 'automation', 'data extraction'],
    response: "Shubham is an expert in web scraping and automation! He's used Selenium, Playwright, and Beautiful Soup for a government project (Ghana via protean.gov), building automated e-commerce data extraction pipelines with Ollama LLM integration."
  },

  // Data Science
  {
    keywords: ['data science', 'analysis', 'pandas', 'numpy', 'visualization'],
    response: "Shubham has strong data science skills with NumPy, Pandas, and Scikit-learn. He's also the Data Analytics Lead at Google Developer Group (GDG). He uses Power BI for visualization and has experience with PostgreSQL for database management."
  },

  // GDG
  {
    keywords: ['gdg', 'google', 'developer group', 'community', 'lead'],
    response: "Shubham is the Data Analytics Lead at Google Developer Group (GDG)! He leads analytics initiatives and promotes Google technologies within the developer community."
  },

  // Availability
  {
    keywords: ['available', 'hire', 'opportunity', 'job', 'position', 'internship', 'work with'],
    response: "Yes! Shubham is currently available and actively looking for AI/ML opportunities - both internships and full-time positions. He's open to remote and on-site roles. Reach out at rahangdaleshubham2003@gmail.com!"
  },

  // Thanks
  {
    keywords: ['thank', 'thanks', 'appreciate', 'helpful'],
    response: "You're welcome! Feel free to ask more questions about Shubham's skills, projects, or how to get in touch. Good luck!"
  },

  // Bye
  {
    keywords: ['bye', 'goodbye', 'see you', 'later'],
    response: "Goodbye! Don't forget to connect with Shubham on LinkedIn or check out his GitHub projects. Take care!"
  }
];

export const defaultResponse = "I'm not sure about that. Try asking about Shubham's skills, projects, experience, education, or how to contact him!";

export const findResponse = (message: string): string => {
  const lowerMessage = message.toLowerCase();

  for (const qa of chatResponses) {
    for (const keyword of qa.keywords) {
      if (lowerMessage.includes(keyword)) {
        return qa.response;
      }
    }
  }

  return defaultResponse;
};
