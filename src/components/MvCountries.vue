<template>
  <div>
    <div class="container mt-5">
      <div>
        <label class="container-label">
          Filtrar por
        </label>
        <select
          v-model="selected"
          class="form-select form-width"
          aria-label="Filtrar por"
        >
          <option
            disabled
            value=""
          >
            Escolha uma opção
          </option>
          <option
            v-for="select in options"
            :key="select.value"
          >
            {{ select.name }}
          </option>
        </select>
      </div>

      <div v-if="selected === 'Região'">
        <label class="container-label">
          Filtrar por região
        </label>
        <select
          id="filterRegion"
          v-model="filterRegion"
          class="form-select form-width"
          aria-label="Filtrar por"
        >
          <option
            v-for="selectRegion in regions"
            :key="selectRegion.value"
          >
            {{ selectRegion.name }}
          </option>
        </select>
      </div>

      <input
        v-if="selected === 'País'"
        id="filterCountry"
        v-model="filterCountry"
        class="form-input"
        placeholder="Filtrar por País"
        type="text"
      >
      <input
        v-if="selected === 'Capital'"
        id="filterCapital"
        v-model="filterCapital"
        class="form-input"
        placeholder="Filtrar por capital"
        type="text"
      >
      <input
        v-if="selected === 'Língua'"
        id="filterLanguage"
        v-model="filterLanguage"
        class="form-input"
        placeholder="Filtrar por língua"
        type="text"
      >
      <input
        v-if="selected === 'Código de ligação'"
        id="filterCallingCodes"
        v-model="filterCallingCodes"
        class="form-input"
        placeholder="Filtrar por codigo de ligação"
        type="text"
      >

      <mv-button class="mt-3 container-button">
        Pesquisar
      </mv-button>
    </div>
    <div class="d-flex flex-wrap justify-content-between mt-5 mx-4">
      <div
        v-for="country in filteredCountries"
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
      filterCountry: '',
      filterCapital: '',
      filterRegion: '',
      filterLanguage: '',
      filterCallingCodes: '',
      selected: '',
      options: [
        { value: 0, name: 'Região' },
        { value: 1, name: 'Capital' },
        { value: 2, name: 'Língua' },
        { value: 3, name: 'País' },
        { value: 4, name: 'Código de ligação' },
      ],
      regions: [
        { value: 0, name: 'Africa' },
        { value: 1, name: 'Americas' },
        { value: 2, name: 'Asia' },
        { value: 3, name: 'Europe' },
        { value: 4, name: 'Oceania' },
      ],

    };
  },

  computed: {

    filteredCountries() {
      if (!this.filterCountry
      && !this.filterCapital
      && !this.filterRegion
      && !this.filterLanguage
      && !this.filterCallingCodes) {
        return this.countries;
      }

      if (this.filterCountry) {
        return this.countries.filter(
          (n) => n.name.toLowerCase()
            .includes(this.filterCountry.toLowerCase()),
        );
      }

      if (this.filterCapital) {
        return this.countries.filter(
          (n) => n.capital.toLowerCase().includes(this.filterCapital.toLowerCase()),

        );
      }

      if (this.filterRegion) {
        return this.countries.filter(
          (n) => n.region.toLowerCase().includes(this.filterRegion.toLowerCase()),

        );
      }

      if (this.filterLanguage) {
        return this.countries.filter(
          (n) => n.languages.includes(this.filterLanguage),
        );
      }

      if (this.filterCallingCodes) {
        return this.countries.filter(
          (n) => n.callingCodes.includes(this.filterCallingCodes),
        );
      }

      return this.countries;
    },
  },
};

</script>

<style>

.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 0;
}

.container-button {
  margin-left: 65%;
}

.container-label {
  color: #5600AB;
  margin-top: 10px;
  margin-left: 34px !important;
}

.form-select {
  background-color: #f5f5f5;
  border: none;
  border-bottom: 1px solid #948e8e;
  border-radius: unset;
  color: #948e8e;
  margin: 0 auto;
  margin-left: 34px !important;
  width: 280px !important;
}

.form-width {
  width: 200px;
}

.form-input {
  border-width: 1px;
  height: 38px;
  margin-left: 34px !important;
  margin-top: 14px;
  padding: 6px 12px;
  width: 280px !important;
}

.img-width {
    height: 150px !important;
    object-fit: cover;
    width: 280px !important;
}

@media (min-width:  479px) {

  .container {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .container-button  {
    margin-left: 0;
    margin-top: 28px !important;
    text-align: center;
    width: 314px;
  }

  .form-input {
    border-width: 1px;
    height: 38px;
    margin-top: 28px;
    padding: 6px 12px;
    width: 100%;
  }

  .img-width {
    height: 200px !important;
    width: 320px !important;
  }
}

</style>
