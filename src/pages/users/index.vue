<template>
  <div>
    <div>
      <fluent-button appearance="accent" @click="navigateTo('/users/new')"
        >New user</fluent-button
      >
    </div>

    <div>{{ users.length }} user{{ users.length <= 1 ? "" : "s" }} found</div>

    <table>
      <thead>
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          <th>Id</th>
          <th>Email</th>
          <th>Name</th>
          <th>Created time</th>
        </tr>
      </thead>

      <tbody>
        <tr v-if="users.length === 0">
          <td>No results.</td>
        </tr>

        <tr v-for="user of users">
          <td><input type="checkbox" /></td>
          <td>{{ user.id }}</td>
          <td>
            <a :href="`/users/${user.id}`">
              {{ user.email }}
            </a>
          </td>
          <td>{{ user.name }}</td>
          <td>{{ user.createdTime.toLocaleString() }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import type { IUserService, UserResponse } from "~/resources/users";

const userService = useNuxtApp().$userService as IUserService;

const users = ref<UserResponse[]>([]);

onMounted(async () => {
  const responses = await userService.listUsers();
  users.value = responses;
});
</script>
