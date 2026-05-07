export type Project = {
  title: string;
  year: string;
  description: string;
  impact: string;
  tags: string[];
  link: string;
};

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  dateValue: string;
  category: "AI" | "Software" | "Systems" | "Agile" | "Productivity";
  href?: string;
};

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const profile = {
  name: "Pol Danyael Villorente",
  role: "Computer Science Graduate | Full-Stack Developer | UI/UX Builder",
  location: "Davao City, Philippines",
  email: "pdvillorente12@gmail.com",
  phone: "0962-568-3345",
  linkedin: "https://www.linkedin.com/in/pdvillorente/",
  facebook: "https://web.facebook.com/Pollygonbear/",
  resumeHref: publicAsset("resume/RESUME_Villorente.pdf"),
  summary:
    "I build practical software with a strong eye for interfaces, operations, and AI-assisted workflows. My work spans clinic systems, object detection, mobile medical support, Java CRUD tooling, and business inventory reporting.",
};

export const heroStats = [
  { value: "2026", label: "BS Computer Science" },
  { value: "5+", label: "Featured systems" },
  { value: "29", label: "Certificates and courses" },
];

export const projects: Project[] = [
  {
    title: "SAVAGE LLC Internal Portal",
    year: "2026",
    description:
      "A company operations dashboard for time tracking, task coordination, announcements, chat, files, and quick administrative actions.",
    impact:
      "Centralized daily staff workflows into a responsive internal workspace with clear navigation, status visibility, and role-focused dashboard panels.",
    tags: ["React", "Dashboard", "Operations", "Internal Tools"],
    link: "https://github.com/ITGuns/Internal-Company-Portal---SAVAGE-LLC",
  },
  {
    title: "Zakay",
    year: "2026",
    description:
      "A mobile UI/UX design for a smart route companion that helps Davao commuters plan routes, compare travel options, and navigate local transit with clearer guidance.",
    impact:
      "Turned a common Davao mobility problem into a focused app concept with route discovery, commuter-friendly decision support, and accessible mobile flows.",
    tags: ["Figma", "UI/UX", "Mobile App", "Davao Routes"],
    link: "https://www.figma.com/design/kHko6qSXHIuSVWfweAAfyt/Untitled?node-id=0-1&t=fgLpNQs3PcqMhwcz-1",
  },
  {
    title: "NurseBot App",
    year: "2025",
    description:
      "An AI-driven medical mobile app providing medication reminders and conversational assistance around medical advice and drug information.",
    impact:
      "Explored practical AI assistance for health routines while emphasizing reminders, clarity, and mobile accessibility.",
    tags: ["Expo", "AI", "Mobile App", "Healthcare"],
    link: "https://canva.link/3ueiop6zob3zzdi",
  },
  {
    title: "Harbinger",
    year: "2024",
    description:
      "A real-time object detection system that supports intelligent monitoring through Raspberry Pi and PIR motion sensors.",
    impact:
      "Combined embedded sensing and computer vision concepts for practical security monitoring.",
    tags: ["Raspberry Pi", "Object Detection", "Sensors", "Python"],
    link: "https://canva.link/rsos337u5jqjelq",
  },
  {
    title: "Ordering, Inventory, Sales, and Employee Sorting",
    year: "2024",
    description:
      "A business workflow project covering ordering, sales reporting, inventory management, and employee sorting with a bubble sort implementation.",
    impact:
      "Connected data handling, reporting, and algorithmic thinking inside a business operations context.",
    tags: ["Java", "Inventory", "Reports", "Algorithms"],
    link: "https://canva.link/hj8hw00lqbpvtq6",
  },
  {
    title: "CRUD Issue Tracking System",
    year: "2024",
    description:
      "A Java-based issue tracking system built to demonstrate imperative programming through create, read, update, and delete workflows.",
    impact:
      "Applied core programming structure, state management, and task-tracking logic in a focused academic build.",
    tags: ["Java", "CRUD", "Imperative Programming"],
    link: "https://canva.link/m3e45cy1bbq5xb9",
  },
  {
    title: "Clinic Management System",
    year: "2023 - 2024",
    description:
      "A clinic operations system for digitizing patient appointment scheduling and medical record management for an occupational and special needs clinic.",
    impact:
      "Focused on replacing paper-heavy workflows with clearer record access, scheduling, and staff coordination.",
    tags: ["React", "Supabase", "PostgreSQL", "Clinic Ops"],
    link: "https://canva.link/dik5io9s6xbkc6j",
  },
];

export const experience = [
  {
    role: "Full-Stack Developer",
    company: "Savage Corporation",
    period: "2026 - Present",
    details:
      "Builds and maintains full-stack web applications for a freelance company, covering frontend interfaces, backend workflows, and operations-focused internal tools.",
  },
  {
    role: "Operations Management Intern",
    company: "Ollopa Corporation",
    period: "2026",
    details:
      "Supported workflow coordination, documentation, and process monitoring with the Operations Management department.",
  },
  {
    role: "Freelance Developer / UI-UX Designer",
    company: "Independent",
    period: "2023 - Present",
    details:
      "Designed and developed user interfaces for small business and personal projects using Figma and modern web tooling.",
  },
  {
    role: "Barista & Cashier",
    company: "Chashitsu",
    period: "2024 - 2025",
    details:
      "Handled service, payment accuracy, quality control, and customer-facing operations in a fast-paced environment.",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    skills: ["React JS", "JavaScript", "Tailwind CSS", "Expo", "Figma", "Canva"],
  },
  {
    title: "Backend and Data",
    skills: ["Node JS", "Supabase", "PostgreSQL", "Prisma", "MySQL", "SQL"],
  },
  {
    title: "Programming",
    skills: ["Java", "Python", "C++", "C#", "Data Structures", "Algorithms"],
  },
  {
    title: "AI and Systems",
    skills: ["LLMs", "Hugging Face", "NLP", "TensorFlow", "Raspberry Pi", "CCNA"],
  },
  {
    title: "Professional",
    skills: ["Open-minded", "Accountable", "Adaptable", "Growth-oriented", "Organized"],
  },
];

export const certificates: Certificate[] = [
  {
    title: "Introduction to Hardware and Operating Systems",
    issuer: "IBM / Coursera",
    date: "Jun 2025",
    dateValue: "2025-06-24",
    category: "Systems",
    href: publicAsset("certs/Coursera%20CO8PAPKAJBQK.pdf"),
  },
  {
    title: "Understanding the Impact of a Merger for IT Teams",
    issuer: "LinkedIn Learning",
    date: "Mar 2025",
    dateValue: "2025-03-03",
    category: "Systems",
    href: publicAsset("certs/LINKEDIN%20LEARNING%20CERTIFICATES/CertificateOfCompletion_Understanding%20the%20Impact%20of%20a%20Merger%20for%20IT%20Teams.pdf"),
  },
  {
    title: "Agile Software Development: Clean Coding Practices",
    issuer: "LinkedIn Learning",
    date: "Mar 2025",
    dateValue: "2025-03-03",
    category: "Agile",
    href: publicAsset("certs/LINKEDIN%20LEARNING%20CERTIFICATES/CertificateOfCompletion_Agile%20Software%20Development%20Clean%20Coding%20Practices.pdf"),
  },
  {
    title: "Agile Software Development: Refactoring",
    issuer: "LinkedIn Learning",
    date: "Mar 2025",
    dateValue: "2025-03-03",
    category: "Agile",
    href: publicAsset("certs/LINKEDIN%20LEARNING%20CERTIFICATES/CertificateOfCompletion_Agile%20Software%20Development%20Refactoring.pdf"),
  },
  {
    title: "CCNAv7: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "Nov 2024",
    dateValue: "2024-11-05",
    category: "Systems",
    href: publicAsset("certs/CCNA-_Introduction_to_Networks_certificate_pdvillorente-mcm-edu-ph_7235f221-00af-4c06-9b45-9b0887d593d5.pdf"),
  },
  {
    title: "What is Data Science?",
    issuer: "IBM / Coursera",
    date: "Oct 2024",
    dateValue: "2024-10-13",
    category: "Software",
    href: publicAsset("certs/Coursera%20EYF7GL2JOS68.pdf"),
  },
  {
    title: "Beginning Custom Projects with Raspberry Pi",
    issuer: "Johns Hopkins University / Coursera",
    date: "Jul 2024",
    dateValue: "2024-07-02",
    category: "Systems",
    href: publicAsset("certs/Coursera%20Z9JLHXCRXX5J.pdf"),
  },
  {
    title: "Advanced Algorithms and Complexity",
    issuer: "UC San Diego / Coursera",
    date: "Jun 2024",
    dateValue: "2024-06-30",
    category: "Software",
    href: publicAsset("certs/Coursera%20T674EDT7JZL2.pdf"),
  },
  {
    title: "Develop Your Skills with Large Language Models",
    issuer: "LinkedIn Learning",
    date: "Mar 2024",
    dateValue: "2024-03-04",
    category: "AI",
    href: publicAsset("certs/for%20automata/CertificateOfCompletion_Develop%20Your%20Skills%20with%20Large%20Language%20Models.pdf"),
  },
  {
    title: "Generative AI: Working with Large Language Models",
    issuer: "LinkedIn Learning",
    date: "Mar 2024",
    dateValue: "2024-03-04",
    category: "AI",
    href: publicAsset("certs/for%20automata/CertificateOfCompletion_Generative%20AI%20Working%20with%20Large%20Language%20Models.pdf"),
  },
  {
    title: "Generative AI: Introduction to Large Language Models",
    issuer: "LinkedIn Learning",
    date: "Mar 2024",
    dateValue: "2024-03-04",
    category: "AI",
    href: publicAsset("certs/for%20automata/CertificateOfCompletion_Generative%20AI%20Introduction%20to%20Large%20Language%20Models.pdf"),
  },
  {
    title: "GPT-4 Foundations: Building AI-Powered Apps",
    issuer: "LinkedIn Learning",
    date: "Mar 2024",
    dateValue: "2024-03-04",
    category: "AI",
    href: publicAsset("certs/for%20automata/CertificateOfCompletion_GPT4%20Foundations%20Building%20AIPowered%20Apps.pdf"),
  },
  {
    title: "Introduction to Generative AI with GPT",
    issuer: "LinkedIn Learning",
    date: "Mar 2024",
    dateValue: "2024-03-04",
    category: "AI",
    href: publicAsset("certs/for%20automata/CertificateOfCompletion_Introduction%20to%20Generative%20AI%20with%20GPT.pdf"),
  },
  {
    title: "AI Text Summarization with Hugging Face",
    issuer: "LinkedIn Learning",
    date: "Mar 2024",
    dateValue: "2024-03-04",
    category: "AI",
    href: publicAsset("certs/for%20automata/CertificateOfCompletion_AI%20Text%20Summarization%20with%20Hugging%20Face.pdf"),
  },
  {
    title: "Applied AI: Building NLP Apps with Hugging Face Transformers",
    issuer: "LinkedIn Learning",
    date: "Mar 2024",
    dateValue: "2024-03-04",
    category: "AI",
    href: publicAsset("certs/for%20automata/CertificateOfCompletion_Applied%20AI%20Building%20NLP%20Apps%20with%20Hugging%20Face%20Transformers.pdf"),
  },
  {
    title: "Large Language Models: Text Classification for NLP using BERT",
    issuer: "LinkedIn Learning",
    date: "Mar 2024",
    dateValue: "2024-03-04",
    category: "AI",
    href: publicAsset("certs/for%20automata/CertificateOfCompletion_Large%20Language%20Models%20Text%20Classification%20for%20NLP%20using%20BERT.pdf"),
  },
  {
    title: "TensorFlow: Working with NLP",
    issuer: "LinkedIn Learning",
    date: "Mar 2024",
    dateValue: "2024-03-04",
    category: "AI",
    href: publicAsset("certs/for%20automata/CertificateOfCompletion_TensorFlow%20Working%20with%20NLP.pdf"),
  },
  {
    title: "Introduction to Prompt Engineering for Generative AI",
    issuer: "LinkedIn Learning",
    date: "Mar 2024",
    dateValue: "2024-03-04",
    category: "AI",
    href: publicAsset("certs/for%20automata/CertificateOfCompletion_Introduction%20to%20Prompt%20Engineering%20for%20Generative%20AI.pdf"),
  },
  {
    title: "Introduction to Large Language Models",
    issuer: "LinkedIn Learning",
    date: "Mar 2024",
    dateValue: "2024-03-04",
    category: "AI",
    href: publicAsset("certs/for%20automata/CertificateOfCompletion_Introduction%20to%20Large%20Language%20Models.pdf"),
  },
  {
    title: "Data Structures",
    issuer: "UC San Diego / Coursera",
    date: "Nov 2023",
    dateValue: "2023-11-08",
    category: "Software",
    href: publicAsset("certs/Coursera%204NNVJ9XVC8CC.pdf"),
  },
  {
    title: "SQL Essential Training",
    issuer: "LinkedIn Learning",
    date: "Oct 2023",
    dateValue: "2023-10-22",
    category: "Software",
    href: publicAsset("certs/CertificateOfCompletion_SQL%20Essential%20Training.pdf"),
  },
  {
    title: "Programming Foundations: Databases",
    issuer: "LinkedIn Learning",
    date: "Oct 2023",
    dateValue: "2023-10-19",
    category: "Software",
    href: publicAsset("certs/CertificateOfCompletion_Programming%20Foundations%20Databases.pdf"),
  },
  {
    title: "Programming Foundations: Databases",
    issuer: "LinkedIn Learning",
    date: "Oct 2023",
    dateValue: "2023-10-19",
    category: "Software",
    href: publicAsset("certs/CertificateOfCompletion_Programming%20Foundations%20Databases%201.pdf"),
  },
  {
    title: "SQL Essential Training (2014)",
    issuer: "LinkedIn Learning",
    date: "Oct 2023",
    dateValue: "2023-10-13",
    category: "Software",
    href: publicAsset("certs/CertificateOfCompletion_SQL%20Essential%20Training%202014.pdf"),
  },
  {
    title: "Object-Oriented Programming with C#",
    issuer: "LinkedIn Learning",
    date: "Oct 2023",
    dateValue: "2023-10-13",
    category: "Software",
    href: publicAsset("certs/CertificateOfCompletion_Object%20Oriented%20Programming%20with%20C%202018.pdf"),
  },
  {
    title: "Introduction to Java",
    issuer: "LearnQuest / Coursera",
    date: "May 2023",
    dateValue: "2023-05-19",
    category: "Software",
    href: publicAsset("certs/Coursera%20XTQKM432Q9A5.pdf"),
  },
  {
    title: "Programming for Everybody (Getting Started with Python)",
    issuer: "University of Michigan / Coursera",
    date: "Jan 2023",
    dateValue: "2023-01-17",
    category: "Software",
    href: publicAsset("certs/Coursera%20RV8XVQKRHPVE.pdf"),
  },
  {
    title: "Microsoft Office Specialist Certificate",
    issuer: "Microsoft Office Specialist",
    date: "Aug 2022",
    dateValue: "2022-08-01",
    category: "Productivity",
    href: publicAsset("certs/Cert91884746142.pdf"),
  },
  {
    title: "Excel 2019 Associate",
    issuer: "Microsoft Office Specialist",
    date: "Aug 2022",
    dateValue: "2022-08-01",
    category: "Productivity",
    href: publicAsset("certs/microsoft-excel-microsoft-365-apps-and-office-2019.png"),
  },
];
