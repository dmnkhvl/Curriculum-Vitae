<template>
  <div class="grid grid-cols-5">
    <h3
      v-if="skills.length"
      class="text-cv-gray font-normal text-xs col-span-1"
    >
      {{ title }}
    </h3>
    <div class="col-span-4">
      <div class="flex items-center gap-2 flex-wrap max-w-[80%]">
        <skill-label
          v-for="skill in skills"
          :key="skill.id"
          :text="skill.name"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import SkillLabel from "./SkillLabel.vue";

import { Skill } from "../data/skills";

const props = defineProps<{
  title: string;
  skills: Array<Skill>;
}>();
</script>

<!-- TODO: MAYBE RENAME THIS COMPONENT-->
