<template>
  <div>
    <mv-countries></mv-countries>

  </div>
</template>

<script>
import MvCountries from '../components/MvCountries.vue';

export default {
  components: { MvCountries },

};

api.getAssets()
      .then((assets) => {
        (this.assets = assets);
      })
</script>

<style>

</style>
