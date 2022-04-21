import React, { useEffect, useRef, useState, useReducer } from "react";
import Banner from "./Banner/Banner";
import "./components.css";
import MovieCards from "./MovieCards/MovieCards";
import Navigation from "./Navigation/Navigation";
import Pagination from "./Pagination/Pagination";

const initialPage = { count: 1, totalPages: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "setpages":
      return { count: state.count, totalPages: action.payload };
    case "increment":
      if (state.count < state.totalPages - 4)
        return { count: state.count + 1, totalPages: state.totalPages };
      else return { count: state.count, totalPages: state.totalPages };
    case "decrement":
      if (state.count > 1)
        return { count: state.count - 1, totalPages: state.totalPages };
      else return { count: state.count, totalPages: state.totalPages };
    default:
      return { count: state.count, totalPages: state.totalPages };
  }
}

const fetchMovies = async (
  URL,
  setMovies,
  setFinalMovies,
  setBannerMovie,
  dispatch
) => {
  let response = await fetch(URL);
  let data = await response.json();
  let movies = data.results;
  setMovies([...movies]);
  setFinalMovies([...movies]);
  setBannerMovie(movies[0]);
  dispatch({ type: "setpages", payload: data.total_pages });
};

function Main() {
  const [state, dispatch] = useReducer(reducer, initialPage);
  const orderRef = useRef(0);
  const URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=5737b7855c47021346977222e0f67768&language=en-US&page=";
  const [movies, setMovies] = useState(null);
  const [finalMovies, setFinalMovies] = useState(null);
  const [bannerMovie, setBannerMovie] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(20);

  useEffect(() => {
    fetchMovies(
      URL + currentPage,
      setMovies,
      setFinalMovies,
      setBannerMovie,
      dispatch
    );
  }, []);

  useEffect(() => {
    fetchMovies(
      URL + currentPage,
      setMovies,
      setFinalMovies,
      setBannerMovie,
      dispatch
    );
  }, [currentPage]);

  const movieChange = (event) => {
    let filteredMovies = finalMovies.filter((movie) => {
      return movie.title.toLowerCase().indexOf(event.target.value) > -1;
    });

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
    // console.log("Rerender", movies);
  }, [movies]);

  useEffect(() => {
    console.log("m", movies);
    if (movies != null) {
      let data = finalMovies.slice(0, perPage);
      setMovies([...data]);
    }
  }, [perPage]);

  const setMovie = (movie) => {
    setBannerMovie(movie);
  };

  return (
    <div>
      <header>
        <h1>MovieHub</h1>
      </header>
      <Navigation
        orderRef={orderRef}
        movieChange={movieChange}
        orderChange={orderChange}
        setPerPage={setPerPage}
      />
      {bannerMovie == null ? "Loading" : <Banner movie={bannerMovie} />}
      <MovieCards movies={movies} setMovie={setMovie} />
      <Pagination
        dispatch={dispatch}
        state={state}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default Main;
