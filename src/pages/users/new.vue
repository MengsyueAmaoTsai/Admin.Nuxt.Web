<template>
  <div>
    <BaseBreadcrumb></BaseBreadcrumb>

    <Stack>
      <header>
        <h2>Create new user</h2>
        <p>Create a new user in system.</p>
      </header>
    </Stack>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "New user",
});

const email = ref("");
const name = ref("");
const password = ref("");
</script>

<style scoped lang="scss"></style>
