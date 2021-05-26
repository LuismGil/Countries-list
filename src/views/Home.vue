<template>
  <div>
    <mv-countries :countries="countries" />
    <mv-pagination />
  </div>
</template>

<script>
import api from '../api';
import MvCountries from '../components/MvCountries.vue';
import MvPagination from '../components/MvPagination.vue';

export default {
  name: 'Home',
  components: { MvCountries, MvPagination },

  data() {
    return {
      countries: [],
      regionList: [],
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
