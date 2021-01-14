<template>
  <nav class="navigation">
    <ul>
      <li><NuxtLink class="button--green" to="/">Home page</NuxtLink></li>
      <li><NuxtLink class="button--grey" to="/about">About</NuxtLink></li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'Navigation',
}
</script>

<style>
.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.navigation {
  position: absolute;
  padding-top: 15px;
}

.navigation ul {
  list-style: none;
  display: flex;
  flex-direction: row;
}
</style>
