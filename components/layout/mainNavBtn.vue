<template>
  <button
    class="hamburger hamburger--collapse menu-btn"
    :class="$store.state.navState ? 'open is-active' : 'closed'"
    type="button"
    name="menu-btn"
    @click="$store.dispatch('setNav')"
  >
    <span class="hamburger-box">
      <span class="hamburger-inner"></span>
    </span>
    <label for="menu-btn">{{ $store.state.navState ? 'CLOSE' : 'MENU' }}</label>
  </button>
</template>

<script>
  export default {
    props: {
      buttonState: {
        type: Boolean,
        default: false,
      },
    },
  }
</script>

<style lang="scss" scoped>
  $hamburger-padding-x: $headerHeight / 4;
  $hamburger-padding-y: $headerHeight / 4;
  $hamburger-layer-width: 25px;
  $hamburger-layer-height: 2px;
  $hamburger-layer-spacing: 5px;
  $hamburger-layer-color: $black;
  $hamburger-layer-border-radius: 2px;
  $hamburger-hover-opacity: 0.7;
  $hamburger-active-layer-color: $white !default;
  $hamburger-active-hover-opacity: $hamburger-hover-opacity !default;
  @import '@/assets/scss/hamburgers/hamburgers.scss';
  button {
    position: relative;
    z-index: 10;
    display: block;
    color: $black;
    // background-color: rgb(87, 117, 100) !important;
    label {
      vertical-align: middle;
      line-height: 15px;
      font-size: 15px;
      display: inline-block;
      height: 15px;
      // background: salmon;
      text-transform: uppercase;
      margin-left: 5px;
      cursor: pointer;
    }
    .hamburger-box {
      vertical-align: middle;
      // background: sandybrown;
    }
  }
</style>