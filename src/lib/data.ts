export const siteConfig = {
  name: "Fradipta Alqaiyum (Dip)",
  title: "Software Engineer | Mobile | AI/ML Enthusiast",
  avatar: "/images/my-avatar.png",
  coverImage: "",
  email: "fradipta.alqaiyum@gmail.com",
  phone: "+62 812 6878-6843",
  birthday: "January 12, 1999",
  location: "Jakarta, Indonesia",
  socialLinks: [
    { name: "Facebook", url: "#" },
    { name: "Twitter", url: "#" },
    { name: "Instagram", url: "#" },
  ],
};

export const aboutText = [
  "I'm Creative Director and UI/UX Designer from Sacramento, California, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.",
  "My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.",
];

export const services = [
  {
    icon: "/images/icon-design.svg",
    title: "Web design",
    description:
      "The most modern and high-quality design made at a professional level.",
  },
  {
    icon: "/images/icon-dev.svg",
    title: "Web development",
    description:
      "High-quality development of sites at the professional level.",
  },
  {
    icon: "/images/icon-app.svg",
    title: "Mobile apps",
    description:
      "Professional development of applications for iOS and Android.",
  },
  {
    icon: "/images/icon-photo.svg",
    title: "Photography",
    description:
      "I make high-quality photos of any category at a professional level.",
  },
];

export const techStack = [
  { icon: "html5", name: "HTML5" },
  { icon: "css3", name: "CSS3" },
  { icon: "js", name: "JavaScript" },
  { icon: "typescript", name: "TypeScript" },
  { icon: "react", name: "React" },
  { icon: "nextjs2", name: "Next.js" },
  { icon: "tailwindcss", name: "Tailwind CSS" },
  { icon: "nodejs", name: "Node.js" },
  { icon: "figma", name: "Figma" },
  { icon: "git", name: "Git" },
];

export const techStackCategories = [
  {
    label: "Web Dev",
    emoji: "🌐",
    techs: [
      { icon: "html5", name: "HTML5" },
      { icon: "css3", name: "CSS3" },
      { icon: "js", name: "JavaScript" },
      { icon: "typescript", name: "TypeScript" },
      { icon: "react", name: "React" },
      { icon: "nextjs2", name: "Next.js" },
      { icon: "tailwindcss", name: "Tailwind" },
      { icon: "sass", name: "Sass" },
      { icon: "vuejs", name: "Vue.js" },
      { icon: "shadcnui", name: "shadcn/ui" },
    ],
  },
  {
    label: "Mobile",
    emoji: "📱",
    techs: [
      { icon: "flutter", name: "Flutter" },
      { icon: "dart", name: "Dart" },
      { icon: "expo", name: "Expo" },
      { icon: "swift", name: "Swift" },
      { icon: "kotlin", name: "Kotlin" },
      { icon: "android", name: "Android" },
    ],
  },
  {
    label: "AI Tools",
    emoji: "🤖",
    techs: [
      { icon: "python", name: "Python" },
      { icon: "openai", name: "OpenAI" },
      { icon: "anthropic", name: "Anthropic" },
      { icon: "huggingface", name: "HuggingFace" },
      { icon: "langchain", name: "LangChain" },
      { icon: "pytorch", name: "PyTorch" },
      { icon: "gemini", name: "Gemini" },
      { icon: "deepseek", name: "DeepSeek" },
    ],
  },
  {
    label: "DevOps",
    emoji: "⚙️",
    techs: [
      { icon: "docker", name: "Docker" },
      { icon: "kubernetes", name: "Kubernetes" },
      { icon: "git", name: "Git" },
      { icon: "github", name: "GitHub" },
      { icon: "linux", name: "Linux" },
      { icon: "aws", name: "AWS" },
      { icon: "vercel", name: "Vercel" },
      { icon: "gcloud", name: "GCP" },
      { icon: "terraform", name: "Terraform" },
    ],
  },
  {
    label: "Backend",
    emoji: "🗄️",
    techs: [
      { icon: "nodejs", name: "Node.js" },
      { icon: "expressjs", name: "Express" },
      { icon: "postgresql", name: "PostgreSQL" },
      { icon: "mongodb", name: "MongoDB" },
      { icon: "redis", name: "Redis" },
      { icon: "graphql", name: "GraphQL" },
      { icon: "prisma", name: "Prisma" },
      { icon: "django", name: "Django" },
    ],
  },
];

export const education = [
  {
    title: "University school of the arts",
    period: "2007 — 2008",
    description:
      "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.",
  },
  {
    title: "New york academy of art",
    period: "2006 — 2007",
    description:
      "Ratione voluptatem sequi nesciunt, facere quisquams am am am. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    title: "High school of art and design",
    period: "2002 — 2004",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate, quias nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
];

export const experience = [
  {
    title: "Creative director",
    period: "2015 — Present",
    description:
      "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.",
  },
  {
    title: "Art director",
    period: "2013 — 2015",
    description:
      "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.",
  },
  {
    title: "Web designer",
    period: "2010 — 2013",
    description:
      "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.",
  },
];

export const skills = [
  { name: "Web design", value: 80 },
  { name: "Graphic design", value: 70 },
  { name: "Branding", value: 90 },
  { name: "WordPress", value: 50 },
];

export type ProjectCategory =
  | "All"
  | "Web-app"
  | "Applications"
  | "AI/RAG";

export const projects = [
  {
    title: "Finance",
    category: "Web development" as ProjectCategory,
    image: "/images/project-1.jpg",
  },
  
];

export const blogPosts = [
  {
    title: "Hacktiv8 x IBM Skillsbuild Developer Initiative Instructor",
    category: "Design",
    date: "Feb 23, 2022",
    image: "/images/blog-1.jpg",
    url: "https://www.ibm.com/skillsbuild",
    description:
      `Program ini memberikan akses ke kurikulum AI, data, dan cloud milik IBM, dikombinasikan dengan mentoring serta pembelajaran berbasis proyek. Mahasiswa dan pengajar membangun keterampilan praktis melalui guided self-study, sesi pembelajaran langsung, dan proyek portofolio yang membantu meningkatkan kepercayaan diri dalam menggunakan teknologi baru.
Melalui inisiatif ini, IBM membuka akses ke kurikulum berstandar dunia bagi perguruan tinggi di Indonesia dengan dampak sebagai berikut:
- 11.500+ mahasiswa terdaftar
- 11.390+ peserta yang dilatih
- 98% tingkat penyelesaian program
- 1.361 sekolah telah terlibat
- 38% tingkat pendaftar adalah wanita
- 707 dosen telah terdaftar`,
  }
  
];

export const categories: ProjectCategory[] = [
  "All",
  "Web-app",
  "Applications",
  "AI/RAG",
];
