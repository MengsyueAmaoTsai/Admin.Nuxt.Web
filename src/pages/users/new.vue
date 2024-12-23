<template>
  <div>
    <FluIcon></FluIcon>
    <FluStack :orientation="Orientation.Vertical">
      <FluTextField
        v-model:value="email"
        :text-field-type="TextFieldType.Email"
        placeholder="someone@example.com"
      />
      <FluTextField
        v-model:value="name"
        :text-field-type="TextFieldType.Text"
      />
      <FluTextField
        v-model:value="password"
        :text-field-type="TextFieldType.Password"
        :disabled="autoGeneratePassword"
      />
      <FluCheckbox
        v-model:value="autoGeneratePassword"
        label="Auto-generate password"
        :checkStateChanged="
          (checked) => {
            if (checked) {
              password = generatePassword();
            }
          }
        "
      />
    </FluStack>

    <FluButton
      :disabled="!email || !name || !password"
      @click="createUser"
      :loading="isBusy"
      :appearance="Appearance.Accent"
      >Review + create</FluButton
    >
  </div>
</template>

<script setup lang="ts">
import { Appearance, Orientation, TextFieldType } from "~/components/Flu/types";
import type { IUserService } from "~/resources/users";

useHead({
  title: "New user",
});

const userService = useNuxtApp().$userService as IUserService;
const isBusy = ref<boolean>(false);

const email = ref<string>("");
const name = ref<string>("");
const autoGeneratePassword = ref<boolean>(true);
const password = ref<string>("");

const generatePassword = (length = 10): string => {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return password;
};

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

    alert(`User created successfully. ${response.id}`);
    navigateTo("/users");
  } catch (error) {
    alert(error);
  } finally {
    isBusy.value = false;
  }
};
</script>
