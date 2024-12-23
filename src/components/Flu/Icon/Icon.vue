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
  value: Object,
  onClick: Function,
  focusable: {
    type: Boolean,
    default: false,
  },
});

const classValue = computed(() => new CssBuilder(props.class).build());
const styleValue = computed(() => new StyleBuilder(props.style).build());

const handleClick = (event: MouseEvent) => {
  console.log("handleClick", event);
};

const handleKeyDown = (event: KeyboardEvent) => {
  console.log("handleKeyDown", event);
};
</script>
