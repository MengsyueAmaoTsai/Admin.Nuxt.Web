<template>
  <div>
    <h2>Development page</h2>
    <br />

    <fluent-tabs activeid="entrees">
      <fluent-tab id="apps">Appetizers</fluent-tab>
      <fluent-tab id="entrees">Entrees</fluent-tab>
      <fluent-tab id="desserts">Desserts</fluent-tab>

      <fluent-tab-panel id="appsPanel"> Apps </fluent-tab-panel>
      <fluent-tab-panel id="entreesPanel"> Entrees</fluent-tab-panel>
      <fluent-tab-panel id="dessertsPanel"> Desserts </fluent-tab-panel>
    </fluent-tabs>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
