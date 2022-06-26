import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

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
          if (movie.poster_path === null) return;
          if (movie.vote_average) {
            const movieBox = "";
            movie.poster_link = `${image_url}${movie.poster_path}`;
            movie.url = `${tmdb_url}${movie.id}`;
            movieList.push(movieBox);
          }
        });
        this.setState({ movieData: movieList });
        console.log(data);
      });
  }

  render() {
    return (
    <div>
        
    </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);