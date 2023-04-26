import { Experience, experiences } from "./experiences";

export enum Category {
  Languages = "Languages",
  Design = "Design",
  Technologies = "Technologies",
  Tools = "Tools",
}

export enum Related {
  Frontend = "Frontend",
  Backend = "Backend",
  UI = "UI",
  Design = "Design",
  Dev = "Dev",
}

export interface Skill {
  id: number;
  name: string;
  category: Category;
  related: Related;
  experience?: Experience;
}

export const skills: Skill[] = [
  {
    id: 0,
    name: "HTML",
    category: Category.Languages,
    related: Related.Frontend,
  },
  {
    id: 1,
    name: "CSS/SCSS",
    category: Category.Languages,
    related: Related.Frontend,
  },
  {
    id: 2,
    name: "PHP",
    category: Category.Languages,
    related: Related.Backend,
  },
  {
    id: 3,
    name: "SQL",
    category: Category.Languages,
    related: Related.Backend,
  },
  {
    id: 4,
    name: "TypeScript",
    category: Category.Languages,
    related: Related.Frontend,
  },
  {
    id: 5,
    name: "JavaScript",
    category: Category.Languages,
    related: Related.Frontend,
  },
  {
    id: 6,
    name: "Python",
    category: Category.Languages,
    related: Related.Backend,
  },
  {
    id: 7,
    name: "Vue.js",
    category: Category.Technologies,
    related: Related.Frontend,
  },
  {
    id: 8,
    name: "Nuxt.js",
    category: Category.Technologies,
    related: Related.Frontend,
  },
  {
    id: 9,
    name: "React",
    category: Category.Technologies,
    related: Related.Frontend,
  },
  {
    id: 10,
    name: "Next.js",
    category: Category.Technologies,
    related: Related.Frontend,
  },
  {
    id: 11,
    name: "Vuex",
    category: Category.Technologies,
    related: Related.Frontend,
  },
  {
    id: 12,
    name: "Redux",
    category: Category.Technologies,
    related: Related.Frontend,
  },
  {
    id: 13,
    name: "Vite",
    category: Category.Technologies,
    related: Related.Frontend,
  },
  {
    id: 14,
    name: "Storybook",
    category: Category.Technologies,
    related: Related.Frontend,
  },
  {
    id: 14,
    name: "Jest",
    category: Category.Technologies,
    related: Related.Frontend,
  },
  {
    id: 14,
    name: "Vitest",
    category: Category.Technologies,
    related: Related.Frontend,
  },
  {
    id: 14,
    name: "MySQL",
    category: Category.Technologies,
    related: Related.Backend,
  },
  {
    id: 15,
    name: "Laravel",
    category: Category.Technologies,
    related: Related.Backend,
  },
  {
    id: 16,
    name: "Node.js",
    category: Category.Technologies,
    related: Related.Backend,
  },
  {
    id: 17,
    name: "Tailwind CSS",
    category: Category.Technologies,
    related: Related.UI,
  },
  {
    id: 18,
    name: "Material UI",
    category: Category.Technologies,
    related: Related.UI,
  },
  {
    id: 19,
    name: "Vuetify",
    category: Category.Technologies,
    related: Related.UI,
  },
  {
    id: 21,
    name: "Cypress",
    category: Category.Technologies,
    related: Related.Frontend,
  },
  {
    id: 22,
    name: "UI/UX Deisgn",
    category: Category.Design,
    related: Related.Design,
  },
  {
    id: 23,
    name: "Graphic Design",
    category: Category.Design,
    related: Related.Design,
  },
  {
    id: 24,
    name: "PHPStorm",
    category: Category.Tools,
    related: Related.Dev,
  },
  {
    id: 25,
    name: "Git",
    category: Category.Tools,
    related: Related.Dev,
  },
  {
    id: 25,
    name: "Gitlab/Github",
    category: Category.Tools,
    related: Related.Dev,
  },
  {
    id: 26,
    name: "Docker",
    category: Category.Tools,
    related: Related.Dev,
  },
  {
    id: 27,
    name: "Jira",
    category: Category.Tools,
    related: Related.Dev,
  },
  {
    id: 28,
    name: "Figma",
    category: Category.Tools,
    related: Related.Design,
  },
  {
    id: 29,
    name: "Adobe Photoshop",
    category: Category.Tools,
    related: Related.Design,
  },
  {
    id: 29,
    name: "Adobe Illustrator",
    category: Category.Tools,
    related: Related.Design,
  },
];
