<template>
  <div>
    <div class="container mt-5">
      <select
        class="form-select form-width"
        aria-label="Escolha uma opção"
      >
        <option
          selected
          disabled
        >
          Escolha uma opção
        </option>
        <option value="1">
          Região
        </option>
        <option value="2">
          Capital
        </option>
        <option value="3">
          Língua
        </option>
        <option value="4">
          País
        </option>
        <option value="5">
          Código de ligação
        </option>
      </select>
      <mv-button>
        Pesquisar
      </mv-button>
    </div>
    <div class="d-flex flex-wrap justify-content-between mt-5 mx-4">
      <div
        v-for="country in countries"
        :key="country.name"
      >
        <router-link
          :to="{ name: 'countryDetails', params:
            {
              flag: country.flag,
              name: country.name,
              capital: country.capital,
              region: country.region,
              subregion: country.subregion,
              population: country.population,
              languages: country.languages,
              borders: country.borders,
            } }"
        >
          <div class="card">
            <img
              class="img-fluid img-width m-4"
              :src="`${country.flag}`"
              :alt="country.name"
            >
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import MvButton from './MvButton.vue';

export default {
  name: 'MvCountries',
  components: { MvButton },

  props: {
    countries: {
      type: Array,
      default: () => [],
    },
  },
};

</script>

<style>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.form-width {
  width: 200px;
}

.img-width {
  width: 320px !important;
  height: 200px !important;
}

</style>
