<template>
  <div>
    <fluent-checkbox
      :id="props.id"
      :class="classValue"
      :style="styleValue"
      :readonly="props.readOnly"
      :disabled="props.disabled"
      :name="props.name"
      :required="props.required"
      :value="true"
      :current-checked="currentValue"
      :current-value="currentValue"
      @change="handleCheckedChanged"
    >
    </fluent-checkbox>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["update:value"]);

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
  value: Boolean,
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

  // CheckboxProps
  threeState: {
    type: Boolean,
    default: false,
  },
  treeStateOrderUncheckToIntermediate: {
    type: Boolean,
    default: false,
  },
  showIndeterminate: {
    type: Boolean,
    default: true,
  },
  checkState: {
    type: Boolean,
    default: false,
  },
  checkStateChanged: Function as PropType<(value: boolean) => void>,
});

const classValue = new CssBuilder(props.class).build();
const styleValue = new StyleBuilder(props.style).build();
const currentValue = props.value;

onMounted(() => {
  console.log("Checkbox mounted");
});

const handleCheckedChanged = async (event: Event) => {
  const target = event.target as HTMLInputElement;
  const checked = target.checked;

  if (!props.threeState) {
    await new Promise((resolve) => setTimeout(resolve, 1));
  }

  if (props.threeState) {
    // await setCurrentCheckStateAsync(checked ?? false);
  } else {
    // await setCurrentCheckStateAsync(checked ?? false);
    // await setIntermediateAsync(false);
    // await updateAndRaiseCheckStateEventAsync(checked ?? false);
    emit("update:value", checked);
  }
};
</script>

<style scoped lang="scss"></style>
