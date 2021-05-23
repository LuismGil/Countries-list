<template>
  <div>
    <mv-countries :countries="countries" />
  </div>
</template>

<script>
import api from '../api';
import MvCountries from '../components/MvCountries.vue';

export default {
  name: 'Home',
  components: { MvCountries },

  data() {
    return {
      countries: [],
    };
  },

  created() {
    api.getCountries()
      .then((countries) => {
        (this.countries = countries);
      });
  },

};
</script>

<style>

</style>
