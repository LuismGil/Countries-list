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
      contries: [],
    };
  },
  created() {
    
    api.getFlags()
      .then((contries) => {
        (this.contries = contries);
      });
      
</script>

<style>

</style>
