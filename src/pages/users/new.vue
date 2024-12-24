<template>
  <div>
    <h2>Create new user</h2>

    <FluTextField
      :label="'Email'"
      v-model:value="newUser.email"
      :placeholder="'someone@example.com'"
      :type="TextFieldType.Email"
    />
    <FluTextField
      :label="'Name'"
      v-model:value="newUser.name"
      :type="TextFieldType.Text"
    />
    <FluTextField
      :label="'Password'"
      v-model:value="newUser.password"
      :type="TextFieldType.Password"
    />
    <FluCheckbox
      v-model:value="autoGeneratePassword"
      :label="'Auto-generate password'"
    ></FluCheckbox>

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
import { Appearance, TextFieldType } from "~/components/Flu/types";
import type { CreateUserRequest, IUserService } from "~/resources/users";

useHead({
  title: "New user",
});

const userService = useNuxtApp().$userService as IUserService;
const isBusy = ref<boolean>(false);

const autoGeneratePassword = ref<boolean>(true);
const newUser = ref<CreateUserRequest>({
  email: "",
  name: "",
  password: "",
});

const createUser = async (_: MouseEvent) => {
  isBusy.value = true;

  try {
    const created = await userService.createUser(newUser.value);

    alert(`User created: ${created.id}`);
  } catch (error) {
    alert(error);
  } finally {
    isBusy.value = false;
  }
};
</script>

<style></style>
