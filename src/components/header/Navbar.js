import TVMovieToggle from "./TVMovieToggle";
import Search from "./Search";

const Navbar = (props) => {
    <nav className="navbar">
        <TVMovieToggle updateDiscover={props.updateDiscover} />
        <Search updateSearch={props.updateSearch} />
    </nav>;
};

export default Navbar;