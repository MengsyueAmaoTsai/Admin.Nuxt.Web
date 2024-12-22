<template>
  <div>
    <div>
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
      <TextField
        v-model:value="password"
        :label="'Password'"
        :textFieldType="TextFieldType.Password"
        :required="true"
      />

      <Button
        :appearance="Appearance.Accent"
        :loading="isBusy"
        :onClick="createUser"
        :disabled="!email || !name || !password"
        >Review + create</Button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { Appearance, TextFieldType } from "~/components/Fluent/types";

useHead({
  title: "New user",
});
const isBusy = ref<boolean>(false);
const email = ref<string>("");
const name = ref<string>("");
const password = ref<string>("");

onMounted(() => {
  password.value = generatePassword();
});

const createUser = () => {
  console.log("create user");
  isBusy.value = true;

  setTimeout(() => {
    isBusy.value = false;
    alert("User created.");
  }, 1000);
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
</script>
~/components/Fluent/types
