<template>
  <div>
    <div>
      <FluLabel>Id</FluLabel>
      <FluLabel>{{ user?.id }}</FluLabel>

      <FluLabel>Email</FluLabel>
      <FluLabel>{{ user?.email }}</FluLabel>

      <FluLabel>Name</FluLabel>
      <FluLabel>{{ user?.name }}</FluLabel>

      <FluLabel>Created time</FluLabel>
      <FluLabel>{{ user?.createdTime.toLocaleString() }}</FluLabel>
    </div>
    <hr />
    {{ user }}
  </div>
</template>

<script setup lang="ts">
import type { IUserService, UserDetailsResponse } from "~/resources/users";

const userId = useRoute().params.userId as string;
const userService = useNuxtApp().$userService as IUserService;
const user = ref<UserDetailsResponse>();

onMounted(async () => {
  const userDetails = await userService.getUser(userId);

  useHead({
    title: userDetails.name,
  });

  user.value = userDetails;
});
</script>
