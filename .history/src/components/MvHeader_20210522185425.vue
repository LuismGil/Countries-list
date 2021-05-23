<template>
<div>
  <nav class="navbar navbar-light bg-light navbar-shadow">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="https://mova.vc/img/footer_mova.svg" alt="Mova Logo" width="72" height="48" class="d-inline-block align-text-top">
    </a>
    <mv-button></mv-button>
  </div>
  </nav>
</div>
</template>

<script>
import MvButton from './MvButton.vue';


export default {
  name: 'MvHeader',
  components: {
    MvButton
    MvButton,
  },

};
</script>

<style>
.navbar-shadow {
  box-shadow: 0px 3px 6px 0px #b6b2b2;
}
</style>
