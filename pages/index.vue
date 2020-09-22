<template>
  <main>
    <section>
      <Logo />
      <div class="backdrop"></div>
      <h1>Bagwell Plumbing Services</h1>
      <p>
        Covering the Sherborne, Yeovil and surrounding areas, Bagwell Plumbing provide all plumbing and heating services including New Installations, Refurbs, Repairs, Bathrooms and Heating.
        <br />
        <br />So if you've got a leak, Baggy will take a peak!
      </p>
      <div class="links">
        <a href="tel:+44 7974 449 746" target="_blank" rel="noopener noreferrer">tel: 07974 449 746</a>
        <br />
        <a
          href="mailto:bagwellplumbingandheating@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >email</a>
        <a
          href="https://www.instagram.com/bagwellplumbing/"
          target="_blank"
          rel="noopener noreferrer"
        >the grams</a>
      </div>
      <h2>Website coming soon!</h2>
    </section>
  </main>
</template>

<script>
  export default {
    mounted() {
      // * Access ENV with:
      // process.env.ENV_TEST
      // or
      // context.env.ENV_TEST
      // console.log(process.env.HOST_NAME)
    },
  }
</script>

<style lang="scss" scoped>
  main {
    width: 100%;
    height: 100vh;
    position: relative;
  }
  section {
    width: 100%;
    height: 100%;
    position: fixed;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    padding: 40px;
    color: $white;
    @include breakpoint(mobile) {
      padding: 20px;
    }
  }
  svg,
  img {
    width: 300px;
    padding: 20px;
    height: auto;
    @include breakpoint(mobile) {
      width: 250px;
    }
  }
  h1 {
    font-size: 36px;
    @include breakpoint(mobile) {
      font-size: 26px;
    }
  }
  h2 {
    font-size: 28px;
    padding-top: 20px;
    @include breakpoint(mobile) {
      font-size: 20px;
    }
  }
  p {
    width: 100%;
    max-width: 600px;
    font-size: 16px;
  }
  .links {
    padding: 20px;
    border-bottom: 2px solid $white;
    a {
      display: inline-block;
      font-family: 'Russo One', sans-serif;
      font-size: 20px;
      padding: 5px;
      color: $white;
      @include breakpoint(mobile) {
        font-size: 18px;
      }
    }
  }
  .backdrop {
    width: 100%;
    height: calc(100% - 300px);
    position: absolute;
    bottom: 0;
    background: rgb(48, 41, 131);
    background: linear-gradient(
      315deg,
      rgba(48, 41, 131, 1) 0%,
      rgba(27, 23, 71, 1) 100%
    );
    z-index: -1;
    @include breakpoint(mobile) {
      height: calc(100% - 220px);
    }
  }
</style>
