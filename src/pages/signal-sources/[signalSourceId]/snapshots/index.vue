<template>
  <div>
    <div>
      <fluent-button appearance="accent">Edit columns</fluent-button>
      <fluent-button appearance="accent">Refresh</fluent-button>
      <fluent-button appearance="accent">Download as CSV</fluent-button>
      <fluent-button appearance="accent">Reset filters</fluent-button>
    </div>

    <input type="search" placeholder="Search" />

    <div>
      {{ snapshots.length }} snapshot{{ snapshots.length <= 1 ? "" : "s" }}
      found
    </div>

    <table>
      <thead>
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          <th>Id</th>
          <th>Time</th>
          <th>Latency (ms)</th>
          <th>Symbol</th>
          <th>Bar time</th>
          <th>Last price</th>
          <th>Message</th>
          <th>Created time</th>
        </tr>
      </thead>

      <tbody>
        <tr v-if="snapshots.length === 0">
          <td>No results.</td>
        </tr>

        <tr v-for="snapshot of snapshots">
          <td><input type="checkbox" /></td>

          <td>
            <a :href="`/signal-sources/${snapshot.signalSourceId}`">
              {{ snapshot.signalSourceId }}
            </a>
          </td>
          <td>{{ snapshot.time.toLocaleString() }}</td>
          <td>{{ snapshot.latency }}</td>
          <td>{{ snapshot.symbol }}</td>
          <td>{{ snapshot.barTime.toLocaleString() }}</td>
          <td>{{ snapshot.lastPrice }}</td>
          <td>{{ snapshot.message }}</td>
          <td>{{ snapshot.createdTime.toLocaleString() }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import type { ISnapshotService, SnapshotResponse } from "~/resources/snapshots";

const route = useRoute();
const signalSourceId = ref<string>(route.params.signalSourceId as string);

const userService = useNuxtApp().$snapshotService as ISnapshotService;

const snapshots = ref<SnapshotResponse[]>([]);

onMounted(async () => {
  const responses = await userService.listSnapshots();
  snapshots.value = responses.filter(
    (snapshot) => snapshot.signalSourceId === signalSourceId.value
  );
});
</script>

<style scoped lang="scss"></style>
