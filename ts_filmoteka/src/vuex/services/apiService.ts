import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "699fe261bad37d16f5bc7fa8547e0738";

axios.defaults.baseURL = BASE_URL;

export default class ApiService {
  pageNumber: any;
  searchQuery: any;
  constructor() {
    this.searchQuery = "";
    this.pageNumber = 1;
  }

  async fetchPopularMovies() {
    const response = await axios.get(`/movie/popular?api_key=${API_KEY}`);
    return await response.data;
  }

  async fetchThisWeekPopularMovies(page = 1) {
    const response = await axios.get(
      `/trending/movie/week?api_key=${API_KEY}&page=${page}`
    );
    return await response.data;
  }

  async fetchMoviesSearchQuery(searchQuery: any, page: any) {
    const response = await axios.get(
      `/search/movie?api_key=${API_KEY}&page=${page}&language=en&query='${searchQuery}'`
    );
    const popularMoviesData = await response.data;
    if (popularMoviesData.results.length === 0) {
      throw new Error(`Not found ${searchQuery}`);
    }
    return popularMoviesData;
  }
  incrementPageNumber() {
    this.pageNumber += 1;
  }

  decrementPageNumber() {
    this.pageNumber -= 1;
  }

  resetPageNumber() {
    this.pageNumber = 1;
  }

  set page(newPageNumber) {
    this.pageNumber = newPageNumber;
  }
  get page() {
    return this.pageNumber;
  }

  set query(newQuery: any) {
    this.searchQuery = newQuery;
  }
}
