<template>
  <div>
    <mv-countries :countries="countries">
       <px-assets-table v-if="!isLoading" :assets="assets" />
    </mv-countries>

  </div>
</template>

<script>
import api from '@/api';
import MvCountries from '../components/MvCountries.vue';

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
  },

};
</script>

<style>

</style>
