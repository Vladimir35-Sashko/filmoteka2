import genresIds from "./genresIds";

export default function genres(data) {
  data.map(item => {
    let newGenres = [];
    item.genre_ids.map(id => {
      const found = genresIds.find(item => item.id === id);
      newGenres.push(found.name);
    });
    if (newGenres.length >= 3) {
      const normalizedGenres = newGenres.slice(0, 2);
      normalizedGenres.push("Other");
      item.genre_ids = normalizedGenres.join(", ");
      item.release_date = item.release_date.slice(0, 4);
    } else {
      item.genre_ids = newGenres.join(", ");
      if (item.release_date) item.release_date = item.release_date.slice(0, 4);
    }
  });
}
