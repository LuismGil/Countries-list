<template>
  <div>
    <select class="form-select" aria-label="Escolha uma opção">
      <option selected disabled>Escolha uma opção</option>
      <option value="1">Região</option>
      <option value="2">Capital</option>
      <option value="3">Língua</option>
      <option value="4">País</option>
      <option value="5">Código de ligação</option>
    </select>
    <mv-button>
      <divclass="btn-find">
        Pesquisar
      </div>
    </mv-button>

  </div>
</template>

<script>
import MvButton from './MvButton.vue';

export default {
  components: { MvButton },

};
</script>

<style>
.btn-find {
  color: #FFF;
  background-color: #5600AB;
}

</style>
