export interface Project {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string; // If provided, shows image; otherwise shows stylized placeholder grid
  summary: string;
  problem: string;
  challenges: string;
  solution: string;
  outcome: string;
  features: string[];
  lessons: string[];
}

export const projectsData: Project[] = [
  {
    id: "career-guidance",
    title: "Smart Career Guidance System",
    imageUrl: "/cutoff.png",
    subtitle: "A web-based academic selection and career recommendation platform.",
    role: "Eligibility Analyzer Module Developer",
    tech: ["React (Vite)", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    githubUrl: "https://github.com/IT24102099/A-Web-Based-Career-Selection-and-Education-Guidance-System",
    summary: "Developed a full stack MERN application helping students identify career matches and university degree courses based on academic results and logical matching.",
    problem: "High school graduates in Sri Lanka face challenges identifying suitable university pathways due to lack of consolidated guidelines and complex Z-score entry calculations.",
    challenges: "Developing a reliable algorithm to match student G.C.E Advanced Level results (Z-scores, subject streams) against varying annual university minimum selection requirements.",
    solution: "Designed and built the Eligibility Analyzer module utilizing a rule-based Z-score lookup engine. Students input their stream and score to instantly filter recommended bachelor programs.",
    outcome: "Created a fast matching database with visual results charts, simplifying university filtering down to seconds and improving student decision confidence.",
    features: [
      "Dynamic Z-Score Eligibility Checker",
      "Subject Stream filtering and validation rules",
      "Interactive analytics dashboard showing selection trends",
      "Secure student profiling and result history archiving"
    ],
    lessons: [
      "Mastered writing highly optimized Mongo query pipelines for ranges.",
      "Learned the value of designing clean input interfaces for non-technical students.",
      "Gained deeper understanding of client-side state managers in complex forms."
    ]
  },
  {
    id: "smart-campus",
    title: "Smart Campus Mobile Application",
    imageUrl: "/campus.jpg",
    subtitle: "A unified cross-platform mobile app for campus operations.",
    role: "Visitor Sign-In & Lost-Found Module Developer",
    tech: ["React Native (Expo)", "Node.js", "Express.js", "MongoDB", "JWT Auth", "REST APIs"],
    githubUrl: "https://github.com/mathuppriya-dev/Mobile",
    summary: "A mobile application integrating university services like Lost & Found, visitor management, and student check-ins.",
    problem: "Manual logs for campus visitors and paper forms for lost property caused security risks, delays, and poor tracking.",
    challenges: "Managing concurrent visitor registrations securely at campus entrances while matching lost reports with found entries dynamically.",
    solution: "Developed the digital Visitor Sign-In registry and check-in/check-out scanner. Built a rule-based matching system for the Lost & Found tracker using metadata flags (status: Lost, Found, Claimed).",
    outcome: "Replaced manual logbooks with secure mobile check-ins. The matching engine notifies students instantly of matching item claims.",
    features: [
      "Mobile Visitor registration and check-in/out tracking",
      "Lost & Found center with image upload support",
      "Rule-based item matching algorithm based on category/color/date tags",
      "Secure login using JWT and role-based route guards"
    ],
    lessons: [
      "Experienced React Native file system management for image uploads.",
      "Structured secure API access rules for external visitors vs. university staff.",
      "Improved mobile layout responsiveness across various Android and iOS screen sizes."
    ]
  },
  {
    id: "golden-curator",
    title: "Golden Curator Mod System",
    imageUrl: "/gold.jpg",
    subtitle: "MERN pipeline for event curation and admin moderation workflows.",
    role: "MERN Stack Developer",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    summary: "A curation platform allowing administrative panels to filter, moderate, and approve public community event requests.",
    problem: "Uncurated community submissions resulted in event spam, formatting issues, and duplicate schedules on public calendar portals.",
    challenges: "Designing a curation pipeline that accommodates multi-tier moderator approvals and updates event listings in real-time.",
    solution: "Created an admin moderation dashboard with granular approval routes. Configured database schema state flags (Pending, Approved, Flagged, Archived) for seamless state progression.",
    outcome: "Reduced moderation overhead by 65%. Event verification is standardized with full history logs for accountability.",
    features: [
      "Interactive Event moderation dashboard",
      "Multi-stage filtering and approval workflows",
      "Role-based moderator controls",
      "Responsive visual dashboard with moderation statistics"
    ],
    lessons: [
      "Optimized document state-flag transitions in MongoDB.",
      "Learned to coordinate frontend state changes on fast batch updates.",
      "Implemented security middleware to prevent unauthorized API requests."
    ]
  },
  {
    id: "hrm-system",
    title: "Blood Donation Portal",
    imageUrl: "/blood.jpg",
    subtitle: "A dual-purpose management web application for records and coordination.",
    role: "Full Stack Developer & API Architect",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/mathuppriya-dev/Blood-Donation-System",
    summary: "Built a management platform matching donor coordinates with emergency recipients, managing records, and tracking coordination.",
    problem: "Locating specific blood donors during emergencies relies on manual phone registries, resulting in critical delays.",
    challenges: "Designing a search workflow that quickly filters donors by compatibility and proximity without revealing private user data.",
    solution: "Developed an API-driven blood group search engine. Implemented donor registration, request tracking dashboards, and form validation features.",
    outcome: "Established a clean, secure database allowing matching searches in under a second. Streamlined request approvals.",
    features: [
      "Donor registration and profile search engines",
      "Real-time blood request status tracker",
      "Comprehensive admin database dashboard for record curation",
      "Responsive UI built with secure input validation rules"
    ],
    lessons: [
      "Learned the importance of strict data security controls for medical search data.",
      "Mastered building clean REST endpoints using Express router configurations.",
      "Refined JavaScript validation rules to optimize browser checks before API calls."
    ]
  }
];
