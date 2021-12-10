<template>
  
  <div class=" Header  page-header header__container home-container">
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

          <a class="header__nav-link header__nav-link--active"  href="">HOME</a>

        </li>

        <li class="header__nav-item">
          <router-link to="Library">
          <a class="header__nav-link" data-index="liba" data-name="Watched" href="">MY LIBRARY</a>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="header__form">
      <input
        class="header__input js-input"
        type="text"
        name="query"
        placeholder="Поиск Фильмов"
        autocomplete="off"
        v-model="searchValue"
        @keyup="search(searchValue)"

      />
      <p class="header__input-icon"></p>
    </div>

    <strong class="header__warning" style="display: none"
      >Search result not successful. Enter the correct movie name and
    </strong>
    <b class="header__thats-all-msg" style="display: none"
      >Это все, что найдено по данному запросу</b
    >
  </div>
      
</template>

<script>

import {mapGetters,mapActions} from "vuex";
// import axios from "axios";

export default {
  name: 'Header',
  props:{},
  data() {
    return {
      searchValue:''
    }
  },
  computed: {
    ...mapGetters([
        'SEARCH_VALUE'
    ])
  },
    methods:{
    ...mapActions([
        'GET_SEARCH_VALUE_TO_VUEX'
    ]),
    search(value){
      this.GET_SEARCH_VALUE_TO_VUEX(value);
      this.$router.push('/').catch(() => {})
    }
  }
  
}
</script>
<style scoped>
.Header{
  background-color: #000;
}
</style>
