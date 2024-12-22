<template>
  <div>
    <!-- @attributes -->
    <label
      v-if="props.label"
      :for="props.forId"
      class="fluent-input-label"
      :orientation="
        props.orientation === Orientation.Horizontal
          ? props.orientation
          : undefined
      "
      :aria-label="props.ariaLabel"
    >
      {{ props.label }}

      <slot />

      <span
        v-if="props.required"
        aria-label="required"
        aria-hidden="true"
        style="
          padding-inline-start: calc(var(--design-unit) * 1px);
          color: var(--error);
          pointer-events: none;
        "
        >*</span
      >
    </label>
  </div>
</template>

<script setup lang="ts">
import { Orientation } from "./types";

const props = defineProps({
  // ComponentPropsBase
  id: String,
  class: String,
  style: String,
  data: Object,
  parentReference: Object,
  additionalAttributes: Object,

  // InputLabelProps
  forId: String,
  label: String,
  required: Boolean,
  ariaLabel: String,
  orientation: {
    type: String as PropType<Orientation>,
    default: Orientation.Vertical,
  },
});

onMounted(() => {
  console.log("InputLabel mounted");
});
</script>

<style scoped lang="scss">
.fluent-input-label {
  display: flex;
  color: var(--neutral-foreground-rest);
  cursor: pointer;
  font-family: var(--body-font);
  font-size: var(--type-ramp-base-font-size);
  line-height: var(--type-ramp-base-line-height);
  font-weight: initial;
  font-variation-settings: var(--type-ramp-base-font-variations);
  margin-bottom: calc(var(--design-unit) * 1px);
  align-items: center;
}

.fluent-input-label[orientation="horizontal"] {
  margin-bottom: 0;
}
</style>
