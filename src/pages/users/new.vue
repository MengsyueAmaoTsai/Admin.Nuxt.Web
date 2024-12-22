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
    </div>

    <div>
      <div>Email = {{ email }}</div>
      <div>Name = {{ name }}</div>
      <div>Password = {{ password }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TextFieldType } from "~/components/Base/types";

useHead({
  title: "New user",
});

const email = ref("");
const name = ref("");
const password = ref("");
</script>
