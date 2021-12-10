<template>
  <div class="header__container container lib-container LibraryHeader" >
    <div class="header__nav-wrapper">
      <a class="logo__link" href=""
      ><img
          class="logo__img"
          width="24"
          height="24"
          src="../images/header/logo.svg"
          data-index="home" /></a
      ><a class="title-link" href="" data-index="home">Filmoteka </a>
      <ul class="header__nav list">
        <li class="header__nav-item">
          <router-link :to="{name: 'Content'}">
          <a class="header__nav-link"  href="">HOME</a>
          </router-link>
        </li>

        <li class="header__nav-item">
          <a
              class="header__nav-link header__nav-link--active"
              data-index="liba"
              data-name="Watched"
              href=""
          >MY LIBRARY</a
          >
        </li>
      </ul>
    </div>
    <div class="header__filter-button-wrapper">
      <button
          type="button"
          data-name="Watched"
          class="modal-button header__button--right modal-button--active js-watched"

      >
        Watched
      </button>

      <button type="button"
              class="modal-button js-queue"
              data-name="Queue"

      >
        Queue
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: "LibraryHeader",
  props:['swapComponent'],
  methods: {

  }
}
</script>

<style scoped>
.LibraryHeader{
  margin-bottom: 60px;
}

</style>