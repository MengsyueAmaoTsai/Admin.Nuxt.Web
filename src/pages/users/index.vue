<template>
  <div>
    <FluStack>
      <FluButton
        :appearance="Appearance.Accent"
        :onClick="(_) => navigateTo('/users/new')"
        >New user</FluButton
      >
      <FluButton :appearance="Appearance.Accent">Delete</FluButton>
      <FluButton :appearance="Appearance.Accent">Download users</FluButton>
      <FluButton :appearance="Appearance.Accent">Bulk operations</FluButton>
      <FluButton :appearance="Appearance.Accent">Refresh</FluButton>
      <FluButton :appearance="Appearance.Accent">Manage view</FluButton>
    </FluStack>

    <FluStack>
      <span
        >{{ users.length }} user{{ users.length > 1 ? "s" : "" }} found.</span
      >
    </FluStack>

    <FluDataGrid :items="users">
      <FluDataGridColumn :property="(u) => u.id" :sortable="true" />
      <FluDataGridColumn :property="(u) => u.email" :sortable="true" />
      <FluDataGridColumn :property="(u) => u.name" :sortable="true" />
      <FluDataGridColumn :property="(u) => u.createdTime" :sortable="true" />
    </FluDataGrid>
  </div>
</template>

<script setup lang="ts">
import { Appearance } from "~/components/Flu/types";
import type { IUserService, UserResponse } from "~/resources/users";

useHead({
  title: "Users",
});

const userService = useNuxtApp().$userService as IUserService;

const isBusy = ref<boolean>(false);
const users = ref<UserResponse[]>([]);

onMounted(async () => {
  isBusy.value = true;
  try {
    const response = await userService.listUsers();
    users.value = response;
  } catch (error) {
    console.error(error);
  } finally {
    isBusy.value = false;
  }
});
</script>

<style scoped lang="scss"></style>
