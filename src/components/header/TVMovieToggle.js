import { Component } from "react";

export default class TVMovieToggle extends Component {
    state = {
        toggle: false,
    };

    sliderToggle = () => {
        this.setState({ toggle: !this.state.toggle }, () => {
            this.props.updateDiscover(this.state.toggle ? "tv" : "movie")
        })
    }

    render() {
        const toggle = this.state.toggle;
        return (
            <div className="toggle-container">
                <p>Movies</p>
                <div className="toggle" onClick={() => this.sliderToggle()}>
                    <div className={"toggle-button " + (toogle ? "movie" : "tv")}></div>
                </div>
                <p>TV</p>
            </div>
        )
    }

};

