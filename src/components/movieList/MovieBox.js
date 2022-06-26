const MovieBox = (props) => {
  return (
    <div className="movie_box">
      <img src={props.movie.poster.link} className="movie_poster" alt="" />
      <p className="movie_title">
        {props.movie.title ? props.movie.title : props.movie.name}
      </p>
      <p className="movie_vote_average"> {props.movie.vote_average} </p>
    </div>
  );
};

export default MovieBox;
