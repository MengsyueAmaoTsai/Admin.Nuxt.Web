<template>
  <div>
    <table :id="props.id">
      <thead v-if="props.generateHeader !== GenerateHeaderOption.None">
        <!-- FluentDataGridRow -->
        <FluDataGridRow
          v-for="(col, index) in columns"
          :rowType="
            generateHeader === GenerateHeaderOption.Sticky
              ? DataGridRowType.StickyHeader
              : DataGridRowType.Header
          "
        >
          <!-- Render column headers -->
          <FluDataGridCell
            :cellType="DataGridCellType.ColumnHeader"
            scope="col"
            >{{ col }}</FluDataGridCell
          >
        </FluDataGridRow>
      </thead>

      <tbody>
        <tr v-for="item in items">
          <td>{{ item }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import {
  DataGridCellType,
  DataGridRowSize,
  DataGridRowType,
  GenerateHeaderOption,
  type DataGridResizeType,
} from "../types";

const props = defineProps({
  // ComponentPropsBase
  id: String,
  class: String,
  style: String,
  data: Object,
  parentReference: Object,
  additionalAttributes: Object,

  items: Array as PropType<any[]>,
  itemProvider: Object,
  virtualize: Boolean,
  overScanCount: {
    type: Number,
    default: 3,
  },
  itemSize: {
    type: Number,
    default: 32,
  },
  resizableColumns: Boolean,
  resizeType: String as PropType<DataGridResizeType>,
  columnResizeLabels: Object,
  columnSortLabels: Object,
  columnOptionsLabels: Object,
  headerCellAsButtonWithMenu: Boolean,
  itemKey: {
    type: Function as PropType<(item: any) => object>,
    default: (item: any) => item,
  },
  pagination: Object,
  noTabbing: Boolean,
  generateHeader: {
    type: String as PropType<GenerateHeaderOption>,
    default: GenerateHeaderOption.Default,
  },
  gridTemplateColumns: String,
  onRowFocus: Function,
  onCellFocus: Function,
  onCellClick: Function,
  onRowClick: Function,
  onRowDoubleClick: Function,
  rowClass: Function as PropType<(item: any) => string>,
  rowStyle: Function as PropType<(item: any) => string>,
  showHover: Boolean,
  emptyContent: Object,
  loading: Boolean,
  loadingContent: Object,
  autoFit: Boolean,
  rowSize: {
    type: Number as PropType<DataGridRowSize>,
    default: DataGridRowSize.Small,
  },
  multiLine: {
    type: Boolean,
    default: false,
  },
  saveStateUrl: Boolean,
  saveStatePrefix: String,
  autoFocus: {
    type: Boolean,
    default: false,
  },
});

const columns = ref(["Column 1", "Column 2", "Column 3"]);
</script>

<style scoped lang="scss">
.fluent-data-grid {
  width: auto;
  flex: 1;
  display: grid;
  border-collapse: collapse;
  align-items: center;
  height: max-content;
  margin-bottom: 0px;
}

thead,
tbody {
  display: contents;
}

::deep tr {
  display: contents;
}

.fluent-data-grid tbody tr .hover {
  background: var(--neutral-fill-stealth-hover);
}

.col-options,
.col-resize {
  position: absolute;
  min-width: 250px;
  top: 2.2rem;
  background: var(--neutral-layer-2);
  border: 1px solid var(--neutral-layer-3);
  border-radius: 0.3rem;
  box-shadow: 0 3px 8px 1px var(--neutral-layer-4);
  padding: 1rem;
  visibility: hidden;
  z-index: 1;
}

[dir="rtl"] .col-options {
  left: unset;
}

.col-justify-end .col-options,
.col-justify-right .col-options {
  left: unset;
  margin-right: 0.6rem;
}

[dir="rtl"] .col-justify-end .col-options,
[dir="rtl"] .col-justify-right .col-options {
  right: unset;
  margin-left: 0.6rem;
}

.resize-options {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}

::deep .resize-handle {
  position: absolute;
  top: 5px;
  right: 0;
  left: unset;
  bottom: 0;
  height: 32px;
  cursor: col-resize;
  margin-left: calc(var(--design-unit) * 2px);
  width: calc(var(--design-unit) * 1px + 2px);
}

[dir="rtl"] * ::deep .resize-handle {
  left: 0;
  right: unset;
}

.header {
  padding: 0;
  z-index: 3;
}

::deep tr[row-type="sticky-header"] > th {
  position: sticky;
  top: 0;
  background-color: var(--neutral-fill-stealth-rest);
  z-index: 2;
}
</style>
