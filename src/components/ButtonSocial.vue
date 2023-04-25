<template>
  <a
    :class="{
      'bg-[#F6F3FF] text-[#7C3AED] border-[#7C3AED]': basic,
      'bg-[#F1F8FF] text-[#0A66C2] border-[#0A66C2]': linkedin,
      'bg-[#F2F2F2] text-[#222222] border-[#222222]': github,
    }"
    class="py-1.5 px-5 rounded-full border text-xs"
    :href="href"
    :aria-label="ariaLabel"
    target="_blank"
    rel="noreferrer"
  >
    {{ text }}
  </a>
</template>
<script setup lang="ts">
const props = defineProps<{
  text: string;
  basic?: boolean;
  linkedin?: boolean;
  github?: boolean;
  href: string;
  ariaLabel: string;
}>();
</script>
