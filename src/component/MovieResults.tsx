import { FC } from "react";
import { imdb_url } from "../configs/general.config";
import { MovieResultsProps } from "../types/general.type";

export const MovieResults: FC<MovieResultsProps> = ({ moviesResult }) => {
  return (
    <div className="results-container">
      {moviesResult.length ? (
        moviesResult.slice(0, 3).map((movie: any) => (
          <a
            key={movie.imdbID}
            className="results-card"
            href={`${imdb_url}/title/${movie.imdbID}`}
          >
            <img
              className="results-card-image"
              src={movie.Poster}
              alt={movie.Title}
            />
            <p className="movie-title">{movie.Title}</p>
          </a>
        ))
      ) : (
        <p className="movie-notfound">No movies found</p>
      )}
    </div>
  );
};
