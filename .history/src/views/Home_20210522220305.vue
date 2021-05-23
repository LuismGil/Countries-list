<template>
  <div>
    <mv-countries></mv-countries>

  </div>
</template>

<script>
import MvCountries from '../components/MvCountries.vue';

export default {
  name: 'Home',
  components: { MvCountries },

  data() {
    return {
      isLoading: false,
      assets: [],
    };
  },
  created() {
    
    api.getFlags()
      .then((assets) => {
        (this.assets = assets);
      });
      
</script>

<style>

</style>
