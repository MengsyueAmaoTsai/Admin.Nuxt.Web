<template>
  <div>
    <h2>Create new user</h2>

    <div>
      <div>
        <FluButton
          :appearance="Appearance.Accent"
          :onClick="createUser"
          :loading="isBusy"
          >Review + create</FluButton
        >
      </div>
    </div>

    <hr />
    {{ newUser }}
  </div>
</template>

<script setup lang="ts">
import { Appearance } from "~/components/Flu/types";
import { CreateUserRequest, IUserService } from "~/resources/users";

useHead({
  title: "New user",
});

const userService = useNuxtApp().$userService as IUserService;
const isBusy = ref<boolean>(false);
const newUser = ref<CreateUserRequest>({
  email: "",
  name: "",
  password: "",
});

const createUser = async (_: MouseEvent) => {
  isBusy.value = true;

  try {
    const created = await userService.createUser(newUser.value);
  } catch (error) {
    alert(error);
  } finally {
    isBusy.value = false;
  }
  alert("User created");
};
</script>

<style></style>
