import React from "react";
import Card from "../Card/Card";

function MovieCards({ setMovie, movies }) {
  return (
    <div>
      <ul className="cards">
        {movies == null
          ? `Loading...`
          : movies.map((movie, index) => (
              <Card
                sendMovie={() => setMovie(movie)}
                movie={movie}
                index={index}
                key={index}
              />
            ))}
      </ul>
    </div>
  );
}

export default MovieCards;
