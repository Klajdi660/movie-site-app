import { FC, useEffect, useState } from "react";
import { useMovieService } from "../services/MovieService";
import { SearchInput } from "../component/SearchInput";
import { MovieResults } from "../component/MovieResults";
import Logo from "../assets/movie-logo.png";

export const MoviesPage: FC = () => {
  const { getMovieList } = useMovieService();

  const [search, setSearch] = useState("");
  const [moviesResult, setMoviesResult] = useState([]);

  const getMovies = async (value: string) => {
    try {
      const movies = await getMovieList(value);
      if (movies.Response !== "True") return setMoviesResult([]);
      setMoviesResult(movies.Search);
    } catch (error) {
      console.error(`Failed to get movies list! ${error}`);
    }
  };

  const handleSearch = (event: any) => {
    setSearch(event.target.value);
  };

  const clearInput = () => {
    setMoviesResult([]);
    setSearch("");
  };

  useEffect(() => {
    if (!search) return;
    getMovies(search);
  }, [search]);

  return (
    <div className="search-container">
      <div className="logo">
        <img className="movie-img" src={Logo} alt="movieImg" />
        <h3>
          Movie<span>24</span>
        </h3>
      </div>
      <SearchInput
        search={search}
        handleSearch={handleSearch}
        moviesResult={moviesResult}
        clearInput={clearInput}
      />
      <MovieResults moviesResult={moviesResult} />
    </div>
  );
};
