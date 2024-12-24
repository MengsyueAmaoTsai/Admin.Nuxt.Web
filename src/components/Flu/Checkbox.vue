<template>
  <fluent-checkbox
    ref="elementRef"
    :class="classValue"
    :style="styleValue"
    :readonly="props.readOnly"
    :id="props.id"
    :value="true"
    :current-value="currentValue"
    :disabled="props.disabled"
    :name="props.name"
    :required="props.required"
    :current-checked="currentValue"
    @checked-changed="handleCheckedChanged"
  >
    <span
      v-if="props.label || props.ariaLabel || props.labelTemplate"
      :aria-label="props.ariaLabel"
    >
      {{ props.label }}
      {{ props.labelTemplate }}
    </span>

    <span
      v-if="props.required"
      aria-label="required"
      aria-hidden="true"
      style="color: var(--error)"
      >*</span
    >
  </fluent-checkbox>
</template>

<script setup lang="ts">
const props = defineProps({
  // ComponentBase props
  id: String,
  class: String,
  style: String,
  data: Object,
  parentReference: HTMLElement,
  additionalAttributes: Object,

  // InputBase props
  editContext: Object,
  readOnly: Boolean,
  disabled: Boolean,
  name: String,
  label: String,
  labelTemplate: Object,
  ariaLabel: String,
  required: Boolean,
  value: [String, Number, Boolean],
  valueChanged: Function as PropType<
    (value: string | number | boolean) => void
  >,
  valueExpression: Function as PropType<
    (value: string | number | boolean) => void
  >,
  field: Object,
  displayName: String,
  autoFocus: { type: Boolean, default: false },
  placeholder: String,
  embedded: { type: Boolean, default: false },

  // InputBase handlers
  immediate: { type: Boolean, default: false },
  immediateDelay: { type: Number, default: 0 },

  // Checkbox props
  childContent: Object,
  threeState: { type: Boolean, default: false },
  threeStateOrderUncheckToIntermediate: { type: Boolean, default: false },
  showIndeterminate: { type: Boolean, default: true },
  checkState: Boolean,
  checkStateChanged: Function as PropType<(value: boolean) => void>,
});

const elementRef = ref<HTMLElement | null>(null);
const currentValue = ref(props.value);
const classValue = computed(() => new CssBuilder(props.class).build());
const styleValue = computed(() => new StyleBuilder(props.style).build());

const handleCheckedChanged = (event) => {
  console.log("checked changed", event.detail);
};
</script>
