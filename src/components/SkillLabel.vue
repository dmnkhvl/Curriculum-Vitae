<template>
  <p class="text-xs bg-label inline px-2 py-0.5 rounded-md font-normal">
    {{ text }}
  </p>
</template>

<script setup lang="ts">
const props = defineProps<{
  text: string;
}>();
</script>
