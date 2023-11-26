import FilmList from "components/filmList/FilmList";
import { apiRequest } from "js/apiRequest";
import { useEffect, useState } from "react";

export default function Movies() {
  const [films, setFilms] = useState([]);
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    async function fetchFilms() {
      if( searchQuery === '') {
        return
      }
      const data = await apiRequest('search/movie', {query: searchQuery})
      setFilms([...data])
    }

    fetchFilms()
  } ,[searchQuery])

function submitQuery(e) {
  e.preventDefault();
    const input = e.target.query.value;

  setSearchQuery(input)
}


  return (
  <>
  <form onSubmit={submitQuery}>
    <input name="query" placeholder="Search movies" />
    <button>Search</button>
  </form>

<FilmList list={films} />
  </>);
}
