<template>
  <div class="Buttons content__btn__list">
    <button
      class="content__btn"
      type="button"
      data-tag="trend"
      @click="thisWeekFilms()"
    >
      this week
    </button>

    <button
      class="content__btn"
      type="button"
      data-tag="popular"
      @click="allTimePopularFilms()"
    >
      all time
    </button>
  </div>
</template>

<script>
import genres from "../vuex/genresValue";
import ApiService from "../vuex/services/apiService";
const apiService = new ApiService();

export default {
  name: "Buttons",
  data() {
    return {};
  },
  methods: {
    async allTimePopularFilms() {
      const popularData = await apiService.fetchPopularMovies();
      this.$store.commit("SET_FILMS_TO_STATE", popularData);
      const filmList = popularData.results;
      genres(filmList);
    },
    async thisWeekFilms() {
      const weekData = await apiService.fetchThisWeekPopularMovies();
      this.$store.commit("SET_FILMS_TO_STATE", weekData);
      const filmList = weekData.results;
      genres(filmList);
    },
  },
};
</script>

<style scoped>
.Buttons {
  display: flex;
}
</style>
