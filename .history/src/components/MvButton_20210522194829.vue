<template>
  <div>
    <button type="button" class="btn btn-outline btn-color">
      <img src="../assets/back.png" alt="back-arrow"
      width="20"
      height="20"
      class="d-inline-block align-text-top">
      <mv-arrow-icon>
      Voltar
      </button>
  </div>
</template>

<script>
import MvArrowIcon from './MvArrowIcon.vue';

export default {
  components: { MvArrowIcon },

};
</script>

<style>
.btn-color {
  border-color: #5600AB;
  color: #5600AB;
}

.btn-color:hover {
  color: #fff;
  background-color: #c599f2;
}

.btn-key {
  width: 20px;
  height: 20px;
}

</style>
