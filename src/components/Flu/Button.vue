<template>
  <div>
    <span v-if="loadingOverlay" :class="`${props.class} loading-button`">
      <fluent-button
        ref="elementRef"
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
        :id="buttonId"
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
        <!-- Icon Start -->
        <slot />
        <!-- Icon end -->
      </fluent-button>
      <FluProgressRing />
    </span>

    <fluent-button
      v-else
      ref="elementRef"
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
      :id="buttonId"
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
      <!-- Icon Start -->
      <slot />
      <!-- Icon end -->
    </fluent-button>
  </div>
</template>

<script setup lang="ts">
import { ComponentIdentifier } from "./core";
import { Appearance, ButtonType } from "./types";

const props = defineProps({
  // ComponentBase props
  id: String,
  class: String,
  style: String,
  data: Object,
  parentReference: Object,
  additionalAttributes: Object,

  // Button props
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
  loading: { type: Boolean, default: false },
  iconStart: Object,
  iconEnd: Object,
  title: String,
  stopPropagation: {
    type: Boolean,
    default: false,
  },
  childContent: Object,
  onClick: Function as PropType<(event: MouseEvent) => void>,
});

// Initialize
const buttonId = ref<string>("");
const elementRef = ref<HTMLElement | null>(null);
const loadingOverlay = computed(
  () => props.loading && !props.iconStart && !props.iconEnd
);

if (!props.id && (!props.backgroundColor || !props.color)) {
  buttonId.value = ComponentIdentifier.newId();
}

onMounted(() => {
  console.log(`[Button] mounted. Id: ${buttonId.value}`);
});

const handleClick = (event: MouseEvent) => {
  console.log(`[Button] clicked. Id: ${buttonId.value}`);
};
</script>

<style scoped lang="scss">
.loading-button {
  position: relative;
  height: calc(
    (var(--base-height-multiplier) + var(--density)) * var(--design-unit) * 1px
  );
  display: inline-block;
}

.loading-button ::deep fluent-progress-ring {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 16px;
  height: 16px;
  cursor: not-allowed;
}
</style>
