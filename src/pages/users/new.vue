<template>
  <div>
    <h2>Create new user</h2>
    <p>Create a new user in system</p>

    <!-- Tabs -->
    <BaseTabs>
      <BaseTab :label="'Basics'"> Basics content </BaseTab>
      <BaseTab :label="'Properties'"> Properties content</BaseTab>
      <BaseTab :label="'Assignments'">Assignments content</BaseTab>
      <BaseTab :label="'Review + create'">Review + create</BaseTab>
    </BaseTabs>

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
