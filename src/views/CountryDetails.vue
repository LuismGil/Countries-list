<template>
  <div>
    <div
      class="container-flag mt-5"
    >
      <div>
        <img
          width="300"
          height="250"
          class="img-fluid"
          :src="country.flag"
          :alt="country.name"
        >
      </div>

      <div class="container-info mx-5">
        <span>
          <b>Nome:</b>
          {{ country.name }}
        </span>

        <span>
          <b>Capital:</b>
          {{ country.capital }}
        </span>

        <span>
          <b>Região:</b>
          {{ country.region }}
        </span>

        <span>
          <b>Sub-região:</b>
          {{ country.subregion }}
        </span>

        <span>
          <b>População:</b>
          {{ country.population }}
        </span>

        <span>
          <b>Linguas: </b>
          <span
            v-for="language in country.languages"
            :key="language.nativeName"
          >{{ language.nativeName }}
          </span>
        </span>
      </div>
    </div>
    <div class="mt-5">
      <b>Países Vizinhos:</b>

      <div class="d-flex flex-wrap justify-content-between mt-5 mx-4">
        <span
          v-for="border in country.borders"
          :key="border"
        >
          <router-link :to="`/country/${border.toLowerCase()}`">
            <img
              width="300"
              height="250"
              class="img-fluid img-width m-4"
              :src="`https://restcountries.eu/data/${border.toLowerCase()}.svg`"
              :alt="border"
            >
          </router-link>
        </span>
      </div>
    </div>
    <mv-pagination />
  </div>
</template>

<script>
import api from '../api';
import MvPagination from '../components/MvPagination.vue';

export default {
  name: 'CountryDetails',
  components: { MvPagination },

  data() {
    return {
      country: {},
    };
  },

  created() {
    this.getCountry();
  },

  methods: {
    getCountry() {
      const { alpha3Code } = this.$route.params;
      api.getCountry(alpha3Code)
        .then((country) => { this.country = country; });
    },
  },

};
</script>

<style>
.container-flag {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.container-info {
  display: flex;
  flex-direction: column;
  justify-content: center

}
</style>
