<template>
  <div>
    <mv-countries></mv-countries>

  </div>
</template>

<script>
import MvCountries from '../components/MvCountries.vue';
import api from '@/api';

export default {
  name: 'Home',
  components: { MvCountries },

  data() {
    return {
      
      contries: [],
    };
  },
  created() {
    
    api.getCountries()
      .then((contries) => {
        (this.contries = contries);
      });
  }
}
</script>

<style>

</style>
