<template>
  <div>
    <FluLayout>
      <FluHeader>Richill Capital Admin</FluHeader>

      <FluStack
        class="main"
        :orientation="Orientation.Horizontal"
        :width="'100%'"
      >
        <slot />
      </FluStack>
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
