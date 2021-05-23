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

};

  components: { PxAssetsTable },
  data() {
    return {
      isLoading: false,
      assets: [],
    };
  },
  created() {
    this.isLoading = true;
    api.getAssets()
      .then((assets) => {
        (this.assets = assets);
      })
</script>

<style>

</style>
