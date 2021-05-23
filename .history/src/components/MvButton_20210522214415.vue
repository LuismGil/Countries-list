<template>
  <div>
    <button type="button" class="btn btn-outline btn-color">
      <slot name="btn"></slot>
      </button>
  </div>
</template>

<script>

export default {

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

</style>
