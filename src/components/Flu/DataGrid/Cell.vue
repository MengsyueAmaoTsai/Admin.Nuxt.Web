<template>
  <div>Component is working</div>
</template>

<script setup lang="ts">
const props = defineProps({
  // ComponentBase props
  id: String,
  class: String,
  style: String,
  data: Object,
  parentReference: Object,
  additionalAttributes: Object,
});

onMounted(() => {
  console.log("DataGridCell component is working. Props:", props);
});
</script>

<style scoped lang="scss"></style>
