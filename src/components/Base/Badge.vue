<template>
  <div>
    <fluent-badge
      :id="props.id"
      :class="classValue"
      :style="styleValue"
      :appearance="props.appearance"
      :fill="props.fill"
      :color="props.fill"
      :circular="props.circular"
      @click="clickHandler"
    >
      <span :style="internalStyleValue">
        <slot />
        <!-- icon if onDismissClick handler exists -->
      </span>
    </fluent-badge>
  </div>
</template>

<script lang="ts" setup>
import { Appearance } from "~/components/Base/types";

const props = defineProps({
  id: String,
  class: String,
  style: String,

  color: String,
  backgroundColor: String,
  fill: String,
  circular: {
    type: Boolean,
    default: false,
  },
  appearance: {
    type: String as PropType<Appearance>,
    default: Appearance.Neutral,
  },
  width: String,
  height: String,
  dismissTitle: String,
  dismissIcon: Object,
  onClick: Function,
  onDismissClick: Function,
});

const classValue = new CssBuilder(props.class).build();

const styleValue = new StyleBuilder(props.style)
  .addStyle("width", props.width, () => Boolean(props.width))
  .addStyle("cursor", "pointer", () => props.onClick !== undefined)
  .addStyle(`--badge-fill-${props.fill}`, props.backgroundColor, () =>
    Boolean(props.backgroundColor)
  )
  .addStyle(`--badge-color-${props.fill}`, props.color, () =>
    Boolean(props.color)
  )
  .build();

const internalStyleValue = new StyleBuilder()
  .addStyle("height", props.height, () => Boolean(props.height))
  .addStyle(
    "width: 100%; display: flex; align-items: center; justify-content: center; white-space: nowrap;"
  )
  .build();

const clickHandler = () => {
  throw new Error("Not implemented Badge click handler");
};

const dismissClickHandler = () => {
  throw new Error("Not implemented Badge dismiss click handler");
};

onMounted(() => {
  if (
    props.appearance !== Appearance.Accent &&
    props.appearance !== Appearance.Lightweight &&
    props.appearance !== Appearance.Neutral
  ) {
    throw new Error(
      "Badge Appearance needs to be one of Accent, Lightweight or Neutral."
    );
  }
});
</script>

<style></style>
