<template>
  <div>
    <FluTextField :label="'Id'" />
    <FluTextField :label="'Name'" />
    <FluTextField :label="'Description'" />

    <FluCombobox :label="'Stage'" :items="['A', 'B']" />

    <FluLabel>Version</FluLabel>
    <FluStack :orientation="Orientation.Horizontal">
      <FluNumberField />
      <FluNumberField />
      <FluNumberField />
    </FluStack>

    <FluButton :appearance="Appearance.Accent">Review + create</FluButton>
  </div>
</template>

<script setup lang="ts">
import { Appearance, Orientation } from "~/components/Flu/types";

const createSignalSource = async () => {};
</script>
