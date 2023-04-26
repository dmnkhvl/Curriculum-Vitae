export interface Experience {
  id: number;
  company: string;
  href: string;
  position: string;
  from: string;
  to: string;

  skills?: Array<{ id: number; name: string }>;
  about?: Array<{ id: number; text: string }>;
}

export const experiences: Experience[] = [
  {
    id: 0,
    company: "Websupport.sk",
    href: "https://www.websupport.sk/",
    position: "Frontend Developer",
    from: "03/2023",
    to: "present",
    skills: [
      {
        id: 0,
        name: "TypeScript",
      },
      {
        id: 1,
        name: "Vue.js",
      },
      {
        id: 2,
        name: "SCSS",
      },
      {
        id: 3,
        name: "Docker",
      },
    ],
    about: [
      {
        id: 0,
        text: "Working on projects migrations to one platform",
      },
      {
        id: 1,
        text: "Rewriting old projects into Composition API",
      },
      {
        id: 2,
        text: "Refactoring code from Jest to Vitest",
      },
      {
        id: 3,
        text: "Creating components into UI library",
      },
    ],
  },
  {
    id: 2,
    company: "Freelance",
    href: "https://www.websupport.sk/",
    position: "Software Engineer",
    from: "09/2022",
    to: "03/2023",
    skills: [
      {
        id: 0,
        name: "TypeScript",
      },
      {
        id: 1,
        name: "Vue.js",
      },
      {
        id: 2,
        name: "Nuxt.js",
      },
      {
        id: 3,
        name: "React",
      },
      {
        id: 4,
        name: "Tailwind CSS",
      },
      {
        id: 4,
        name: "Supabase",
      },
    ],
    about: [
      {
        id: 0,
        text: "Communicating with clients to understand their needs",
      },
      {
        id: 1,
        text: "Creating frontends for existing backend",
      },
      {
        id: 2,
        text: "Building apps from scratch",
      },
    ],
  },
  {
    id: 2,
    company: "Vermont services",
    href: "https://www.websupport.sk/",
    position: "Junior Software Engineer",
    from: "03/2022",
    to: "07/2022",
    skills: [
      {
        id: 0,
        name: "JavaScript",
      },
      {
        id: 1,
        name: "Vue.js",
      },
      {
        id: 3,
        name: "Laravel",
      },
      {
        id: 4,
        name: "MySQL",
      },
    ],
    about: [
      {
        id: 0,
        text: "Helping with frontend development",
      },
      {
        id: 1,
        text: "Working on translations for frontend",
      },
      {
        id: 2,
        text: "Designing database structure",
      },
      {
        id: 3,
        text: "Maintaining backend for internal applications",
      },
    ],
  },
  {
    id: 2,
    company: "Basketlab.sk",
    href: "https://www.websupport.sk/",
    position: "Founder & Creator",
    from: "08/2018",
    to: "09/2021",
    skills: [
      {
        id: 0,
        name: "Management",
      },
      {
        id: 1,
        name: "Marketing",
      },
      {
        id: 3,
        name: "Graphic Design",
      },
      {
        id: 4,
        name: "Content Creation",
      },
    ],
    about: [
      {
        id: 0,
        text: "Building brand from scratch including logo, website, social media accounts, etc.",
      },
      {
        id: 1,
        text: "News filtering and creating content for social media accounts",
      },
      {
        id: 2,
        text: "Interviewing basketball players and coaches",
      },
      {
        id: 3,
        text: "Understanding the needs of the audience",
      },
    ],
  },
];
