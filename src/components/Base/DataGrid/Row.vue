<template>
  <div>
    <tr role="row" :class="classValue" :style="styleValue">
      <slot />
    </tr>
  </div>
</template>

<script setup lang="ts">
import { VerticalAlignment } from "../types";
import { DataGridRowType } from "./types";

const props = defineProps({
  id: String,
  class: String,
  style: String,

  item: Object,
  rowIndex: Number,
  gridTemplateColumns: String,
  rowType: {
    type: String as PropType<DataGridRowType>,
    default: DataGridRowType.Default,
  },
  verticalAlignment: {
    type: String as PropType<VerticalAlignment>,
    default: VerticalAlignment.Center,
  },
  onCellFocus: Function,
  internalGridContext: Object,
});

const classValue = new CssBuilder(props.class).build();
const styleValue = new StyleBuilder(props.style).build();
</script>

<style scoped lang="scss">
.sticky-header {
  z-index: 3;
}

.hover:not(
    [row-type="header"],
    [row-type="sticky-header"],
    .loading-content-row
  ):hover
  ::deep
  td {
  cursor: pointer;
  background-color: var(
    --datagrid-hover-color,
    var(--neutral-fill-stealth-hover)
  );
}
</style>
