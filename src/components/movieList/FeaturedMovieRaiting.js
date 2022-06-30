const FeaturedMovieRating = (props) => {
  const stars = [];
  for (let i = 0; i < 10; i++) {
    if (
      i < props.movie_average &&
      props.movie_average - i < 1 &&
      props.movie_average - i > 0
    ) {
      stars.push(
        <i className="star fas fa-star-half-alt" key={`star${i}`}></i>
      );
    } else if (i < props.movie_average && props.movie_average - i > 0) {
      stars.push(<i className="star fas fa-star" key={`star${i}`}></i>);
    } else {
      stars.push(<i className="star fas fa-star" key={`star${i}`}></i>);
    }
  }

  return (
    <div className="featured_movie_rating">
      <p className="stars">
        {stars}
        <span className="movie_average">{props.movie_average}</span>
      </p>
    </div>
  );
};

export default FeaturedMovieRating;
