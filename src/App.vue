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
  </div>
</template>
<script setup lang="ts">
import ButtonSocial from "./components/ButtonSocial.vue";
</script>
