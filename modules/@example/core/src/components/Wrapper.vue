<template>
  <div class="wrapper">
    <Logo />
    <slot />
  </div>
</template>

<script>
import Logo from '@Core/components/Logo'

export default {
  name: 'Wrapper',
  components: {
    Logo,
  },
}
</script>

<style>
.wrapper {
  margin: 0 auto;
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
