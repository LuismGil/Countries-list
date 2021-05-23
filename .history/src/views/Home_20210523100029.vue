<template>
  <div>
    <mv-countries />
  </div>
</template>

<script>
import api from '@/api';
import MvCountries from '../components/MvCountries.vue';

export default {
  name: 'Home',
  components: { MvCountries },

};
</script>

<style>

</style>
