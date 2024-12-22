<template>
  <div>
    <label
      class="fluent-input-label"
      :for="props.forId"
      :orientation="
        props.orientation === Orientation.Horizontal
          ? props.orientation
          : undefined
      "
      :aria-label="props.ariaLabel"
      >{{ props.label }}
      <slot />
    </label>
    <!-- if required render required label -->
  </div>
</template>

<script setup lang="ts">
import { Orientation } from "../types";

const props = defineProps({
  id: String,
  class: String,
  style: String,

  forId: String,
  label: String,
  required: Boolean,
  ariaLabel: String,
  orientation: {
    type: String as PropType<Orientation>,
    default: Orientation.Vertical,
  },
  additionalAttributes: Object,
});
</script>

<style scoped lang="scss"></style>
