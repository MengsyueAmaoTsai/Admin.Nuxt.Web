<template>
  <div>
    <div>
      <TextField v-model="email" :textFieldType="TextFieldType.Email"
        >Email</TextField
      >

      <TextField v-model="name">Name</TextField>

      <TextField v-model="password" :textFieldType="TextFieldType.Password"
        >Password</TextField
      >
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
