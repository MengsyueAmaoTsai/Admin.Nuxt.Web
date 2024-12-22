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
      ></Button>
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

const createUser = () => {
  isBusy.value = true;

  setTimeout(() => {
    isBusy.value = false;
    alert("User created.");
  }, 1000);
};
</script>
~/components/Fluent/types
