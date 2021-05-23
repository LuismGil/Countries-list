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
      flags: [],
    };
  },
  created() {
    
    api.getFlags()
      .then((flags) => {
        (this.flags = flags);
      });
      
</script>

<style>

</style>
