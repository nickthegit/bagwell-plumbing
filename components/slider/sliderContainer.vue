<template>
  <!-- Slider main container -->
  <div class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <slot></slot>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- If we need scrollbar -->
    <div class="swiper-scrollbar"></div>
  </div>
</template>

<script>
  // core version + navigation, pagination modules:
  import Swiper, { Navigation, Pagination } from 'swiper'
  // configure Swiper to use modules
  Swiper.use([Navigation, Pagination])

  // import Swiper styles
  import 'swiper/swiper-bundle.css'
  export default {
    mounted() {
      var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'vertical',
        loop: true,

        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      })
    },
  }
</script>

<style lang="scss" scoped>
  .swiper-container {
    width: 100%;
    height: 300px;
  }
</style>