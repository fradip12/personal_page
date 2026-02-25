export const siteConfig = {
  name: "Richard hanrick",
  title: "Web developer",
  avatar: "/images/my-avatar.png",
  email: "richard@example.com",
  phone: "+1 (213) 352-2795",
  birthday: "June 23, 1982",
  location: "Sacramento, California, USA",
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

export const testimonials = [
  {
    name: "Daniel lewis",
    avatar: "/images/avatar-1.png",
    text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, sedd dings eidings am am am.",
  },
  {
    name: "Jessica miller",
    avatar: "/images/avatar-2.png",
    text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, sedd dings eidings am am am.",
  },
  {
    name: "Emily evans",
    avatar: "/images/avatar-3.png",
    text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, sedd dings eidings am am am.",
  },
  {
    name: "Henry william",
    avatar: "/images/avatar-4.png",
    text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, sedd dings eidings am am am.",
  },
];

export const clients = [
  { logo: "/images/logo-1-color.png", name: "Client 1" },
  { logo: "/images/logo-2-color.png", name: "Client 2" },
  { logo: "/images/logo-3-color.png", name: "Client 3" },
  { logo: "/images/logo-4-color.png", name: "Client 4" },
  { logo: "/images/logo-5-color.png", name: "Client 5" },
  { logo: "/images/logo-6-color.png", name: "Client 6" },
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
  | "Web design"
  | "Applications"
  | "Web development";

export const projects = [
  {
    title: "Finance",
    category: "Web development" as ProjectCategory,
    image: "/images/project-1.jpg",
  },
  {
    title: "Orizon",
    category: "Web development" as ProjectCategory,
    image: "/images/project-2.png",
  },
  {
    title: "Fundo",
    category: "Web design" as ProjectCategory,
    image: "/images/project-3.jpg",
  },
  {
    title: "Brawlhalla",
    category: "Applications" as ProjectCategory,
    image: "/images/project-4.png",
  },
  {
    title: "DSM.",
    category: "Web design" as ProjectCategory,
    image: "/images/project-5.png",
  },
  {
    title: "MetaSpark",
    category: "Web design" as ProjectCategory,
    image: "/images/project-6.png",
  },
  {
    title: "Summary",
    category: "Web development" as ProjectCategory,
    image: "/images/project-7.png",
  },
  {
    title: "Task Manager",
    category: "Applications" as ProjectCategory,
    image: "/images/project-8.jpg",
  },
  {
    title: "Arrival",
    category: "Web development" as ProjectCategory,
    image: "/images/project-9.png",
  },
];

export const blogPosts = [
  {
    title: "Design conferences in 2022",
    category: "Design",
    date: "Feb 23, 2022",
    image: "/images/blog-1.jpg",
    description:
      "Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.",
  },
  {
    title: "Best fonts every designer",
    category: "Design",
    date: "Feb 23, 2022",
    image: "/images/blog-2.jpg",
    description:
      "Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.",
  },
  {
    title: "Design digest #80",
    category: "Design",
    date: "Feb 23, 2022",
    image: "/images/blog-3.jpg",
    description:
      "Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.",
  },
  {
    title: "UI interactions of the week",
    category: "Design",
    date: "Feb 23, 2022",
    image: "/images/blog-4.jpg",
    description:
      "Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.",
  },
  {
    title: "The forgotten art of spacing",
    category: "Design",
    date: "Feb 23, 2022",
    image: "/images/blog-5.jpg",
    description:
      "Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Design digest #79",
    category: "Design",
    date: "Feb 23, 2022",
    image: "/images/blog-6.jpg",
    description:
      "Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.",
  },
];

export const categories: ProjectCategory[] = [
  "All",
  "Web design",
  "Applications",
  "Web development",
];
