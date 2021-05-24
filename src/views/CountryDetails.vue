<template>
  <div>
    <div class="container-flag mt-5">
      <div>
        <img
          width="300"
          height="250"
          class="img-fluid"
          :src="flag"
        >
      </div>

      <div class="container-info mx-5">
        <span>
          <b>Nome:</b>
          {{ name }}
        </span>

        <span>
          <b>Capital:</b>
          {{ capital }}
        </span>

        <span>
          <b>Região:</b>
          {{ region }}
        </span>

        <span>
          <b>Sub-região:</b>
          {{ subregion }}
        </span>

        <span>
          <b>População:</b>
          {{ population }}
        </span>

        <span>
          <b>Linguas: </b>
          <span
            v-for="language in languages"
            :key="language.nativeName"
          >{{ language.nativeName }}
          </span>
        </span>
      </div>
    </div>
    <div class="mt-5">
      <b>Países Vizinhos:</b>
      <span
        v-for="border in borders"
        :key="border"
      >
        <span>
          {{ border }}
        </span>
      </span>
    </div>
    <mv-pagination />
  </div>
</template>

<script>
import MvPagination from '../components/MvPagination.vue';

export default {
  name: 'CountryDetails',
  components: { MvPagination },

  props: {
    flag: { type: String, default: '' },
    name: { type: String, default: '' },
    capital: { type: String, default: '' },
    region: { type: String, default: '' },
    subregion: { type: String, default: '' },
    population: { type: Number, default: 0 },
    languages: {
      type: Array,
      default: () => [],
    },
    borders: {
      type: Array,
      default: () => [],
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
