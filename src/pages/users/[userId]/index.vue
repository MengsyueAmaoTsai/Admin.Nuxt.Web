<template>
  <div>
    <FluStack v-if="user" :orientation="Orientation.Vertical">
      <FluStack>
        <FluLabel>Id</FluLabel>
        <span>{{ user?.id }}</span>
      </FluStack>
      <FluStack>
        <FluLabel>Email</FluLabel>
        <span>{{ user?.email }}</span>
      </FluStack>
      <FluStack>
        <FluLabel>Name</FluLabel>
        <span>{{ user?.name }}</span>
      </FluStack>

      <FluStack>
        <FluLabel>Created time</FluLabel>
        <span>{{ user?.createdTime }}</span>
      </FluStack>
    </FluStack>
  </div>
</template>

<script setup lang="ts">
import { Orientation } from "~/components/Flu/types";
import type { IUserService, UserDetailsResponse } from "~/resources/users";

const userId = useRoute().params.userId as string;
const userService = useNuxtApp().$userService as IUserService;
const user = ref<UserDetailsResponse>();

onMounted(async () => {
  const response = await userService.getUser(userId);
  user.value = response;
});
</script>
