<template>
  <div v-if="props.visible">
    <fluent-progress-ring
      :id="props.id"
      ref="elementReference"
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

const elementReference = ref<HTMLElement | undefined>(undefined);

const props = defineProps({
  // ComponentBase props
  id: String,
  class: String,
  style: String,
  data: Object,
  parentReference: Object,
  additionalAttributes: Object,

  // ProgressRing props
  min: Number,
  max: Number,
  value: Number,
  visible: { type: Boolean, default: true },
  paused: Boolean,
  childContent: Object,
  width: String,
  stroke: {
    type: String as PropType<ProgressStroke>,
    default: ProgressStroke.Normal,
  },
  color: String,
});

const classValue = computed(() => new CssBuilder(props.class).build());
const styleValue = computed(() =>
  new StyleBuilder(props.stroke)
    .addStyle("width", props.width, () => Boolean(props.width))
    .addStyle("height", props.width, () => Boolean(props.width))
    .build()
);
</script>

<style></style>
