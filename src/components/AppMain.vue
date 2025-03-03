<template>
  <div class="app-main">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'AppMain',
};
</script>

<style scoped>
.app-main {
  flex: 1;
  overflow: auto;
  background: #f0f2f5;
}
</style>