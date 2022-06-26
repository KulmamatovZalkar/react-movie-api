const FeaturedMoviePoster = (props) => {
  const poster_path = `https://image.tmdb.ord/t/p/w500${props.poster}`;
  const style = {
    backgroundImage: "url(" + poster_path + ")",
  };

  return <div className="featured_movie_poster" style={style}></div>;
};

export default FeaturedMoviePoster;
