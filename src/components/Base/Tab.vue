<template>
  <div>
    <fluent-tab
      v-if="props.visible"
      :class="props.labelClass"
      :style="props.labelStyle"
      :disabled="props.disabled"
      :aria-label="props.label"
    ></fluent-tab>

    <fluent-tab-panel
      :id="`${props.id}-panel`"
      :class="classValue"
      :style="styleValue"
    >
      <!-- Content -->
      <slot />
    </fluent-tab-panel>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  id: String,
  class: String,
  style: String,

  disabled: {
    type: Boolean,
    default: false,
  },
  visible: {
    type: Boolean,
    default: true,
  },
  label: {
    type: String,
    default: "",
  },
  labelChanged: Function,
  labelClass: String,
  labelStyle: String,
  icon: Object,
  labelEditable: {
    type: Boolean,
    default: false,
  },
  deferredLoading: {
    type: Boolean,
    default: false,
  },
});

const classValue = new CssBuilder(props.class).build();
const styleValue = new StyleBuilder(props.style).build();
</script>
<style scoped lang="scss">
fluent-tab {
  -webkit-user-select: none;
  user-select: none;
  font-weight: 400;
}

fluent-tab[aria-selected="true"] {
  font-weight: 600;
  z-index: 1;
}

fluent-tab[overflow] {
  display: none;
}

fluent-tab[disabled] {
  cursor: not-allowed;
  color: var(--neutral-foreground-hint);
}

::deep .fluent-tab-icon {
  fill: var(--neutral-fill-strong-active);
  min-width: 18px;
  max-width: 18px;
}

::deep .fluent-tab-close {
  fill: var(--neutral-fill-strong-active) !important;
  cursor: pointer;
  max-width: 12px;
  max-height: 12px;
  margin-left: 6px;
}

::deep .fluent-tab-close:hover {
  fill: var(--neutral-fill-strong-hover) !important;
}
</style>
