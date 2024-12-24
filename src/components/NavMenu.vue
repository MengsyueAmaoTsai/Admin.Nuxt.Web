<template>
  <div class="navmenu">
    <input
      type="checkbox"
      title="Menu expand/collapse toggle"
      id="navmenu-toggle"
      class="navmenu-icon"
    />
    <label for="navmenu-toggle" class="navmenu-icon">
      <!-- <FluentIcon
        Value="@(new Icons.Regular.Size20.Navigation())"
        Color="Color.Fill"
    /> -->
    </label>

    <nav class="sitenav" aria-labelledby="main-menu">
      <FluNavMenu>Hello</FluNavMenu>
    </nav>
  </div>
</template>

<script setup lang="ts">
const expanded = ref<boolean>(true);
</script>
