import React from "react";

function Card({ movie, index, sendMovie }) {
  return (
    <li>
      <figure onClick={() => sendMovie(movie)}>
        <img
          width="200px"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.original_title}
        />
        <figcaption>
          <h3>{movie.original_title}</h3>
        </figcaption>
      </figure>
    </li>
  );
}

export default Card;
