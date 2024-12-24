<template>
  <div><slot /></div>
</template>

<script setup lang="ts">
import { Align, SortDirection } from "../types";

const props = defineProps({
  // ComponentBase props
  id: String,
  class: String,
  style: String,
  data: Object,
  parentReference: Object,
  additionalAttributes: Object,

  // ColumnBase props
  internalGridContext: Object,
  title: String,
  index: Number,
  align: String as PropType<Align>,
  tooltip: { type: Boolean, default: false },
  tooltipText: Function as PropType<(item: any) => string>,
  headerTooltip: String,
  headerCellItemTemplate: Object,
  columnOptions: Object,
  sortable: Boolean,
  filtered: Boolean,
  initialSortDirection: {
    type: String as PropType<SortDirection>,
    default: SortDirection.Auto,
  },
  isDefaultSortColumn: { type: Boolean, default: false },
  placeholderTemplate: Object,
  width: String,
});
</script>

<style scoped lang="scss">
.col-title {
  padding: 0.4rem 0.8rem;
  user-select: none;
}

.col-title-text {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-weight: 600;
}

th.col-justify-center svg {
  align-content: center;
  text-align: center;
}
</style>
