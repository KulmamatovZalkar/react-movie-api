import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

import Navbar from "./components/header/Navbar";
import MovieBox from "./components/movieList/MovieBox";
import MovieMain from "./components/movieList/MovieMain";
import GenresBar from "./components/header/GenresBar";
import FeaturedMovie from "./components/movieList/FeaturedMovie";

const tmdb_url = 'https://www.themoviedb.org/movie'
const api_url = 'https://api.themoviedb.org'
const image_url = 'https://image.tmdb.org/t/p/w500'
const api_key = '1155f6c239cb4332df695fcf245eaffd'
const language = 'en-us'
const genres = {
	Action: 28,
	Adventure: 12,
	Animation: 16,
	Comedy: 35,
	Crime: 80,
	Document: 99,
	Drama: 18,
	Family: 10751,
	Fantasy: 14,
	History: 36,
	Horror: 27,
	Music: 10402,
	Mystery: 9648,
	Romance: 10749,
	SciFi: 878,
	TVMovie: 10770,
	Thriller: 53,
	War: 10752,
	Western: 37
}

class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			featuredMovieData: null,
			movieData: this.discover()
		}
	}	

  	discover(type="movie", genre="") {
    	fetch(`${api_url}/3/discover/${type}?api_key=${api_key}&language=${language}&with_genres=${genre}`)
    	.then(response => response.json())
    	.then(data => {
			const movieList = []
      		const results = data.results
      		results.forEach((movie) => {
				if(movie.poster_path === null) return
				if(movie.vote_average) {
					const movieBox = <MovieBox movie={movie} key={movie.id} />
					movie.poster_link = `${image_url}${movie.poster_path}`
					movie.url = `${tmdb_url}${movie.id}`
					movieList.push(movieBox)
				}
			  })
			fetch(`${api_url}/3/${type}/${results[0].id}?api_key=${api_key}&append_to_response=credits,videos`)
			.then(response => response.json())
			.then(data => {
				this.setState({ featuredMovieData: data, movieData: movieList })
			})
    	})
  	}

  	search(searchValue) {
    	fetch(`${api_url}/3/search/movie?api_key=${api_key}&language=${language}&query=${searchValue}`)
    	.then(response => response.json())
    	.then(data => {
      		const movieList = []
      		const results = data.results
      		results.forEach((movie) => {
				if(movie.poster_path === null) return
				if(movie.vote_average) {
					const movieBox = <MovieBox movie={movie} key={movie.id} />
					movie.poster_link = `${image_url}${movie.poster_path}`
					movie.url = `${tmdb_url}${movie.id}`
					movieList.push(movieBox)
				}
      		})
      		this.setState({ movieData: movieList })
    	})
  	}

  	updateDiscover = (type, genre="") => {
    	this.discover(type, genre[1])
  	}

  	updateSearch = (event) => {
    	if(event.length === 0) return
    	this.search(event)
	}

  	render() {
    	return (
			<div className="App">
				{this.state.movieData
					? <div>
						<Navbar updateSearch={this.updateSearch} updateDiscover={this.updateDiscover} />
						<GenresBar genres={genres} updateDiscover={this.updateDiscover} />
						<FeaturedMovie movie={this.state.featuredMovieData} />
						<MovieMain movies={this.state.movieData} />
					</div>
					: null
				}
			</div>
    	)
  	}
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
