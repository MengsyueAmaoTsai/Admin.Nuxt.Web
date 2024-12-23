<template>
  <div>
    <FluLabel>Id</FluLabel>
    <FluLabel>Email</FluLabel>
    <FluLabel>Name</FluLabel>
    <FluLabel>Created time</FluLabel>
  </div>
</template>

<script setup lang="ts">
import { UserDetailsResponse, type IUserService } from "~/resources/users";

const userId = useRoute().params.userId as string;
const userService = useNuxtApp().$userService as IUserService;
const user = ref<UserDetailsResponse>();

onMounted(async () => {
  const response = await userService.getUser(userId);
  user.value = response;
});
</script>
