// ============================================================
// portfolioData.js — Centralized configuration for the portfolio
// All external links, personal info, and content in one place.
// ============================================================

export const personalInfo = {
  name: "Damisetti Lohitha Lohitha",
  firstName: "Lohitha",
  brandName: "Lohitha",
  title: "Full Stack & Backend Engineer",
  location: "India",
  phone: "+91 9640225564",
  emails: {
    primary: "damisettilohitha@gmail.com",
    secondary: "damisettilohitha@gmail.com",
  },
  summary:
    "Full-stack and backend engineer passionate about building scalable, production-ready applications. Expert in designing distributed systems, AI/ML integration, blockchain solutions, and cloud-native architectures. Strong foundation in system design, API development, and solving real-world problems through technology.",
  resumeUrl: "/Lohitha_Resume_2026.pdf",
};

export const socialLinks = {
  github: "https://github.com/lohithadamisetti123/",
  linkedin: "https://www.linkedin.com/in/lohitha-damisetti-2bb36829a/",
  instagram: "https://www.instagram.com/sl_tech_journal?igsh=cGpkdThieTVhNmVu&utm_source=qr",
};

export const heroContent = {
  greeting: "Hi, I'm Lohitha",
  titleHighlight: "Full Stack & Backend Engineer",
  subtitle:
    "Building scalable applications, AI-powered solutions, backend systems, and modern web applications. AI & Data Science Enthusiast",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "#contact",
  },
  ctaResume: { text: "Download Resume", href: "/Lohitha_Resume_2026.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Damisetti Lohitha Lohitha</span>, a full-stack and backend engineer passionate about solving real-world problems through technology. B.Tech Data Science Student (2023-2027) at Aditya College of Engineering and Technology. Strong believer in continuous learning and building production-ready applications. I specialize in designing scalable backend systems, developing AI-powered solutions, and building modern web applications with focus on clean architecture and reliable systems.`,
  techStack: ["React", "Node.js", "Java", "Spring Boot", "Python", "PostgreSQL", "MongoDB", "Docker", "AWS", "AI/ML"],
  highlights: [
    "⭐ 9.13 CGPA | Department Topper",
    "⭐ 450+ LeetCode Problems Solved",
    "⭐ 500+ CodeChef Problems Solved",
    "⭐ 250+ GeeksforGeeks Problems Solved",
    "⭐ 40+ Production-Ready Projects",
    "⭐ Adobe & HackerEarth Hackathon Finalist"
  ]
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into robust web applications",
  description:
    "I combine product thinking, clean architecture, and hands-on engineering to build dependable digital experiences.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding requirements, constraints, and user needs to shape the solution clearly.",
    },
    {
      number: "02",
      title: "Design",
      text: "I build intuitive interfaces and scalable system structure with maintainability in mind.",
    },
    {
      number: "03",
      title: "Develop",
      text: "I implement full-stack features using modern frameworks, APIs, and database services.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "I focus on performance, reliability, and clean deployment practices for real-world use.",
    },
  ],
  endText: "Ready to build!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "C++", level: 90 },
        { name: "Java", level: 88 },
        { name: "Python", level: 84 },
        { name: "JavaScript", level: 90 },
        { name: "Go", level: 80 },
        { name: "Solidity", level: 82 },
        { name: "SQL", level: 86 },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: 92 },
        { name: "React Native", level: 78 },
        { name: "Next.js", level: 85 },
        { name: "Electron.js", level: 82 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Bootstrap", level: 85 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 88 },
        { name: "REST API Development", level: 92 },
        { name: "Spring Boot", level: 82 },
        { name: "FastAPI", level: 80 },
      ],
    },
    {
      title: "Databases & Caching",
      skills: [
        { name: "MongoDB", level: 88 },
        { name: "PostgreSQL", level: 84 },
        { name: "MySQL", level: 82 },
        { name: "Redis", level: 80 },
        { name: "Delta Lake", level: 75 },
        { name: "DuckDB", level: 78 },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Docker", level: 84 },
        { name: "Git", level: 90 },
        { name: "GitHub", level: 90 },
        { name: "Linux", level: 85 },
        { name: "JWT", level: 85 },
        { name: "Swagger", level: 82 },
        { name: "Postman", level: 88 },
        { name: "AWS", level: 80 },
      ],
    },
    {
      title: "Core Concepts",
      skills: [
        { name: "Data Structures & Algorithms", level: 88 },
        { name: "OOP", level: 90 },
        { name: "System Design", level: 84 },
        { name: "API Design", level: 86 },
        { name: "Multi-Tenant Architecture", level: 82 },
        { name: "Microservices", level: 80 },
        { name: "Event-Driven Architecture", level: 82 },
      ],
    },
    {
      title: "Advanced Technologies",
      skills: [
        { name: "AI & Machine Learning", level: 82 },
        { name: "OpenAI API", level: 85 },
        { name: "Gemini API", level: 82 },
        { name: "Apache Kafka", level: 80 },
        { name: "RabbitMQ", level: 78 },
        { name: "Blockchain & Solidity", level: 82 },
        { name: "Smart Contracts", level: 80 },
      ],
    },
  ],
};

export const contentCreation = {
  badge: "Engineering Excellence",
  heading: "Building scalable solutions across multiple domains",
  description: "Expertise in backend systems, AI-powered solutions, distributed architectures, and production-ready applications with strong focus on clean code and system reliability.",
  categories: [
    {
      title: "Backend Systems",
      description: "REST APIs, Authentication, Payment Gateways, Multi-Tenant SaaS, Caching, and Database optimization.",
      stats: "Node.js / Spring Boot",
      icon: "⚙️",
    },
    {
      title: "Distributed Systems",
      description: "Apache Kafka, RabbitMQ, Event-Driven Architecture, CQRS, Event Sourcing, and CDC Pipelines.",
      stats: "Message Queues & Streaming",
      icon: "🌐",
    },
    {
      title: "Artificial Intelligence",
      description: "LLM Applications, OpenAI API, Gemini API, Ollama, Prompt Engineering, and AI Chatbots.",
      stats: "AI & Machine Learning",
      icon: "🧠",
    },
    {
      title: "Blockchain",
      description: "Smart Contracts, ERC20/ERC721, DAO, DEX, Chainlink CCIP, and Omnichain Applications.",
      stats: "Web3 & Smart Contracts",
      icon: "⛓️",
    },
    {
      title: "Data Engineering",
      description: "Kafka, ETL Pipelines, Delta Lake, DuckDB, Data Warehousing, and Apache Flink.",
      stats: "Data & Analytics",
      icon: "📊",
    },
    {
      title: "Frontend Development",
      description: "React, React Native, Electron, Next.js, and responsive UI design with Tailwind CSS.",
      stats: "Modern UIs & UX",
      icon: "🎨",
    },
  ],
};

export const leadershipList = [
  {
    title: "Google Cloud Career Launchpad – Data Analytics Track",
    description: "Completed a structured career learning program focused on analytics, cloud fundamentals, and applied technical growth.",
    role: "Learner & Program Participant",
    badge: "Growth",
  },
  {
    title: "Technical Hub Pvt Ltd",
    description: "Completed a full-stack training program and built responsive web applications while strengthening practical development skills.",
    role: "Full Stack Trainee",
    badge: "Training",
  },
  {
    title: "Academic and Event Coordination",
    description: "Developed strong collaboration, communication, and leadership skills through college events and team-based initiatives.",
    role: "Coordinator & Collaborator",
    badge: "Leadership",
  },
];

export const internshipsList = [
  {
    organization: "Technical Hub Pvt Ltd",
    role: "Full Stack Development Trainee",
    type: "Internship",
    duration: "May 2025 – June 2025",
    skills: ["Full Stack Development", "Responsive Web Apps", "Practical Engineering"],
    tech: ["React", "Node.js", "MongoDB", "REST APIs"],
  },
  {
    organization: "Technical Hub Pvt Ltd",
    role: "Full Stack Development with React Native Trainee",
    type: "Internship",
    duration: "May 2026 – June 2026",
    skills: ["Mobile App Development", "Cross-Platform Development", "API Integration", "State Management"],
    tech: ["React Native", "Redux / Context API", "Firebase", "Expo CLI", "Android Studio"],
  },
  {
    organization: "Global Placement Program (GPP)",
    role: "Software Engineering Trainee",
    type: "Industry Training Program",
    duration: "June 2025 – Present",
    skills: [
      "Industry-Level Software Development",
      "System Design & Architecture",
      "Distributed Systems",
      "AI/LLM Application Development",
      "Backend Engineering",
      "Problem Solving & Team Collaboration"
    ],
    tech: ["React.js", "Node.js", "Spring Boot", "FastAPI", "PostgreSQL", "MongoDB", "Docker", "Apache Kafka", "Redis", "OpenAI API"],
  }
];

export const softSkillsList = [
  { name: "Leadership", icon: "👑", desc: "Guiding team efforts and coordinating work with clarity and responsibility." },
  { name: "Public Speaking", icon: "🎤", desc: "Confident communication and presentation skills developed through collaborative and event-based experiences." },
  { name: "Team Collaboration", icon: "🤝", desc: "Working effectively with peers and building shared momentum across projects." },
  { name: "Communication", icon: "💬", desc: "Clear technical and professional communication with a strong sense of detail." },
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down technical challenges into practical, efficient solutions." },
  { name: "Adaptability", icon: "🌟", desc: "Quick to learn new tools, frameworks, and development workflows." },
  { name: "Creativity", icon: "🎨", desc: "Balancing user experience, design, and engineering with thoughtful execution." },
  { name: "Time Management", icon: "⏰", desc: "Managing learning, projects, and responsibilities with consistency and focus." },
];

export const projects = [
  {
    id: "policyguard",
    number: "01",
    badge: "🚀 Featured Project",
    title: "PolicyGuard AI",
    description:
      "An AI-powered Privacy Risk Analyzer that automatically analyzes Privacy Policies and Terms & Conditions for desktop, web, and mobile applications. Features AI risk detection, privacy score generation, real-time desktop monitoring, and security alerts.",
    techTags: ["React", "React Native", "Electron.js", "Node.js", "Express.js", "MongoDB Atlas", "OpenAI API", "NLP", "Tailwind CSS", "Docker"],
    links: {
      github: "https://github.com/lohithadamisetti123/PolicyGuard-AI",
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "saas-platform",
    number: "02",
    badge: null,
    title: "Multi-Tenant SaaS Platform",
    description:
      "A production-ready SaaS platform supporting multiple organizations with secure tenant isolation, RBAC, and team management. Includes real-time task tracking, project management, and granular role-based access control.",
    techTags: ["Node.js", "Express.js", "PostgreSQL", "React", "Docker", "JWT", "RBAC"],
    links: {
      github: "https://github.com/lohithadamisetti123/Multi-Tenant-SaaS-Platform",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "payment-gateway",
    number: "03",
    badge: null,
    title: "Payment Gateway System",
    description:
      "A complete financial payment gateway supporting hosted checkouts, merchant dashboards, UPI, and card payments. Includes merchant order management, secure payment flows, and transaction tracking.",
    techTags: ["Spring Boot", "Node.js", "React", "PostgreSQL", "Docker", "REST APIs", "Payment Integration"],
    links: {
      github: "https://github.com/lohithadamisetti123/payment-gateway-deliverable2",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "tech360-portal",
    number: "04",
    badge: null,
    title: "Tech360 Portal",
    description:
      "Collaborated in a team of six to build a unified hub empowering students and developers through real-time career resources. Features live contest tracking, DSA learning platform, dynamic resume builder, and job drive modules.",
    techTags: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Contest Tracker API", "Team Lead Role"],
    links: {
      github: "https://github.com/lohithadamisetti123/Tech360",
      demo: null,
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "CLA: Programming Essentials in C/C++",
      issuer: "Cisco Networking Academy",
      icon: "💻",
    },
    {
      name: "HTML & CSS",
      issuer: "Certiport IT Pearson",
      icon: "🌐",
    },
    {
      name: "Python & Introduction to Data Science",
      issuer: "Cisco Networking Academy",
      icon: "🐍",
    },
    {
      name: "Java Foundations",
      issuer: "Oracle Certified Foundations Associate",
      icon: "☕",
    },
    {
      name: "JavaScript Essentials 1 & 2",
      issuer: "Cisco Networking Academy",
      icon: "⚡",
    },
    {
      name: "Google Cloud Career Launchpad – Data Analytics Track",
      issuer: "Google Cloud",
      icon: "☁️",
    },
    {
      name: "MongoDB Certified Associate Developer",
      issuer: "MongoDB",
      icon: "🗄️",
    },
    {
      name: "GitHub Foundations",
      issuer: "Microsoft",
      icon: "🐙",
    },
  ],
  viewAllUrl: "https://drive.google.com/drive/folders/1KAzZNVsiafrUw9DHKvzEc-LusKSMz9tG?usp=sharing",
};

export const education = {
  degree: "B.Tech in Data Science",
  institution: "Aditya College of Engineering and Technology, Surampalem",
  cgpa: "9.13",
  graduation: "2027",
  twelfth: "Intermediate (MPC) – 90.60%",
  tenth: "Senior Secondary – Completed",
  achievements: [
    "⭐ Department Topper with 9.13 CGPA",
    "⭐ 450+ LeetCode Problems Solved",
    "⭐ 500+ CodeChef Problems Solved",
    "⭐ 250+ GeeksforGeeks Problems Solved",
    "⭐ 15+ HackerRank Badges",
    "⭐ Adobe Hackathon Round 1 Finalist",
    "⭐ HackerEarth Hackathon Round 1 Finalist",
    "⭐ 40+ Industry-Grade Software Engineering Projects Completed"
  ]
};

export const footerContent = {
  taglines: [
    "Full-Stack & Backend Engineering",
    "React · Node.js · Java · Spring Boot",
    "Scalable Web Applications & Distributed Systems",
  ],
  credential: "B.Tech Data Science · CGPA 9.13 · Department Topper",
  copyright: `© ${new Date().getFullYear()} Lohitha | Built with React | Passion for Scalable Solutions`,
};

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
