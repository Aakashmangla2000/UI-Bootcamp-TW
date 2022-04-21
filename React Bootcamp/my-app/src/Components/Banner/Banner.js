import React from "react";

function Banner({ movie }) {
  return (
    <figure id="banner">
      <img
        className="bannerImage"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt=""
      />
      <figcaption>
        <h2 id="title">{movie.title}</h2>
        <p id="description">{movie.overview}</p>
        <div id="info">
          <div className="vote">
            <span>&#9733;</span>
            {movie.vote_average}
          </div>
          <p id="release">{movie.release_date}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export default Banner;
