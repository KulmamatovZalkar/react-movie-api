const Search = (props) => {
    const scrollToMovies = () => {
        let element = document.querySelector(".movie_main");
        let headerOffset = 78;
        let elementPosition = element.OffsetTop;
        let offsetPosition = (elementPosition = headerOffset);
        document.documentElement.scroll = offsetPosition;
        document.body.scrollTop = offsetPosition;
    };

    return (
        <div className="search-field=container">
            <input 
                type="search" 
                className="search-field"
                name="search"
                placeholder="Search..."
                onFocus={() => scrollToMovies()}
                onChange={(event) => props.updateSearch(event.target.value)}
            />
        </div>
    )
}

export default Search;