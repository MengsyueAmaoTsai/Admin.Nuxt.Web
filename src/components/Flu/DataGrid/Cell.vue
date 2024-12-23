<template>
  <div>
    <td
      v-if="props.cellType === DataGridCellType.Default"
      :class="classValue"
      :style="styleValue"
      :col-index="props.gridColumn"
      role="gridcell"
      tabindex="0"
    >
      <slot />
    </td>

    <th
      v-else
      :class="classValue"
      :style="styleValue"
      :col-index="props.gridColumn"
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
  item: any,
  cellType: String as PropType<DataGridCellType>,
  gridColumn: Number,
  childContent: Object,
  owner: Object,
  internalGridContext: Object,
});

const classValue = computed(() => new CssBuilder(props.class).build());
const styleValue = computed(() => new StyleBuilder(props.style).build());

onMounted(() => {
  console.log("DataGridCell component is working. Props:", props);
});
</script>

<style scoped lang="scss"></style>
