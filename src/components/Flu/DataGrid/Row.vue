<template>
  <div>
    <tr
      :class="classValue"
      :style="styleValue"
      :data-row-index="props.rowIndex"
      role="row"
      :row-type="props.rowType"
      @keydown="handleRowKeyDown"
      @click="handleRowClick"
      @dblclick="handleRowDoubleClick"
    >
      <slot />
    </tr>
  </div>
</template>

<script setup lang="ts">
import { DataGridRowType, VerticalAlignment } from "../types";

const props = defineProps({
  // ComponentPropsBase
  id: String,
  class: String,
  style: String,
  data: Object,
  parentReference: Object,
  additionalAttributes: Object,

  // DataGridRowProps
  item: Object,
  rowIndex: Number,
  girdTemplateColumns: String,
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

const rowId = ref<string>("");

const classValue = new CssBuilder(props.class)
  .addClass("fluent-data-grid-row")
  .build();

const styleValue = new StyleBuilder(props.style).build();

const handleRowKeyDown = (event: KeyboardEvent) => {
  console.log("handleRowKeyDown", event);
};

const handleRowClick = (event: MouseEvent) => {
  console.log("handleRowClick", event);
};

const handleRowDoubleClick = (event: MouseEvent) => {
  console.log("handleRowDoubleClick", event);
};
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
