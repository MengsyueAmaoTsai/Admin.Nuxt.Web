<template>
  <div>
    <Stack>
      <Button
        :appearance="Appearance.Accent"
        :onClick="(_) => navigateTo('/users/new')"
        >New user</Button
      >
      <Button :appearance="Appearance.Accent">Delete</Button>
      <Button :appearance="Appearance.Accent">Download users</Button>
      <Button :appearance="Appearance.Accent">Bulk operations</Button>
      <Button :appearance="Appearance.Accent">Refresh</Button>
      <Button :appearance="Appearance.Accent">Manage view</Button>
    </Stack>

    <div v-for="user in users">
      {{ user }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { Appearance } from "~/components/Fluent/types";
import type { IUserService, UserResponse } from "~/resources/users";

const userService = useNuxtApp().$userService as IUserService;

const isBusy = ref<boolean>(false);
const users = ref<UserResponse[]>([]);

onMounted(async () => {
  const response = await userService.listUsers();

  users.value = response;
});
</script>
