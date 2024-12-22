<template>
  <div>
    <BaseBreadcrumb></BaseBreadcrumb>
    <BaseStack>
      <header>
        <h2>Create new user</h2>
        <p>Create a new user in system</p>
      </header>

      <!-- Tabs -->
      <BaseTabs>
        <BaseTab :label="'Basics'">
          <BaseStack>
            <p>Create a new user.</p>

            <BaseStack>
              <h3>Identity</h3>
              <BaseStack>
                <BaseStack>
                  <BaseLabel>Email</BaseLabel>
                  <BaseTextField
                    v-model="email"
                    :textFieldType="TextFieldType.Email"
                  ></BaseTextField>
                </BaseStack>

                <BaseStack>
                  <BaseLabel>Name</BaseLabel>
                  <BaseTextField
                    v-model="name"
                    :textFieldType="TextFieldType.Text"
                  ></BaseTextField>
                </BaseStack>

                <BaseStack>
                  <BaseLabel>Password</BaseLabel>
                  <BaseTextField
                    v-model="password"
                    :textFieldType="TextFieldType.Password"
                  ></BaseTextField>
                </BaseStack>
              </BaseStack>
            </BaseStack>
          </BaseStack>
        </BaseTab>

        <BaseTab :label="'Properties'"> Properties content</BaseTab>
        <BaseTab :label="'Assignments'">Assignments content</BaseTab>
        <BaseTab :label="'Review + create'">Review + create</BaseTab>
      </BaseTabs>
    </BaseStack>

    <div>Email: {{ email }}</div>
    <div>Name: {{ name }}</div>
    <div>Password: {{ password }}</div>
    <hr />

    <div style="display: flex">
      <BaseButton
        :appearance="Appearance.Accent"
        :onClick="() => console.log('Create user')"
        >Review + create</BaseButton
      >
      <BaseButton
        :appearance="Appearance.Outline"
        :onClick="() => console.log('Previous step')"
        >< Previous></BaseButton
      >
      <BaseButton
        :appearance="Appearance.Outline"
        :onClick="() => console.log('New step')"
        >Next: Properties ></BaseButton
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { TextFieldType } from "~/components/Base/TextField/types";
import { Appearance } from "~/components/Base/types";

useHead({
  title: "New user",
});

const email = ref("");
const name = ref("");
const password = ref("");
</script>

<style scoped lang="scss"></style>
