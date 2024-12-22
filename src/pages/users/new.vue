<template>
  <div>
    <BaseBreadcrumb></BaseBreadcrumb>

    <Stack :orientation="Orientation.Vertical">
      <header>
        <h1>Create new user</h1>
        <p>Create a new user in system.</p>
      </header>

      <Stack :orientation="Orientation.Vertical">
        <Stack>
          <Label>Email</Label>
          <TextField
            :text-field-type="TextFieldType.Email"
            v-model="email"
          ></TextField>
        </Stack>

        <Stack>
          <Label>Name</Label>
          <TextField
            :text-field-type="TextFieldType.Text"
            v-model="name"
          ></TextField>
        </Stack>

        <Stack>
          <Label>Password</Label>

          <Stack :orientation="Orientation.Vertical">
            <TextField
              :text-field-type="TextFieldType.Password"
              v-model="password"
            ></TextField>
            <Checkbox
              v-model="autoGeneratePassword"
              label="Auto-generate password"
            ></Checkbox>
          </Stack>
        </Stack>

        <Stack>
          <Button :appearance="Appearance.Accent">Create</Button>
        </Stack>
      </Stack>
    </Stack>

    <div>
      <div>Email value: {{ email }}</div>
      <div>Name value: {{ name }}</div>
      <div>Password value: {{ password }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TextFieldType } from "~/components/Base/TextField/types";
import { Appearance, Orientation } from "~/components/Base/types";

useHead({
  title: "New user",
});

const email = ref("");
const name = ref("");
const autoGeneratePassword = ref(true);
const password = ref("");

const generatePassword = (): string => {
  const length = 8;
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  console.log("generated password: ", password);
  return password;
};

onMounted(() => {
  if (autoGeneratePassword.value) {
    password.value = generatePassword();
  }

  console.log("generated password: ", password.value);
});
</script>

<style scoped lang="scss"></style>
