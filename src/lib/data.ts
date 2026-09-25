import {
  siAndroidstudio,
  siApple,
  siAppstore,
  siClaude,
  siDart,
  siDbeaver,
  siFastlane,
  siFirebase,
  siFlutter,
  siGithub,
  siGit,
  siGithubactions,
  siGmail,
  siGooglecloud,
  siGoogleplay,
  siHuggingface,
  siJira,
  siLangchain,
  siMedium,
  siN8n,
  siPython,
  siSentry,
  siSqlite,
  siSupabase,
  siSwift,
  siTensorflow,
} from "simple-icons";
import { siLinkedin, type BrandIconData } from "@/lib/brand-icons";

export const siteConfig = {
  name: "Fradipta Alqaiyum",
  shortName: "Dip.",
  role: "Software Engineer (Mobile)",
  tagline: "Mobile engineer for Flutter and SwiftUI — now exploring AI orchestration to accelerate development.",
  avatar: "/images/avatar-5.jpg",
  banner: "/images/banner.jpg",
  /** PDFs under /public, copied from ~/cv-resume. Re-copy them after recompiling. */
  downloads: [
    { label: "CV", detail: "Full, 2 pages", href: "/cv.pdf", fileName: "Fradipta-Alqaiyum-CV.pdf" },
    { label: "Resume", detail: "Short, 1 page", href: "/resume.pdf", fileName: "Fradipta-Alqaiyum-Resume.pdf" },
  ],
  email: "fradipta.alqaiyum@gmail.com",
  /** Contact by WhatsApp only; `number` is the international format without "+" that wa.me expects. */
  whatsapp: { display: "+62 812 6878 6843", number: "6281268786843" },
  location: "Jakarta, Indonesia",
  timezone: "GMT+7",
  experienceYears: "6+",
  companies: "5+",
  appsShipped: "15+",
  openToWork: true,
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
  lead: "Mobile software engineer with 6+ years of experience building and shipping production apps with Flutter and native iOS (Swift). I work on offline-first design, Clean Architecture, CI/CD automation and migrating native apps to Flutter.",
  followUp:
    "Today I’m the sole mobile engineer for a hotel management app that serves 200+ hotel units across Southeast Asia, I build LLM-powered features, and I teach AI and mobile development at Hacktiv8, a coding school with 66,000+ students across Indonesia.",
};

export const services = [
  {
    title: "Mobile development",
    body: "iOS and Android with Flutter and SwiftUI. Clean architecture, offline-first.",
  },
  {
    title: "AI & RAG systems",
    body: "LLM pipelines with LangChain, HuggingFace and n8n; ML and chatbot integrations.",
  },
  {
    title: "CI/CD",
    body: "Fastlane and GitHub Actions, releasing to App Store, Google Play, Firebase App Distribution and Microsoft App Center.",
  },
];

export type StackItem = {
  name: string;
  /** Brand mark. Rows without one show `monogram` instead. */
  icon?: BrandIconData;
  /** Short label (2–3 letters) shown when there is no brand mark. */
  monogram?: string;
  years: string;
  description: string;
  libraries: string[];
};

export type StackGroup = { group: string; items: StackItem[] };

// Groups and libraries follow the "Technical Skills" section of the CV
// (~/cv-resume/CV_09_2026.tex). Years are estimates from the experience dates.
export const techStack: StackGroup[] = [
  {
    group: "Mobile",
    items: [
      {
        name: "Flutter",
        icon: siFlutter,
        years: "6 yrs",
        description:
          "Feature-first clean architecture: BLoC with freezed states, typed Result errors instead of exceptions, offline-first storage with background sync, and generated code for models, APIs, routes and DI.",
        libraries: [
          "flutter_bloc",
          "freezed",
          "get_it",
          "injectable",
          "dio",
          "retrofit",
          "auto_route",
          "drift",
          "workmanager",
          "slang",
          "talker",
          "FVM",
          "sqlite",
          "Dart MCP",
          "i18n",
          "go_router",
          "GetX",
          "Riverpod",
        ],
      },
      {
        name: "SwiftUI",
        icon: siApple,
        years: "2 yrs",
        description:
          "Native iOS screens with SwiftUI and UIKit in an MVVM-C structure, and native iOS features bridged into Flutter through platform channels.",
        libraries: ["SwiftUI", "UIKit", "MVVM-C", "platform channels", "Xcode"],
      },
    ],
  },
  {
    group: "Language",
    items: [
      {
        name: "Dart",
        icon: siDart,
        years: "6 yrs",
        description:
          "Shared packages, code generation and Mason bricks for scaffolding new projects.",
        libraries: ["mason", "build_runner", "json_serializable", "OOP", "SOLID"],
      },
      {
        name: "Swift",
        icon: siSwift,
        years: "2 yrs",
        description:
          "Native iOS modules and platform channels, and the migration of native iOS apps to Flutter.",
        libraries: ["SwiftUI", "UIKit", "MVVM-C"],
      },
      {
        name: "Python",
        icon: siPython,
        years: "4 yrs",
        description: "CNN models for medical image segmentation, and scripts for data and LLM work.",
        libraries: ["Google Colab", "Kaggle", "TensorFlow"],
      },
    ],
  },
  {
    group: "Backend & Data",
    items: [
      {
        name: "APIs",
        monogram: "API",
        years: "6 yrs",
        description: "Mobile clients for REST and GraphQL back ends, plus real-time channels.",
        libraries: ["REST", "GraphQL", "WebSocket", "gRPC", "MQTT"],
      },
      {
        name: "Databases",
        monogram: "DB",
        years: "6 yrs",
        description: "Relational and NoSQL stores, plus on-device SQLite for offline-first apps.",
        libraries: ["PostgreSQL", "MySQL", "SQLite", "Firestore"],
      },
      {
        name: "SQLite",
        icon: siSqlite,
        years: "4 yrs",
        description: "Offline-first local storage with background sync for field apps.",
        libraries: ["sqflite", "drift"],
      },
      {
        name: "DBeaver",
        icon: siDbeaver,
        years: "4 yrs",
        description: "Querying, inspecting and managing databases during development and debugging.",
        libraries: ["PostgreSQL", "MySQL", "SQLite"],
      },
      {
        name: "Supabase",
        icon: siSupabase,
        years: "1 yr",
        description: "Full-stack features for an AI-powered travel itinerary platform.",
        libraries: ["PostgreSQL", "OpenAI SDK"],
      },
      {
        name: "Firebase",
        icon: siFirebase,
        years: "6 yrs",
        description: "Back-end services, crash reporting, analytics and test distribution.",
        libraries: ["Firestore", "Crashlytics", "Analytics", "App Distribution", "Remote Config"],
      },
      {
        name: "Google Cloud",
        icon: siGooglecloud,
        years: "2 yrs",
        description: "Cloud services behind mobile back ends.",
        libraries: [],
      },
    ],
  },
  {
    group: "CI/CD & Tools",
    items: [
      {
        name: "Fastlane",
        icon: siFastlane,
        years: "4 yrs",
        description:
          "Automated signing, builds and releases to App Store, Google Play, Firebase App Distribution and Microsoft App Center.",
        libraries: ["match", "gym", "pilot"],
      },
      {
        name: "GitHub Actions",
        icon: siGithubactions,
        years: "4 yrs",
        description: "CI/CD pipelines for builds, tests and deployment.",
        libraries: ["workflows"],
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
        libraries: ["Play Console"],
      },
      {
        name: "Git",
        icon: siGit,
        years: "6 yrs",
        description: "Branching strategies for teams of up to 15 contributors.",
        libraries: ["GitHub", "GitLab", "Bitbucket"],
      },
      {
        name: "Sentry",
        icon: siSentry,
        years: "3 yrs",
        description: "Crash reporting and monitoring in production.",
        libraries: ["Sentry", "Firebase Crashlytics", "Firebase Analytics"],
      },
      {
        name: "IDEs & tooling",
        icon: siAndroidstudio,
        years: "6 yrs",
        description: "Native and Flutter tooling for building, profiling and debugging.",
        libraries: ["Xcode", "Android Studio", "Gradle", "Flutter DevTools"],
      },
      {
        name: "Jira",
        icon: siJira,
        years: "5 yrs",
        description: "Agile delivery with cross-functional teams.",
        libraries: ["Scrum", "Kanban"],
      },
    ],
  },
  {
    group: "AI & LLM",
    items: [
      {
        name: "LangChain",
        icon: siLangchain,
        years: "2 yrs",
        description: "RAG pipelines and LLM orchestration.",
        libraries: ["LangChain.js", "LangGraph", "vector stores"],
      },
      {
        name: "OpenAI SDK",
        monogram: "AI",
        years: "1 yr",
        description: "LLM calls that generate personalised travel itineraries.",
        libraries: ["Supabase"],
      },
      {
        name: "Claude Code",
        icon: siClaude,
        years: "1 yr",
        description: "AI-assisted development with coding agents and MCP servers.",
        libraries: ["Claude Code", "GitHub Copilot", "MCP"],
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
        libraries: ["Keras", "Google Colab", "Kaggle"],
      },
    ],
  },
];

export type TimelineEntry = {
  role: string;
  organisation: string;
  location?: string;
  period: string;
  /** Full-time, Freelance, Internship, or a grade for education. */
  kind?: string;
  highlights: string[];
  /** Domain used to look up the organisation's favicon. */
  domain?: string;
};

export const experience: TimelineEntry[] = [
  {
    role: "Mobile Engineer",
    organisation: "Archipelago International",
    location: "Jakarta, Indonesia",
    period: "Jul 2025 — Present",
    kind: "Full-time",
    domain: "archipelagohotels.com",
    highlights: [
      "Own the full lifecycle of the group’s Flutter guest app as the sole mobile engineer: architecture, development, CI/CD, releases and production support.",
      "Build mobile apps for the group’s loyalty system, employee management system, property management system and in-room tablet assistant.",
      "Deliver core guest journeys: online check-in, booking management, stay history and Bluetooth door-lock access from the phone.",
    ],
  },
  {
    role: "Mobile Engineer",
    organisation: "Tribel",
    location: "Singapore",
    period: "Jul 2025 — Dec 2025",
    kind: "Freelance (Remote)",
    domain: "tribel.app",
    highlights: [
      "Built an AI-powered travel itinerary platform for an early-stage startup, working with a global, cross-functional team.",
      "Developed full-stack features on Supabase and orchestrated LLM calls with the OpenAI SDK to generate personalised itineraries.",
    ],
  },
  {
    role: "Mobile Engineer",
    organisation: "KOLTIVA",
    location: "Jakarta, Indonesia",
    period: "May 2023 — Jul 2025",
    kind: "Full-time",
    domain: "koltiva.com",
    highlights: [
      "Built mobile apps across multiple squads for KoltiTrace, a supply-chain traceability platform for field data collection and mapping used in 65 countries.",
      "Designed offline-first apps on SQLite with reliable background sync to the server, so field agents can work in areas with no connection.",
      "Set up CI/CD pipelines for build and deployment, and introduced a Git branching strategy adopted by 15 contributors.",
      "Led the migration of the B2C KoltiTrace FarmCloud app from native code to a single Flutter codebase.",
      "Bridged existing native iOS (Swift) features into Flutter through platform channels.",
      "Built the B2B KoltiTrace FarmGate and FarmExtension apps in Flutter with Clean Architecture.",
    ],
  },
  {
    role: "Mobile Development Instructor",
    organisation: "Hacktiv8",
    location: "Indonesia",
    period: "Jan 2024 — Dec 2025",
    kind: "Freelance",
    domain: "hacktiv8.com",
    highlights: [
      "Trained and mentored students in mobile development, from fundamentals to hands-on project delivery.",
      "Designed structured learning modules and shared industry best practices through guided projects.",
      "Ran a 6-month mobile development programme for new engineers at BitHealth Indonesia (2024).",
      "Delivered a 1-week mobile app development course for employees of Bank Kaltimtara (BPD Kaltimtara).",
      "Taught in the IBM AI programme for students: Phase 1 (2025) and Phase 2 (2026).",
    ],
  },
  {
    role: "Mobile Developer",
    organisation: "Assetdata.io",
    location: "Malaysia",
    period: "Jan 2022 — May 2023",
    kind: "Full-time",
    domain: "assetdata.io",
    highlights: [
      "Developed and maintained asset-management and data-insight apps in Flutter for clients including PETRONAS and AirAsia.",
      "Designed scalable app architecture and integrated backend APIs for a consistent experience across platforms.",
      "Worked with cross-functional teams in an Agile process to ship new features and improve app efficiency.",
    ],
  },
  {
    role: "Mobile Developer",
    organisation: "Minasa Fintech",
    location: "Indonesia",
    period: "Jan 2020 — Dec 2021",
    kind: "Internship",
    domain: "minasatech.co.id",
    highlights: [
      "Built all features of the DDS Digital startup app end to end with Flutter, Firebase and REST APIs.",
      "Used GetX for state management and Git workflows for team collaboration.",
    ],
  },
  {
    role: "Associate Developer",
    organisation: "Berbagi Solusi Tech",
    location: "Indonesia",
    period: "Jul 2019 — Sep 2019",
    kind: "Internship",
    domain: "berbagisolusi.com",
    highlights: [
      "Built mobile app UI, integrated APIs and fixed bugs under the guidance of senior engineers.",
      "Developed Node.js web APIs to serve the mobile app.",
      "Worked with the product manager on product development and learned Agile practices.",
    ],
  },
];

export const education: TimelineEntry[] = [
  {
    role: "Bachelor of Engineering in Computer Engineering",
    organisation: "Sepuluh Nopember Institute of Technology",
    location: "Surabaya, Indonesia",
    period: "2017 — 2021",
    kind: "GPA 3.31 / 4.00",
    domain: "its.ac.id",
    highlights: [
      "Faculty of Intelligent Electrical and Informatics Technology.",
      "Thesis: Automated Deep Vein Thrombosis (DVT) Segmentation with a Convolutional Neural Network based on the U-Net Architecture.",
    ],
  },
  {
    role: "Academic visit · Computer Engineering",
    organisation: "Nanyang Technological University",
    location: "Singapore",
    period: "Jan 2019 — Mar 2019",
    domain: "ntu.edu.sg",
    highlights: [
      "Explored NTU's academic process in Computer Engineering, gaining international exposure to engineering education.",
    ],
  },
];

export const certifications = [
  {
    title: "Japanese-Language Proficiency Test (JLPT) N4",
    issuer: "The Japan Foundation",
    detail: "Score 101/180",
    year: "2024",
    domain: "jlpt.jp",
  },
  {
    title: "Fundamentals of Deep Learning",
    issuer: "NVIDIA Deep Learning Institute",
    year: "2019",
    domain: "nvidia.com",
  },
];

export const spokenLanguages = [
  { name: "Indonesian", level: "Native" },
  { name: "English", level: "Professional working proficiency" },
  { name: "Japanese", level: "Elementary (JLPT N4)" },
];

export const projectCategories = ["All", "Mobile", "AI", "Web"] as const;
export type ProjectCategory = Exclude<(typeof projectCategories)[number], "All">;

export type Project = {
  title: string;
  category: ProjectCategory;
  tag: string;
  /** One or two lines for the card. */
  description: string;
  /** Longer text for the detail dialog. Falls back to `description`. */
  details?: string;
  /** Paths under /public; the first is the card cover. A striped placeholder is shown when empty. */
  images?: string[];
  /** Phone screenshots are portrait: the card crops from the top and the dialog uses a tall frame. */
  imageShape?: "landscape" | "portrait";
  /**
   * App icon used as the card thumbnail instead of the first screenshot.
   * Shown centred on `background`, as a rounded square or, for round icons, a circle.
   */
  cover?: { src: string; background: string; shape?: "rounded" | "circle" };
  url?: string;
  /** Link text in the dialog. */
  urlLabel?: string;
  /**
   * Store buttons in the dialog. A store without `href` is greyed out with
   * `note` (default "Coming soon").
   */
  stores?: { store: "google-play" | "app-store"; href?: string; note?: string }[];
  /** Shown instead of store buttons for apps that are not in a public store. */
  availability?: string;
};

export const projects: Project[] = [
  {
    title: "Sentec EMS",
    category: "Mobile",
    tag: "Mobile · Flutter · Google Play",
    description:
      "Employee management app: attendance, leave, schedules and team approvals in one place.",
    details:
      "An employee management app that puts day-to-day HR work on the phone.\n\n- Attendance: clock in and out with location, QR code or photo verification\n- Leave: request leave, check balances and approve your team's requests\n- Schedules, team directory, employee profile and notifications",
    images: [
      "/projects/sentec-ems/screen-1.webp",
      "/projects/sentec-ems/screen-2.webp",
      "/projects/sentec-ems/screen-3.webp",
      "/projects/sentec-ems/screen-4.webp",
      "/projects/sentec-ems/screen-5.webp",
    ],
    imageShape: "portrait",
    stores: [
      { store: "google-play", href: "https://play.google.com/store/apps/details?id=com.sentec.ems" },
      { store: "app-store" },
    ],
  },
  {
    title: "Archipelago Membership",
    category: "Mobile",
    tag: "Mobile · Flutter · Google Play & App Store",
    description:
      "Loyalty and guest app for 200+ hotels: book, check in and chat with the butler.",
    details:
      "The loyalty and guest app for Archipelago's hotel brands, such as Aston.\n\n- Find and book hotels by city\n- Online check-in, booking management and stay history\n- Your current stay at a glance: room, check-in and check-out times, WiFi and hotel location\n- Bluetooth door-lock access from the phone\n- Chat with the hotel's butler 24/7",
    images: [
      "/projects/archipelago-membership/screen-1.webp",
      "/projects/archipelago-membership/screen-2.webp",
      "/projects/archipelago-membership/screen-3.webp",
    ],
    imageShape: "portrait",
    // Same navy as the icon, so the tile and icon read as one.
    cover: {
      src: "/projects/archipelago-membership/icon.webp",
      background: "linear-gradient(135deg, #19376a, #001935)",
    },
    stores: [
      {
        store: "google-play",
        href: "https://play.google.com/store/apps/details?id=com.archipelagointernational.hotels",
      },
      { store: "app-store", href: "https://apps.apple.com/app/archipelago-membership/id1099092329" },
    ],
  },
  {
    title: "In Room Butler",
    category: "Mobile",
    tag: "Tablet · Flutter · Internal",
    description: "In-room tablet app: guests ask the hotel for anything and track it, no sign-in needed.",
    details:
      "A Flutter app for the tablet in each hotel room. The tablet belongs to the room, so guests use it right away with no sign-in, and it is laid out for a fixed landscape screen instead of a phone.\n\n- Ask for housekeeping, food, maintenance and more in a few taps\n- Track each request, so there is no need to call the front desk\n- See your stay at a glance: room, dates and WiFi\n- Browse hotel services and offers\n- Continue on your own phone by scanning a QR code\n- Light and dark themes in the hotel's brand colour",
    images: ["/projects/in-room-butler/screen-1.webp", "/projects/in-room-butler/screen-2.webp"],
    availability: "Internal distribution · installed on in-room tablets at hotel units",
  },
  {
    title: "Sentec Attendance Kiosk",
    category: "Mobile",
    tag: "Tablet · Flutter · Internal",
    description: "Wall-mounted attendance kiosk: staff clock in with a PIN, selfie and face liveness check.",
    details:
      "A Flutter app that turns a wall-mounted Android tablet into the attendance kiosk for a hotel's staff. Employees sign in with their code and PIN, and the tablet is locked to the app so it can't be used for anything else.\n\n- Clock in and out with a selfie, GPS location and shift picker\n- On-device face liveness check, so a photo of a photo won't pass\n- Offline mode: staff keep clocking in when the network drops, and punches sync when it returns\n- Signs the employee out when nobody touches the tablet\n- Calendar of punches, shifts, leave and events, shown in local time\n- Landscape layout built for 10–11\" wall-mounted tablets",
    // The first image (the real sign-in screen shown on a wall-mounted tablet) is the card cover.
    // icon.webp is the launcher icon (shared with Sentec EMS); to use it as the cover instead, add:
    // cover: { src: "/projects/sentec-attendance/icon.webp", background: "linear-gradient(135deg, #2a3445, #0b1c29)", shape: "circle" },
    images: [
      "/projects/sentec-attendance/wall.webp",
      "/projects/sentec-attendance/screen-1.webp",
      "/projects/sentec-attendance/screen-2.webp",
      "/projects/sentec-attendance/screen-3.webp",
    ],
    availability: "Internal distribution · installed as a locked kiosk on hotel tablets",
  },
  {
    title: "KoltiTrace FarmCloud",
    category: "Mobile",
    tag: "Mobile · Flutter · Google Play & App Store",
    description:
      "Farm app for smallholder farmers. I led its migration from native code to Flutter.",
    details:
      "KoltiTrace FarmCloud connects farmers to global value chains, with access to quality inputs and responsible finance. I led its migration from native Android and iOS code to a single Flutter codebase.\n\n- Farmer and land profiles with mapped plots\n- KoltiPay digital payments for farm inputs\n- Transaction history for market transparency\n- Agricultural calendar with task recommendations\n- Training and coaching for smallholder farmers",
    images: [
      "/projects/koltitrace-farmcloud/screen-1.webp",
      "/projects/koltitrace-farmcloud/screen-2.webp",
      "/projects/koltitrace-farmcloud/screen-3.webp",
      "/projects/koltitrace-farmcloud/screen-4.webp",
      "/projects/koltitrace-farmcloud/screen-5.webp",
      "/projects/koltitrace-farmcloud/screen-6.webp",
      "/projects/koltitrace-farmcloud/screen-7.webp",
      "/projects/koltitrace-farmcloud/screen-8.webp",
    ],
    imageShape: "portrait",
    cover: {
      src: "/projects/koltitrace-farmcloud/icon.webp",
      background: "linear-gradient(135deg, #8f5a42, #5e3424)",
    },
    stores: [
      { store: "google-play", href: "https://play.google.com/store/apps/details?id=com.koltiva.farmcloud" },
      { store: "app-store", href: "https://apps.apple.com/app/koltitrace-farmcloud/id6450888650" },
    ],
  },
  {
    title: "KoltiTrace FarmRetail",
    category: "Mobile",
    tag: "Mobile · Flutter · Google Play",
    description:
      "eCommerce app for agri-input shops: sell to farmers, restock and track every sale.",
    details:
      "KoltiTrace FarmRetail helps distributors and agri-input shops run their business, sell inputs and services to farmers, and buy stock from trusted suppliers in one app.\n\n- Product catalogue and shop management\n- Sales and purchase orders with live status tracking\n- Digital receipts for every transaction\n- Sales, expenses and profit dashboard\n- KoltiPay digital payments, loans and savings",
    images: [
      "/projects/koltitrace-farmretail/screen-1.webp",
      "/projects/koltitrace-farmretail/screen-2.webp",
      "/projects/koltitrace-farmretail/screen-3.webp",
      "/projects/koltitrace-farmretail/screen-4.webp",
      "/projects/koltitrace-farmretail/screen-5.webp",
      "/projects/koltitrace-farmretail/screen-6.webp",
      "/projects/koltitrace-farmretail/screen-7.webp",
      "/projects/koltitrace-farmretail/screen-8.webp",
    ],
    imageShape: "portrait",
    cover: {
      src: "/projects/koltitrace-farmretail/icon.webp",
      background: "linear-gradient(135deg, #e3625f, #b83a3c)",
    },
    stores: [
      { store: "google-play", href: "https://play.google.com/store/apps/details?id=com.koltitrade.input" },
      { store: "app-store", note: "Not available" },
    ],
  },
  {
    title: "KoltiTrace MIS",
    category: "Mobile",
    tag: "Mobile · Flutter · Google Play & App Store",
    description:
      "Farm mapping and traceability for field teams. I contributed as a mobile engineer.",
    details:
      "KoltiTrace MIS brings farm mapping, climate-smart agriculture advice, traceability and fintech into one app for field teams. I contributed features as part of the mobile team.\n\n- Farm and producer profiling\n- Geo-mapping of production plots and farm borders\n- Training and coaching sessions for farmers\n- Traceability of every sale from farm to factory\n- KoltiPay payments, loans and bill payments",
    images: [
      "/projects/koltitrace-mis/screen-1.webp",
      "/projects/koltitrace-mis/screen-2.webp",
      "/projects/koltitrace-mis/screen-3.webp",
      "/projects/koltitrace-mis/screen-4.webp",
      "/projects/koltitrace-mis/screen-5.webp",
      "/projects/koltitrace-mis/screen-6.webp",
      "/projects/koltitrace-mis/screen-7.webp",
      "/projects/koltitrace-mis/screen-8.webp",
    ],
    imageShape: "portrait",
    cover: {
      src: "/projects/koltitrace-mis/icon.webp",
      background: "linear-gradient(135deg, #fdf1e7, #efd3bd)",
    },
    stores: [
      { store: "google-play", href: "https://play.google.com/store/apps/details?id=com.koltiva.koltitrace" },
      { store: "app-store", href: "https://apps.apple.com/app/koltitrace-mis/id6448493798" },
    ],
  },
  {
    title: "Farmer Business School",
    category: "Mobile",
    tag: "Mobile · Flutter · Google Play",
    description: "Coffee farming app for GIZ: land records, finances, training and weather advice.",
    details:
      "Farmer Business School (FBS) is a digital platform for sustainable coffee farming, built by KOLTIVA for GIZ, the German development agency. It helps coffee producers learn good farming practices and run their farm as a business.\n\n- Map your land and record production for each plot\n- Finance calendar for daily income and expenses\n- Business finance reports with profit and loss\n- E-training material from agronomists, available to download\n- Daily weather forecast with recommended farm activities\n- News and videos on sustainable coffee farming",
    images: [
      "/projects/koltiva-fbs/screen-1.webp",
      "/projects/koltiva-fbs/screen-2.webp",
      "/projects/koltiva-fbs/screen-3.webp",
      "/projects/koltiva-fbs/screen-4.webp",
      "/projects/koltiva-fbs/screen-5.webp",
      "/projects/koltiva-fbs/screen-6.webp",
      "/projects/koltiva-fbs/screen-7.webp",
    ],
    imageShape: "portrait",
    // Same brown as FarmCloud's icon, so a light tile keeps the two cards apart.
    cover: {
      src: "/projects/koltiva-fbs/icon.webp",
      background: "linear-gradient(135deg, #fbf3f1, #ecd6ce)",
    },
    stores: [{ store: "google-play", href: "https://play.google.com/store/apps/details?id=com.giz.fbs" }],
  },
  {
    title: "KOLTIVA Chat SDK",
    category: "Mobile",
    tag: "Flutter package · Internal",
    description: "Flutter chat SDK built on Qiscus, shared across KOLTIVA's apps and products.",
    details:
      "A Flutter package that wraps the Qiscus Chat SDK, so every KOLTIVA app and product adds in-app chat the same way instead of each team integrating Qiscus on its own.",
    // Dart logo from simple-icons, rendered to an image; the package has no app icon of its own.
    cover: {
      src: "/projects/koltiva-chat-sdk/icon.webp",
      background: "linear-gradient(135deg, #e6f2fb, #c2def3)",
    },
    availability: "Private repository · used across KOLTIVA apps and products",
  },
  {
    title: "AssetData.io",
    category: "Mobile",
    tag: "Mobile · Flutter · Retired",
    description: "Asset-management and data-insight apps for clients including PETRONAS and AirAsia.",
    details:
      "AssetData.io is an asset-management platform from Malaysia, used by clients including PETRONAS and AirAsia. I developed and maintained its Flutter apps, designed a scalable app architecture and integrated the back-end APIs.\n\n- Track assets and their audit status across departments and employees\n- QR codes to identify assets\n- Automated and custom reports, with a full history\n- Data insight shared with the web dashboard\n\nThe apps have since been taken down from Google Play and the App Store.",
    images: ["/projects/assetdata/screen-1.webp", "/projects/assetdata/screen-2.webp"],
    stores: [
      { store: "google-play", note: "No longer available" },
      { store: "app-store", note: "No longer available" },
    ],
  },
  {
    title: "DDS Digital",
    category: "Mobile",
    tag: "Mobile · Flutter · Google Play & App Store",
    description: "Cooperative savings and payments app. I built every feature end to end at Minasa.",
    details:
      "DDS Digital (Dana Daya Sejahtera) is the savings and payments app for a cooperative's members. At Minasa Fintech I built all of its features end to end with Flutter, Firebase and REST APIs, using GetX for state management.\n\n- Savings balances for each member\n- Transfers between members and to other banks, and top-ups\n- Bill payments and purchases\n- Monthly summary of income and spending, with full transaction history\n- Receipts you can share or download",
    images: [
      "/projects/dds-digital/screen-1.webp",
      "/projects/dds-digital/screen-2.webp",
      "/projects/dds-digital/screen-3.webp",
      "/projects/dds-digital/screen-4.webp",
      "/projects/dds-digital/screen-5.webp",
    ],
    imageShape: "portrait",
    cover: {
      src: "/projects/dds-digital/icon.webp",
      background: "linear-gradient(135deg, #e3f4f3, #c4e6e4)",
    },
    stores: [
      { store: "google-play", href: "https://play.google.com/store/apps/details?id=id.minasa.satudaya" },
      // Listed in the Indonesian App Store only, so the country code must stay.
      { store: "app-store", href: "https://apps.apple.com/id/app/dds-digital/id1568928400" },
    ],
  },
  {
    title: "Adora Tracker",
    category: "Mobile",
    tag: "Mobile · Private build",
    description: "Location tracking app that runs on a child's device, so parents know where they are.",
    details:
      "Adora Tracker runs on a child's phone and shares its location so parents know where their child is.\n\n- Start and stop tracking with one tap\n- Live position on a map, with latitude and longitude\n- Clear status that shows whether tracking is active or paused\n- Location history and settings",
    images: ["/projects/adora-tracker/screen-1.webp", "/projects/adora-tracker/screen-2.webp"],
    imageShape: "portrait",
    cover: {
      src: "/projects/adora-tracker/icon.webp",
      background: "linear-gradient(135deg, #1f3d2e, #0f1f17)",
      shape: "circle",
    },
    availability: "Not published on Google Play or the App Store",
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
    images: ["/talks/google-1.jpg", "/talks/google-2.jpeg"],
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
    title: "Flutter Instructor — Hacktiv8 x BitHealth",
    category: "Teaching",
    date: "2024",
    location: "Hacktiv8 Indonesia",
    images: ["/talks/hacktiv8-4.jpeg"],
    description:
      "Ran a 6-month mobile development programme for new engineers at BitHealth Indonesia.\n\n- Taught Flutter development including basics and advanced features\n- Guided students in state management techniques and project implementation\n- Provided feedback on coding assignments for cross-platform app building\n- Developed the Flutter Intermediate curriculum for the BPD Kaltimtara project",
  },
  {
    title: "Flutter Instructor — Hacktiv8 x BPD KaltimTara",
    category: "Teaching",
    date: "2024 — 2025",
    location: "Hacktiv8 Indonesia",
    images: ["/talks/hacktiv8-6.jpg"],
    description:
      "Delivered a 1-week mobile app development course for employees of Bank Kaltimtara (BPD Kaltimtara), using a Flutter Intermediate curriculum I developed.",
  },
];
