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
  duration: string;
  teamSize: string;
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
    challenges: "Developing a reliable rule-based algorithm to match student G.C.E Advanced Level results (Z-scores, subject streams) against varying annual university minimum selection requirements.",
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
    ],
    duration: "6 Months",
  teamSize: "5 developers",
  },
  {
    id: "smart-campus",
    title: "Smart Campus Mobile Application",
    imageUrl: "/campus.jpg",
    subtitle: "A unified cross-platform mobile app for campus operations.",
    role: "Visitor Sign-In Module Developer",
    tech: ["React Native (Expo)", "Node.js", "Express.js", "MongoDB", "JWT Auth", "REST APIs"],
    githubUrl: "https://github.com/mathuppriya-dev/Mobile",
    summary: "A mobile application integrating university services like visitor management, Lost & Found and student check-ins.",
    problem: "Digitized visitor registration, approval, and tracking processes to improve campus security, real-time visitor monitoring, and access control.",
    challenges: "Managing concurrent visitor registrations securely at campus entrances while matching visitors with registertion entries dynamically.",
    solution: "Developed the digital Visitor Sign-In registry and check-in/check-out scanner. Built a rule-based matching system for the visitor tracker using metadata flags (status: checked-in, checked-out, reserved).",
    outcome: "Replaced manual logbooks with secure mobile check-ins.",
    features: [
      "Visitor pre-registration and approval request workflow",
"Digital check-in and check-out tracking",
"Real-time dashboard showing active and completed visits",
"Role-based access control with administrator privileges",
"Secure authentication using JWT",
"Protected communication features with hidden contact details"
],
    lessons: [
      "Built secure RESTful APIs using Node.js and Express.js.",
"Implemented JWT authentication and role-based authorization.",
"Designed real-time dashboard interfaces for monitoring visitor activities.",
"Improved mobile application usability and responsiveness across devices."
    ],
     duration: "6 Months",
  teamSize: "5 developers",
  },
  {
    id: "golden-curator",
    title: "Golden Curator Mod System",
    imageUrl: "/gold.jpg",
    subtitle: "MERN pipeline for event curation and admin moderation workflows.",
    role: "Freelance Developer",
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
    ],
     duration: "10 Days",
  teamSize: "Me alone (Freelance)",
  },
  {
    id: "hrm-system",
    title: "Blood Donation Portal",
    imageUrl: "/blood.jpg",
    subtitle: "A web-based platform for efficient blood request and donor allocation management.",
    role: "Blood request and allocation Module Developer",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/mathuppriya-dev/Blood-Donation-System",
    summary: "A full-stack web application that connects blood donors with recipients, enabling efficient blood request management and donor allocation.",
    problem: "Finding compatible blood donors during emergencies is often slow and relies on manual communication, leading to critical delays.",
    challenges: "Designing an efficient allocation workflow to match blood requests with suitable donors while ensuring accurate request tracking and data security.",
    solution: "Developed the Blood Request and Allocation Module, enabling recipients to submit blood requests, track request status, and facilitate donor allocation based on blood group compatibility.",
    outcome: "Improved the efficiency of blood request processing and donor matching, helping streamline emergency blood donation coordination.",
    features: [
      "Blood request submission and management",
"Blood group-based donor matching",
"Request status tracking and allocation workflow",
"Donor registration and profile management",
"Admin dashboard for monitoring requests and donor records",
"Responsive user interface with form validation"
],
    lessons: [
      "Learned the importance of strict data security controls for medical search data.",
      "Mastered building clean REST endpoints using Express router configurations.",
      "Refined JavaScript validation rules to optimize browser checks before API calls."
    ],
     duration: "6 Months" ,
  teamSize: "6 developers",
  }
];
