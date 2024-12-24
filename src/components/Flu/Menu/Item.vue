<template>
  <div>
    <fluent-menu-item
      ref="elementRef"
      :id="props.id"
      :class="props.class"
      :style="props.style"
      :disabled="props.disabled"
      :expanded="props.expanded"
      :role="getRole()"
      :checked="props.checked"
      @click="handleClick"
    >
      {{ props.label }}
      <slot />
      <fluent-menu v-if="props.menuItems" slot="submenu">
        {{ menuItems }}
      </fluent-menu>
    </fluent-menu-item>
  </div>
</template>

<script setup lang="ts">
import { MenuItemRole } from "../types";

const props = defineProps({
  // ComponentBase props
  id: String,
  class: String,
  style: String,
  data: Object,
  parentReference: HTMLElement,
  additionalAttributes: Object,

  // MenuItem props
  owner: Object,
  label: String,
  disabled: Boolean,
  expanded: Boolean,
  role: String as PropType<MenuItemRole>,
  checked: Boolean,
  keepOpen: Boolean,
  childContent: Object,
  menuItems: Object,
  onClick: Function as PropType<(e: MouseEvent) => void>,
});

const elementRef = ref<HTMLElement | null>(null);

const getRole = () => {
  if (props.role) {
    return props.role;
  } else {
    if (props.checked) {
      return MenuItemRole.MenuItemCheckbox;
    }
  }

  return undefined;
};

const handleClick = (e: MouseEvent) => {};
</script>
