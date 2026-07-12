// Default portfolio data extracted from CV.
// Editing in the app overrides this via localStorage; this file is the fallback/seed.

export const defaultData = {
  name: "Sakib Ahmed Shishir",
  title: "Undergraduate CSE Student at North South University",
  photo: "", // base64 data URL set via upload; empty = initials avatar
  location: "Modhubagh, Moghbazar, Dhaka, Bangladesh",
  phone: "+880 1567-986205",
  phone2: "+880 1858-252192",
  whatsapp: "https://wa.me/8801567986205",
  email: "asakib784@gmail.com",
  linkedin: "https://linkedin.com/in/sakib-ahmed-20337624a",
  github: "https://github.com/Sakibcheez",
  facebook: "https://www.facebook.com/sakib.ahmed.shishir17/",
  instagram: "https://www.instagram.com/sakib_beez/",
  leetcode: "https://leetcode.com/u/sakib_shishir75/",
  summary:
    "Dedicated and hardworking Computer Science undergraduate at North South University with a CGPA of 3.65/4.00, 121.5/130 credits completed, and a 50% merit scholarship. Skilled in full-stack development, machine learning, IoT, embedded systems, and database-driven applications, with 14+ academic and personal projects completed. Strong problem-solving, communication, leadership, and multitasking abilities developed through 3+ years of tutoring experience and active involvement in IEEE, ACM, NSUSS, and robotics-related activities.",

  stats: [
    { value: "3.65", label: "CGPA / 4.00" },
    { value: "14+", label: "Projects" },
    { value: "50%", label: "Merit Scholarship" },
    { value: "50+", label: "Students Mentored" },
  ],

  experience: [
    {
      role: "Private Academic Tutor (Online / Offline)",
      org: "Mathematics, Physics, ICT, Foundational CSE, Admission Prep",
      period: "2022 – Present",
      points: [
        "Provide personalized tutoring for HSC, SSC, A-Level, O-Level, university-level Mathematics, and CSE courses.",
        "Mentored 50+ students through consistent academic support, punctuality, and student-centered teaching methods.",
      ],
    },
    {
      role: "Core Volunteer, Content and Host",
      org: "IEEE Robotics and Automation Society – RAS SBC, NSU",
      period: "2025 – Present",
      points: [],
    },
    {
      role: "Team Volunteer - Finance And Corporate",
      org: "IEEE NSU Student Branch, NSU",
      period: "2025 – Present",
      points: [],
    },
    {
      role: "Core Volunteer, Website & Membership Development Team",
      org: "IEEE NSU Industry Applications Society SBC, NSU",
      period: "2024 – Present",
      points: [],
    },
    {
      role: "General Member",
      org: "NSU ACM, NSU",
      period: "2024 – Present",
      points: [],
    },
    {
      role: "Senior Workforce",
      org: "NSU Shangskrit Shangathan, NSU",
      period: "2023 – 2025",
      points: [
        "Worked with organizer teams for Unplugged 2023, Boishak 2023, and ACE 2024.",
      ],
    },
    {
      role: "Campus Ambassador and Logistics Team Lead",
      org: "English Olympiad Bangladesh, Dhaka",
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
      detail: "CGPA: 3.65/4.00 · 50% merit scholarship holder ",
      period: "Jan 2023 – Aug 2026",
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
    { group: "Programming Languages", items: ["C", "C++", "Python", "Java", "C#", "JavaScript", "PHP"] },
    { group: "Web Development", items: ["HTML", "CSS", "Tailwind CSS", "PHP", "Node.js", "Full-Stack"] },
    { group: "Databases", items: ["SQL", "MySQL", "MongoDB"] },
    { group: "AI / Machine Learning", items: ["Machine Learning", "Deep Learning", "Neural Networks", "RAG", "Ollama", "Local LLM Training"] },
    { group: "Embedded Systems / IoT", items: ["ARM", "Arduino", "ESP32", "STM32", "IoT Systems"] },
    { group: "Operating Systems", items: ["Linux Ubuntu", "xv6"] },
    { group: "Mobile Development", items: ["Flutter"] },
    { group: "Software Tools", items: ["GitHub", "MS Office", "Excel", "PowerPoint", "Canva", "Photoshop", "AutoCAD", "MailChimp", "Logisim", "Multisim", "Wireshark", "Figma"] },
    { group: "Digital Marketing", items: ["Email Marketing", "Facebook Marketing", "Data Entry"] },
    { group: "Soft Skills", items: ["Communication", "Public Speaking", "Teamwork", "Leadership", "Adaptability", "Event Management"] },
    { group: "Driving Skills", items: ["Light Car", "Motor Bike"] },
  ],

  projects: [
    { name: "AI-Based Traffic Control & Congestion Monitoring", tech: "ML, IoT, RAG, Neural Networks", desc: "AI and IoT-based traffic control system using CRFT, neural networks, and RAG for congestion monitoring." },
    { name: "AI Enhanced Fuel Pump Dispenser & Monitoring", tech: "CSE499 · Ongoing", desc: "AI-enhanced fuel pump dispenser and monitoring system focused on automation and operational tracking." },
    { name: "Q-ALBERT: Quantum-Enhanced Transformer", tech: "CSE465 · Ongoing", desc: "Research project exploring shared quantum attention for parameter-efficient transformer architecture." },
    { name: "Techshop327 – AI-Based PC Assistant Shop", tech: "Ollama, PHP, SQL, HTML, JS", desc: "AI-assisted PC shop using Ollama architecture with a PHP and SQL-based web system for intelligent assistance." },
    { name: "Khaboi-Khabo – Food Order Website", tech: "PHP, HTML, CSS, SQL, JS, PhpMailer", desc: "Full-stack food ordering website with database integration and email functionality.", link: "https://khaboikhabo.infy.uk" },
    { name: "Blood Inventory Management System", tech: "PHP, HTML, CSS, SQL", desc: "Blood inventory system with SQL database management and a PHP-based frontend for record handling." },
    { name: "Extending xv6 — Process Monitoring & Scheduling", tech: "Linux OS, xv6 · Ongoing", desc: "Implemented xv6 features including process monitoring and priority-based scheduling through system calls." },
    { name: "Dual Sensor Parking Assistant", tech: "STM32 Microprocessor", desc: "Embedded parking assistant using dual sensors and STM32 microprocessor-based control." },
    { name: "Cafe Shop Management System", tech: "Java, Java Swing", desc: "Desktop cafe management application with a Java Swing GUI." },
    { name: "Additional Projects", tech: "C, Python, .NET, Digital Logic, Local LLM", desc: "Stadium Ticketing System, Traffic Light Controller, Shakespeare Local LLM, .NET SmartInventory, and a Tkinter Attendance Taker." },
  ],

  achievements: [
    "50% Merit Scholarship for Undergraduate Academic Tuition Fees at North South University.",
    "Bangabandhu Chatro Kollan Britti 2023.",
    "3rd Position — Bangla-English Handwriting Competition, Notre Dame College National Cultural Fest 2019.",
    "Leadership Award for Campus Ambassador at English Olympiad 2019.",
  ],

  certifications: [
    "Career with AI — Grameenphone (GP), 2026.",
    "Full Stack Development with MERN — Grameenphone (GP), 2026.",
    "Facebook Marketing — Grameenphone (GP) & Creative IT Institute, 2026.",
    "Project-Based Excel — Grameenphone (GP), 2026.",
    "Figma Design System by Yasin Ahmed — Grameenphone (GP), 2026.",
    "Capacity Building Workshop — The Policy Times & Shiv Nadar University, India.",
  ],

  references: [
    { name: "Dr. Sushanto Kumar Roy", detail: "Assistant Professor, Dept. of Mathematics, Jahangirnagar University; Ex: Notre Dame College", link: "https://juniv.edu/teachers/sushi.math14819" },
    { name: "Dr. Md Musfique Anwar", detail: "Professor, Dept. of CSE, Jahangirnagar University; Adjunct Faculty, North South University", link: "https://juniv.edu/teachers/musfique.anwar" },
  ],
};
