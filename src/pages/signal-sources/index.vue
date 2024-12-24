<template>
  <div>
    <FluStack>
      <FluButton
        :appearance="Appearance.Accent"
        :onClick="(_) => navigateTo('/signal-sources/new')"
        >New signal source</FluButton
      >
    </FluStack>

    <FluDataGrid></FluDataGrid>

    <FluDivider />

    {{ signalSources }}
  </div>
</template>

<script setup lang="ts">
import { Appearance } from "~/components/Flu/types";
import type {
  ISignalSourceService,
  SignalSourceResponse,
} from "~/resources/signal-sources";

const signalSourceService = useNuxtApp()
  .$signalSourceService as ISignalSourceService;

const isBusy = ref(false);
const signalSources = ref<SignalSourceResponse[]>([]);

onMounted(async () => {
  isBusy.value = true;

  try {
    const response = await signalSourceService.listSignalSources();

    signalSources.value = response;
  } catch (error) {
    alert(error);
  } finally {
    isBusy.value = false;
  }
});
</script>
