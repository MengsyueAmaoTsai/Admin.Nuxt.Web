<template>
  <div>
    <header
      ref="elementRef"
      :id="props.id"
      :class="classValue"
      :style="styleValue"
    >
      <div class="header-gutters">
        <slot />
      </div>
    </header>
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

  // Header props
  height: { type: Number, default: 50 },
  childContent: Object,
});

const elementRef = ref<HTMLElement | null>(null);
const classValue = computed(() =>
  new CssBuilder(props.class).addClass("header").build()
);

const styleValue = computed(() =>
  new StyleBuilder(props.style)
    .addStyle("height", `${props.height}px`, () => Boolean(props.height))
    .build()
);
</script>

<style scoped lang="scss">
.header {
  display: flex;
  z-index: 10;
  flex-shrink: 0;
  background-color: var(--accent-fill-rest);
  font-family: var(--body-font);
  font-weight: bold;
  font-size: var(--type-ramp-plus-1-font-size);
  line-height: var(--type-ramp-plus-1-line-height);
  color: var(--fill-color);
}

.header .header-gutters {
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  margin: 0.5rem 1.5rem;
}

.header .header-fixed-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
}
</style>
