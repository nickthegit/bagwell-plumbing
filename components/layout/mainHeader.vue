<template>
  <header>
    <main-nav-btn />
    <section id="brand" @click="$store.dispatch('setNavPayload', false)">
      <nuxt-link to="/">brand here</nuxt-link>
    </section>
    <main-nav v-show="$store.state.navState" @click="$store.dispatch('setNavPayload', false)">
      <socials />
    </main-nav>
  </header>
</template>

<script>
  export default {
    mounted() {
      // console.log(this.navStatus)
    },
    head() {
      return {
        bodyAttrs: {
          class: this.$store.state.navState ? 'navOpen' : 'navClosed',
        },
      }
    },
  }
</script>

<style lang="scss" scoped>
  header {
    position: relative;
    z-index: 999999;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    background: $white;
  }
  #brand {
    position: relative;
    z-index: 9;
    display: block;
  }
  #mainNav {
    padding-top: $headerHeight;
  }
  .navOpen {
    #mainNav {
      z-index: 5;
    }
    .menu-btn {
      color: $white;
    }
  }
</style>