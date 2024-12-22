<template>
  <div>
    <div>
      <Stack :orientation="Orientation.Vertical">
        <TextField
          v-model:value="email"
          :label="'Email'"
          :textFieldType="TextFieldType.Email"
          :required="true"
        />

        <TextField
          v-model:value="name"
          :label="'Name'"
          :textFieldType="TextFieldType.Text"
          :required="true"
        />

        <Stack :orientation="Orientation.Vertical">
          <TextField
            v-model:value="password"
            v-model:disabled="autoGeneratePassword"
            :label="'Password'"
            :textFieldType="TextFieldType.Password"
            :required="true"
          />
          <Checkbox
            v-model:value="autoGeneratePassword"
            :label="'Auto-generate password'"
            :check-state-changed="autoGeneratePasswordStateChanged"
          ></Checkbox>
        </Stack>

        <Stack>
          <Button
            :appearance="Appearance.Accent"
            :loading="isBusy"
            :onClick="createUser"
            :disabled="!email || !name || !password"
            >Review + create</Button
          >
        </Stack>
      </Stack>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Appearance,
  Orientation,
  TextFieldType,
} from "~/components/Fluent/types";
import type { IUserService } from "~/resources/users";

useHead({
  title: "New user",
});

const userService = useNuxtApp().$userService as IUserService;

const isBusy = ref<boolean>(false);
const email = ref<string>("");
const name = ref<string>("");
const password = ref<string>("");
const autoGeneratePassword = ref<boolean>(true);

onMounted(() => {
  password.value = generatePassword();
});

const createUser = async () => {
  isBusy.value = true;

  try {
    const response = await userService.createUser({
      email: email.value,
      name: name.value,
      password: password.value,
    });

    alert("User created: " + response.id);
    navigateTo("/users");
  } catch (error) {
    console.error(error);
  } finally {
    isBusy.value = false;
  }
};

const generatePassword = (length = 10): string => {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return password;
};

const autoGeneratePasswordStateChanged = (autoGeneratePassword: boolean) => {
  if (autoGeneratePassword) {
    password.value = generatePassword();
  }
};
</script>
~/components/Fluent/types
