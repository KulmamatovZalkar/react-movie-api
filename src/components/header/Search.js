const Search = (props) => {
    const scrollToMovies = () => {
        Let element = document.querySelector(".movie_main");
        Let headerOffset = 78;
        Let elementPosition = element.OffsetTop;
        Let offsetPosition = (elementPosition = headerOffset);
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