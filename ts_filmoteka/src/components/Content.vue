<template>

  <div class="Content ">
    <div class=" container header__container home-container">
    <Header/>
    </div>
    <Buttons ></Buttons>
    <div class="content__cards">
          <ContentItem  v-for="film in FILMS" :key="film.id" :filmData="film" @addToWatched="addToWatched"
                        @addToQueue="addToQueue"
  />
    </div>
    <Footer/>
    <GoToTop></GoToTop>
      </div>
</template>

<script>

import genres from "../vuex/genresValue"
import Buttons from "./Buttons"
import Header from "./Header.vue"
import Footer from "./Footer.vue"
import GoToTop from "./GoToTop";
import ContentItem from './ContentItem.vue'
import {mapActions, mapGetters} from 'vuex'
import ApiService from "../vuex/services/apiService";
const apiService = new ApiService();



export default {
  name:'Content',
  components:{
    ContentItem,
    Footer,
    Header,
    Buttons,
    GoToTop
  },
  props:{},
  data() {
    return{
      films: [],
      searchValue:'',
      page: 1,
      bottom: false
    }
  },

  computed: {
    ...mapGetters([
        'FILMS',
      'SEARCH_VALUE'
    ]),

  },
  watch:{
    SEARCH_VALUE(){
      this.searchFilmsByValue(this.SEARCH_VALUE);
    },
    bottom (bottom) {
      if (bottom) {
        this.addFilm()
      }
    }
  },
  methods: {
    bottomVisible () {
      const scrollY = window.scrollY
      const visible = document.documentElement.clientHeight
      const pageHeight = document.documentElement.scrollHeight
      const bottomOfPage = visible + scrollY >= pageHeight
      return bottomOfPage || pageHeight < visible
    },

    async addFilm () {
      const addFilmData = await apiService.fetchThisWeekPopularMovies(this.page);
      const newFilm = addFilmData.results;
      genres(newFilm);
      this.$store.commit('ADD_FILMS_TO_STATE', ...newFilm);
      this.page++;
      if (this.bottomVisible()) {
             await this.addFilm();
      }
    },

    ...mapActions([
        'GET_FILMS_FROM_API',
        'ADD_TO_LIBRARY_WATCHED',
        'ADD_TO_LIBRARY_QUEUE',

    ]),
    async searchFilmsByValue(value){
      if (value) {
        const searchData = await apiService.fetchMoviesSearchQuery(value);
        this.$store.commit('SET_FILMS_TO_STATE', searchData);
        const filmList = searchData.results;
        genres(filmList);
      }
      else if(value===''){
        await this.GET_FILMS_FROM_API()
      }
    },
    addToWatched(data){
      this.ADD_TO_LIBRARY_WATCHED(data)
    },
    addToQueue(data){
      this.ADD_TO_LIBRARY_QUEUE(data)
    },
  },

  created () {
    window.addEventListener('scroll', () => {
      this.bottom = this.bottomVisible()
    })
    this.addFilm()
  },

  mounted() {
    this.GET_FILMS_FROM_API()
    .then((response)=>{
      if (response.data) {
        this.searchFilmsByValue(this.SEARCH_VALUE)
        // this.addFilm()
      }})
  }
}
</script>
<style scoped>

</style>
