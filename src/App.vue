<template>
  <div>
    <header class="text-center">
      <h1 class="text-5xl font-bold mt-16">Dominik Havel</h1>
      <h2 class="font-light mt-2 text-lg">
        Frontend Engineer· Graphic Designer
      </h2>
      <div
        class="mt-8 flex items-center justify-center gap-x-6 font-light text-xs"
      >
        <a href="mailto:dev@dmnkhvl.eu" target="_blank" rel="noreferrer"
          >dev@dmnkhvl.eu</a
        >
        <p>+421902660661</p>
      </div>
      <div class="flex justify-center items-center gap-x-2 mt-3">
        <button-social
          text="dmnkhvl.eu"
          href="https://dmnkhvl.eu"
          aria-label="Link to my website"
          basic
        />
        <button-social
          text="/dmnkhvl"
          href="https://www.linkedin.com/in/dmnkhvl/"
          aria-label="Link to my LinkedIn"
          linkedin
        />
        <button-social
          text="/dmnkhvl"
          href="https://github.com/dmnkhvl"
          aria-label="Link to my GitHub"
          github
        />
      </div>
    </header>
    <hr class="w-full mt-10 opacity-10" />
    <main>
      <page-section heading="About Me">
        <p class="font-extralight text-sm max-w-[55ch] leading-relaxed">
          I am a frontend web developer with an eye for detail. After years of
          playing basketball at the national level and graphic designing , I
          decided to develop web applications in college, where I had the chance
          to work with different technologies. Since then I had the opportunity
          to create and be part of multiple app developments. Currently I am
          ready for a new challenge and opportunity .
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
        <page-subsection heading="Design">
          <skill-section :skills="designSkills" />
        </page-subsection>
        <page-subsection heading="Tools">
          <skill-section title="Dev related" :skills="devTools" />
          <skill-section title="Designer related" :skills="designTools" />
        </page-subsection>
      </page-section>
      <page-section heading="Education">
        <div class="flex gap-x-10 items-center">
          <h3 class="text-md">
            Mendelova Univerzita v Brne
            <span class="font-light"> — Ekonomická informatika</span>
          </h3>
          <p class="font-light text-sm">2020-2022</p>
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

function filterSkills(category, related?) {
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
const designSkills = filterSkills(Category.Design);
const devTools = filterSkills(Category.Tools, Related.Dev);
const designTools = filterSkills(Category.Tools, Related.Design);
</script>
