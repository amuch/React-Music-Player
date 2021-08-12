import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppContext from './AppContext';
import Albums from './Albums/Albums';
import './index.css';
// import Player from './Player/Player';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // player: null,
            isPlaying: false,
            setPlayingTrue: () => this.state.isPlaying = true,
            setPlayingFalse: () => this.state.isPlaying = false,
            hideAllSongs: () => this.hideAllSongs(),
        }
    }

    hideAllSongs = () => {

    }

    // componentDidMount() {
    //     this.setState({player: new Player()})
    //     // this.state.player = new Player();
    // }

    render() {

        return(
            <AppContext.Provider value = { this.state } >
            <div>
                <Albums />
            </div>
            </AppContext.Provider>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
