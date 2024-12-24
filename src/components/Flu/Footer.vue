<template>
  <div ref="elementRef" :class="classValue" :style="styleValue">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  // ComponentBase props
  id: String,
  class: String,
  style: String,
  data: Object,
  parentReference: Object,
  additionalAttributes: Object,

  // Footer props
  childContent: Object,
});

const elementRef = ref<HTMLElement | null>(null);
const classValue = computed(() =>
  new CssBuilder(props.class).addClass("footer").build()
);
const styleValue = computed(() => new StyleBuilder(props.style).build());
</script>

<style scoped lang="scss">
.footer {
  display: flex;
  z-index: 10;
  flex-direction: row;
  font-family: var(--body-font);
  font-weight: normal;
  font-size: var(--type-ramp-minus-1-font-size);
  line-height: var(--type-ramp-minus-1-line-height);
}
</style>
