const GenreButton = (props) => {
    <div className="genre_button" onClick={() => props.updateDiscover("movie", props.genre)}>
        {props.genre[0]}
    </div>
}

export default GenreButton;