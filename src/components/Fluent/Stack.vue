<template>
  <div :id="props.id" :class="classValue" :style="styleValue">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { HorizontalAlignment, Orientation, VerticalAlignment } from "./types";

const props = defineProps({
  // ComponentPropsBase
  id: String,
  class: String,
  style: String,
  data: Object,
  parentReference: Object,
  additionalAttributes: Object,

  horizontalAlignment: {
    type: String as PropType<HorizontalAlignment>,
    default: HorizontalAlignment.Left,
  },
  verticalAlignment: {
    type: String as PropType<VerticalAlignment>,
    default: VerticalAlignment.Top,
  },
  orientation: {
    type: String as PropType<Orientation>,
    default: Orientation.Horizontal,
  },
  width: {
    type: String,
    default: "100%",
  },
  wrap: {
    type: Boolean,
    default: false,
  },
  horizontalGap: {
    type: Number,
    default: 10,
  },
  verticalGap: {
    type: Number,
    default: 10,
  },
});

const classValue = new CssBuilder(props.class).build();
const styleValue = new StyleBuilder(props.style).build();
</script>

<style></style>
