<template>
  <div>
    <FluStack :orientation="Orientation.Vertical">
      <FluDataGrid :items="subscriptions"> </FluDataGrid>
    </FluStack>
  </div>
</template>

<script setup lang="ts">
import { Orientation } from "~/components/Flu/types";
import type {
  ISignalSubscriptionService,
  SignalSubscriptionResponse,
} from "~/resources/signal-subscriptions";

const userId = useRoute().params.userId as string;
const signalSubscriptionService = useNuxtApp()
  .$signalSubscriptionService as ISignalSubscriptionService;

const subscriptions = ref<SignalSubscriptionResponse[]>([]);

onMounted(async () => {
  const response = await signalSubscriptionService.listSignalSubscriptions();

  subscriptions.value = response.filter(
    (subscription) => subscription.userId === userId
  );
});
</script>
