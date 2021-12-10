export default {
  SET_FILMS_TO_STATE: (state, films) => {
    state.films = films.results;
  },
  ADD_FILMS_TO_STATE: (state, payload) => {
    state.films.push(payload);
  },
  SET_SEARCH_VALUE_TO_VUEX: (state, value) => {
    state.searchValue = value;
  },
  SET_LIBRARY_WATCHED: (state, film) => {
    if (state.libraryWatched.length) {
      let isFilmExists = false;
      state.libraryWatched.map(function(item) {
        if (item.id === film.id) {
          isFilmExists = true;
          alert("This film was already added to watched");
        }
      });
      if (!isFilmExists) {
        state.libraryWatched.push(film);
      }
    } else {
      state.libraryWatched.push(film);
    }
    localStorage.setItem(
      "libraryWatched",
      JSON.stringify(state.libraryWatched)
    );
  },
  SET_LIBRARY_QUEUE: (state, film) => {
    if (state.libraryQueue.length) {
      let isFilmExists = false;
      state.libraryQueue.map(function(item) {
        if (item.id === film.id) {
          isFilmExists = true;
          alert("This film was already added to watched");
        }
      });
      if (!isFilmExists) {
        state.libraryQueue.push(film);
      }
    } else {
      state.libraryQueue.push(film);
    }
    localStorage.setItem("libraryQueue", JSON.stringify(state.libraryQueue));
  },
  REMOVE_FROM_WATCHED: (state, index) => {
    state.libraryWatched.splice(index, 1);
    localStorage.removeItem("libraryWatched");
  },
  REMOVE_FROM_QUEUE: (state, index) => {
    state.libraryQueue.splice(index, 1);
    localStorage.removeItem("libraryQueue");
  }
};
