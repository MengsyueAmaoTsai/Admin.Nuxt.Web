<template>
  <div
    ref="elementRef"
    :id="props.id"
    :class="classValue"
    :style="styleValue"
    :orientation="props.orientation"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { Orientation } from "./types";

const props = defineProps({
  // ComponentBase props
  id: String,
  class: String,
  style: String,
  data: Object,
  parentReference: Object,
  additionalAttributes: Object,

  // Layout props
  orientation: {
    type: String as PropType<Orientation>,
    default: Orientation.Vertical,
  },
  childContent: Object,
});

const elementRef = ref<HTMLElement | null>(null);

const classValue = computed(() =>
  new CssBuilder(props.class).addClass("layout").build()
);

const styleValue = computed(() => new StyleBuilder(props.style).build());
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
