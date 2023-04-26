<template>
  <section class="sm:grid grid-cols-4 border-b border-white/10 py-5">
    <h3 class="text-md col-span-1">{{ heading }}</h3>
    <div class="mt-4 sm:mt-0 col-span-3 flex flex-col gap-y-4">
      <slot />
    </div>
  </section>
</template>
<script setup lang="ts">
const props = defineProps<{
  heading: string;
}>();
</script>
