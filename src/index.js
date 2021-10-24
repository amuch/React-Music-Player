import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppContext from './AppContext';
import Albums from './Albums/Albums';
import './index.css';
import Player from './Player/Player';
import Playlist from './Playlist/Playlist';

class SongObject {
  constructor(name, location, id) {
    this.name = name;
    this.location = location;
    this.id = id;
  }
}

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            readyState: "Loading songs ... ",
            setReadyState: (newState) => this.setReadyState(newState),
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
      let songObject = new SongObject(songName, songLocation, tempArray.length);
      tempArray.push(songObject);
      this.setState( {playList: tempArray} );
      console.log(this.state.playList);
  }

  setReadyState = (newState) => {
      this.setState({ readyState: newState })
  }



    hideAllSongs = () => {

    }

    render() {

        return(
            <AppContext.Provider value = { this.state } >
            <div>
                <Player />
                <Playlist />
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
