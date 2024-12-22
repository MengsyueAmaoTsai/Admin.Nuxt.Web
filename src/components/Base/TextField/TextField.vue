<template>
  <div>
    <BaseInputLabel></BaseInputLabel>
    <fluent-text-field
      :class="classValue"
      :style="styleValue"
      :readonly="props.readOnly"
      :autofocus="props.autoFocus"
      :placeholder="props.placeholder"
      :type="props.textFieldType"
      :list="props.dataList"
      :maxlength="props.maxLength"
      :minlength="props.minLength"
      :pattern="props.pattern"
      :size="props.size"
      :spellcheck="props.spellcheck"
      :id="props.id"
      :value="props.value"
      :disabled="props.disabled"
      :name="props.name"
      :required="props.required"
      :appearance="props.appearance"
      @change="changeHandler"
      @input="inputHandler"
    ></fluent-text-field>
  </div>
</template>

<script setup lang="ts">
enum InputMode {
  None = "none",
  Text = "text",
  Decimal = "decimal",
  Numeric = "numeric",
  Telephone = "tel",
  Search = "search",
  Email = "email",
  Url = "url",
}

enum InputAppearance {
  Filled = "filled",
  Outline = "outline",
}

enum TextFieldType {
  Text = "text",
  Email = "email",
  Password = "password",
  Tel = "tel",
  Url = "url",
  Color = "color",
  Search = "search",
  Number = "number",
}

const props = defineProps({
  id: String,
  class: String,
  style: String,

  readOnly: Boolean,
  disabled: Boolean,
  name: String,
  label: String,
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

const classValue = new CssBuilder().build();
const styleValue = new CssBuilder().build();

const changeHandler = (event: Event) => {
  console.log(event);
};

const inputHandler = (event: Event) => {
  console.log(event);
};
</script>

<style scoped lang="scss"></style>
