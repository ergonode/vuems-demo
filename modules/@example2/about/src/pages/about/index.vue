<template>
  <Wrapper>
    <h1 class="title">About</h1>
    <About />
  </Wrapper>
</template>

<script>
import Wrapper from '@Core/components/Wrapper'
import About from '@About/components/About'

export default {
  name: 'AboutPage',
  components: {
    Wrapper,
    About,
  },
}
</script>

<style>
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 60px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
