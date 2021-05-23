<template>
  <main>
    <mv-header />
    <router-view />
  </main>

</template>

<script>
import MvHeader from './components/MvHeader.vue';

export default {
  name: 'App',
  components: {
    MvHeader,
  },
};
</script>

<style>
#app {
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
