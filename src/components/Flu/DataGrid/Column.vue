<template>
  <div>
    Column:
    <slot />
  </div>
</template>

<script setup lang="ts">
import { SortDirection, type Align } from "../types";

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

  property: Function,
});
</script>

<style scoped lang="scss"></style>
