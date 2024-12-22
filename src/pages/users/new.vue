<template>
  <div>
    <h2>Create new user</h2>
    <p>Create a new user in system</p>

    <!-- Tabs -->

    <hr />

    <div style="display: flex">
      <BaseButton
        :appearance="Appearance.Accent"
        :onClick="() => console.log('Create user')"
        >Review + create</BaseButton
      >
      <BaseButton
        :appearance="Appearance.Outline"
        :onClick="() => console.log('Previous step')"
        >< Previous></BaseButton
      >
      <BaseButton
        :appearance="Appearance.Outline"
        :onClick="() => console.log('New step')"
        >Next: Properties ></BaseButton
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { Appearance } from "~/components/Base/types";

useHead({
  title: "New user",
});
</script>

<style scoped lang="scss"></style>
