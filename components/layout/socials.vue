<template>
  <ul id="socials">
    <li>
      <a
        href="http://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        :class="['social-icon', facebook.slug]"
        v-html="facebook.svg"
        :style="{background: `#${facebook.hex}`}"
      ></a>
    </li>
    <li>
      <a
        href="http://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        :class="['social-icon', twitter.slug]"
        v-html="twitter.svg"
        :style="{background: `#${twitter.hex}`}"
      ></a>
    </li>
    <li>
      <a
        href="http://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        :class="['social-icon', instagram.slug]"
        v-html="instagram.svg"
        :style="{background: `#${instagram.hex}`}"
      ></a>
    </li>
    <li>
      <a
        href="http://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        :class="['social-icon', linkedin.slug]"
        v-html="linkedin.svg"
        :style="{background: `#${linkedin.hex}`}"
      ></a>
    </li>
    <li>
      <a
        href="http://spotify.com"
        target="_blank"
        rel="noopener noreferrer"
        :class="['social-icon', spotify.slug]"
        v-html="spotify.svg"
        :style="{background: `#${spotify.hex}`}"
      ></a>
    </li>
    <li>
      <a
        href="http://vimeo.com"
        target="_blank"
        rel="noopener noreferrer"
        :class="['social-icon', vimeo.slug]"
        v-html="vimeo.svg"
        :style="{background: `#${vimeo.hex}`}"
      ></a>
    </li>
    <li>
      <a
        href="http://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        :class="['social-icon', youtube.slug]"
        v-html="youtube.svg"
        :style="{background: `#${youtube.hex}`}"
      ></a>
    </li>
  </ul>
</template>

<script>
  const facebook = require('simple-icons/icons/facebook')
  const twitter = require('simple-icons/icons/twitter')
  const instagram = require('simple-icons/icons/instagram')
  const linkedin = require('simple-icons/icons/linkedin')
  const spotify = require('simple-icons/icons/spotify')
  const vimeo = require('simple-icons/icons/vimeo')
  const youtube = require('simple-icons/icons/youtube')

  // console.log(spotify, linkedin, instagram, twitter, facebook, youtube, vimeo)
  export default {
    data: () => {
      return {
        facebook,
        twitter,
        instagram,
        linkedin,
        spotify,
        vimeo,
        youtube,
      }
    },
    mounted() {
      // console.log(this.spotify.svg)
    },
  }
</script>

<style lang="scss">
  #socials {
    li {
      display: inline-block;
    }
    a {
      display: block;
      width: 40px;
      height: 40px;
    }
    svg {
      display: block;
      width: 100%;
      height: auto;
    }
  }
</style>