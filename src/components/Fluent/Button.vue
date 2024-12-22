<template>
  <div>
    <span
      v-if="loadingOverlay"
      :class="`${props.class} loading-button`"
      :style="props.style"
    >
      <!-- render button -->
      <!-- Progress ring -->
    </span>
    <!-- ref, attributes, props.stopPropagation not set -->
    <fluent-button
      v-else
      :id="props.id"
      :class="loadingOverlay ? '' : props.class"
      :style="props.style"
      :autofocus="props.autoFocus"
      :form="props.formId"
      :formaction="props.action"
      :formenctype="props.enctype"
      :formmethod="props.method"
      :formnovalidate="props.noValidate"
      :formtarget="props.target"
      :type="props.type"
      :value="props.value"
      :current-value="props.currentValue"
      :disabled="props.disabled"
      :name="props.name"
      :required="props.required"
      :aria-label="props.title"
      :title="props.title"
      :appearance="props.appearance"
      @click="handleClick"
    >
      <!-- Icon start -->
      <slot />
      <!-- Icon end -->
    </fluent-button>
  </div>
</template>

<script setup lang="ts">
import { Appearance, ButtonType } from "./types";

const props = defineProps({
  // ComponentPropsBase
  id: String,
  class: String,
  style: String,
  data: Object,
  parentReference: Object,
  additionalAttributes: Object,

  // ButtonProps
  autoFocus: Boolean,
  formId: String,
  action: String,
  enctype: String,
  method: String,
  noValidate: Boolean,
  target: String,
  type: {
    type: String as PropType<ButtonType>,
    default: ButtonType.Button,
  },
  value: String,
  currentValue: String,
  disabled: Boolean,
  name: String,
  required: Boolean,
  appearance: {
    type: String as PropType<Appearance>,
    default: Appearance.Neutral,
  },
  backgroundColor: String,
  color: String,
  loading: {
    type: Boolean,
    default: false,
  },
  iconStart: Object,
  iconEnd: Object,
  title: String,
  stopPropagation: {
    type: Boolean,
    default: false,
  },
  onClick: Function as PropType<(event: MouseEvent) => void>,
});

const loadingOverlay = props.loading && !props.iconStart && !props.iconEnd;

onMounted(() => {
  console.log("Button mounted");
});

const handleClick = (event: MouseEvent) => {
  console.log("Handle click", event);
};
</script>

<style></style>
