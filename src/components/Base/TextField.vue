<template>
  <div>
    <!-- InputLabel -->

    <!-- @ref=? @attributes= -->
    <fluent-text-field
      :id="props.id"
      :class="props.class"
      :style="styleValue"
      :readonly="props.readOnly"
      :autofocus="props.autoFocus"
      :placeholder="props.placeholder"
      :type="props.textFieldType"
      :list="props.dataList"
      :maxLength="props.maxLength"
      :minLength="props.minLength"
      :pattern="props.pattern"
      :size="props.size"
      :spellcheck="props.spellcheck"
      :disabled="props.disabled"
      :name="props.name"
      :required="props.required"
      :appearance="props.appearance"
      :value="props.value"
      :current-value="currentValue"
      @change="handleChange"
      @input="handleInput"
    >
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
  data: Object,
  parentReference: Object,
  additionalAttributes: Object,

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

// cssClass = combineClassNames(props.additionalAttributes, fieldClass)
const inputBaseClass = new CssBuilder(props.class).build();
const styleValue = new StyleBuilder(props.style).build();
const currentValue = ref(props.value);

onMounted(() => {
  console.log("TextField mounted", props);
});

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  console.log("HandleChange", target.value);
};

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  console.log("HandleInput", target.value);
};
</script>
