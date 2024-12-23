<template>
  <div>
    Component is working

    <table ref="gridReference" :id="$props.id"></table>
  </div>
</template>

<script setup lang="ts">
import {
  DataGridResizeType,
  DataGridRowSize,
  GenerateHeaderOption,
} from "../types";
import { autoFitGridColumns, initialize } from "./DataGrid";

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

// libraryConfiguration
// navigationManager
// scopeFactory
// keyCodeService
const gridReference = ref<HTMLTableElement>();
const columns = ref([]);
// private readonly EventCallbackSubscriber<PaginationState> _currentPageItemsChanged = new EventCallbackSubscriber<PaginationState>();
// _renderColumnHeaders = RenderColumnHeaders;
// _renderNonVirtualizedRows = RenderNonVirtualizedRows;
// _renderEmptyContent = RenderEmptyContent;
// _renderLoadingContent = RenderLoadingContent;

// virtualizeComponent
// _asyncQueryExecutor
// _scope
// _internalGridContext
// _columns
// _collectingColumns
// _displayOptionsForColumn
// _displayResizeForColumn
// _sortByColumn
// _sortByAscending
// _checkColumnOptionsPosition
// _checkColumnResizePosition
// _manualGrid
// _internalGridTemplateColumns
// private PaginationState? _lastRefreshedPaginationState;
// private IQueryable<TGridItem>? _lastAssignedItems;
// private GridItemsProvider<TGridItem>? _lastAssignedItemsProvider;
// private CancellationTokenSource? _pendingDataLoadCancellationTokenSource;
// public bool? SortByAscending => _sortByAscending;

onMounted(() => {
  if (gridReference.value) {
    initialize(gridReference.value, props.autoFocus);
  }

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

  if (props.autoFit && gridReference.value) {
    autoFitGridColumns(gridReference.value, columns.value.length);
  }
});

onUpdated(() => console.log("Updated"));

const saveStateToQueryString = () => {
  console.warn("[WRN] saveStateToQueryString not implemented");
};
</script>

<style scoped lang="scss"></style>
