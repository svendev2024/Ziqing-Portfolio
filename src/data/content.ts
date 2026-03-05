// Site branding (used in header, footer, metadata)
export const site = {
  name: "Ziqing He",
  initials: "ZH",
};

// Contact & social links (used in footer)
export const contact = {
  email: "Johnjinwork9@gmail.com",
  emailAlt: "ziqinghe@proton.me",
  phone: "+12027652780",
  linkedIn: "https://www.linkedin.com/in/ziqing-he-9706b525/",
  location: "123 West 95th Street, New York, NY 10025",
};

export type SocialLinkItem = { href: string; icon: "LinkedIn" | "Email"; label: string };
export const socialLinks: SocialLinkItem[] = [
  { href: contact.linkedIn, icon: "LinkedIn", label: "LinkedIn" },
  { href: `mailto:${contact.email}`, icon: "Email", label: "Email" },
];

// Tech skill name -> local icon filename in /icons/tech/ (same as template)
export const techIconFile: Record<string, string> = {
  Java: "java.svg",
  "Spring Boot": "spring.svg",
  Python: "python.svg",
  Django: "django.svg",
  Flask: "flask-dark.svg",
  FastAPI: "fast-api.svg",
  JavaScript: "javascript.svg",
  TypeScript: "typescript.svg",
  React: "reactjs.svg",
  Redux: "redux.svg",
  NextJS: "nextjs.svg",
  Vue: "vuejs.svg",
  Angular: "angular.svg",
  "Node.js": "nodejs.svg",
  MySQL: "mysql.svg",
  PostgreSQL: "postgresql.svg",
  MongoDB: "mongodb.svg",
  Docker: "docker.svg",
  AWS: "aws.svg",
  Kubernetes: "kubernetes.svg",
  Kafka: "kafka.svg",
  Git: "git.svg",
  GitHub: "github-dark.svg",
  "CI/CD": "ci-cd.svg",
  Rust: "rust.svg",
  "Microsoft Azure": "azure.svg",
};

// Fallback: Simple Icons slug (cdn.simpleicons.org/slug) when local file missing
export const techSkillIcons: Record<string, string> = {
  Java: "openjdk",
  "Spring Boot": "springboot",
  Python: "python",
  Django: "django",
  Flask: "flask",
  FastAPI: "fastapi",
  JavaScript: "javascript",
  TypeScript: "typescript",
  React: "react",
  Redux: "redux",
  NextJS: "nextdotjs",
  Vue: "vuedotjs",
  Angular: "angular",
  "Node.js": "nodedotjs",
  MySQL: "mysql",
  PostgreSQL: "postgresql",
  MongoDB: "mongodb",
  Docker: "docker",
  AWS: "amazonaws",
  Kubernetes: "kubernetes",
  Kafka: "apachekafka",
  Git: "git",
  GitHub: "github",
  "CI/CD": "cicd",
  Jenkins: "jenkins",
  GitLab: "gitlab",
  Rust: "rust",
  "Microsoft Azure": "microsoftazure",
};

export const hero = {
  title: "Hi, I'm Ziqing 👋",
  paragraphs: [
    "Senior Software Engineer based in New York with 10+ years of experience building scalable web applications and systems. I specialize in modern JavaScript frameworks and technologies, including React, Vercel, Next.js, and the Ethereum blockchain. I'm passionate about blockchain and Web3 technologies, with a strong background in both front-end and backend development, including Python and mobile development.",
    "I'm an aspiring designer and creator dedicated to delivering high-quality software solutions. I've worked extensively with React/Redux, TypeScript, Next.js, and Ethereum (Web3.js, Ethers.js) at Magic and have led front-end development at RBC Capital Markets and TD. I'm bilingual in English and Chinese and have elementary Japanese.",
  ],
};

export const funFacts: { text: string; icon: string }[] = [
  { text: "Magic", icon: "building" },
  { text: "B.S. Computer Science — University of Waterloo", icon: "graduation" },
  { text: "New York, NY", icon: "mapPin" },
  { text: "English · Chinese · Japanese (elementary)", icon: "globe" },
  { text: "Senior Software Engineer", icon: "briefcase" },
  { text: "React, Next.js & Ethereum / Web3", icon: "book" },
  { text: "Blockchain & full-stack", icon: "glasses" },
  { text: "Agile & DevOps", icon: "skiing" },
];

export const techSkills = [
  "React",
  "Redux",
  "NextJS",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "AWS",
  "Microsoft Azure",
  "Git",
  "GitHub",
  "CI/CD",
  "Jenkins",
];

// Company slug and logo: logoUrl = local /work/ file (same as template), else Clearbit via logoDomain
export const workExperience = [
  {
    company: "Magic",
    role: "Senior Software Engineer",
    period: "2021 – Present (over 4 years)",
    location: "Remote / US",
    description:
      "Developed applications using JavaScript ES6, TypeScript, React/Redux, and LESS CSS. Worked extensively with Vercel and Next.js for server-side rendering and static site generation. Engaged with Ethereum blockchain technologies, utilizing Web3.js and Ethers.js. Adapted to various roles in a startup environment, demonstrating flexibility and a diverse skill set.",
    slug: "magic",
    logoDomain: "magic.link",
  },
  {
    company: "RBC Capital Markets",
    role: "React.js Developer (External Contractor)",
    period: "2021 (7 months)",
    location: "Remote",
    description:
      "Led front-end development projects using React.js, TypeScript, and Redux. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    slug: "rbc",
    logoDomain: "rbc.com",
  },
  {
    company: "TD",
    role: "Front-end Developer (External Contractor)",
    period: "2020 – 2021 (9 months)",
    location: "Remote",
    description:
      "Developed mobile applications using Angular 1.5, integrating iOS and Android web functionalities.",
    slug: "td",
    logoDomain: "td.com",
  },
  {
    company: "Blueprint Software Systems",
    role: "Software Developer",
    period: "2017 – 2020 (3 years)",
    location: "Canada",
    description:
      "Full Stack Developer with expertise in Angular 1.5, TypeScript, C#, and Microsoft SQL Server. Gained experience in DevOps practices, working with Jenkins and AWS for deployment and CI/CD.",
    slug: "blueprint",
    logoDomain: "blueprintsys.com",
  },
  {
    company: "IBM",
    role: "Test/DevOps Engineer",
    period: "2016 – 2017 (over 1 year)",
    location: "Canada",
    description:
      "Conducted manual and automated testing for applications, providing environmental support for IBM Concert (Alpha Watson Analytics).",
    slug: "ibm",
    logoDomain: "ibm.com",
  },
  {
    company: "BlackBerry",
    role: "Tools Developer (Co-op)",
    period: "2015 – 2016 (about 1 year)",
    location: "Canada",
    description:
      "Developed Java applications in Eclipse and managed database interactions using MySQL.",
    slug: "blackberry",
    logoDomain: "blackberry.com",
  },
  {
    company: "Indigo",
    role: ".Net Developer",
    period: "2014 – 2015 (over 1 year)",
    location: "Canada",
    description:
      "Engaged in C# and VB.Net development, integrating Facebook API for enhanced application functionality.",
    slug: "indigo",
    logoDomain: "indigo.ca",
  },
];

export type ProjectGalleryItem = { title: string; date: string; image?: string; cardStyle?: "award" };
export type ProjectDetail = {
  title: string;
  description: string;
  slug: string;
  image: string;
  teamSize?: number;
  role?: string;
  duration?: string;
  techStack?: string[];
  gallery?: ProjectGalleryItem[];
  introduction?: string;
  keyFeatures?: string[];
  technicalInsights?: string[];
  challengesSolutions?: string[];
  outcome?: string[];
};

export const projects: ProjectDetail[] = [
  {
    title: "Web3 & Next.js Applications at Magic",
    description: "React, Ethereum, and server-side rendering at Magic",
    slug: "project-magic",
    image: "/work/First-work.png",
    teamSize: 0,
    role: "Senior Software Engineer",
    duration: "2021 - Present",
    techStack: ["React", "Redux", "NextJS", "TypeScript", "JavaScript", "Docker", "CI/CD"],
    gallery: [
      { title: "", date: "Internal documentation", image: "/work/first-pro/1.webp" },
      { title: "", date: "Internal documentation", image: "/work/first-pro/2.webp" },
    ],
    introduction:
      "At Magic I develop applications using JavaScript ES6, TypeScript, React/Redux, and LESS CSS. I work extensively with Vercel and Next.js for server-side rendering and static site generation, and engage with Ethereum blockchain technologies using Web3.js and Ethers.js. I adapt to various roles in a startup environment, demonstrating flexibility and a diverse skill set.",
    keyFeatures: [
      "Applications built with React/Redux, TypeScript, and LESS CSS",
      "Vercel and Next.js for server-side rendering and static site generation",
      "Ethereum blockchain integration with Web3.js and Ethers.js",
      "Startup environment with varied responsibilities and agile delivery",
    ],
    technicalInsights: [
      "Modern JavaScript (ES6) and TypeScript for type-safe front-end development",
      "Next.js and Vercel for performant, scalable web applications",
      "Web3.js and Ethers.js for Ethereum and Web3 functionality",
      "LESS CSS for maintainable styling and theming",
    ],
    challengesSolutions: [
      "Rapid iteration: Adapted to startup pace and multiple roles while maintaining quality.",
      "Web3 integration: Connected front-end applications to Ethereum and blockchain workflows.",
      "Performance: Leveraged Next.js SSG/SSR for fast load times and SEO.",
    ],
    outcome: [
      "Shipped production applications with React, Next.js, and Ethereum",
      "Contributed to Magic's Web3 and wallet-related product suite",
      "Gained deep experience in blockchain and modern front-end stack",
    ],
  },
  {
    title: "Front-End Development at RBC Capital Markets",
    description: "React.js, TypeScript, and Redux for capital markets",
    slug: "project-rbc",
    image: "/work/second-work.png",
    teamSize: 0,
    role: "React.js Developer (External Contractor)",
    duration: "2021 (7 months)",
    techStack: ["React", "Redux", "TypeScript", "JavaScript", "Node.js"],
    gallery: [
      { title: "", date: "Internal documentation", image: "/work/sec-pro/1.webp" },
      { title: "", date: "Internal documentation", image: "/work/sec-pro/2.webp" },
    ],
    introduction:
      "At RBC Capital Markets I led front-end development projects using React.js, TypeScript, and Redux. I collaborated with cross-functional teams to deliver high-quality software solutions for capital markets applications.",
    keyFeatures: [
      "Led front-end development on React.js projects",
      "TypeScript and Redux for state management and type safety",
      "Cross-functional collaboration with design and backend teams",
      "High-quality, maintainable code for financial applications",
    ],
    technicalInsights: [
      "React.js and Redux for complex, data-driven UIs",
      "TypeScript for reliability in large codebases",
      "Agile delivery and code review practices",
    ],
    challengesSolutions: [
      "Strict requirements: Delivered robust UIs meeting financial sector standards.",
      "Collaboration: Worked with cross-functional teams to align on UX and API contracts.",
    ],
    outcome: [
      "Delivered front-end solutions for RBC Capital Markets",
      "Strengthened React/TypeScript/Redux expertise in an enterprise setting",
    ],
  },
  {
    title: "Mobile Web Applications at TD",
    description: "Angular and cross-platform mobile web at TD",
    slug: "project-td",
    image: "/work/third-work.png",
    teamSize: 0,
    role: "Front-end Developer (External Contractor)",
    duration: "2020 - 2021 (9 months)",
    techStack: ["Angular", "JavaScript", "TypeScript"],
    gallery: [
      { title: "", date: "Internal documentation", image: "/work/thi-pro/1.webp" },
      { title: "", date: "Internal documentation", image: "/work/thi-pro/2.webp" },
    ],
    introduction:
      "At TD I developed mobile applications using Angular 1.5, integrating iOS and Android web functionalities. I focused on responsive, cross-platform experiences for banking and financial services.",
    keyFeatures: [
      "Mobile applications with Angular 1.5",
      "Integration of iOS and Android web functionalities",
      "Responsive design for mobile and tablet",
    ],
    technicalInsights: [
      "Angular 1.5 for legacy and hybrid mobile web apps",
      "Cross-browser and device testing for iOS and Android",
      "Web views and native integration patterns",
    ],
    challengesSolutions: [
      "Cross-platform consistency: Ensured consistent behavior across iOS and Android web contexts.",
      "Legacy stack: Delivered features and fixes within Angular 1.x ecosystem.",
    ],
    outcome: [
      "Shipped mobile web applications used by TD customers",
      "Gained experience in Angular and mobile web integration",
    ],
  },
  {
    title: "Full-Stack Development at Blueprint Software Systems",
    description: "Angular, C#, and DevOps over 3 years",
    slug: "project-blueprint",
    image: "/work/fourth-work.png",
    teamSize: 0,
    role: "Software Developer",
    duration: "2017 - 2020",
    techStack: ["Angular", "TypeScript", "Node.js", "PostgreSQL", "Docker", "AWS", "Jenkins"],
    gallery: [
      { title: "", date: "Internal documentation", image: "/work/for-pro/1.webp" },
      { title: "", date: "Internal documentation", image: "/work/for-pro/2.webp" },
    ],
    introduction:
      "At Blueprint Software Systems I worked as a Full Stack Developer with expertise in Angular 1.5, TypeScript, C#, and Microsoft SQL Server. I gained experience in DevOps practices, working with Jenkins and AWS for deployment and CI/CD.",
    keyFeatures: [
      "Full-stack development with Angular 1.5, TypeScript, and C#",
      "Microsoft SQL Server for data layer",
      "DevOps with Jenkins and AWS for deployment and CI/CD",
      "Agile delivery over 3 years",
    ],
    technicalInsights: [
      "Angular and TypeScript on the front end; C# and .NET on the back end",
      "SQL Server schema design, queries, and optimization",
      "Jenkins pipelines and AWS for build, test, and deploy",
    ],
    challengesSolutions: [
      "Full lifecycle: Owned features from UI to database and deployment.",
      "DevOps adoption: Introduced and maintained CI/CD with Jenkins and AWS.",
    ],
    outcome: [
      "Delivered and maintained full-stack applications at Blueprint",
      "Built strong DevOps and cloud experience (Jenkins, AWS)",
    ],
  },
];
