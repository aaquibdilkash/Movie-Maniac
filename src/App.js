import { useEffect, useState } from "react"
import Movie from './components/Movie';
import './index.css';

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {

  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    getMovies(FEATURED_API)
  }, [])

  const getMovies = (API) => {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setMovies(data.results)
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getMovies(SEARCH_API+searchTerm)
  }

  return (
    <>
      <header>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            className="search"
            placeholder="Search..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
        </form>
      </header>
      <div className="movie-container">
        {movies.map(movie => (
          <Movie key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
}

export default App;
