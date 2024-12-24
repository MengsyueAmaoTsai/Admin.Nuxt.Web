<template>
  <div>
    <FluInputLabel
      :forId="props.id"
      :label="props.label"
      :aria-label="props.ariaLabel"
      :child-content="props.labelTemplate"
      :required="props.required"
    />
    <fluent-text-field ref="elementRef">
      <slot />
    </fluent-text-field>
  </div>
</template>

<script setup lang="ts">
import { InputAppearance } from "./types";

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

  // NumberField props
  hideStep: Boolean,
  dataList: String,
  maxLength: { type: Number, default: 14 },
  minLength: { type: Number, default: 1 },
  size: { type: Number, default: 20 },
  // step:
  max: String,
  min: String,
  appearance: {
    type: String as PropType<InputAppearance>,
    default: InputAppearance.Outline,
  },
  autoComplete: String,
  parsingErrorMessage: {
    type: String,
    default: "The {0} field must be a number.",
  },
  childContent: Object,
});

const elementRef = ref<HTMLElement | null>(null);

onMounted(() => {
  if (props.autoComplete && props.id) {
    setControlAttribute(props.id, "autocomplete", props.autoComplete);
  }
});

//#region
const setControlAttribute = (id: string, attrName: string, value: string) => {
  const fieldElement = document
    .querySelector("#" + id)
    ?.shadowRoot?.querySelector("#control");

  if (!!fieldElement) {
    fieldElement?.setAttribute(attrName, value);
  }
};

//#endregion
</script>

<style scoped lang="scss"></style>
