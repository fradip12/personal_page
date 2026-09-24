import {
  siAppstore,
  siDart,
  siFastlane,
  siFirebase,
  siFlutter,
  siGithub,
  siGithubactions,
  siGmail,
  siGoogleplay,
  siGraphql,
  siHuggingface,
  siKotlin,
  siLangchain,
  siMedium,
  siN8n,
  siSqlite,
  siSwift,
  siTensorflow,
} from "simple-icons";
import { siLinkedin, type BrandIconData } from "@/lib/brand-icons";

export const siteConfig = {
  name: "Fradipta Alqaiyum",
  shortName: "Dip.",
  tagline: "Mobile engineer building Flutter & native apps — now exploring AI.",
  avatar: "/images/avatar-5.jpg",
  banner: "/images/banner.jpg",
  cvUrl: "/cv.pdf",
  email: "fradipta.alqaiyum@gmail.com",
  phone: { display: "+62 812 6878 6843", tel: "+6281268786843" },
  location: "Jakarta, Indonesia",
  timezone: "GMT+7",
  experienceYears: "6+",
  countriesReached: "65",
  openToWork: true,
  githubUser: "fradip12",
};

export type SocialLink = {
  label: string;
  handle: string;
  href: string;
  icon: BrandIconData;
};

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", handle: "in/dipoo", href: "https://www.linkedin.com/in/dipoo/", icon: siLinkedin },
  { label: "GitHub", handle: "fradip12", href: "https://github.com/fradip12", icon: siGithub },
  { label: "Email", handle: "Gmail", href: `mailto:${siteConfig.email}`, icon: siGmail },
  { label: "Medium", handle: "@fradipelz", href: "https://medium.com/@fradipelz", icon: siMedium },
];

export const about = {
  lead: "I turn complex business requirements into polished, fast mobile apps. For six years I’ve shipped Flutter and native iOS/Android products — from hotel management systems to supply-chain tools used in 65 countries and AI-powered travel platforms.",
  followUp:
    "Lately I’m building RAG systems and LLM pipelines, and mentoring the next generation of developers.",
};

export const services = [
  {
    title: "Mobile development",
    body: "iOS and Android with Flutter, Swift and Kotlin. Clean architecture, offline-first.",
  },
  {
    title: "AI & RAG systems",
    body: "LLM pipelines with LangChain, HuggingFace and n8n; ML and chatbot integrations.",
  },
  {
    title: "CI/CD",
    body: "Fastlane and GitHub Actions, shipping to App Store, Play Store and Firebase.",
  },
];

export type StackItem = {
  name: string;
  icon: BrandIconData;
  years: string;
  description: string;
  libraries: string[];
};

export type StackGroup = { group: string; items: StackItem[] };

// Years, descriptions and libraries are drafted from the experience list below.
// Review and correct them as needed.
export const techStack: StackGroup[] = [
  {
    group: "Mobile",
    items: [
      {
        name: "Flutter",
        icon: siFlutter,
        years: "6 yrs",
        description:
          "Hotel management, supply-chain and AI travel apps — clean architecture, offline-first.",
        libraries: ["bloc", "dio", "get_it", "freezed"],
      },
      {
        name: "Dart",
        icon: siDart,
        years: "6 yrs",
        description:
          "Shared packages, code generation and Mason bricks for scaffolding new projects.",
        libraries: ["mason", "build_runner", "json_serializable"],
      },
      {
        name: "Swift",
        icon: siSwift,
        years: "2 yrs",
        description:
          "Native iOS modules and platform channels, and the migration of native iOS apps to Flutter.",
        libraries: ["UIKit", "SwiftUI"],
      },
      {
        name: "Kotlin",
        icon: siKotlin,
        years: "3 yrs",
        description: "Native Android apps for asset management with MVVM and Jetpack components.",
        libraries: ["Jetpack", "Hilt", "Coroutines"],
      },
      {
        name: "SQLite",
        icon: siSqlite,
        years: "4 yrs",
        description: "Offline-first local storage with background sync for field apps.",
        libraries: ["sqflite", "drift"],
      },
      {
        name: "GraphQL",
        icon: siGraphql,
        years: "2 yrs",
        description: "Typed queries and caching for mobile clients.",
        libraries: ["graphql_flutter"],
      },
    ],
  },
  {
    group: "DevOps",
    items: [
      {
        name: "Fastlane",
        icon: siFastlane,
        years: "4 yrs",
        description: "Automated signing, builds and store uploads.",
        libraries: ["match", "gym", "pilot"],
      },
      {
        name: "GitHub Actions",
        icon: siGithubactions,
        years: "4 yrs",
        description: "CI pipelines for tests, builds and releases.",
        libraries: ["workflows", "self-hosted runners"],
      },
      {
        name: "Firebase",
        icon: siFirebase,
        years: "6 yrs",
        description: "App Distribution, Crashlytics, Analytics and Remote Config.",
        libraries: ["Crashlytics", "App Distribution", "Remote Config"],
      },
      {
        name: "App Store",
        icon: siAppstore,
        years: "5 yrs",
        description: "iOS apps shipped and maintained on the App Store.",
        libraries: ["TestFlight", "App Store Connect"],
      },
      {
        name: "Play Store",
        icon: siGoogleplay,
        years: "6 yrs",
        description: "Android apps shipped and maintained on Google Play.",
        libraries: ["Play Console", "internal testing"],
      },
    ],
  },
  {
    group: "AI / RAG",
    items: [
      {
        name: "LangChain",
        icon: siLangchain,
        years: "2 yrs",
        description: "RAG pipeline behind Butlerchat, a hotel booking assistant.",
        libraries: ["LangChain.js", "vector stores"],
      },
      {
        name: "Hugging Face",
        icon: siHuggingface,
        years: "2 yrs",
        description: "Open models for embeddings and inference.",
        libraries: ["transformers", "sentence-transformers"],
      },
      {
        name: "n8n",
        icon: siN8n,
        years: "2 yrs",
        description: "Automations and LLM workflows.",
        libraries: ["AI Agent node", "webhooks"],
      },
      {
        name: "TensorFlow",
        icon: siTensorflow,
        years: "2 yrs",
        description: "U-Net CNN for automated DVT segmentation (undergraduate thesis).",
        libraries: ["Keras"],
      },
    ],
  },
];

export type TimelineEntry = {
  role: string;
  organisation: string;
  period: string;
  description: string;
  /** Domain used to look up the organisation's favicon. */
  domain?: string;
};

export const experience: TimelineEntry[] = [
  {
    role: "Mobile Engineer",
    organisation: "Archipelago International",
    period: "2025 — Present",
    domain: "archipelagohotels.com",
    description:
      "Sole mobile engineer developing a Flutter-based hotel management app used by Aston, Fave+, Neo, and more. Owns end-to-end development, CI/CD pipelines, and built a RAG-powered AI chatbot (Butlerchat) for hotel booking assistance.",
  },
  {
    role: "Mobile Engineer",
    organisation: "Tribel (Freelance)",
    period: "2025 — Present",
    domain: "tribel.app",
    description:
      "Building an AI-powered travel itineraries platform for an early-stage Singapore startup. Fullstack development with Supabase, OpenAI SDK, GrokAI, and LLM orchestration.",
  },
  {
    role: "Mobile Engineer",
    organisation: "KOLTIVA",
    period: "2023 — 2025",
    domain: "koltiva.com",
    description:
      "Developed supply chain management tools deployed across 65 countries. Built offline-first apps with SQLite sync, set up CI/CD pipelines, and led branching strategies for 15 contributors. Migrated native iOS and Android apps to Flutter.",
  },
  {
    role: "Instructor",
    organisation: "HACKTIV8 (Freelance)",
    period: "2024 — 2025",
    domain: "hacktiv8.com",
    description:
      "Trained and mentored students and corporate employees in mobile development. Delivered courses for Kaltimtara BPD, Bithealth Indonesia, and contributed to IBM AI Programs for 6 months.",
  },
  {
    role: "Mobile Developer",
    organisation: "Assetdata.io",
    period: "2022 — 2023",
    domain: "assetdata.io",
    description:
      "Developed and maintained Flutter and native Kotlin apps for asset management. Built scalable architectures with MVVM, Jetpack components, and Hilt dependency injection in an Agile cross-functional team.",
  },
  {
    role: "Mobile Developer",
    organisation: "Minasa Fintech",
    period: "2020 — 2021",
    domain: "minasatech.co.id",
    description:
      "Contributed to DDS Digital startup as a mobile developer, handling full app features using Flutter, Firebase, and REST APIs with GetX state management. Started as intern, promoted to full-time.",
  },
  {
    role: "Mobile Developer Intern",
    organisation: "Berbagi Solusi Tech",
    period: "2019",
    domain: "berbagisolusi.com",
    description:
      "Intern focused on UI development, API integration, and debugging for mobile apps. Also contributed to backend development using Node.js, creating WebApp APIs under senior engineer guidance.",
  },
];

export const education: TimelineEntry[] = [
  {
    role: "Sepuluh Nopember Institute of Technology",
    organisation: "B.Eng. Computer Engineering · GPA 3.31/4.0",
    period: "2017 — 2021",
    domain: "its.ac.id",
    description:
      "Faculty of Informatics, Electro, and Intelligence Systems. Thesis: Automated DVT Segmentation with Convolutional Neural Network based UNet Architecture.",
  },
  {
    role: "Japanese Language Proficiency Test",
    organisation: "Japan Foundation · JLPT N4",
    period: "2024",
    domain: "jlpt.jp",
    description: "Scored 101/180, showing basic conversational Japanese.",
  },
  {
    role: "Nanyang Technological University Singapore",
    organisation: "Academic visit · Computer Engineering",
    period: "Jan 2019 — Mar 2019",
    domain: "ntu.edu.sg",
    description:
      "Explored NTU's academic process in Computer Engineering, gaining international exposure to engineering education.",
  },
  {
    role: "Fundamentals of Deep Learning",
    organisation: "NVIDIA Deep Learning Institute",
    period: "2019",
    domain: "nvidia.com",
    description:
      "Neural network architectures, training techniques, and practical applications in AI and machine learning.",
  },
];

export const projectCategories = ["All", "Mobile", "AI", "Web"] as const;
export type ProjectCategory = Exclude<(typeof projectCategories)[number], "All">;

export type Project = {
  title: string;
  category: ProjectCategory;
  tag: string;
  description: string;
  /** Path under /public. A striped placeholder is shown when missing. */
  image?: string;
  url?: string;
};

export const projects: Project[] = [
  {
    title: "Hotel Management Suite",
    category: "Mobile",
    tag: "Mobile · Flutter",
    description: "Offline-first operations app for Aston, Fave+, Neo and other Archipelago hotels.",
  },
  {
    title: "Global Supply Chain Tool",
    category: "Mobile",
    tag: "Mobile · Flutter & Native",
    description: "KOLTIVA field logistics app used across 65 countries, with SQLite offline sync.",
  },
  {
    title: "AI Travel Planner",
    category: "AI",
    tag: "AI · Mobile",
    description: "Tribel — LLM-powered travel itineraries on Supabase, OpenAI and GrokAI.",
  },
  {
    title: "Butlerchat",
    category: "AI",
    tag: "AI · RAG",
    description: "RAG-powered chatbot that helps guests with hotel bookings.",
  },
  {
    title: "Personal Portfolio",
    category: "Web",
    tag: "Web · Next.js",
    description: "This site — Next.js, TypeScript and Tailwind CSS, deployed on Vercel.",
    url: "https://github.com/fradip12/personal_page",
  },
];

export type Talk = {
  title: string;
  category: "Talk" | "Teaching";
  date: string;
  location: string;
  /** Paths under /public. The first is the cover. */
  images: string[];
  description: string;
  url?: string;
};

export const talks: Talk[] = [
  {
    title: "Speaker at Google Play Academy",
    category: "Talk",
    date: "2025",
    location: "Google Indonesia",
    images: ["/talks/google-1.jpg"],
    url: "https://www.linkedin.com/posts/kumpul_empowering-indonesias-future-developer-ugcPost-7209433359695925249-V5ng",
    description:
      "Invited back as an alumni speaker at Google Play Academy Study Jams, one year after completing the program. Shared practical insights from my mobile engineering journey, including lessons learned in product development and career growth. Grateful to Google Indonesia for the opportunity to contribute to the developer community.",
  },
  {
    title: "Company Training Instructor",
    category: "Talk",
    date: "2024",
    location: "KOLTIVA",
    images: ["/talks/koltiva-1.jpeg"],
    description:
      "Trained the mobile engineering team on Mason bricks and automated project scaffolding.",
  },
  {
    title: "Online Instructor — IBM x Hacktiv8",
    category: "Talk",
    date: "2024",
    location: "Online",
    images: ["/talks/hacktiv8-3.jpeg"],
    description:
      "Online instructor for the IBM x Hacktiv8 Generative AI for Software Development program.\n\nFacilitated live online sessions covering LLM fundamentals, prompt engineering, and AI integration in software development workflows. Guided participants through project-based learning and provided code reviews to ensure practical skill development.",
  },
  {
    title: "Offline Instructor — IBM x Hacktiv8 AI",
    category: "Talk",
    date: "2024",
    location: "UTA '45, Jakarta",
    images: ["/talks/hacktiv8-1.jpeg"],
    description:
      "Offline instructor for the IBM x Hacktiv8 Generative AI for Software Development program at UTA '45 University, Jakarta.\n\nConducted in-person training sessions for students and faculty, covering generative AI applications in software engineering. Emphasized applied AI tooling, API integration, and responsible AI usage.",
  },
  {
    title: "Offline Co-Instructor — IBM x Hacktiv8, Faculty of Engineering",
    category: "Talk",
    date: "2025",
    location: "Telkom University, Bandung",
    images: ["/talks/hacktiv8-5.jpeg"],
    description:
      "Offline instructor for the IBM x Hacktiv8 Generative AI for Software Development program, delivered to faculty members at Telkom University Bandung.\n\nDesigned and facilitated sessions tailored for educators, focusing on embedding AI literacy and generative AI tooling into their teaching practice and academic curriculum.",
  },
  {
    title: "Offline Instructor — IBM x Hacktiv8, Faculty of Economics",
    category: "Talk",
    date: "2025",
    location: "Telkom University, Bandung",
    images: ["/talks/hacktiv8-2.jpeg"],
    description:
      "Offline instructor for the IBM x Hacktiv8 Generative AI for Software Development program, delivered to faculty members at Telkom University Bandung.\n\nDesigned and facilitated sessions tailored for educators, focusing on embedding AI literacy and generative AI tooling into their teaching practice and academic curriculum.",
  },
  {
    title: "Flutter Instructor — Hacktiv8 x Bithealth",
    category: "Teaching",
    date: "2024 — 2025",
    location: "Hacktiv8 Indonesia",
    images: ["/talks/hacktiv8-4.jpeg"],
    description:
      "Taught beginner and advanced Flutter development to students and corporate trainees.\n\n- Taught Flutter development including basics and advanced features\n- Guided students in state management techniques and project implementation\n- Provided feedback on coding assignments for cross-platform app building\n- Developed the Flutter Intermediate curriculum for the BPD Kaltimtara project",
  },
  {
    title: "Flutter Instructor — Hacktiv8 x BPD KaltimTara",
    category: "Teaching",
    date: "2024 — 2025",
    location: "Hacktiv8 Indonesia",
    images: ["/talks/hacktiv8-6.jpg"],
    description: "Developed and taught the Flutter Intermediate curriculum for the BPD Kaltimtara project.",
  },
];
