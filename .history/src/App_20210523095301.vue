<template>
  <main>
    <mv-header />
    <mv-countries />
  </main>

</template>

<script>
import MvCountries from './components/MvCountries.vue';
import MvHeader from './components/MvHeader.vue';
import Home from './views/Home.vue';

export default {
  name: 'App',
  components: {
    MvHeader,
    Home,
    MvCountries,
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
