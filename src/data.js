import profilePhoto from "../IMG_7842.PNG";

// Default portfolio data extracted from CV.
// Editing in the app overrides this via localStorage; this file is the fallback/seed.

export const defaultData = {
  name: "Sakib Ahmed Shishir",
  title: "AI Engineer, Full Stack Web Developer",
  photo: profilePhoto,
  location: "Modhubagh, Moghbazar, Dhaka, Bangladesh",
  phone: "+880 1858-252192",
  email: "asakib784@gmail.com",
  linkedin: "https://linkedin.com/in/sakib-ahmed-20337624a",
  github: "https://github.com/Sakibcheez",
  website: "https://sakibshishir75.vercel.app",
  summary:
    "Computer Science and Engineering graduate from North South University with a CGPA of 3.55/4.00 and a 50% merit scholarship. Skilled in AI and machine learning, full-stack web development, IoT, embedded systems, and database-driven applications, with 14+ academic and personal projects and 12+ freelance client projects completed. Experienced in developing practical AI, web, software, and IoT solutions, with strong problem-solving, communication, leadership, and teamwork abilities. Brings 4+ years of tutoring experience and active involvement in IEEE and robotics-related activities, demonstrating adaptability, multitasking, and a strong commitment to continuous learning and technology-driven innovation.",

  stats: [
    { value: "3.55", label: "CGPA / 4.00" },
    { value: "14+", label: "Academic Projects" },
    { value: "12+", label: "Client Projects" },
    { value: "50+", label: "Students Mentored" },
  ],

  experience: [
    {
      role: "Freelance Developer",
      org: "Remote · Turing, Outlier, LinkedIn · Full-Stack Development, AI, Web Applications",
      period: "Jan 2024 – Present",
      points: [
        "Successfully completed 12+ client projects involving web development, software solutions, AI applications, data analysis, and database-driven systems.",
      ],
    },
    {
      role: "Private Academic Tutor",
      org: "Online / Offline · Mathematics, Physics, ICT, Foundational CSE, Admission Preparation",
      period: "2022 – Present",
      points: [
        "Provide personalized tutoring for HSC, SSC, A-Level, O-Level, university-level Mathematics, and CSE courses.",
        "Mentored 50+ students through consistent academic support, punctuality, and student-centered teaching methods.",
      ],
    },
    {
      role: "Core Volunteer, Content and Host",
      org: "IEEE Robotics and Automation Society — RAS SBC, NSU",
      period: "2025 – Present",
      points: [],
    },
    {
      role: "Team Volunteer — Finance and Corporate",
      org: "IEEE NSU Student Branch",
      period: "2025 – Present",
      points: [],
    },
    {
      role: "Campus Ambassador and Logistics Team Lead",
      org: "English Olympiad Bangladesh · Dhaka, Bangladesh",
      period: "2018 – 2021",
      points: [
        "Served as campus ambassador and logistics team lead; supported organizational operations and event execution.",
      ],
    },
  ],

  education: [
    {
      school: "North South University",
      degree: "B.Sc. in Computer Science and Engineering",
      detail: "CGPA: 3.55/4.00 · 50% merit scholarship holder",
      period: "Jan 2023 – Sep 2026",
    },
    {
      school: "Notre Dame College",
      degree: "HSC, Science",
      detail: "GPA: 5.00/5.00 · Marks: 1221/1300",
      period: "2019 – 2022",
    },
    {
      school: "RAJUK Uttara Model College",
      degree: "SSC, Science",
      detail: "GPA: 5.00/5.00",
      period: "2017 – 2019",
    },
  ],

  skills: [
    { group: "Programming Languages", items: ["C", "C++", "Python", "Java", "C#", "JavaScript", "PHP", "R"] },
    { group: "Web Development", items: ["HTML", "CSS", "Tailwind CSS", "Node.js", "ReactJS"] },
    { group: "Databases", items: ["SQL", "MySQL", "MongoDB", "PostgreSQL"] },
    { group: "AI / Machine Learning", items: ["Machine Learning", "Deep Learning", "Neural Networks", "RAG", "LLM Training"] },
    { group: "Embedded Systems / IoT", items: ["ARM", "Arduino", "IoT Systems", "ESP32", "STM32"] },
    { group: "Operating Systems", items: ["MS Windows", "Linux Ubuntu", "xv6"] },
    { group: "Mobile Apps Development", items: ["Flutter", "Kotlin"] },
    { group: "DevOps & Cloud", items: ["AWS", "Docker", "Railway", "CI/CD"] },
    { group: "Software Tools", items: ["GitHub", "Microsoft Office", "Excel", "Word", "PowerPoint", "Canva", "Adobe Photoshop", "Google Workspace", "AutoCAD", "MailChimp", "Logisim", "Multisim", "Wireshark", "Cisco Packet Tracer", "RStudio"] },
    { group: "Digital Marketing", items: ["Email Marketing", "Facebook Marketing", "Data Entry"] },
    { group: "Soft Skills", items: ["Communication", "Public Speaking", "Teamwork", "Leadership", "Adaptability", "Event Management"] },
  ],

  projects: [
    { name: "Refuelytics — AI Enhanced Fuel Pump Dispenser and Monitoring System", tech: "Capstone Project · AI · IoT · App", desc: "Working on an AI-enhanced fuel pump dispenser and monitoring system focused on automation, monitoring, and operational tracking." },
    { name: "AI-Based Traffic Control and Congestion Monitoring System", tech: "ML · IoT · RAG · Neural Networks", desc: "Developed an AI and IoT-based traffic control system using CRFT, neural networks, and RAG implementation for congestion monitoring." },
    { name: "Q-ALBERT: Parameter-Efficient Quantum-Enhanced Transformer", tech: "CSE465", desc: "Research-oriented project exploring shared quantum attention for parameter-efficient transformer architecture." },
    { name: "Techshop327 — AI-Based PC Assistant Shop", tech: "Ollama · PHP · SQL · HTML · JavaScript", desc: "Built an AI-assisted PC shop using Ollama architecture with a PHP and SQL-based web system for intelligent assistance." },
    { name: "Khaboi-Khabo — Food Order Website", tech: "PHP · HTML · CSS · SQL · JavaScript · PhpMailer", desc: "Developed a full-stack food ordering website with database integration and email functionality.", link: "https://khaboikhabo.infy.uk" },
    { name: "Blood Inventory Management System", tech: "PHP, HTML, CSS, SQL", desc: "Blood inventory system with SQL database management and a PHP-based frontend for record handling." },
    { name: "Extending xv6 with Process Monitoring and Priority Scheduling", tech: "Linux OS · xv6", desc: "Implemented xv6 operating system features, including process monitoring and priority-based scheduling through system calls." },
    { name: "Dual Sensor Parking Assistant", tech: "STM32 Microprocessor", desc: "Embedded parking assistant using dual sensors and STM32 microprocessor-based control." },
    { name: "Cafe Shop Management System", tech: "Java · Java Swing", desc: "Designed a desktop cafe management system with Java Swing GUI features." },
  ],

  research: [
    {
      title: "ChainAttest: Typed Cross-Chain Relay and Destination-Side Re-Verification of Machine-Learning Provenance",
      course: "CSE498R Directed Research",
      supervisor: "Dr. Mohammad Abdul Qayum, Assistant Professor",
      department: "ECE Department, North South University",
    },
  ],

  achievements: [
    "Champion — NSU ACM Innovation Challenge 2026.",
    "Participant — Bangladesh Innovation Fair 2026.",
    "50% Merit Scholarship for Undergraduate Academic Tuition Fees at North South University.",
    "Bangabandhu Chatro Kollan Britti 2023.",
    "3rd Position — Bangla-English Segment Handwriting Competition, Notre Dame College National Cultural Fest 2019.",
    "Leadership Award for Campus Ambassador at English Olympiad 2019.",
  ],

  certifications: [
    "Career with AI — Grameenphone (GP), 2026.",
    "Full Stack Development with MERN — Grameenphone (GP), 2026.",
    "Facebook Marketing — Grameenphone (GP) Academy, 2026.",
    "Project-Based Excel — Grameenphone (GP), 2026.",
    "Figma Design System by Yasin Ahmed — Grameenphone (GP) Academy, 2026.",
  ],

  references: [
    { name: "Dr. Sushanto Kumar Roy", detail: "Assistant Professor, Dept. of Mathematics, Jahangirnagar University; Ex: Notre Dame College", link: "https://juniv.edu/teachers/sushi.math14819" },
    { name: "Dr. Md Musfique Anwar", detail: "Professor, Dept. of CSE, Jahangirnagar University; Adjunct Faculty, North South University", link: "https://juniv.edu/teachers/musfique.anwar" },
  ],
};
