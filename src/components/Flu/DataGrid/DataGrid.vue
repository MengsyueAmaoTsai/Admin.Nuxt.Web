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
          {{ col }}
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

<style scoped lang="scss"></style>
