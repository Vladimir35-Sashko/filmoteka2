import axios from "axios";
import genres from "../genresValue";
// import { fetchTrendingMovies } from "../services/apiService";

export default {
  GET_FILMS_FROM_API({
    commit
  }: any) {
    return axios(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=699fe261bad37d16f5bc7fa8547e0738",
      {
        method: "GET"
      }
    )
      .then((films: any) => {
        commit("SET_FILMS_TO_STATE", films.data);
        const filmList = films.data.results;
        genres(filmList);
        return films;
      })
      .catch((error: any) => {
        console.log(error);
        return error;
      });
  },
  GET_SEARCH_VALUE_TO_VUEX({
    commit
  }: any, value: any) {
    commit("SET_SEARCH_VALUE_TO_VUEX", value);
  },
  ADD_TO_LIBRARY_WATCHED({
    commit
  }: any, film: any) {
    commit("SET_LIBRARY_WATCHED", film);
  },
  ADD_TO_LIBRARY_QUEUE({
    commit
  }: any, film: any) {
    commit("SET_LIBRARY_QUEUE", film);
  },
  DELETE_FROM_WATCHED({
    commit
  }: any, index: any) {
    commit("REMOVE_FROM_WATCHED", index);
  },
  DELETE_FROM_QUEUE({
    commit
  }: any, index: any) {
    commit("REMOVE_FROM_QUEUE", index);
  }
};
