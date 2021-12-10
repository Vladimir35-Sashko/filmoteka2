export default {
  SET_FILMS_TO_STATE: (state: any, films: any) => {
    state.films = films.results;
  },
  ADD_FILMS_TO_STATE: (state: any, payload: any) => {
    state.films.push(payload);
  },
  SET_SEARCH_VALUE_TO_VUEX: (state: any, value: any) => {
    state.searchValue = value;
  },
  SET_LIBRARY_WATCHED: (state: any, film: any) => {
    if (state.libraryWatched.length) {
      let isFilmExists = false;
      state.libraryWatched.map(function(item: any) {
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
  SET_LIBRARY_QUEUE: (state: any, film: any) => {
    if (state.libraryQueue.length) {
      let isFilmExists = false;
      state.libraryQueue.map(function(item: any) {
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
  REMOVE_FROM_WATCHED: (state: any, index: any) => {
    state.libraryWatched.splice(index, 1);
    localStorage.removeItem("libraryWatched");
  },
  REMOVE_FROM_QUEUE: (state: any, index: any) => {
    state.libraryQueue.splice(index, 1);
    localStorage.removeItem("libraryQueue");
  }
};
