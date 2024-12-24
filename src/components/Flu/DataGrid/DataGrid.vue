<template>
  <div>
    <slot v-if="manualGrid" />

    <div id="Defer">
      <table
        ref="gridReference"
        :id="$props.id"
        :class="gridClass()"
        :style="styleValue"
      >
        <thead v-if="props.generateHeaderOption !== GenerateHeaderOption.None">
          <FluDataGridRow :rowType="rowType">
            <!-- Render column headers -->
            <FluDataGridCell
              v-for="column in columns"
              :gridColumn="column.index"
              :cellType="DataGridCellType.ColumnHeader"
              scope="col"
              :aria-sort="ariaSortValue(column)"
              :class="
                columnHeaderClass(column) +
                (props.resizableColumns ? ' resizable' : '')
              "
            >
              <!-- Reader ColumnBase.headerContent -->
              Column.headerContent
            </FluDataGridCell>
          </FluDataGridRow>
        </thead>

        <tbody>
          <FluDataGridRow v-if="props.loading">
            <FluStack
              :horizontalGap="3"
              :horizontalAlignment="HorizontalAlignment.Center"
            >
              <FluProgressRing :width="'24px'" />
              <div>Loading...</div>
            </FluStack>
          </FluDataGridRow>

          <template v-else>
            <template v-if="props.virtualize">
              <div v-if="!props.items">
                <FluDataGridRow v-if="!manualGrid">
                  <FluDataGridCell
                    :class="'empty-content-cell'"
                    :style="`grid-column: 1 / ${columns.length + 1}`"
                  >
                    {{ props.emptyContent || "No data to show!" }}
                  </FluDataGridCell>
                </FluDataGridRow>
              </div>

              <div v-else>Virtualize data grid</div>
            </template>

            <div v-else>
              <div v-if="!props.items">
                <FluDataGridRow v-if="!manualGrid">
                  <FluDataGridCell
                    :class="'empty-content-cell'"
                    :style="`grid-column: 1 / ${columns.length + 1}`"
                  >
                    {{ props.emptyContent || "No data to show!" }}
                  </FluDataGridCell>
                </FluDataGridRow>
              </div>

              <div v-else>Render TItems</div>
            </div>
          </template>

          <slot v-if="manualGrid" />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Align,
  DataGridCellType,
  DataGridResizeType,
  DataGridRowSize,
  DataGridRowType,
  GenerateHeaderOption,
  HorizontalAlignment,
} from "../types";

type ColumnBase = {
  index: number;
  align: Align;
};

const props = defineProps({
  // ComponentBase props
  id: String,
  class: String,
  style: String,
  data: Object,
  parentReference: Object,
  additionalAttributes: Object,

  // DataGrid props
  items: Array as PropType<Array<any>>,
  itemsProvider: Object,
  childContent: Object,
  virtualize: Boolean,
  overScanCount: { type: Number, default: 3 },
  itemSize: { type: Number, default: 32 },
  resizableColumns: Boolean,
  resizeType: String as PropType<DataGridResizeType>,
  columnResizeLabels: Object,
  columnSortLabels: Object,
  columnOptionsLabels: Object,
  headerCellAsButtonWithMenu: Boolean,
  itemKey: {
    type: Function as PropType<(item: string) => object>,
    default: (item: string) => item,
  },
  pagination: Object,
  noTabbing: Boolean,
  generateHeaderOption: {
    type: String as PropType<GenerateHeaderOption>,
    default: GenerateHeaderOption.Default,
  },
  gridTemplateColumns: String,
  onRowFocus: Function,
  onCellFocus: Function,
  onRowClick: Function,
  onCellClick: Function,
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
  multiLine: { type: Boolean, default: false },
  saveStateInUrl: Boolean,
  saveStatePrefix: String,
  autoFocus: { type: Boolean, default: false },
});
const gridReference = ref<HTMLTableElement>();
const columns = ref<ColumnBase[]>([
  {
    index: 0,
    align: Align.Start,
  },
  {
    index: 1,
    align: Align.Center,
  },
]);
const sortByColumn = ref<ColumnBase | undefined>(undefined);
const sortByAscending = ref<boolean>();

const rowType = computed(() =>
  props.generateHeaderOption === GenerateHeaderOption.Sticky
    ? DataGridRowType.StickyHeader
    : DataGridRowType.Header
);
const manualGrid = computed(() => columns.value.length === 0);
const styleValue = computed(() => new StyleBuilder(props.style).build());

onMounted(() => {
  // if (gridReference.value) {
  //   initialize(gridReference.value, props.autoFocus);
  // }

  saveStateToQueryString();
  // if (_checkColumnOptionsPosition && _displayOptionsForColumn is not null)
  //   {
  //       _checkColumnOptionsPosition = false;
  //       _ = Module?.InvokeVoidAsync("checkColumnPopupPosition", _gridReference, ".col-options").AsTask();
  //   }
  //   if (_checkColumnResizePosition && _displayResizeForColumn is not null)
  //   {
  //       _checkColumnResizePosition = false;
  //       _ = Module?.InvokeVoidAsync("checkColumnPopupPosition", _gridReference, ".col-resize").AsTask();
  //   }

  // if (props.autoFit && gridReference.value) {
  //   autoFitGridColumns(gridReference.value, columns.value.length);
  // }

  console.log(
    "DataGrid component is working. Props:",
    props,
    gridReference.value
  );
});

onUnmounted(() => {});

const saveStateToQueryString = () => {
  console.warn("[WRN] saveStateToQueryString not implemented");
};

const gridClass = () =>
  new CssBuilder("fluent-data-grid")
    .addClass(props.class)
    .addClass("auto-fit", props.autoFit)
    // .addClass("loading", Boolean(pendingDataLoadCAncellationTokenSource))
    .build();

const columnHeaderClass = (column: ColumnBase) =>
  new CssBuilder(props.class)
    .addClass(columnJustifyClass(column))
    .addClass("col-sort-asc", Boolean(sortByAscending.value))
    .addClass("col-sort-desc", !sortByAscending.value)
    .build();

const columnJustifyClass = (column: ColumnBase) =>
  new CssBuilder()
    .addClass("col-justify-start", column.align === Align.Start)
    .addClass("col-justify-center", column.align === Align.Center)
    .addClass("col-justify-end", column.align === Align.End)
    .build();

const ariaSortValue = (column: ColumnBase) => {
  return sortByColumn.value === column
    ? sortByAscending
      ? "ascending"
      : "descending"
    : "none";
};
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
