<template>
  <div
    :id="props.id"
    :class="classValue"
    :style="styleValue"
    :orientation="
      props.orientation === Orientation.Horizontal
        ? props.orientation
        : undefined
    "
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { Orientation } from "./types";

const props = defineProps({
  // ComponentPropsBase
  id: String,
  class: String,
  style: String,
  data: Object,
  parentReference: Object,
  additionalAttributes: Object,

  orientation: {
    type: String as PropType<Orientation>,
    default: Orientation.Vertical,
  },
  childContent: Object,
});

const classValue = new CssBuilder(props.class).addClass("layout").build();
const styleValue = new StyleBuilder(props.style).build();
</script>

<style scoped lang="scss">
.layout {
  height: 100%;
  width: 100%;
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.layout[orientation="horizontal"] {
  flex-direction: row;
}
</style>
