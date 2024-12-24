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
      <FluNavMenu
        :id="'main-menu'"
        :collapsible="true"
        :width="250"
        :title="'Navigation menu'"
        :custom-toggle="true"
        :expanded="expanded"
      >
        <FluNavLink :href="'/'">Home</FluNavLink>
        <FluNavLink :href="'/users'">Users</FluNavLink>
        <FluNavLink :href="'/signal-sources'">Signal sources</FluNavLink>
      </FluNavMenu>
    </nav>
  </div>
</template>

<script setup lang="ts">
const expanded = ref<boolean>(true);
</script>
