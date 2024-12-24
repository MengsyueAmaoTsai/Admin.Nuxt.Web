<template>
  <div>
    <p
      v-if="props.typo === Typography.Body"
      :id="props.id"
      :typo="props.typo"
      :default-margin="defaultMarginBlock"
      :bold="bold"
      :bolder="bolder"
      :class="classValue"
      :style="styleValue"
      :disabled="props.disabled"
    >
      <slot />
    </p>

    <h6
      v-else-if="
        props.typo === Typography.Subject || props.typo === Typography.H6
      "
      :id="props.id"
      :typo="props.typo"
      :default-margin="defaultMarginBlock"
      :bold="bold"
      :bolder="bolder"
      :class="classValue"
      :style="styleValue"
      :disabled="props.disabled"
    >
      <slot />
    </h6>

    <h5
      v-else-if="
        props.typo === Typography.Header || props.typo === Typography.H5
      "
      :id="props.id"
      :typo="props.typo"
      :default-margin="defaultMarginBlock"
      :bold="bold"
      :bolder="bolder"
      :class="classValue"
      :style="styleValue"
      :disabled="props.disabled"
    >
      <slot />
    </h5>

    <h4
      v-else-if="
        props.typo === Typography.PaneHeader || props.typo === Typography.H4
      "
      :id="props.id"
      :typo="props.typo"
      :default-margin="defaultMarginBlock"
      :bold="bold"
      :bolder="bolder"
      :class="classValue"
      :style="styleValue"
      :disabled="props.disabled"
    >
      <slot />
    </h4>

    <h3
      v-else-if="
        props.typo === Typography.EmailHeader || props.typo === Typography.H3
      "
      :id="props.id"
      :typo="props.typo"
      :default-margin="defaultMarginBlock"
      :bold="bold"
      :bolder="bolder"
      :class="classValue"
      :style="styleValue"
      :disabled="props.disabled"
    >
      <slot />
    </h3>

    <h2
      v-else-if="
        props.typo === Typography.PageTitle || props.typo === Typography.H2
      "
      :id="props.id"
      :typo="props.typo"
      :default-margin="defaultMarginBlock"
      :bold="bold"
      :bolder="bolder"
      :class="classValue"
      :style="styleValue"
      :disabled="props.disabled"
    >
      <slot />
    </h2>

    <h1
      v-else-if="
        props.typo === Typography.HeroTitle || props.typo === Typography.H1
      "
      :id="props.id"
      :typo="props.typo"
      :default-margin="defaultMarginBlock"
      :bold="bold"
      :bolder="bolder"
      :class="classValue"
      :style="styleValue"
      :disabled="props.disabled"
    >
      <slot />
    </h1>
  </div>
</template>

<script setup lang="ts">
import { Colors, FontWeight, HorizontalAlignment, Typography } from "./types";

const props = defineProps({
  // ComponentBase props
  id: String,
  class: String,
  style: String,
  data: Object,
  parentReference: Object,
  additionalAttributes: Object,

  // Label props
  typo: { type: String as PropType<Typography>, default: Typography.Body },
  disabled: { type: Boolean, default: false },
  alignment: String as PropType<HorizontalAlignment>,
  color: String as PropType<Colors>,
  customColor: String,
  weight: {
    type: String as PropType<FontWeight>,
    default: FontWeight.Normal,
  },
  marginBlock: String,
  childContent: Object,
});

const bold = computed(() => props.weight === FontWeight.Bold);
const bolder = computed(() => props.weight === FontWeight.Bolder);
const defaultMarginBlock = computed(() => props.marginBlock === "default");

const classValue = computed(() =>
  new CssBuilder(props.class)
    .addClass("fluent-typography")
    .addClass(
      "fluent-typo-left",
      () =>
        props.alignment === HorizontalAlignment.Left ||
        props.alignment === HorizontalAlignment.Start
    )
    .addClass(
      "fluent-typo-center",
      () => props.alignment === HorizontalAlignment.Center
    )
    .addClass(
      "fluent-typo-right",
      () =>
        props.alignment === HorizontalAlignment.Right ||
        props.alignment === HorizontalAlignment.End
    )
    .build()
);
const styleValue = computed(() =>
  new StyleBuilder()
    .addStyle(
      "color",
      props.color,
      () => Boolean(props.color) && props.color !== Colors.Custom
    )
    .addStyle("color", props.customColor, () => props.color === Colors.Custom)
    .addStyle(
      "margin-block",
      props.marginBlock,
      () => Boolean(props.marginBlock) && !defaultMarginBlock
    )
    .addStyle(props.style)
    .build()
);
</script>

<style scoped lang="scss">
/*
    --type-ramp-base-font-size: 14px;
    --type-ramp-base-line-height: 20px;
*/
.fluent-typography {
  font-family: var(--body-font);
  color: var(--neutral-foreground-rest);
  font-style: normal;
}

.fluent-typography:not([default-margin]) {
  margin-block: 0px;
}

.fluent-typography[typo="body"] {
  font-size: var(--type-ramp-base-font-size);
  line-height: var(--type-ramp-base-line-height);
  font-weight: 400;
}

.fluent-typography[typo="subject"] {
  font-size: var(--type-ramp-plus-1-font-size);
  line-height: var(--type-ramp-plus-1-line-height);
  font-weight: 400;
}

.fluent-typography[typo="header"] {
  font-size: var(--type-ramp-plus-2-font-size);
  line-height: var(--type-ramp-plus-2-line-height);
  font-weight: 400;
}

.fluent-typography[typo="pane-header"] {
  font-size: var(--type-ramp-plus-3-font-size);
  line-height: var(--type-ramp-plus-3-line-height);
  font-weight: 400;
}

.fluent-typography[typo="email-header"] {
  font-size: var(--type-ramp-plus-4-font-size);
  line-height: var(--type-ramp-plus-4-line-height);
  font-weight: 400;
}

.fluent-typography[typo="page-title"] {
  font-size: var(--type-ramp-plus-5-font-size);
  line-height: var(--type-ramp-plus-5-line-height);
  font-weight: 400;
}

.fluent-typography[typo="hero-title"] {
  font-size: var(--type-ramp-plus-6-font-size);
  line-height: var(--type-ramp-plus-6-line-height);
  font-weight: 400;
}

.fluent-typography[bold] {
  font-weight: 600;
}

.fluent-typography[bolder] {
  font-weight: 800;
}

.fluent-typography[disabled] {
  opacity: var(--disabled-opacity);
}

.fluent-typo-left {
  text-align: left;
}

.fluent-typo-center {
  text-align: center;
}

.fluent-typo-right {
  text-align: right;
}
</style>
