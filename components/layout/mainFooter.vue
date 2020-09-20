<template>
  <footer>
    <section>
      <nuxt-link to="/">brand here</nuxt-link>
    </section>
    <section>
      <main-nav />
      <secondary-nav />
    </section>
    <section>
      Contact:
      email: kljsdn@ksjdfh.com
      tel: 01963 273 833
      <socials />
    </section>
    <section>© company name {{ year }}, All rights reserved.</section>
  </footer>
</template>

<script>
  export default {
    computed: {
      year() {
        return new Date().getFullYear()
      },
    },
  }
</script>

<style lang="scss" scoped>
</style>