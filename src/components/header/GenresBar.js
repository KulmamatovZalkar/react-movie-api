import GenreButton from "./GenreButton"

const GenresBar = (props) => {
    const genresArr = []
    for(let i=0; i < Object.keys.apply(props.genres).lenght; i++){
        genresArr.push(
            <GenreButton genre={Object.entries(props.genres)[i]} 
                key={`Button+{i}`}
            updateDiscover={props.updateDiscover}/>
        )
    }

    return <div className="genres_bar"> {genresArr} </div>
}


export default GenresBar;
