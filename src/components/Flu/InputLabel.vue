<template>
  <div v-if="props.label">
    <label
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
      {{ props.childContent }}
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
  // ComponentBase props
  id: String,
  class: String,
  style: String,
  data: Object,
  parentReference: Object,
  additionalAttributes: Object,

  // InputLabel props
  forId: String,
  label: String,
  required: Boolean,
  childContent: Object,
  ariaLabel: String,
  orientation: {
    type: String as PropType<Orientation>,
    default: Orientation.Vertical,
  },
});

const shouldRenderAriaLabel = computed(
  () => props.forId && (props.label || props.ariaLabel)
);

onMounted(() => {
  if (shouldRenderAriaLabel.value) {
    setInputAriaLabel(props.forId, props.label || props.ariaLabel);
  }
});

const setInputAriaLabel = (id?: string, value?: string) => {
  if (!id || !value) {
    return;
  }

  const element = document.getElementById(id);

  if (!!element) {
    const inputElement = element.shadowRoot?.querySelector("input");

    // input field included in Shadow DOM
    if (!!inputElement) {
      inputElement.setAttribute("aria-label", value);
    }

    // Fluent element
    else {
      element.setAttribute("aria-label", value);
    }
  }
};
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
