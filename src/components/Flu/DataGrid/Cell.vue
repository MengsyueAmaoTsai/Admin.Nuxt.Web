<template>
  <div>
    <td
      v-if="props.cellType === DataGridCellType.Default"
      :class="classValue"
      :style="styleValue"
      :col-index="props.gridColumn"
      role="gridcell"
      tabindex="0"
      @click="handleOnCellClick"
      @keydown="handleOnCellKeyDown"
    >
      <slot />
    </td>

    <th
      v-else
      :class="classValue"
      :style="styleValue"
      :col-index="props.gridColumn"
      @click="handleOnCellClick"
      @keydown="handleOnCellKeyDown"
    >
      <slot />
    </th>
  </div>
</template>

<script setup lang="ts">
import { DataGridCellType } from "../types";

const props = defineProps({
  // ComponentBase props
  id: String,
  class: String,
  style: String,
  data: Object,
  parentReference: Object,
  additionalAttributes: Object,

  // DataGridCell props
  item: Object,
  cellType: String as PropType<DataGridCellType>,
  gridColumn: Number,
  childContent: Object,
  owner: Object,
  internalGridContext: Object,
});

const classValue = computed(() =>
  new CssBuilder(props.class)
    .addClass("column-header", props.cellType === DataGridCellType.ColumnHeader)
    .build()
);
const styleValue = computed(() => new StyleBuilder(props.style).build());

onMounted(() => {
  console.log("Cell class:", classValue.value);
  console.log("Cell style:", styleValue.value);
});

onUnmounted(() => {
  console.log("DataGridCell component is destroyed");
});

const handleOnCellClick = (event: MouseEvent) => {
  console.warn("handleOnCellClick", event);
};

const handleOnCellKeyDown = (event: KeyboardEvent) => {
  console.warn("handleOnCellKeyDown", event);
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
