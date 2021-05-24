<template>
  <div>
    <nav class="navbar navbar-light bg-light navbar-shadow">
      <div class="container-fluid">
        <img
          src="https://mova.vc/img/footer_mova.svg"
          alt="Mova Logo"
          width="72"
          height="48"
          class="d-inline-block align-text-top"
        >
        <router-link :to="{ name: 'home' }">
          <mv-button>
            <mv-arrow-icon class="me-2" />
            Voltar
          </mv-button>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
import MvArrowIcon from './MvArrowIcon.vue';
import MvButton from './MvButton.vue';

export default {
  name: 'MvHeader',
  components: {
    MvButton,
    MvArrowIcon,
  },

};
</script>

<style>
.navbar-shadow {
  box-shadow: 0px 3px 6px 0px #b6b2b2;
}
</style>
