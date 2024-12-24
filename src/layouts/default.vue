<template>
  <div>
    <FluLayout>
      <FluHeader>Richill Capital Admin</FluHeader>

      <FluStack
        :class="'main'"
        :orientation="Orientation.Horizontal"
        :width="'100%'"
      >
        <NavMenu />
        <slot />
      </FluStack>

      <FluFooter>
        <a href="https://vuejs.org" target="_blank">About Vue</a>
        <a href="https://nuxtjs.org" target="_blank">About Nuxt</a>
      </FluFooter>
    </FluLayout>
  </div>
</template>

<script setup lang="ts">
import { Orientation } from "~/components/Flu/types";
import NavMenu from "~/components/NavMenu.vue";

useHead({
  titleTemplate: (chunk) =>
    chunk ? `${chunk} - Richill Capital Admin` : "Richill Capital Admin",
});
</script>
