<template>
  <div>
    <div class="container mt-5">
      <select
        class="form-select form-width"
        aria-label="Filtrar por"
      >
        <option
          selected
          disabled
        >
          Escolha uma opção
        </option>
        <option value="Região">
          Região
        </option>
        <option value="Capital">
          Capital
        </option>
        <option value="Língua">
          Língua
        </option>
        <option value="País">
          País
        </option>
        <option value="Código de ligação">
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
          :to="{ name: 'countryDetails', params: { alpha3Code: country.alpha3Code.toLowerCase() }
          }"
        >
          <img
            class="img-fluid img-width m-4"
            :src="`${country.flag}`"
            :alt="country.name"
          >
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

  data() {
    return {

    };
  },

  methods: {
    getRegion() {

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

.form-select {
  background-color: #f5f5f5;
  border: none;
  border-bottom: 1px solid #948e8e;
  border-radius: unset;
  color: #948e8e;

}

.form-width {
  width: 200px;
}

.img-width {
  height: 200px !important;
  object-fit: cover;
  width: 320px !important;
}

</style>
