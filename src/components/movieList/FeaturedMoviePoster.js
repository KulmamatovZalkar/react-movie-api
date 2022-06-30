const FeaturedMoviePoster = (props) => {
  const poster_path = `https://image.tmdb.org/t/p/w500/${props.poster}`;
  const style = {
    backgroundImage: "url(" + poster_path + ")",
    width: "200px",
    height: "100%",
  };

  return <div className="featured_movie_poster" style={style}></div>;
};

export default FeaturedMoviePoster;
