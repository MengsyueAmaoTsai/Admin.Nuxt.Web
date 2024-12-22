<template>
  <div>
    <div style="display: flex">
      <BaseButton :appearance="Appearance.Accent">New user</BaseButton>
      <BaseButton :appearance="Appearance.Accent">Download users</BaseButton>
      <BaseButton :appearance="Appearance.Accent">Bulk operations</BaseButton>
      <BaseButton :appearance="Appearance.Accent">Refresh</BaseButton>
      <BaseButton :appearance="Appearance.Accent">Manage view</BaseButton>
    </div>

    <div>{{ users.length }} user{{ users.length > 1 ? "s" : "" }} found.</div>

    <BaseDataGrid> </BaseDataGrid>
  </div>
</template>

<script lang="ts" setup>
import { Appearance } from "~/components/Base/types";
import type { IUserService, UserResponse } from "~/resources/users";

const userService = useNuxtApp().$userService as IUserService;

useHead({
  title: "Users",
});

const users = ref<UserResponse[]>([]);

onMounted(async () => {
  const response = await userService.listUsers();
  users.value = response;
});
</script>

<style></style>
