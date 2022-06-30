const FeaturedMovieTrailer = (props) => (
  <iframe
    title="Trailer"
    width="100%"
    height="100%"
    src={props.trailer_path}
    frameBorder="0"
    allow="accelerometer; autoplay; ecrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
);

export default FeaturedMovieTrailer;
