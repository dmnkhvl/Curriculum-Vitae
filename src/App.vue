<template>
  <div>
    <header class="text-center">
      <h1 class="text-4xl sm:text-[2.9rem] font-bold mt-10">Dominik Havel</h1>
      <h2 class="font-light mt-3 text-lg">Frontend Software Engineer</h2>

      <div class="flex justify-center items-center gap-x-2 mt-6">
        <button-social
          text="dmnkhvl.eu"
          href="https://dmnkhvl.eu"
          aria-label="Link to my website"
          basic
          ><img src="web.svg" alt="website" class="w-4 h-4"
        /></button-social>
        <button-social
          text="/dmnkhvl"
          href="https://www.linkedin.com/in/dmnkhvl/"
          aria-label="Link to my LinkedIn"
          linkedin
          ><img src="linkedin.svg" alt="linkedin" class="w-4 h-4"
        /></button-social>
        <button-social
          text="/dmnkhvl"
          href="https://github.com/dmnkhvl"
          aria-label="Link to my GitHub"
          github
          ><img src="github.svg" alt="github" class="w-4 h-4"
        /></button-social>
      </div>
      <div
        class="mt-4 flex items-center justify-center gap-x-6 font-light text-xs"
      >
        <a href="mailto:dev@dmnkhvl.eu" target="_blank" rel="noreferrer"
          >dev@dmnkhvl.eu</a
        >
        <p>+421902660661</p>
      </div>
    </header>
    <main>
      <page-section heading="About Me" class="mt-4">
        <p class="font-extralight text-xs max-w-[55ch] leading-relaxed">
          <span class="font-normal">Software Engineer</span> focused mainly on
          the frontend of applications.
          <span class="font-normal"
            >Using my skills to transform code into meaningful and enjoyable
            experiences</span
          >. I started working as a graphic designer while playing basketball.
          That led me to creating simple websites with a focus on UI/UX. After 5
          years of graphic designing I stared building website with PHP,
          JavaScript, and HTML/CSS. It's been 7 years since then, and I upgraded
          my tech stack to Vue.js, React, TypeScript, and Nuxt.js, among other
          technologies.
        </p>
      </page-section>
      <page-section heading="Skills & Tools">
        <page-subsection heading="Languages">
          <skill-section title="FE related" :skills="frontendLanguages" />
          <skill-section title="BE related" :skills="backendLanguages" />
        </page-subsection>
        <page-subsection heading="Technologies">
          <skill-section title="FE related" :skills="frontendTechnologies" />
          <skill-section title="BE related" :skills="backendTechnologies" />
          <skill-section title="UI related" :skills="UITechnologies" />
        </page-subsection>
        <page-subsection heading="Tools">
          <skill-section title="Dev related" :skills="devTools" />
          <skill-section title="Designer related" :skills="designTools" />
        </page-subsection>
      </page-section>
      <page-section heading="Work Experience">
        <div class="flex flex-col gap-y-10">
          <work-experience
            v-for="experience in experiences"
            :key="experience.id"
            :experience="experience"
          />
        </div>
      </page-section>
      <page-section heading="Education">
        <div class="sm:flex gap-x-10 items-end">
          <h3 class="text-sm">
            Mendelova Univerzita v Brne
            <span class="font-light"
              ><br class="sm:hidden" />
              — Ekonomická informatika</span
            >
          </h3>
          <p class="font-light text-xs mt-2 sm:mt-0">2020-2022</p>
        </div>
      </page-section>
    </main>
  </div>
</template>
<script setup lang="ts">
import ButtonSocial from "./components/ButtonSocial.vue";
import PageSection from "./components/PageSection.vue";
import SkillSection from "./components/SkillSection.vue";
import { skills, Related, Category } from "./data/skills";
import { computed } from "vue";
import PageSubsection from "./components/PageSubsection.vue";
import WorkExperience from "./components/WorkExperience.vue";
import { experiences } from "./data/experiences";

function filterSkills(category: Category, related?: Related) {
  return computed(() => {
    return skills.filter(
      (skill) => skill.category === category && skill.related === related
    );
  });
}

const frontendLanguages = filterSkills(Category.Languages, Related.Frontend);
const backendLanguages = filterSkills(Category.Languages, Related.Backend);
const frontendTechnologies = filterSkills(
  Category.Technologies,
  Related.Frontend
);
const backendTechnologies = filterSkills(
  Category.Technologies,
  Related.Backend
);
const UITechnologies = filterSkills(Category.Technologies, Related.UI);
const devTools = filterSkills(Category.Tools, Related.Dev);
const designTools = filterSkills(Category.Tools, Related.Design);
</script>
