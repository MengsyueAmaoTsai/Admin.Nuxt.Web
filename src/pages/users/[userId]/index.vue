<template>
  <div>
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
