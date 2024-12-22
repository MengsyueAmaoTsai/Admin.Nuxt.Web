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
          <Stack :orientation="Orientation.Horizontal">
            <TextField
              :text-field-type="TextFieldType.Password"
              v-model="password"
            ></TextField>
            <Checkbox></Checkbox>
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
const password = ref("");
</script>

<style scoped lang="scss"></style>
