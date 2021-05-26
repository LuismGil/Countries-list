<template>
  <div>
    <div
      class="container-flag mt-5"
    >
      <div>
        <img
          width="300"
          height="250"
          class="img-fluid img-width"
          :src="country.flag"
          :alt="country.name"
        >
      </div>

      <div class="container-info mx-5">
        <span class="container-span">
          <b>Nome:</b>
          {{ country.name }}
        </span>

        <span class="container-span">
          <b>Capital:</b>
          {{ country.capital }}
        </span>

        <span class="container-span">
          <b>Região:</b>
          {{ country.region }}
        </span>

        <span class="container-span">
          <b>Sub-região:</b>
          {{ country.subregion }}
        </span>

        <span class="container-span">
          <b>População:</b>
          {{ country.population }}
        </span>

        <span class="container-span">
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
      <b class="container-border">
        Países Vizinhos:
      </b>

      <div class="d-flex flex-wrap justify-content-between mt-5 mx-4">
        <span
          v-for="border in country.borders"
          :key="border"
        >
          <a
            :href="$router.resolve({name: 'countryDetails',
                                    params: { alpha3Code:`${border.toLowerCase()}`}}).href"
          >
            <img
              width="300"
              height="250"
              class="img-fluid img-width m-4"
              :src="`https://restcountries.eu/data/${border.toLowerCase()}.svg`"
              :alt="border"
            >
          </a>
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
  flex-direction: column;
  align-items: center;
}

.container-info {
  display: flex;
  flex-direction: column;
  justify-content: center
}

.container-span {
  margin: 5px;
  padding: 5px;
}

.container-border {
  margin-left: 65px;
}

@media (min-width: 479px) {
.container-flag {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.container-span {
  margin: 3px;
  padding: 3px;
}

.container-border {
  margin-left: 45px;
}

}

</style>
