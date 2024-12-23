<template>
  <div>
    <FluLayout>
      <FluHeader>Richill Capital Admin</FluHeader>

      <FluStack
        class="main"
        :orientation="Orientation.Horizontal"
        :width="'100%'"
      >
        <!-- NavMenu -->
        <NavMenu />
        <!-- BodyContent -->
        <slot />
      </FluStack>

      <FluFooter>
        <a href="https://vuejs.org">About Vue.js</a>
        <a href="https://nuxt.com">About Nuxt</a>
      </FluFooter>
    </FluLayout>
  </div>
</template>

<script setup lang="ts">
import { Orientation } from "~/components/Flu/types";

useHead({
  titleTemplate: (chunk) =>
    chunk ? `${chunk} - Richill Capital Admin` : "Richill Capital Admin",
});
</script>
