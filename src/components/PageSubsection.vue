<template>
  <h3 class="text-md">{{ heading }}</h3>
  <div class="flex flex-col gap-y-2">
    <slot />
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  heading: string;
}>();
</script>
