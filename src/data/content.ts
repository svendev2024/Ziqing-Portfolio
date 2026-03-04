// Site branding (used in header, footer, metadata)
export const site = {
  name: "Max Villafranca",
  initials: "MV",
};

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
  title: "Hi, I'm Max 👋",
  paragraphs: [
    "Software Developer based in Monterrey, Nuevo León, Mexico, with over 12 years of experience building scalable backend systems, payment processing and fraud detection platforms, and full-stack applications. I lead the design and development of high-throughput services at Conekta and have introduced Rust for internal tooling, CLI scripts, and new backend experiments.",
    "Strong background in Java/Spring Boot production support (L2+/L3), SRE/operations with CloudWatch, runbooks, and CI/CD. I've built multilingual education platforms, internal business applications, and custom software for small businesses using React, Express.js, PostgreSQL, and cloud infrastructure. I speak Portuguese, Spanish, and English and enjoy mentoring teams and driving architectural improvements.",
  ],
};

export const funFacts: { text: string; icon: string }[] = [
  { text: "Conekta", icon: "building" },
  { text: "B.S. Computer Software Engineering — IEU Universidad", icon: "graduation" },
  { text: "Monterrey, Nuevo León, Mexico", icon: "mapPin" },
  { text: "Portuguese · Spanish · English", icon: "globe" },
  { text: "Senior Software Engineer", icon: "briefcase" },
  { text: "Rust & Java backend", icon: "book" },
  { text: "Payment & fraud systems", icon: "glasses" },
  { text: "Team mentoring", icon: "skiing" },
];

export const techSkills = [
  "Java",
  "Spring Boot",
  "Rust",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "PostgreSQL",
  "Docker",
  "Microsoft Azure",
  "Git",
  "GitHub",
  "CI/CD",
  "Jenkins",
];

// Company slug and logo: logoUrl = local /work/ file (same as template), else Clearbit via logoDomain
export const workExperience = [
  {
    company: "Conekta",
    role: "Senior Software Engineer",
    period: "Oct 2024 – Present",
    location: "Mexico",
    description:
      "Leading the design and development of scalable backend systems for payment processing and fraud detection. Introduced Rust for internal tooling and CLI scripts; piloting Rust for new backend experiments. Driving architectural improvements and modernizing legacy services into microservices. Java/Spring Boot L2+/L3 support on Tomcat; SRE/operations with CloudWatch dashboards, runbooks, and CI/CD via Git/Jenkins.",
    slug: "conekta",
    logoDomain: "conekta.com",
  },
  {
    company: "English Nation",
    role: "Software Engineer",
    period: "Mar 2021 – Dec 2024",
    location: "Remote",
    description:
      "Designed and implemented key modules in a multilingual education platform used by thousands of learners. Prototyped Rust microservices for student analytics; used Rust for CLI utilities. Championed CI/CD, automated testing, and performance monitoring. Java/Struts and Spring MVC support; tuned PostgreSQL/DB2, Autosys/crontab monitors, and JVM/SSL standardization.",
    slug: "english-nation",
    logoDomain: "englishnation.com",
  },
  {
    company: "Finesse",
    role: "Software Developer",
    period: "Jul 2018 – Mar 2021",
    location: "Brecksville, Ohio, US",
    description:
      "Developed and maintained internal business applications for inventory, sales, and customer service. Implemented reporting dashboards and back-office automation tools. Collaborated with designers and stakeholders on UI/UX and functionality.",
    slug: "finesse",
    logoDomain: "finesse.com",
  },
  {
    company: "Self-employed",
    role: "Software Developer",
    period: "Jan 2015 – May 2018",
    location: "Monterrey, Nuevo León, Mexico",
    description:
      "Delivered custom software solutions to small businesses and startups. Developed full-stack web applications, CRM tools, and automation scripts. Used React, Express.js, PostgreSQL, and DigitalOcean; managed full lifecycle from consultation to deployment.",
    slug: "self-employed",
    logoDomain: "digitalocean.com",
  },
  {
    company: "Atos",
    role: "Junior Software Developer",
    period: "Oct 2012 – Dec 2014",
    location: "Monterrey, Nuevo León, Mexico",
    description:
      "L2 technical support and maintenance of enterprise software. Automated internal workflows with PowerShell and batch scripting. Bug fixes, refactoring, and minor features under senior guidance; supported deployments and environment configuration.",
    slug: "atos",
    logoDomain: "atos.net",
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
    title: "Payment Processing & Fraud Detection Systems",
    description: "Scalable backend systems for payments and fraud at Conekta",
    slug: "project-a",
    image: "oscilar",
    teamSize: 4,
    role: "Senior Software Engineer",
    duration: "Oct 2024 - Present",
    techStack: ["Java", "Spring Boot", "Rust", "Docker", "CI/CD", "Jenkins", "Git"],
    gallery: [
      {title: "", date: "Internal documentation", image: "/work/first-pro/1.webp" },
      { title: "", date: "Internal documentation", image: "/work/first-pro/2.webp" },
    ],
    introduction:
      "At Conekta I lead the design and development of scalable backend systems for payment processing and fraud detection. I introduced Rust for internal tooling and CLI scripts (repository health checks, data automation) and pilot Rust for new backend experiments to evaluate performance and memory safety in high-throughput tasks.",
    keyFeatures: [
      "Scalable backend systems for payment processing and fraud detection",
      "Rust-based internal tooling and CLI scripts for repo health checks and data automation",
      "Rust pilots for new backend experiments (performance and memory safety)",
      "Architectural improvements and legacy-to-microservices modernization",
      "Java/Spring Boot L2+/L3 production support on Tomcat; Sev-1/Sev-2 triage, GC and HikariCP tuning",
      "CloudWatch dashboards and alarms for JVM and API SLAs; runbooks, bash utilities, health checks",
      "Hotfix and change windows via Git/Jenkins with backout plans",
    ],
    technicalInsights: [
      "Java + Spring Boot payment APIs on Tomcat; reduced p95 latency and MTTR through tuning",
      "Rust for internal tooling: repository health checks, CLI scripts, and data automation",
      "Evaluated Rust for high-throughput backend experiments (performance, memory safety)",
      "SRE/operations: CloudWatch, runbooks, log parsing, post-deploy smoke tests",
      "CI/CD and change management with Git/Jenkins and backout plans",
    ],
    challengesSolutions: [
      "Production incidents and latency: Triage Sev-1/Sev-2, analyze thread/heap dumps, tune GC and HikariCP to reduce p95 latency and MTTR.",
      "Observability and reliability: Implemented CloudWatch dashboards/alarms for JVM and API SLAs; authored runbooks and bash utilities for log parsing and health checks.",
      "Legacy systems: Driving architectural improvements and modernizing legacy services into microservices.",
      "Internal efficiency: Introduced Rust for tooling and automation to improve repo health and data workflows.",
    ],
    outcome: [
      "Reduced p95 latency and MTTR for Java payment APIs through targeted tuning",
      "Improved operational visibility with CloudWatch and runbooks",
      "Introduced Rust for internal tooling and backend experiments",
      "Ongoing modernization of legacy services into microservices",
    ],
  },
  {
    title: "Multilingual Education Platform",
    description: "Education platform for thousands of learners at English Nation",
    slug: "project-b",
    image: "/work/second-work.png",
    teamSize: 8,
    role: "Software Engineer",
    duration: "Mar 2021 - Dec 2024",
    techStack: ["Java", "Spring Boot", "Rust", "PostgreSQL", "React", "CI/CD"],
    gallery: [
      {title: "", date: "Internal documentation", image: "/work/sec-pro/1.webp" },
      { title: "", date: "Internal documentation", image: "/work/sec-pro/2.webp" },
    ],
    introduction:
      "At English Nation I designed and implemented key modules in a multilingual education platform used by thousands of learners. I prototyped Rust microservices for student analytics and used Rust for CLI utilities (data parsing, local environment validation). I championed CI/CD, automated testing, and performance monitoring.",
    keyFeatures: [
      "Key modules in a multilingual education platform for thousands of learners",
      "Rust microservice prototypes for student analytics processing",
      "Rust CLI utilities for data parsing and local environment validation",
      "Agile ceremonies and close work with product on user stories",
      "CI/CD, automated testing, and performance monitoring for mission-critical services",
      "Java/Struts and Spring MVC support; JDBC, thread contention, classloader fixes",
      "PostgreSQL/DB2 query and index tuning; Autosys/crontab monitors with alert deduplication",
    ],
    technicalInsights: [
      "Java/Struts and Spring MVC in production on Tomcat/WebSphere; resolved connection leaks and classloader conflicts",
      "Database tuning: PostgreSQL/DB2 queries and indexes to shrink batch windows",
      "Scheduling and monitoring: Autosys/crontab with alert deduplication; JVM flags and SSL/keystore renewals",
      "Rust for analytics processing and CLI tooling",
      "CI/CD and performance monitoring practices",
    ],
    challengesSolutions: [
      "Production stability: Resolved JDBC connection leaks, thread contention, and classloader conflicts in Java services.",
      "Batch and performance: Tuned PostgreSQL/DB2 queries and indexes to reduce batch windows.",
      "Operational reliability: Implemented Autosys/crontab monitors with alert deduplication; standardized JVM flags and SSL/keystore renewals to prevent handshake issues.",
      "Data and tooling: Used Rust for analytics prototypes and CLI utilities.",
    ],
    outcome: [
      "Delivered key modules used by thousands of learners on the education platform",
      "Improved production stability and batch performance through tuning and monitoring",
      "Introduced Rust for analytics and internal tooling",
      "Strengthened CI/CD and performance monitoring for mission-critical services",
    ],
  },
  {
    title: "Internal Business Applications & Dashboards",
    description: "Inventory, sales, and customer service apps at Finesse",
    slug: "project-c",
    image: "/work/third-work.png",
    teamSize: 5,
    role: "Software Developer",
    duration: "Jul 2018 - Mar 2021",
    techStack: ["JavaScript", "React", "Node.js", "PostgreSQL"],
    gallery: [
      {title: "", date: "Internal documentation", image: "/work/thi-pro/1.webp" },
      { title: "", date: "Internal documentation", image: "/work/thi-pro/2.webp" },
    ],
    introduction:
      "At Finesse I developed and maintained internal business applications for inventory, sales, and customer service workflows. I implemented reporting dashboards and back-office automation tools and collaborated with designers and stakeholders on UI/UX and functionality.",
    keyFeatures: [
      "Internal business applications for inventory, sales, and customer service",
      "Reporting dashboards and back-office automation",
      "Iteration on UI/UX and functionality with designers and stakeholders",
      "Operational efficiency improvements",
    ],
    technicalInsights: [
      "Full-stack development for internal workflows",
      "Dashboard and reporting tooling",
      "Stakeholder and designer collaboration",
    ],
    challengesSolutions: [
      "Manual and fragmented workflows: Built applications and automation to centralize and streamline operations.",
      "Visibility into operations: Implemented reporting dashboards for better decision-making.",
      "Evolving requirements: Collaborated with designers and stakeholders to iterate on UI/UX and features.",
    ],
    outcome: [
      "Improved operational efficiency with automation and dashboards",
      "Supported inventory, sales, and customer service workflows",
      "Delivered tools aligned with stakeholder and design feedback",
    ],
  },
  {
    title: "Custom Full-Stack Solutions for Startups",
    description: "Web apps, CRM, and automation for small businesses",
    slug: "project-d",
    image: "/work/fourth-work.png",
    teamSize: 6,
    role: "Software Developer",
    duration: "Jan 2015 - May 2018",
    techStack: ["React", "Express.js", "PostgreSQL", "DigitalOcean"],
    gallery: [
      {title: "", date: "Internal documentation", image: "/work/for-pro/1.webp" },
      { title: "", date: "Internal documentation", image: "/work/for-pro/2.webp" },
    ],
    introduction:
      "As a self-employed developer I delivered custom software solutions to small businesses and startups across industries. I built full-stack web applications, CRM tools, and automation scripts and managed the full lifecycle from client consultation to deployment and maintenance using React, Express.js, PostgreSQL, and DigitalOcean.",
    keyFeatures: [
      "Custom software for small businesses and startups across industries",
      "Full-stack web applications, CRM tools, and automation scripts",
      "End-to-end lifecycle: consultation, development, deployment, maintenance",
      "React, Express.js, PostgreSQL, DigitalOcean",
    ],
    technicalInsights: [
      "React and Express.js for full-stack web applications",
      "PostgreSQL for data persistence",
      "DigitalOcean for deployment and hosting",
      "Client-facing delivery and maintenance",
    ],
    challengesSolutions: [
      "Diverse client needs: Tailored solutions per industry and use case.",
      "Resource constraints: Used modern, cost-effective stack (React, Express, PostgreSQL, DigitalOcean) for reliable delivery.",
      "Ongoing support: Managed deployment and maintenance to keep solutions running.",
    ],
    outcome: [
      "Delivered custom solutions across multiple industries",
      "Strengthened client delivery and long-term support.",
      "Built and maintained full-stack web apps, CRMs, and automation",
      "Managed full lifecycle from consultation to deployment and maintenance",
    ],
  },
];
