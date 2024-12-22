<template>
  <div>
    <fluent-checkbox
      :class="classValue"
      :style="styleValue"
      :id="id"
      :readonly="props.readOnly"
      :disabled="props.disabled"
      :name="props.name"
      :required="props.required"
      :current-checked="props.currentValue"
      :current-value="props.modeValue"
      :value="true"
    >
      <span v-if="props.label || props.ariaLabel" :aria-label="props.ariaLabel">
        {{ props.label }}
      </span>
      <span v-if="props.required" aria-hidden="true" style="color: var(--error)"
        >*</span
      >
      <slot />
    </fluent-checkbox>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  id: String,
  class: String,
  style: String,

  modeValue: {
    type: Boolean,
    default: false,
  },
  currentValue: Boolean,
  valueChanged: Function,
  valueExpression: Function,
  displayName: String,
  autoFocus: {
    type: Boolean,
    default: false,
  },
  placeholder: String,
  embedded: {
    type: Boolean,
    default: false,
  },
  editContext: Object,
  disabled: Boolean,
  readOnly: Boolean,
  name: String,
  label: String,
  ariaLabel: String,
  required: Boolean,
  immediate: {
    type: Boolean,
    default: false,
  },
  immediateDelay: {
    type: Number,
    default: 0,
  },
  treeState: {
    type: Boolean,
    default: false,
  },
  threeStateOrderUncheckToIntermediate: {
    type: Boolean,
    default: false,
  },
  showIndeterminate: {
    type: Boolean,
    default: true,
  },
  checkState: Boolean,
  checkStateChange: Function,
});

const classValue = new CssBuilder(props.class)
  .addClass("disabled", props.disabled)
  .addClass("checked", props.modeValue)
  .addClass("indeterminate", props.treeState)
  .build();

const styleValue = new StyleBuilder(props.style).build();
</script>

<style scoped lang="scss"></style>
