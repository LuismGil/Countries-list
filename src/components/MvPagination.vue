<template>
  <div class="d-flex justify-content-center">
    <nav aria-label="Page navigation">
      <ul class="pagination">
        <li class="page-item disabled mx-2">
          <a
            class="page-link page-item-rl"
            href="#"
            tabindex="-1"
            aria-disabled="true"
            aria-label="Previous"
          >
            <span aria-hidden="true">
              <i class="fas fa-chevron-left" />
            </span>
          </a>
        </li>
        <li
          class="page-item active mx-2 page-item-bs"
          aria-current="page"
        >
          <a
            class="page-link"
            href="#"
          >1</a>
        </li>
        <li class="page-item mx-2 page-item-bs">
          <a
            class="page-link"
            href="#"
          >2</a>
        </li>
        <li class="page-item mx-2 page-item-bs">
          <a
            class="page-link"
            href="#"
          >3</a>
        </li>
        <li class="page-item mx-2 page-item-bs">
          <a
            class="page-link"
            href="#"
          >4</a>
        </li>
        <li class="page-item mx-2 page-item-bs">
          <a
            class="page-link"
            href="#"
          >5</a>
        </li>

        <li class="page-item mx-2">
          <a
            class="page-link page-item-rl"
            href="#"
            aria-label="Next"
          >
            <span aria-hidden="true">
              <i class="fas fa-chevron-right" />
            </span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'MvPagination',

};
</script>

<style>
.pagination {
  margin: 20px;
  padding: 20px;
}

.page-item-bs {
-webkit-box-shadow: 2px 2px 15px 0px rgba(0,0,0,0.2);
   box-shadow: 2px 2px 15px 0px rgba(0,0,0,0.2);
}

.page-item-rl {
  margin-top: 2px;
  height: 35px !important;
  -webkit-box-shadow: 2px 2px 15px 0px rgba(0,0,0,0.2);
   box-shadow: 2px 2px 15px 0px rgba(0,0,0,0.2);
}

.page-link {
  color: gray
}

.page-item.active .page-link {
  background-color: #5600AB;
  border-color: #5600AB;
  color: white;
}

</style>
