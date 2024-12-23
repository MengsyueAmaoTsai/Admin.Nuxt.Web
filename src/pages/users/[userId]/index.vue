<template>
  <div>
    <Stack v-if="user" :orientation="Orientation.Vertical">
      <Stack>
        <label>Id</label>
        <span>{{ user?.id }}</span>
      </Stack>

      <Stack>
        <label>Email</label>
        <span>{{ user?.email }}</span>
      </Stack>

      <Stack>
        <label>Name</label>
        <span>{{ user?.name }}</span>
      </Stack>

      <Stack>
        <label>Create time</label>
        <span>{{ user?.createdTime.toLocaleString() }}</span>
      </Stack>
    </Stack>
  </div>
</template>

<script setup lang="ts">
import { Orientation } from "~/components/Fluent/types";
import { type IUserService, type UserDetailsResponse } from "~/resources/users";

const userId = useRoute().params.userId as string;
const userService = useNuxtApp().$userService as IUserService;

const user = ref<UserDetailsResponse>();

onMounted(async () => {
  const response = await userService.getUser(userId);

  user.value = response;
});
</script>
