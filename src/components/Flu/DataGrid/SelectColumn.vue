<template>
  <div></div>
</template>

<script setup lang="ts">
import { type Align, DataGridSelectMode, SortDirection } from "../types";

const props = defineProps({
  // ComponentPropsBase
  id: String,
  class: String,
  style: String,
  data: Object,
  parentReference: Object,
  additionalAttributes: Object,

  // ColumnBaseProps
  title: String,
  index: Number,
  align: String as PropType<Align>,
  tooltip: {
    type: Boolean,
    default: false,
  },
  tooltipText: Function,
  headerTooltip: String,
  headerCellItemTemplate: Object,
  columnOptions: Object,
  sortable: Boolean,
  filtered: Boolean,
  initialSortDirection: {
    type: String as PropType<SortDirection>,
    default: SortDirection.Auto,
  },
  isDefaultSortColumnL: {
    type: Boolean,
    default: false,
  },
  placeholderTemplate: Object,
  width: String,

  // SelectColumnProps
  childContent: Object,
  selectAllDisabled: {
    type: Boolean,
    default: false,
  },
  selectFromEntireRow: {
    type: Boolean,
    default: true,
  },
  selectAllTemplate: Object,
  selectedItems: Array,
  selectedItemsChanged: Function,
  selectMode: String as PropType<DataGridSelectMode>,
  iconUnchecked: Object,
  titleUnchecked: {
    type: String,
    default: "Row unselected",
  },
  iconChecked: Object,
  titleChecked: {
    type: String,
    default: "Row selected",
  },
  iconIndeterminate: Object,
  titleAllChecked: {
    type: String,
    default: "All rows are selected",
  },
  titleAllUnchecked: {
    type: String,
    default: "No rows are selected",
  },
  titleAllIndeterminate: {
    type: String,
    default: "Some rows are selected",
  },
  onSelect: Function,
  selectAll: {
    type: Boolean,
    default: false,
  },
  selectAllChanged: Function,
  selectable: Function,
  property: {
    type: Function as PropType<(item: any) => boolean>,
    default: () => false,
  },
  sortBy: Object,
});
</script>

<style></style>
