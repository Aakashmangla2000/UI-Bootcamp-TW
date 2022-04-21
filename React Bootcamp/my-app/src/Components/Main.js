import React, { useEffect, useRef, useState } from "react";
import Banner from "./Banner/Banner";
import Card from "./Card/Card";
import "./components.css";

function Main() {
  const orderRef = useRef(0);
  const URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=5737b7855c47021346977222e0f67768&language=en-US";
  const [movies, setMovies] = useState(null);
  const [finalMovies, setFinalMovies] = useState(null);
  const [bannerMovie, setBannerMovie] = useState(null);

  useEffect(() => {
    const fetchMovies = async (URL) => {
      let response = await fetch(URL);
      let data = await response.json();
      let movies = data.results;
      setMovies([...movies]);
      setFinalMovies([...movies]);
      console.log("movies", movies[0]);
      setBannerMovie(movies[0]);
    };
    fetchMovies(URL);
  }, []);

  const movieChange = (event) => {
    let filteredMovies = finalMovies.filter((movie) => {
      return movie.title.toLowerCase().indexOf(event.target.value) > -1;
    });

    console.log(finalMovies);
    setMovies([...filteredMovies]);
  };

  const orderChange = (event) => {
    orderRef.current = event.target.value;
    let data = null;
    if (event.target.value == 0)
      data = movies.sort((a, b) =>
        a.title.replace(/\s/g, "").toLowerCase() >
        b.title.replace(/\s/g, "").toLowerCase()
          ? 1
          : a.title.replace(/\s/g, "").toLowerCase() <
            b.title.replace(/\s/g, "").toLowerCase()
          ? -1
          : 0
      );
    else
      data = movies.sort((a, b) =>
        a.title.replace(/\s/g, "").toLowerCase() <
        b.title.replace(/\s/g, "").toLowerCase()
          ? 1
          : a.title.replace(/\s/g, "").toLowerCase() >
            b.title.replace(/\s/g, "").toLowerCase()
          ? -1
          : 0
      );

    setMovies([...data]);
    setFinalMovies([...data]);
    console.log(movies[0].title.replace(/\s/g, "").toLowerCase());
  };

  useEffect(() => {
    console.log("Rerender", movies);
  }, [movies]);

  const setMovie = (movie) => {
    console.log("clicked");
    setBannerMovie(movie);
  };

  return (
    <div>
      <header>
        <h1>MovieHub</h1>
      </header>
      <nav>
        <select
          name="order"
          id="order"
          ref={orderRef}
          onChange={(e) => orderChange(e)}
        >
          <option value={0}>A-Z</option>
          <option value={1}>Z-A</option>
        </select>
        <input
          type="search"
          placeholder="Search Movie..."
          onChange={(e) => movieChange(e)}
        ></input>
      </nav>
      {bannerMovie == null ? "Loading" : <Banner movie={bannerMovie} />}
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

export default Main;
