<template>
  <div>
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <nuxt-link to="/">Home page</nuxt-link>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    // layout: 'blog' // you can set a custom layout for the error page
  }
</script>

<style lang="scss" scoped>
  div {
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 24px;
  }
</style>