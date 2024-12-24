<template>
  <div>
    <fluent-divider
      ref="elementRef"
      :class="props.class"
      :style="props.style"
      :role="props.role"
      :orientation="props.orientation"
    >
      <slot />
    </fluent-divider>
  </div>
</template>

<script setup lang="ts">
import { Orientation, type DividerRole } from "./types";

const props = defineProps({
  // ComponentBase props
  id: String,
  class: String,
  style: String,
  data: Object,
  parentReference: Object,
  additionalAttributes: Object,

  // Divider props
  role: String as PropType<DividerRole>,
  orientation: {
    type: String as PropType<Orientation>,
    default: Orientation.Horizontal,
  },
  childContent: Object,
});

const elementRef = ref<HTMLElement | null>(null);

onMounted(() => {
  setDividerAriaOrientation();
});

const setDividerAriaOrientation = () => {
  const elements = document.querySelectorAll(
    "fluent-divider[role='presentation']"
  );

  if (!!elements) {
    elements.forEach((element, i, array) => {
      if (!!element && element.hasAttribute("aria-orientation")) {
        element.removeAttribute("aria-orientation");
      }
    });
  }
};
</script>
