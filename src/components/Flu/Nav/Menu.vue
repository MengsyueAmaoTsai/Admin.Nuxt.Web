<template>
  <div>
    <!-- FluPageScript -->
    <div
      ref="elementRef"
      :id="navMenuId"
      :class="classValue"
      :style="styleValue"
      :aria-label="props.collapsible ? undefined : props.title"
      role="menu"
      :aria-expanded="props.expanded"
    >
      <div
        v-if="props.collapsible"
        :id="`${navMenuId}-expander`"
        :aria-label="props.title"
        :aria-expanded="props.expanded"
        role="menuitem"
        class="fluent-nav-item expander"
        tabindex="0"
        @click="toggleExpanded"
      >
        <div class="positioning-region">
          <div class="content-region">
            <template v-if="props.expanderContent"> ExpanderContent </template>
            <!-- else icon -->
          </div>
        </div>
      </div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ComponentIdentifier } from "../core";

const props = defineProps({
  // ComponentBase props
  id: String,
  class: String,
  style: String,
  data: Object,
  parentReference: Object,
  additionalAttributes: Object,

  // NavMenu props
  expanderContent: Object,
  title: { type: String, default: "Navigation menu" },
  width: Number,
  collapsible: Boolean,
  collapsedChildNavigation: {
    type: Boolean,
    default: false,
  },
  expanded: {
    type: Boolean,
    default: true,
  },
  expandedChanged: Function as PropType<(expanded: boolean) => void>,
  margin: String,
  customToggle: {
    type: Boolean,
    default: false,
  },
  childContent: Object,
});

const navMenuId = ref<string>(props.id ?? ComponentIdentifier.newId());

const elementRef = ref<HTMLElement | null>(null);

const classValue = computed(() =>
  new CssBuilder("fluent-nav-menu")
    .addClass(props.class)
    .addClass("collapsed", !props.expanded)
    .build()
);

const styleValue = computed(() =>
  new StyleBuilder(props.style)
    .addStyle("margin", props.margin, Boolean(props.margin))
    .addStyle(
      "width",
      `${props.width}px`,
      props.expanded && Boolean(props.width)
    )
    .addStyle("width", "100%", () => props.expanded && !props.width)
    .addStyle("width", "40px", () => !props.expanded)
    .addStyle("min-width", "40px", () => !props.expanded)
    .build()
);

const toggleExpanded = () => {
  console.log("toggleExpanded");
};
</script>

<style scoped lang="scss">
/*  NavMenu */
.fluent-nav-menu {
  padding: 0 2px;
}

::deep .fluent-nav-item.expander:focus-within {
  outline-offset: 1px;
}

::deep .fluent-nav-item {
  margin: calc(var(--design-unit) * 1px) 0;
  -webkit-user-select: none;
  user-select: none;
}

/* Hover and active highlighting */
::deep .fluent-nav-item .positioning-region:hover:not(:has(.disabled)) {
  cursor: pointer;
  background: var(--neutral-fill-secondary-rest);
}

/* Active item indicator */
::deep .fluent-nav-item a.active .positioning-region::before {
  content: "";
  display: block;
  position: absolute;
  right: unset;
  width: 3px;
  height: calc(
    ((var(--base-height-multiplier) + var(--density)) * var(--design-unit) / 2) *
      1px
  );
  background: var(--accent-fill-rest);
  border-radius: calc(var(--control-corner-radius) * 1px);
  margin: calc(var(--design-unit) * 2px) 2px;
  z-index: 5;
}

[dir="rtl"] * ::deep .fluent-nav-item a.active .positioning-region::before {
  left: unset;
}

::deep .content-region {
  display: flex;
  align-items: center;
  white-space: nowrap;
  width: 100%;
  margin-inline-start: calc(var(--design-unit) * 2px);
}

/* Nav items */
::deep .fluent-nav-item .positioning-region {
  display: flex;
  width: 100%;
  position: relative;
  align-items: center;
  box-sizing: border-box;
  background: var(--neutral-fill-stealth-rest);
  border: calc(var(--stroke-width) * 1px) solid transparent;
  border-radius: calc(var(--control-corner-radius) * 1px);
  min-height: calc(
    ((var(--base-height-multiplier) + var(--density)) * var(--design-unit) + 1) *
      1px
  );
}

::deep .fluent-nav-group .fluent-nav-item:last-of-type,
.fluent-nav-menu .fluent-nav-item:last-of-type {
  margin-bottom: 2px;
}

::deep fluent-menu-item .fluent-nav-link {
  width: 100%;
  color: inherit;
  align-items: center;
  text-decoration: none;
  display: flex;
}

/* level indenting */
::deep .fluent-nav-group * .fluent-nav-menu .fluent-nav-item .content-region {
  padding-inline-start: 24px;
}

::deep
  .fluent-nav-group
  *
  .fluent-nav-menu
  .fluent-nav-item
  *
  .fluent-nav-menu
  .fluent-nav-item
  .content-region {
  padding-inline-start: 48px;
}

::deep
  .fluent-nav-group
  *
  .fluent-nav-menu
  .fluent-nav-item
  *
  .fluent-nav-menu
  .fluent-nav-item
  *
  .fluent-nav-menu
  .fluent-nav-item
  .content-region {
  padding-inline-start: 72px;
}

::deep
  .fluent-nav-group
  *
  .fluent-nav-menu
  .fluent-nav-item
  *
  .fluent-nav-menu
  .fluent-nav-item
  *
  .fluent-nav-menu
  .fluent-nav-item
  *
  .fluent-nav-menu
  .fluent-nav-item
  .content-region {
  padding-inline-start: 96px;
}

::deep .fluent-nav-text {
  margin-inline-start: calc(var(--design-unit) * 2px + 2px);
  overflow: hidden;
  text-overflow: ellipsis;
  width: calc(100% - 70px);
}

/* collapsed */
::deep.collapsed .fluent-nav-text {
  display: none;
}

::deep.collapsed .expand-collapse-button {
  display: none;
}

::deep.collapsed .fluent-nav-group * .fluent-nav-menu > .fluent-nav-item {
  display: none;
}

::deep.collapsed
  .fluent-nav-group
  *
  .fluent-nav-menu
  > .fluent-nav-item
  *
  .fluent-nav-menu
  > .fluent-nav-item {
  display: none;
}

::deep.collapsed
  .fluent-nav-group
  *
  .fluent-nav-menu
  > .fluent-nav-item
  *
  .fluent-nav-menu
  > .fluent-nav-item
  *
  .fluent-nav-menu
  > .fluent-nav-item {
  display: none;
}

@media (max-width: 600px) {
  ::deep.collapsed .fluent-nav-text {
    display: block;
  }
}
</style>
