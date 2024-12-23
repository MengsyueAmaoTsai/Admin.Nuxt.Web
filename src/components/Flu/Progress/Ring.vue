<template>
  <div v-if="props.visible">
    <fluent-progress-ring
      :id="id"
      :class="classValue"
      :style="styleValue"
      :min="props.min"
      :max="props.max"
      :value="props.value"
      :paused="props.paused"
    >
      <slot />
    </fluent-progress-ring>
  </div>
</template>

<script setup lang="ts">
import { ProgressStroke } from "../types";

const props = defineProps({
  // ComponentPropsBase
  id: String,
  class: String,
  style: String,
  data: Object,
  parentReference: Object,
  additionalAttributes: Object,

  // ProgressRingProps
  min: Number,
  max: Number,
  value: Number,
  visible: {
    type: Boolean,
    default: true,
  },
  paused: Boolean,
  childContent: Object,
  width: String,
  stroke: {
    type: String as PropType<ProgressStroke>,
    default: ProgressStroke.Normal,
  },
  color: String,
});

const classValue = new CssBuilder(props.class).build();
const styleValue = new StyleBuilder(props.style)
  .addStyle("width", props.width, () => Boolean(props.width))
  .addStyle("height", props.width, () => Boolean(props.width))
  .build();
</script>

<style scoped lang="scss"></style>
