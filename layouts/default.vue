<template>
  <div>
    <!-- <main-header /> -->
    <!-- <header>
      <nuxt-link to="/">
        <Logo />
      </nuxt-link>
    </header>-->
    <Nuxt />
    <!-- <footer>
      <a href="tel:+44 7974 449 746">Call Now: 07974 449 746</a>
    </footer>-->
    <!-- <main-footer /> -->
  </div>
</template>

<style lang="scss" scoped>
  div {
  }

  header {
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    background: chartreuse;
    a {
      width: 80px;
      position: relative;
      display: block;
      margin: 20px;
      // top: 20px;
      z-index: 99;
    }
  }
  footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    a {
      display: inline-block;
      background: $primary;
      padding: 20px;
      border-radius: 8px;
      text-decoration: none;
      text-transform: uppercase;
      font-size: 22px;
      letter-spacing: 1px;
      color: $white;
    }
  }
</style>
