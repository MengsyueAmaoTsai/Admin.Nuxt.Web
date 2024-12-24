<template>
  <div :id="props.id" :class="classValue" :style="styleValue">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { HorizontalAlignment, Orientation, VerticalAlignment } from "./types";

const props = defineProps({
  // ComponentBase props
  id: String,
  class: String,
  style: String,
  data: Object,
  parentReference: Object,
  additionalAttributes: Object,

  // Stack props
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
    default: Orientation.Vertical,
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
  childContent: Object,
});

const getHorizontalAlignment = () => {
  switch (props.horizontalAlignment) {
    case HorizontalAlignment.Left:
    case HorizontalAlignment.Start:
      return "start";
    case HorizontalAlignment.Center:
      return "center";
    case HorizontalAlignment.Stretch:
      return "stretch";
    case HorizontalAlignment.Right:
    case HorizontalAlignment.End:
      return "end";
    default:
      return "start";
  }
};

const getVerticalAlignment = () => {
  switch (props.verticalAlignment) {
    case VerticalAlignment.Top:
      return "start";
    case VerticalAlignment.Center:
      return "center";
    case VerticalAlignment.Bottom:
      return "end";
    default:
      return "start";
  }
};

const classValue = computed(() =>
  new CssBuilder(props.class)
    .addClass(
      "stack-horizontal",
      () => props.orientation === Orientation.Horizontal
    )
    .addClass(
      "stack-vertical",
      () => props.orientation === Orientation.Vertical
    )
    .build()
);

const styleValue = computed(() =>
  new StyleBuilder(props.style)
    .addStyle(
      "align-items",
      getHorizontalAlignment(),
      () => props.orientation === Orientation.Vertical
    )
    .addStyle(
      "align-items",
      getVerticalAlignment(),
      () => props.orientation === Orientation.Horizontal
    )
    .addStyle(
      "justify-content",
      getVerticalAlignment(),
      () => props.orientation === Orientation.Vertical
    )
    .addStyle(
      "justify-content",
      getHorizontalAlignment(),
      () => props.orientation === Orientation.Horizontal
    )
    .addStyle("column-gap", `${props.horizontalGap}px`, () =>
      Boolean(props.horizontalGap)
    )
    .addStyle("row-gap", `${props.verticalGap}px`, () =>
      Boolean(props.verticalGap)
    )
    .addStyle("width", props.width, () => Boolean(props.width))
    .addStyle("flex-wrap", "wrap", () => props.wrap)
    .build()
);
</script>

<style scoped lang="scss">
.stack-vertical {
  display: flex;
  flex-direction: column;
}

.stack-horizontal {
  display: flex;
  flex-direction: row;
}
</style>
