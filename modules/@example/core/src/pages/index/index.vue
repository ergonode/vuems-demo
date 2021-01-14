<template>
  <Wrapper>
    <h1 class="title">VueMS-demo</h1>
  </Wrapper>
</template>

<script>
import Wrapper from '@Core/components/Wrapper'

export default {
  name: 'IndexPage',
  components: {
    Wrapper,
  },
}
</script>
<style>
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
