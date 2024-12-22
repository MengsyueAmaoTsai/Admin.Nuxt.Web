<template>
  <div>
    <td
      v-if="props.type === DataGridCellType.Default"
      :col-index="props.gridColumn"
      :class="classValue"
      :style="styleValue"
      tabindex="0"
      role="gridcell"
      @keydown="cellKeydownHandler"
      @click="cellClickHandler"
    >
      <slot />
    </td>
    <th
      v-else
      :col-index="props.gridColumn"
      :class="classValue"
      :style="styleValue"
      @keydown="cellKeydownHandler"
      @click="cellClickHandler"
    >
      <slot />
    </th>
  </div>
</template>

<script setup lang="ts">
import { DataGridCellType } from "./types";

const props = defineProps({
  id: String,
  class: String,
  style: String,

  item: Object,
  type: {
    type: String as PropType<DataGridCellType>,
  },
  gridColumn: Number,

  owner: Object,
  internalGridContext: Object,
});

const classValue = new CssBuilder(props.class)
  .addClass("column-header", () => props.type === DataGridCellType.ColumnHeader)
  .addClass("select-all", () => props.type === DataGridCellType.ColumnHeader) // && Column is SelectColumn<TGridItem>
  .addClass("multiline-text", () => false) // when: Grid.MultiLine
  // .addClass(props.owner.class)
  .build();

const styleValue = new StyleBuilder(props.style)
  .addStyle("grid-column", `${props.gridColumn}`, () => false) // () => (!Grid.Loading && Grid.Items is not null) || Grid.Virtualize)
  .addStyle("text-align", "center", () => false) // Column is SelectColumn<TGridItem>
  .addStyle("align-content", "center", () => false) // Column is SelectColumn<TGridItem>
  // .addStyle("padding-inline-start", "calc(((var(--design-unit)* 3) + var(--focus-stroke-width) - var(--stroke-width))* 1px)", Column is SelectColumn<TGridItem> && Owner.RowType == DataGridRowType.Default)
  // .addStyle("padding-top", "calc(var(--design-unit) * 2.5px)", Column is SelectColumn<TGridItem> && (Grid.RowSize == DataGridRowSize.Medium || Owner.RowType == DataGridRowType.Header))
  // .addStyle("padding-top", "calc(var(--design-unit) * 1.5px)", Column is SelectColumn<TGridItem> && Grid.RowSize == DataGridRowSize.Small && Owner.RowType == DataGridRowType.Default)
  // .addStyle("height", $"{Grid.ItemSize:0}px", () => !Grid.Loading && Grid.Virtualize && Owner.RowType == DataGridRowType.Default)
  // .addStyle("height", $"{(int)Grid.RowSize}px", () => !Grid.Loading && !Grid.Virtualize && Grid.Items is not null && !Grid.MultiLine)
  // .addStyle("height", "100%", InternalGridContext.TotalItemCount == 0 || (Grid.Loading && Grid.Items is null) || Grid.MultiLine)
  // .addStyle("min-height", "44px", Owner.RowType != DataGridRowType.Default)
  // .addStyle(props.owner.style)
  .build();

const cellKeydownHandler = () => {
  throw new Error("Not implemented DataGridCell.cellKeydownHandler");
};

const cellClickHandler = () => {
  throw new Error("Not implemented DataGridCell.cellClickHandler");
};
</script>

<style scoped lang="scss">
th,
td {
  border-bottom: calc(var(--stroke-width) * 1px) solid
    var(--neutral-stroke-divider-rest);
}

td {
  padding: calc(
      (var(--design-unit) + var(--focus-stroke-width) - var(--stroke-width)) *
        1px
    )
    calc(
      (
          (var(--design-unit) * 3) + var(--focus-stroke-width) -
            var(--stroke-width)
        ) * 1px
    );
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  align-content: center;
}

td.col-justify-center {
  text-align: center;
  padding-inline-start: 0;
}

td.col-justify-end,
td.col-justify-right {
  text-align: end;
  padding-inline-end: calc(var(--design-unit) * 7px);
}

td.grid-cell-placeholder:after {
  content: "\2026"; /*horizontal ellipsis*/
  opacity: 0.75;
}

.empty-content-cell,
.loading-content-cell {
  font-weight: 600;
  text-align: center;
  height: 100%;
}

.multiline-text {
  white-space: inherit;
  overflow: auto;
  word-break: break-word;
  align-content: start;
}

::deep .col-header-content {
  display: flex;
  flex-grow: 1;
}

.column-header {
  font-weight: 600;
  position: relative;
  padding: calc(
      (var(--design-unit) + var(--focus-stroke-width) - var(--stroke-width)) *
        1px
    )
    1px
    calc(
      (var(--design-unit) + var(--focus-stroke-width) - var(--stroke-width)) *
        1px
    );
}

.column-header:not(.select-all):first-of-type {
  padding-inline-start: calc(var(--design-unit) * 2px);
}

::deep .col-sort-button {
  width: calc(100% - 20px);
  overflow: hidden;
  text-overflow: ellipsis;
}

::deep .col-sort-button::part(content) {
  overflow: hidden;
}

.col-justify-start ::deep .col-sort-button::part(control) {
  justify-content: start;
  overflow: hidden;
  opacity: 1;
}

.col-justify-center ::deep .col-sort-button::part(control) {
  justify-content: center;
  overflow: hidden;
  opacity: 1;
}

.col-justify-end ::deep .col-sort-button::part(control) {
  justify-content: end;
  overflow: hidden;
  opacity: 1;
}

.col-justify-end ::deep .col-sort-button::part(start) {
  margin-inline-end: 2px;
}

.col-justify-start ::deep .col-sort-button::part(end),
.col-justify-center ::deep .col-sort-button::part(end) {
  margin-inline-start: 2px;
}

.col-justify-center ::deep .col-title {
  text-align: center;
}

.col-justify-end ::deep .col-title {
  text-align: end;
  margin-inline-end: calc(var(--design-unit) * 4px);
}
</style>
