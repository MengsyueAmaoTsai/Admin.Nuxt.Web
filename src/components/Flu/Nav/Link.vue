<template>
  <div>
    <div
      v-if="!props.owner"
      :id="props.id"
      :disabled="props.disabled"
      :class="classValue"
      :style="props.style"
      role="menuitem"
    >
      <NuxtLink v-if="props.onClick && props.href" :to="props.href">
        <div class="positioning-region">
          <div class="content-region"><slot /></div>
        </div>
      </NuxtLink>

      <div v-else class="positioning-region" title="@Tooltip">
        <div class="content-region">
          <div :class="linkClassValue" @onclick="handleClick">
            <slot />
          </div>
        </div>
      </div>
    </div>

    <FluMenuItem v-else></FluMenuItem>
  </div>
</template>

<script setup lang="ts">
import { Colors } from "../types";

const props = defineProps({
  // ComponentBase props
  id: String,
  class: String,
  style: String,
  data: Object,
  parentReference: Object,
  additionalAttributes: Object,

  // NavBase props
  href: String,
  target: String,
  icon: Object,
  iconColor: {
    type: String as PropType<Colors>,
    default: Colors.Accent,
  },
  customColor: String,
  disabled: Boolean,
  childContent: Object,
  activeClass: { type: String, default: "active" },
  match: Object,
  tooltip: String,
  onClick: Function as PropType<(e: MouseEvent) => void>,
  forceLoad: Boolean,
  customToggleId: { type: String, default: "navmenu-toggle" },
  owner: Object,
  subMenu: Object,
});

const classValue = computed(() =>
  new CssBuilder(props.class).addClass("fluent-nav-item").build()
);

const linkClassValue = computed(() =>
  new CssBuilder("fluent-nav-link").addClass("disabled", props.disabled).build()
);

const handleClick = (e: MouseEvent) => {};
</script>

<style scoped lang="scss">
::deep .fluent-nav-link {
  width: 100%;
  color: inherit;
  align-items: center;
  text-decoration: none;
  display: flex;
}

::deep .fluent-nav-icon:not(fluent-menu-item) {
  min-width: 20px;
}

::deep .fluent-nav-link.disabled:not(fluent-menu-item, a) {
  color: var(--neutral-foreground-rest) !important;
  opacity: var(--disabled-opacity);
  cursor: not-allowed;
  pointer-events: none;
}

::deep a.disabled .content-region {
  opacity: var(--disabled-opacity);
}

::deep .fluent-nav-link.disabled .fluent-nav-icon {
  fill: var(--neutral-foreground-rest) !important;
  opacity: var(--disabled-opacity);
}
</style>
