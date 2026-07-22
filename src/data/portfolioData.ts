export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: "ai-ml" | "fullstack" | "frontend" | "django-backend";
  image: string;
  featured: boolean;
  problem: string;
  solution: string;
  keyFeatures: string[];
  engineeringChallenges: string[];
  whatILearned: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl: string;
  date: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: {
    name: string;
    level: number; // 0 - 100
    iconName: string;
    badge?: string;
    description: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: "Full-time" | "Part-time" | "Internship" | "Community" | "Contract";
  description: string;
  highlights: string[];
  skills: string[];
  logo?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  details: string;
  courses: string[];
  highlights: string[];
}

export interface MetricItem {
  id: string;
  label: string;
  value: number;
  suffix: string;
  description: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Hassan Rasool",
    role: "AI Engineer & Full Stack Software Engineer",
    headlines: [
      "AI Engineer",
      "Full Stack Software Developer",
      "Computer Vision Specialist",
      "Python & Django Architect",
      "React & Next.js Engineer"
    ],
    bio: "Passionate AI & Full Stack Engineer with a strong foundation in computer vision, deep learning, and scalable web architectures. Experienced in building production-ready AI applications from dataset preprocessing and model optimization to cloud API deployment and high-performance frontend interfaces.",
    shortBio: "Building complete AI-powered software products from idea to production deployment.",
    location: "Pakistan",
    email: "rasoolhassan027@gmail.com",
    whatsapp: "+92 300 0000000",
    status: "Available for Full-time Roles & AI Projects",
    resumeUrl: "https://drive.google.com/file/d/17bwhjIfddNS4QcI5DQcLn0V0REZngdDS/view?usp=sharing",
    socials: {
      github: "https://github.com/Hassanspace",
      linkedin: "https://www.linkedin.com/in/hassan-rasool-0b81a3318/",
      instagram: "https://www.instagram.com/hass_anrasool/",
      portfolio: "https://hassansden.netlify.app/"
    }
  },

  metrics: [
    {
      id: "projects",
      label: "Production Projects",
      value: 15,
      suffix: "+",
      description: "AI, Full-Stack MERN & Django applications created"
    },
    {
      id: "cgpa",
      label: "University CGPA",
      value: 3.57,
      suffix: " / 4.0",
      description: "BS Software Engineering (Recent Semester SGPA: 3.95)"
    },
    {
      id: "experience",
      label: "Engineering Exp",
      value: 2,
      suffix: "+ Yrs",
      description: "Hands-on experience in software & AI development"
    },
    {
      id: "technologies",
      label: "Core Tech Stack",
      value: 12,
      suffix: "+",
      description: "Mastered tools spanning AI/ML, Cloud, DBs & Web Frameworks"
    }
  ] as MetricItem[],

  skillCategories: [
    {
      id: "ai-ml",
      title: "Artificial Intelligence & Computer Vision",
      description: "Deep learning models, real-time pose estimation, model deployment, and natural language processing.",
      skills: [
        { name: "Python", level: 95, iconName: "Py", badge: "Core", description: "Primary language for ML, scripting, data pipelines & Django backends" },
        { name: "Computer Vision (OpenCV/MediaPipe)", level: 88, iconName: "CV", badge: "Specialty", description: "Real-time keypoint extraction, object detection & video stream processing" },
        { name: "PyTorch & TensorFlow", level: 82, iconName: "AI", description: "Model training, transfer learning & neural architecture prototyping" },
        { name: "LLMs & RAG Pipelines", level: 85, iconName: "LLM", badge: "GenAI", description: "Prompt engineering, vector embeddings & document retrieval context injection" },
        { name: "Scikit-Learn & Pandas", level: 90, iconName: "ML", description: "Feature engineering, dataset cleaning & statistical predictive modeling" }
      ]
    },
    {
      id: "frontend",
      title: "Frontend Engineering",
      description: "Building responsive, modern, type-safe, and visually captivating client applications.",
      skills: [
        { name: "React 19 & Next.js 15", level: 92, iconName: "React", badge: "Primary", description: "Server Components, App Router, hooks, state management & SSR" },
        { name: "TypeScript", level: 90, iconName: "TS", badge: "TypeSafe", description: "Strict typing, generics, interface definitions & scalable architectures" },
        { name: "Tailwind CSS", level: 95, iconName: "Tailwind", description: "Custom utility-first design systems, responsive layouts & glassmorphism" },
        { name: "Framer Motion", level: 85, iconName: "Motion", description: "Micro-interactions, layout transitions & dynamic UI orchestrations" },
        { name: "HTML5 / CSS3 / ES6+", level: 95, iconName: "Web", description: "Semantic web standards, accessibility standards & performance optimization" }
      ]
    },
    {
      id: "backend",
      title: "Backend & System Design",
      description: "Scalable REST APIs, authentication security, database management, and server side logic.",
      skills: [
        { name: "Django & Django REST", level: 90, iconName: "Django", badge: "Backend", description: "ORM query optimization, custom authentication pipelines, OTP verification & admin dashboards" },
        { name: "Node.js & Express", level: 85, iconName: "Node", description: "Asynchronous backend APIs, middleware pipelines & JSON web tokens" },
        { name: "RESTful API Architecture", level: 92, iconName: "API", description: "Clean API versioning, error handling, rate limiting & OpenAPI docs" },
        { name: "User Auth & Security (OTP/JWT)", level: 88, iconName: "Auth", description: "Multi-factor OTP security, password hashing & session token refresh" }
      ]
    },
    {
      id: "databases",
      title: "Databases & Storage",
      description: "Relational database modeling, NoSQL document stores, and cache layer implementations.",
      skills: [
        { name: "SQL (PostgreSQL / SQLite)", level: 88, iconName: "SQL", badge: "Relational", description: "Schema normalization, indexing, complex JOIN queries & ACID transactions" },
        { name: "MongoDB", level: 85, iconName: "Mongo", badge: "NoSQL", description: "Aggregation frameworks, document schema design & indexing" },
        { name: "Firebase", level: 80, iconName: "Firebase", description: "Realtime Database, Cloud Storage & authentication integration" }
      ]
    },
    {
      id: "tools",
      title: "Developer Tools & Workflow",
      description: "Version control, container basics, environment tooling, and debugging.",
      skills: [
        { name: "Git & GitHub", level: 92, iconName: "Git", badge: "Essential", description: "Branch management, pull requests, CI/CD basics & GitHub Actions" },
        { name: "VS Code & Neovim", level: 95, iconName: "IDE", description: "Advanced debugging, linting setup & productive extension ecosystems" },
        { name: "Postman & API Testing", level: 90, iconName: "Postman", description: "API request automated suites, mock server setups & environment variables" },
        { name: "Vite / Webpack / Next Dev", level: 88, iconName: "Build", description: "Bundler configuration, fast refresh setup & asset optimization" }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "ai-fitness-trainer",
      title: "AI Fitness Trainer & Pose Corrector",
      subtitle: "Computer Vision real-time exercise feedback dashboard",
      description: "An intelligent computer vision web application that analyzes user body posture during workouts via webcam stream, counts rep iterations accurately, detects improper form, and displays real-time posture correction cues.",
      category: "ai-ml",
      image: "/images/ai-fitness-trainer.png",
      featured: true,
      problem: "Fitness enthusiasts frequently suffer injuries due to incorrect workout form when training without a certified personal trainer.",
      solution: "Engineered a low-latency Computer Vision pipeline utilizing MediaPipe Pose landmark detection and PyTorch custom angle calculators to analyze joint angles in real time.",
      keyFeatures: [
        "Real-time 33-point body landmark detection via webcam input stream",
        "Automated squat, push-up, and bicep curl repetition counting logic",
        "Visual feedback overlay showing real-time joint angle measurements",
        "Audio and visual alert warnings when form deviates from target biomechanical thresholds",
        "Workout session summary reporting rep speed, form accuracy, and calorie estimation"
      ],
      engineeringChallenges: [
        "Optimizing frame processing throughput to achieve steady 60 FPS without dropping frames on standard client webcams",
        "Handling camera perspective variations by converting normalized coordinates to relative biomechanical joint vectors"
      ],
      whatILearned: [
        "Deepened mastery in OpenCV frame manipulations and spatial vector mathematics",
        "Efficient state synchronization between real-time canvas overlays and React render cycles"
      ],
      technologies: ["Python", "OpenCV", "MediaPipe", "PyTorch", "React", "Tailwind CSS", "Flask REST API"],
      githubUrl: "https://github.com/Hassanspace/latestsite",
      liveUrl: "https://hassansden.netlify.app/",
      date: "2024 - Present"
    },
    {
      id: "synap-study",
      title: "Synap Study — AI Smart Assistant",
      subtitle: "AI-powered document summarizer, flashcard generator & RAG Q&A",
      description: "An intelligent study platform designed for university students to upload lecture slides or research PDFs and receive automated summaries, key term flashcards, and semantic chat Q&A powered by Large Language Models.",
      category: "ai-ml",
      image: "/images/synap-study.png",
      featured: true,
      problem: "Students spend dozens of hours manually indexing hundreds of pages of lecture slides and textbooks before examinations.",
      solution: "Created an end-to-end RAG (Retrieval-Augmented Generation) application with document chunking, vector indexing, and structured JSON output prompts for automated flashcard generation.",
      keyFeatures: [
        "PDF text extraction & hierarchical chunking engine",
        "LLM context retrieval for accurate, hallucination-free document Q&A",
        "Automated flashcard generation with spaced-repetition study mode",
        "Instant bullet-point executive summaries for complex academic papers",
        "Clean, distraction-free reader interface with inline highlight search"
      ],
      engineeringChallenges: [
        "Managing context length limits by dynamically ranking chunk relevance using cosine similarity embeddings",
        "Structuring LLM outputs into predictable JSON schemas for interactive UI render components"
      ],
      whatILearned: [
        "Effective prompt engineering patterns and retrieval augmented pipeline optimization",
        "Building responsive reader UIs with smooth virtualized lists for large document views"
      ],
      technologies: ["Next.js", "TypeScript", "Python", "LangChain / OpenAI API", "Tailwind CSS", "MongoDB"],
      githubUrl: "https://github.com/Hassanspace/blogupdated",
      liveUrl: "https://hassanspace.github.io/blogupdated/",
      date: "2024"
    },
    {
      id: "ai-storybook-generator",
      title: "AI StoryBook Generator",
      subtitle: "Generative AI story creation platform with visual scenes",
      description: "An interactive full-stack application that transforms simple text ideas into illustrated children's storybooks, generating rich plot chapters, scene illustrations, and audio narration prompts.",
      category: "ai-ml",
      image: "/images/ai-storybook.png",
      featured: true,
      problem: "Creating custom illustrated storybooks requires specialized writing, illustration, and formatting tools.",
      solution: "Integrated generative language APIs with automated diffusion image generation pipelines, packaging stories into downloadable dynamic PDF books.",
      keyFeatures: [
        "Interactive story topic wizard with custom genre, age group, and tone selection",
        "Multi-chapter story outline & script generation",
        "Automated image prompt generation tailored to scene descriptions",
        "Export storybooks into styled digital reader formats"
      ],
      engineeringChallenges: [
        "Maintaining character design consistency across generated multi-scene illustrations",
        "Handling multi-step asynchronous AI generation API queues with graceful loading states"
      ],
      whatILearned: [
        "Asynchronous task queue state management in web frontends",
        "Prompt chaining techniques for multi-modal AI generation workflows"
      ],
      technologies: ["React", "Tailwind CSS", "Python", "REST APIs", "Node.js", "Express"],
      githubUrl: "https://github.com/Hassanspace/bookstore",
      liveUrl: "https://fictionalfantasia.netlify.app/",
      date: "2024"
    },
    {
      id: "fictional-fantasia-fullstack",
      title: "Fictional Fantasia (Full Stack MERN)",
      subtitle: "Complete e-commerce bookstore with user auth & cart management",
      description: "A full-featured MERN stack bookstore web app enabling users to explore books by genre, search titles, manage a cart, execute checkouts, and authenticate securely.",
      category: "fullstack",
      image: "/images/fictionalfantasia.png",
      featured: true,
      problem: "E-commerce book retailers need fast, responsive web interfaces with secure authentication and robust inventory control.",
      solution: "Architected a decoupled React client and Express.js REST API backed by MongoDB Atlas, enforcing JWT session verification.",
      keyFeatures: [
        "User registration, login, password encryption & JWT authorization",
        "Interactive product catalog with category filter & instant title search",
        "Persistent shopping cart state backed by browser storage and MongoDB",
        "Admin panel for managing book listings, pricing, and stock levels"
      ],
      engineeringChallenges: [
        "Ensuring seamless sync between guest local cart state and authenticated database user cart",
        "Designing optimal MongoDB indexing schemas for rapid text queries across large catalogs"
      ],
      whatILearned: [
        "Full-stack MERN architecture best practices, middleware security, and CORS configuration"
      ],
      technologies: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT"],
      githubUrl: "https://github.com/Hassanspace/bookstore",
      liveUrl: "https://fictionalfantasia.netlify.app/",
      date: "2024"
    },
    {
      id: "netflix-clone-django",
      title: "Netflix Clone with OTP Security",
      subtitle: "Full-stack streaming clone built with Django & custom auth",
      description: "A functional streaming website replica built with Django, featuring video content cataloging, multi-profile browsing, and custom OTP (One-Time Password) email security verification.",
      category: "django-backend",
      image: "/images/netflixclone.png",
      featured: true,
      problem: "Modern streaming platforms demand high security for user logins combined with fluid content discovery.",
      solution: "Developed a Django application utilizing Django ORM, custom authentication backends, SMTP email OTP verification, and dynamic HTML5 video player integration.",
      keyFeatures: [
        "Custom OTP email verification during user registration & login",
        "Categorized video rows (Trending, Popular, Top Rated, Genre filters)",
        "Dynamic video preview modal with HTML5 media playback",
        "Responsive UI styled with Tailwind CSS & Bootstrap utility classes"
      ],
      engineeringChallenges: [
        "Designing custom Django authentication backends to seamlessly intercept user authentication flow for OTP verification",
        "Optimizing static asset loading and media streaming performance"
      ],
      whatILearned: [
        "Deep understanding of Django ORM relationships, custom template tags, and authentication hooks"
      ],
      technologies: ["Django", "Python", "SQLite / PostgreSQL", "Tailwind CSS", "Bootstrap", "HTML5 Video"],
      githubUrl: "https://github.com/Hassanspace/netflixclone",
      date: "2024 - 2025"
    },
    {
      id: "event-management-django",
      title: "Event Management System",
      subtitle: "Django CRUD web application with user role authorization",
      description: "A robust event planning and ticketing portal built with Django where organizers can host events, manage RSVPs, and track ticket availability with full CRUD privileges.",
      category: "django-backend",
      image: "/images/eventmanagement.png",
      featured: false,
      problem: "Event organizers require simple centralized portals to publish event schedules, manage attendee lists, and handle seat quotas.",
      solution: "Built a relational Django backend with model constraints, form validation, and admin reporting views.",
      keyFeatures: [
        "User registration and role-based permissions (Organizer vs Attendee)",
        "Event creation, editing, cancellation, and seat capacity limits",
        "RSVP confirmation email notifications",
        "Filterable event directory by date, category, and venue location"
      ],
      engineeringChallenges: [
        "Preventing race conditions when multiple users attempt to claim the final remaining event tickets simultaneously"
      ],
      whatILearned: [
        "Database transaction management in Django and form data sanitization"
      ],
      technologies: ["Django", "Python", "Bootstrap", "Tailwind CSS", "Relational DB"],
      githubUrl: "https://github.com/Hassanspace/Eventmanagement_django",
      date: "2024 - 2025"
    },
    {
      id: "fanta-reimagine",
      title: "Fanta Reimagine Showcase",
      subtitle: "Interactive product website with GSAP scroll animations",
      description: "A visually striking product presentation landing page built to showcase creative frontend animation capabilities using GSAP timeline sequences and parallax interactions.",
      category: "frontend",
      image: "/images/fanta.png",
      featured: false,
      problem: "Standard static product pages fail to capture user attention and tell an engaging brand story.",
      solution: "Implemented complex GSAP scroll triggers and multi-layered parallax shifts to animate 3D bottle assets dynamically as the user scrolls.",
      keyFeatures: [
        "Custom GSAP ScrollTrigger timeline animations",
        "Smooth parallax element movement tied to scroll depth",
        "Vibrant beverage product branding palette and high-res imagery"
      ],
      engineeringChallenges: [
        "Maintaining 60 FPS animation performance by enforcing GPU acceleration using CSS transform translate3d"
      ],
      whatILearned: [
        "Advanced timeline orchestration in GSAP and performance profiling in Chrome DevTools"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "GSAP Animation", "Bootstrap"],
      githubUrl: "https://github.com/Hassanspace/fanta",
      liveUrl: "https://hassanspace.github.io/fanta/",
      date: "2024"
    },
    {
      id: "wizardz-marketing",
      title: "Wizardz Marketing Studio",
      subtitle: "Agency landing page featuring GSAP micro-animations",
      description: "A modern digital agency template highlighting creative service offerings with smooth section reveals, interactive hover cards, and sleek typography.",
      category: "frontend",
      image: "/images/marketing.png",
      featured: false,
      problem: "Marketing agencies need high-converting, impressive landing pages that convey modern creative authority.",
      solution: "Created custom micro-interactions and scroll reveal animations for service cards and testimonial sliders.",
      keyFeatures: ["GSAP reveal animations", "Responsive hero section", "Clean grid layouts"],
      engineeringChallenges: ["Ensuring uniform layout alignment across varying viewport screen ratios"],
      whatILearned: ["Designing responsive component grids for desktop and mobile devices"],
      technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
      githubUrl: "https://github.com/Hassanspace/wizardz",
      liveUrl: "https://hassanspace.github.io/wizardz/",
      date: "2024"
    }
  ] as Project[],

  experience: [
    {
      id: "epicsols",
      role: "Full Stack / Software Engineer Intern",
      company: "Epicsols",
      location: "Pakistan",
      period: "2024 - Present",
      type: "Internship",
      description: "Contributed to building enterprise web applications, integrating Django backends with modern React frontends, designing REST APIs, and optimizing database schema queries.",
      highlights: [
        "Engineered scalable Django REST framework endpoints servicing web client requests",
        "Collaborated on responsive React & Tailwind CSS component design systems",
        "Optimized relational database queries, reducing response times for complex dashboard analytics",
        "Participated in agile team standups, code reviews, and Git version workflows"
      ],
      skills: ["Django", "Python", "React", "REST APIs", "SQL", "Git"]
    },
    {
      id: "mlsa",
      role: "Microsoft Learn Student Ambassador (MLSA)",
      company: "Microsoft",
      location: "COMSATS University Islamabad",
      period: "2023 - Present",
      type: "Community",
      description: "Selected as a Student Ambassador to lead technical workshops, foster developer peer learning, and advocate for cloud & AI technology adoption on campus.",
      highlights: [
        "Organized hands-on technical workshops on Web Development, AI basics, and Azure Cloud tools",
        "Mentored junior software engineering students in programming fundamentals and data structures",
        "Connected university tech talent with global developer community opportunities"
      ],
      skills: ["Community Leadership", "Azure AI", "Technical Workshop Delivery", "Public Speaking"]
    },
    {
      id: "dataseekho",
      role: "AI & Data Science Fellow / Trainee",
      company: "DataSeekho",
      location: "Remote",
      period: "2023 - 2024",
      type: "Contract",
      description: "Completed intensive practical training in Python data analysis, Machine Learning pipelines, model evaluation metrics, and Computer Vision fundamentals.",
      highlights: [
        "Built predictive machine learning models using Scikit-Learn, Pandas, and NumPy",
        "Implemented Computer Vision scripts for image preprocessing, edge detection, and classification",
        "Analyzed real-world tabular datasets and presented structured data visualization reports"
      ],
      skills: ["Python", "Pandas", "Scikit-Learn", "Computer Vision", "Machine Learning"]
    }
  ] as ExperienceItem[],

  education: [
    {
      id: "comsats",
      degree: "Bachelors in Software Engineering (BS SE)",
      institution: "COMSATS University Islamabad, Sahiwal Campus",
      location: "Sahiwal, Pakistan",
      period: "Sep 2022 - Sep 2026 (Expected)",
      grade: "3.57 / 4.0 CGPA (Recent Semester: 3.95 SGPA)",
      details: "Pursuing rigorous 4-year degree focusing on core computer science foundations, software architecture, artificial intelligence, and database design.",
      courses: [
        "Programming Fundamentals (Python/C++)",
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Systems (SQL)",
        "Software Architecture & Design",
        "Artificial Intelligence & ML",
        "Web Engineering",
        "Computer Networks"
      ],
      highlights: [
        "Achieved high academic standing with a 3.95 SGPA in recent coursework",
        "Active leader in university developer societies and peer coding circles",
        "Developed multiple full-stack and AI course projects with high evaluation marks"
      ]
    },
    {
      id: "dps",
      degree: "FSc Pre-Engineering (Higher Secondary)",
      institution: "Divisional Public School and College (DPS)",
      location: "Sahiwal, Pakistan",
      period: "2020 - 2022",
      grade: "82.5%",
      details: "Completed Pre-Engineering studies focusing on advanced mathematics, physics, and chemistry.",
      courses: ["Mathematics", "Physics", "Chemistry"],
      highlights: ["Developed strong mathematical reasoning and analytical problem solving skills"]
    },
    {
      id: "educators",
      degree: "Matriculation with Science",
      institution: "The Educators (Boys Campus)",
      location: "Sahiwal, Pakistan",
      period: "2018 - 2020",
      grade: "97.5%",
      details: "Graduated with top academic honors in Secondary School Certificate (Science stream).",
      courses: ["Mathematics", "Physics", "Chemistry", "Computer Science"],
      highlights: ["Awarded high academic distinction with 97.5% score"]
    }
  ] as EducationItem[]
};
