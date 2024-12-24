<template>
  <div>
    <h2>All users</h2>

    <div>{{ users.length }} user{{ users.length > 1 ? "s" : "" }} found</div>

    <div>
      <button>New user</button>
      <button>Delete</button>
      <button>Download users</button>
      <button>Refresh</button>
      <button>Manage view</button>
    </div>
    <FluDataGrid> </FluDataGrid>

    <hr />

    <div v-for="user in users">{{ user }}</div>
  </div>
</template>

<script setup lang="ts">
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
