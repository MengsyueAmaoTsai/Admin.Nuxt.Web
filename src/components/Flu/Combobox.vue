<template>
  <div>
    <FluInputLabel
      :forId="props.id"
      :label="props.label"
      :aria-label="props.ariaLabel"
      :required="props.required"
      :child-content="props.labelTemplate"
    />
    <fluent-combobox
      ref="elementRef"
      :id="props.id"
      :class="classValue"
      :style="styleValue"
      :autocomplete="props.autocomplete"
      :open="props.open"
      :current-value="props.value"
      :placeholder="props.placeholder"
      :position="props.position"
      :disabled="props.disabled"
      :appearance="props.appearance"
      :required="props.required"
      :autofocus="props.autoFocus"
      :name="props.name"
    >
      <fluent-option v-for="item in props.items" :value="item">
        {{ item }}
      </fluent-option>
    </fluent-combobox>
  </div>
</template>

<script setup lang="ts">
import { Appearance, SelectPosition, type ComboboxAutocomplete } from "./types";

const props = defineProps({
  // ComponentBase props
  id: String,
  class: String,
  style: String,
  data: Object,
  parentReference: Object,
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
  value: String,
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

  // ListComponentBase props
  width: String,
  height: String,
  title: String,
  childContent: Object,
  optionText: Function as PropType<(option: any) => string>,
  optionValue: Function as PropType<(option: any) => string>,
  optionDisabled: Function as PropType<(option: any) => boolean>,
  optionSelected: Function as PropType<(option: any) => boolean>,
  items: Array,
  selectedOption: Object,
  selectedOptionChanged: Function as PropType<(option: any) => void>,
  multiple: Boolean,
  optionTemplate: Object,
  selectedOptions: Array,
  selectedOptionsChanged: Function as PropType<(options: Array<any>) => void>,

  // Combobox props
  autocomplete: String as PropType<ComboboxAutocomplete>,
  open: Boolean,
  position: {
    type: String as PropType<SelectPosition>,
    default: SelectPosition.Below,
  },
  appearance: String as PropType<Appearance>,
});

const elementRef = ref<HTMLElement | null>(null);
const classValue = computed(() => new CssBuilder().build());
const styleValue = computed(() =>
  new StyleBuilder()
    .addStyle("min-width", props.width, Boolean(props.width))
    .build()
);

onMounted(() => {
  if (props.id) {
    setControlAttribute(props.id, "autocomplete", "off");
  }
});

//#region
const setControlAttribute = (id: string, attrName: string, value: any) => {
  const fieldElement = document
    .querySelector("#" + id)
    ?.shadowRoot?.querySelector(".selected-value");

  if (!!fieldElement) {
    fieldElement?.setAttribute(attrName, value);
  }
};

//#endregion
</script>
