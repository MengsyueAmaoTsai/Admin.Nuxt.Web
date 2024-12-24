<template>
  <div ref="elementRef" :id="props.id" :class="classValue" :style="styleValue">
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

  // BodyContent props
  childContent: Object,
});
const elementRef = ref<HTMLElement | null>(null);
const classValue = computed(() =>
  new CssBuilder(props.class).addClass("body-content").build()
);
const styleValue = computed(() => new StyleBuilder(props.style).build());
</script>

<style scoped lang="scss">
.body-content {
  margin: 0;
  overflow-y: auto;
  overflow-x: hidden;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  font-family: var(--body-font);
  font-weight: normal;
  font-size: var(--type-ramp-base-font-size);
  line-height: var(--type-ramp-base-line-height);
}
</style>
