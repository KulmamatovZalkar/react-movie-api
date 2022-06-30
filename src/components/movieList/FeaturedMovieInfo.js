import FeaturedMovieRating from "./FeaturedMovieRaiting"
import FeaturedMovieTrailer from "./FeaturedMovieTrailer"

const FeaturedMovieInfo = (props) =>{
    const trailer_path = `https://youtube.com/embed/${props.movie.videos.results[0].key}`
    return(
        <div className="featured_movie_info">
            <h1 className="movie_title"> { props.movie.title ? props.movie.title.toUpperCase() : props.movie.name.toUpperCase() } </h1>

            <h2 className="movie_tagline">{props.movie.tagline}</h2>

            <p className="movie_overview"> {props.movie.overview} </p>

            <FeaturedMovieRating movie_average={props.movie.vote_average} />
            <FeaturedMovieTrailer trailer_path={trailer_path}/>
        </div>
    )
}

export default FeaturedMovieInfo;