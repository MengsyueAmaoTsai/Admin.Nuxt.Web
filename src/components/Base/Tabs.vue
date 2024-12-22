<template>
  <div>
    <fluent-tabs>
      <slot />
    </fluent-tabs>
  </div>
</template>

<script setup lang="ts">
import { Orientation } from "./types";

enum TabSize {
  Small = "small",
  Medium = "medium",
  Large = "large",
}

const props = defineProps({
  id: String,
  class: String,
  style: String,

  orientation: {
    type: String as PropType<Orientation>,
    default: Orientation.Horizontal,
  },
  onTabSelect: Function,
  onTabClose: Function,
  showClose: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as PropType<TabSize>,
    default: TabSize.Medium,
  },
  width: String,
  height: String,
  activeTabId: {
    type: String,
    default: "",
  },
  activeTabIdChanged: Function,
  showActiveIndicator: {
    type: Boolean,
    default: true,
  },
  onTabChange: Function,
});

const classValue = new CssBuilder(props.class).build();
const styleValue = new StyleBuilder(props.style).build();
const styleMoreValues = new StyleBuilder().build();
</script>
