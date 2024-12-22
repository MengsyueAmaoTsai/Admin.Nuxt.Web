<template>
  <div>
    <span
      v-if="loadingOverlay"
      :class="`${props.class} loading-button`"
      :style="props.style"
    >
      <fluent-button
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
        :id="props.id"
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
        <!-- Icon start -->
        <slot />
        <!-- Icon end -->
      </fluent-button>
      <!-- Progress ring -->
    </span>

    <fluent-button
      v-else
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
      :id="props.id"
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
      <!-- Icon start -->
      <slot />
      <!-- Icon end -->
    </fluent-button>
  </div>
</template>

<script setup lang="ts">
import { Appearance } from "../types";
import { ButtonType } from "./types";

const props = defineProps({
  id: String,
  class: String,
  style: String,

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
  loading: {
    type: Boolean,
    default: false,
  },
  iconStart: Object,
  iconEnd: Object,
  title: String,
  stopPropagation: {
    type: Boolean,
    default: false,
  },

  onClick: Function,
});

const loadingOverlay = props.loading && !props.iconStart && !props.iconEnd;

const handleClick = (event) => {
  if (props.onClick) {
    props.onClick(event);
  }
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
