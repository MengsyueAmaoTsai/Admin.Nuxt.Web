<template>
  <div>
    <footer :class="classValue" :style="styleValue">
      <slot />
    </footer>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  // ComponentPropsBase
  id: String,
  class: String,
  style: String,
  data: Object,
  parentReference: Object,
  additionalAttributes: Object,

  childContent: Object,
});

const classValue = new CssBuilder(props.class).addClass("footer").build();
const styleValue = new StyleBuilder(props.style).build();
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
