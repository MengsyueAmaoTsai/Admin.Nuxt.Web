<template>
  <div>
    <FluInputLabel
      :forId="props.id"
      :label="props.label"
      :aria-label="props.ariaLabel"
      :childContent="props.labelTemplate"
      :required="props.required"
    />
    <fluent-text-field
      ref="elementRef"
      :class="classValue"
      :style="styleValue"
      :readonly="props.readOnly"
      :autofocus="props.autoFocus"
      :placeholder="props.placeholder"
      :type="props.type"
      :list="props.dataList"
      :maxlength="props.maxLength"
      :minlength="props.minLength"
      :pattern="props.pattern"
      :size="props.size"
      :spellcheck="props.spellcheck"
      :value="props.value"
      :current-value="currentValue"
      :disabled="props.disabled"
      :appearance="props.appearance"
      @change="handleChange"
      @input="handleInput"
    >
      <slot />
    </fluent-text-field>
  </div>
</template>

<script setup lang="ts">
import {
  FluentInputAppearance as InputAppearance,
  InputMode,
  type TextFieldType,
} from "./types";

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

  // TextField props
  type: String as PropType<TextFieldType>,
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
  childContent: Object,
  autoComplete: String,
  inputMode: String as PropType<InputMode>,
});

const elementRef = ref<HTMLElement | null>(null);

const currentValue = ref("");
const classValue = computed(() => new CssBuilder().build());
const styleValue = computed(() => new StyleBuilder(props.style).build());

onMounted(() => {
  // First render
  if (props.autoComplete && props.id) {
    setControlAttribute(props.id, "autocomplete", props.autoComplete);
  }

  if (props.inputMode && props.id) {
    setControlAttribute(props.id, "inputmode", props.inputMode);
  }

  if (props.dataList && props.id) {
    setDataList(props.id, props.dataList);
  }
});

const handleChange = () => {};
const handleInput = () => {};

//#region
const setControlAttribute = (id: string, attrName: string, value: string) => {
  const fieldElement = document
    .querySelector("#" + id)
    ?.shadowRoot?.querySelector("#control");

  if (!!fieldElement) {
    fieldElement?.setAttribute(attrName, value);
  }
};

const setDataList = (id: string, dataListId: string) => {
  const fieldElement = document.getElementById(id);
  const dataList = document.getElementById(dataListId)?.cloneNode(true);

  const shadowRoot = fieldElement.shadowRoot;
  const shadowDataList = shadowRoot.getElementById(dataListId);
  if (shadowDataList) {
    shadowRoot.removeChild(shadowDataList);
  }
  shadowRoot.appendChild(dataList);
};
//#endregion
</script>

<style scoped lang="scss"></style>
