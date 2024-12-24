<template>
  <div>
    <h2>All users</h2>

    <div style="display: flex">
      <FluButton
        :appearance="Appearance.Accent"
        :onClick="() => navigateTo('/users/new')"
        >New user</FluButton
      >
      <FluButton :appearance="Appearance.Accent">Delete</FluButton>
      <FluButton :appearance="Appearance.Accent">Download users</FluButton>
      <FluButton :appearance="Appearance.Accent">Bulk operations</FluButton>
      <FluButton :appearance="Appearance.Accent">Refresh</FluButton>
      <FluButton :appearance="Appearance.Accent">Manage view</FluButton>
    </div>

    <div>{{ users.length }} user{{ users.length > 1 ? "s" : "" }} found</div>

    <FluDataGrid :items="users">
      <FluDataGridColumnBase>Id</FluDataGridColumnBase>
      <FluDataGridColumnBase>Email</FluDataGridColumnBase>
      <FluDataGridColumnBase>Name</FluDataGridColumnBase>
      <FluDataGridColumnBase>Create time</FluDataGridColumnBase>
    </FluDataGrid>
    <hr />
  </div>
</template>

<script setup lang="ts">
import { Appearance } from "~/components/Flu/types";
import { IUserService } from "~/resources/users";
useHead({
  title: "Users",
});

const userService = useNuxtApp().$userService as IUserService;

const users = ref<UserResponse[]>([]);

onMounted(async () => {
  try {
    const response = await userService.listUsers();
    users.value = response;
  } catch (error) {
    alert(error);
  } finally {
    // do something
  }
});
</script>
