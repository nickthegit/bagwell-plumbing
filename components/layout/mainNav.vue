<template>
  <nav @click="$store.dispatch('setNavPayload', false)">
    <nuxt-link to="/">home</nuxt-link>
    <nuxt-link to="/a-page">a page</nuxt-link>
    <nuxt-link to="/dfd">404</nuxt-link>
    <slot></slot>
  </nav>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  nav {
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background: $primary;
    display: block;
  }
</style>