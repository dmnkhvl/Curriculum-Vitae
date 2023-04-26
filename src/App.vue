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
        <p class="font-extralight text-sm">
          Transforming code into meaningful and enjoyable experiences at
          Websupport. Transforming code into meaningful and enjoyable
          experiences at Websupport. Transforming code into meaningful and
          enjoyable experiences at Websupport.
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
          <skill-section title="Designer related" :skills="designerTools" />
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
import { skills } from "./data/skills";
import { computed } from "vue";
import PageSubsection from "./components/PageSubsection.vue";

// Languages
const frontendLanguages = computed(() => {
  return skills.filter(
    (skill) => skill.category === "Languages" && skill.related === "Frontend"
  );
});

const backendLanguages = computed(() => {
  return skills.filter(
    (skill) => skill.category === "Languages" && skill.related === "Backend"
  );
});

// Technologies
const frontendTechnologies = computed(() => {
  return skills.filter(
    (skill) => skill.category === "Technologies" && skill.related === "Frontend"
  );
});
const backendTechnologies = computed(() => {
  return skills.filter(
    (skill) => skill.category === "Technologies" && skill.related === "Backend"
  );
});
const UITechnologies = computed(() => {
  return skills.filter(
    (skill) => skill.category === "Technologies" && skill.related === "UI"
  );
});

// Design
const designSkills = computed(() => {
  return skills.filter((skill) => skill.category === "Design");
});

// Tools
const devTools = computed(() => {
  return skills.filter(
    (skill) => skill.category === "Tools" && skill.related === "Dev"
  );
});

const designerTools = computed(() => {
  return skills.filter(
    (skill) => skill.category === "Tools" && skill.related === "Design"
  );
});
</script>
