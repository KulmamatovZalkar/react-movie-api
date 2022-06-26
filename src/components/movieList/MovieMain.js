import MovieBoxContainer from "./MovieBoxContainer";

const MovieMain = (props) => {
  <div className="movie_main">
    <h2>TRENDING MOVIES</h2>
    <MovieBoxContainer movies={props.movies} />
  </div>;
};

export default MovieMain;
