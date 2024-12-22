<template>
  <div>
    <slot />
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (chunk) =>
    chunk ? `${chunk} - Richill Capital Admin` : "Richill Capital Admin",
});
</script>
