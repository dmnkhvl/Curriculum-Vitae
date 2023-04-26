<template>
  <div>
    <div class="flex justify-between items-center">
      <h3 class="text-sm">
        {{ experience.company }}
        <span class="font-light"> — {{ experience.position }}</span>
      </h3>
      <p class="font-light text-xs">
        {{ experience.from }} - {{ experience.to }}
      </p>
    </div>
    <div class="flex items-center gap-2 flex-wrap max-w-[80%] mt-2">
      <skill-label
        v-for="skill in experience.skills"
        :key="experience.id"
        :text="skill.name"
      />
    </div>
    <div class="mt-4">
      <div
        v-for="item in experience.about"
        class="flex items-center gap-2 mt-2 text-xs font-light"
      >
        <div class="h-2 w-2 bg-[#CBD5E1] rounded-sm"></div>
        <p>{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import SkillLabel from "./SkillLabel.vue";

import { Experience } from "../data/experiences";

const props = defineProps<{
  experience: Array<Experience>;
}>();
</script>
