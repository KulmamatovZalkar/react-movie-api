import FeaturedMovieInfo from "./FeaturedMovieInfo";
import FeaturedMoviePoster from "./FeaturedMoviePoster";

const FeaturedMovie = (props) => (
  <div className="featured_movie_container">
    <FeaturedMoviePoster poster={props.movie.poster_path} />
    <FeaturedMovieInfo movie={props.movie} />
  </div>
);

export default FeaturedMovie;
