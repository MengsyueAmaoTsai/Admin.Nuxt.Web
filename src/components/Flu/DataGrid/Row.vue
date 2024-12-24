<template>
  <div>
    <tr
      :class="classValue"
      :style="styleValue"
      :data-row-index="props.rowIndex"
      role="row"
    >
      <slot />
    </tr>
  </div>
</template>

<script setup lang="ts">
import { DataGridRowType, VerticalAlignment } from "../types";

const props = defineProps({
  // ComponentBase props
  id: String,
  class: String,
  style: String,
  data: Object,
  parentReference: Object,
  additionalAttributes: Object,

  // DataGridRow props
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
  childContent: Object,
  onCellFocus: Function,
  internalGridContext: Object,
});

const classValue = computed(() => new CssBuilder(props.class).build());
const styleValue = computed(() => new StyleBuilder(props.style).build());
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
