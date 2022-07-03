const MovieBox = (props) => {

	const moveToFeatured = (hello) => {
		console.log(hello)
	}
	
	return (
		<div className="movie_box">
			<img className="movie_poster" src={props.movie.poster_link} alt="movie poster" onClick={() => moveToFeatured(props)} />
			<p className="movie_title">{props.movie.title ? props.movie.title : props.movie.name}</p>
			<p className="movie_vote_average"><i className="star_icon fas fa-star"></i>{props.movie.vote_average}</p>
		</div>
	)
}

export default MovieBox;
