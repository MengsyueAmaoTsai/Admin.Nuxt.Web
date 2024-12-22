<template>
  <div>
    <h2>Development page</h2>
    <br />
    <BaseDataGrid :items="dataGridItems"></BaseDataGrid>
  </div>
</template>

<script setup lang="ts">
const dataGridItems = ref([
  { id: "1", name: "John" },
  {
    id: "2",
    name: "Alice",
  },
]);
</script>

<style scoped lang="scss"></style>
