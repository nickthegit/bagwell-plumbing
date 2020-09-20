<template>
  <div>
    <h1>Example Page</h1>
    <slider-container>
      <div class="swiper-slide">Slide a</div>
      <div class="swiper-slide">Slide b</div>
      <div class="swiper-slide">Slide 3</div>
    </slider-container>
  </div>
</template>

<script>
  import { createSEOMeta } from '~/utils/seo.js'
  export default {
    head() {
      const title = 'get title from data source'
      return {
        title,
        meta: createSEOMeta({
          title: 'a page tile',
          description: 'a page description',
          image: 'an image url',
          url: 'the slug of the page',
        }),
      }
    },
  }
</script>

<style lang="scss" scoped>
  // @include breakpoint(mobile) {}
</style>