<template>
  <div>
    <div class="container">
    <select class="form-select form-width" aria-label="Escolha uma opção">
      <option selected disabled>Escolha uma opção</option>
      <option value="1">Região</option>
      <option value="2">Capital</option>
      <option value="3">Língua</option>
      <option value="4">País</option>
      <option value="5">Código de ligação</option>
    </select>
    <mv-button class="btn-find" >
        <p class="btn-span">PESQUISAR</p>
    </mv-button>
    </div>

  </div>
</template>

<script>
import MvButton from './MvButton.vue';

export default {
  components: { MvButton },

};
</script>

<style>
.container {
  display: flex;
  flex-direction: row;
}

.form-width {
  width: 200px;
}

.btn-span {
   color: #fff;
}

.btn-find {
  background-color: yellow;
}

</style>
