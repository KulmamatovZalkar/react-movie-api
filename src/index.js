import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

import Navbar from "./components/header/Navbar";
import MovieBox from "./components/movieList/MovieBox";
import MovieMain from "./components/movieList/MovieMain";
import GenresBar from "./components/header/GenresBar";
import FeaturedMovie from "./components/movieList/FeaturedMovie";

const api_key = "3cc05ada7e70628b8d1bf36e4d1f6fd7";
const api_url = "https://api.themoviedb.org";
const tmdb_url = "https://www.themoviedb.org/movie";
const image_url = "https://image.tmdb.ord/t/p/w500";
const language = "en-us";
const genres = {
  Action: 28,
  Adventure: 12,
  Animation: 16,
  Comedy: 35,
  Crime: 80,
  Family: 10751,
  Fantasy: 14,
  Horror: 27,
  Romance: 10749,
  Western: 37,
  Mystery: 9648,
  TVMovie: 10770,
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      featuredMovieData: null,
      movieData: this.discover(),
    };
  }

  discover(type = "movie", genre = "") {
    fetch(
      `${api_url}/3/discover/${type}/?api_key=${api_key}&language=${language}&with_genres=${genre}`
    )
      .then((res) => res.json())
      .then((data) => {
        const movieList = [];
        const results = data.results;
        results.forEach((movie) => {
          // console.log(movie.poster_path)
          // console.log(movie.vote_average)
          if (movie.poster_path === null) return;
          if (movie.vote_average) {
            const movieBox = <MovieBox movie={movie} key={movie.id} />;
            movie.poster_link = `${image_url}${movie.poster_path}`;
            movie.url = `${tmdb_url}${movie.id}`;
            movieList.push(movieBox);
          }
        });
        fetch(
          `${api_url}/3/${type}/${results[0].id}?api_key=${api_key}&append_to_response=credits,videos`
        )
          .then((response) => response.json())
          .then((data) => {
            this.setState({ featuredMovieData: data, movieData: movieList });
          });
      });
  }

  search(searchValue) {
    fetch(
      `${api_url}/3/search/movie/?api_key=${api_key}&language=${language}&query=${searchValue}`
    )
      .then((response) => response.json())
      .then((data) => {
        const movieList = [];
        const results = data.results;
        results.forEach((movie) => {
          if (movie.poster_path == null) return;
          if (movie.vote_average) {
            const movieBox = <MovieBox movie={movie} key={movie.id} />;
            movie.poster_link = `${image_url}${movie.poster_path}`;
            movie.url = `${tmdb_url}${movie.id}`;
            movieList.push(movieBox);
          }
        });
        this.setState({ movieData: movieList });
      });
  }

  updateDiscover = (type, genre = "") => {
    this.discover(type, genre[1]);
  };

  updateSearch = (event) => {
    if (event.length === 0) return;
    this.search(event);
  };

  render() {
    // console.log(this.state.movieData)
    return (
      <div className="App">
        {this.state.movieData ? (
          <div>
            <Navbar
              updateDiscover={this.updateDiscover}
              updateSearch={this.updateSearch}
            />
            <GenresBar genres={genres} updateDiscover={this.updateDiscover} />
            <FeaturedMovie movie={this.state.featuredMovieData} />
            <MovieMain movies={this.state.movieData} />
          </div>
        ) : (
          <div>jfdsaj</div>
        )}
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
