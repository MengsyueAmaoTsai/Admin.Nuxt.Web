<template>
  <div>
    <!-- InputLabel -->
    <fluent-text-field>
      <slot />
    </fluent-text-field>
  </div>
</template>

<script setup lang="ts">
import { InputAppearance } from "./types";

const props = defineProps({
  // ComponentPropsBase
  id: String,
  class: String,
  style: String,

  // InputPropsBase
  readOnly: Boolean,
  disabled: Boolean,
  name: String,
  label: String,
  labelTemplate: Object,
  ariaLabel: String,
  required: Boolean,
  value: String,
  valueChanged: Function,
  valueExpression: Function,
  field: Object,
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
  immediate: {
    type: Boolean,
    default: false,
  },
  immediateDelay: {
    type: Number,
    default: 0,
  },

  // TextFieldProps
  textFieldType: {
    type: String as PropType<TextFieldType>,
  },
  dataList: String,
  maxLength: Number,
  minLength: Number,
  pattern: String,
  size: Number,
  spellcheck: Boolean,
  appearance: {
    type: String as PropType<InputAppearance>,
    default: InputAppearance.Outline,
  },
  autoComplete: String,
  inputMode: {
    type: String as PropType<InputMode>,
  },
});

onMounted(() => {
  console.log("TextField mounted", props);
});
</script>
