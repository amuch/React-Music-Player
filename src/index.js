import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppContext from './AppContext';
import Albums from './Albums/Albums';
import './index.css';
import Player from './Player/Player';
class SongObject {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
}

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isPlaying: false,
            setPlayingTrue: () => this.state.isPlaying = true,
            setPlayingFalse: () => this.state.isPlaying = false,
            hideAllSongs: () => this.hideAllSongs(),
            playList: [],
            addSongToPlaylist: this.addSongToPlaylist,
        }
    }

    addSongToPlaylist = (songName, songLocation) => {
      let tempArray = this.state.playList;
      let songObject = new SongObject(songName, songLocation);
      tempArray.push(songObject);
      this.setState( {playList: tempArray} );
      console.log(this.state.playList);

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
                <Player />
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
