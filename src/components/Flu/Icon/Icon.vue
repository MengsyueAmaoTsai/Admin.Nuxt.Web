<template>
  <div>
    <div
      :id="props.id"
      :slot="slot"
      :class="classValue"
      :style="styleValue"
      :title="props.title"
      :tabindex="props.focusable ? 0 : undefined"
      :role="props.focusable ? 'button' : undefined"
      @keydown="handleKeyDown"
      @click="handleClick"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Color } from "../types";
import { IconInfo } from "./icon";

const props = defineProps({
  // ComponentPropsBase
  id: String,
  class: String,
  style: String,
  data: Object,
  parentReference: Object,
  additionalAttributes: Object,

  // IconProps
  slot: String,
  title: String,
  color: String as PropType<Color>,
  customColor: String,
  width: String,
  value: IconInfo,
  onClick: Function as PropType<(event: MouseEvent) => void>,
  focusable: {
    type: Boolean,
    default: false,
  },
});

const classValue = computed(() => new CssBuilder(props.class).build());
const styleValue = computed(() => new StyleBuilder(props.style).build());

const handleKeyDown = (event: KeyboardEvent) => {
  if (props.onClick) {
    if (event.key === "Enter" || event.key === "NumpadEnter") {
      props.onClick(new MouseEvent("click"));
    }
  }
};

const handleClick = (event: MouseEvent) => {
  if (props.onClick) {
    props.onClick(event);
  }
};
</script>
