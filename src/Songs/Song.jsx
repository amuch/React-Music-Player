import React, { Component, Fragment } from 'react';
import AppContext from "../AppContext";
import './songs.css'

export default class Song extends Component {
    static contextType = AppContext;
    componentDidMount() {
        this.setState()
    }

    addTrack = () => {
      this.context.addSongToPlaylist(this.props.title, this.props.song);
    }

    playTrack = () => {
        let song = this.props.song;
        if(!this.context.isPlaying) {
            let audio = new Audio(song);
            audio.play();
            this.context.setPlayingTrue();
            audio.addEventListener('ended', () => {
                this.context.setPlayingFalse();
            });
        }
    }
    //<button onClick={ player.playTrack(this.props.song) }>Play</button>

    render() {
        const { track, title } = this.props;
        // const { player } = this.context;
        return (
            <div className="song_div">
                <h5 className="song_track">{ track }. { title }</h5>

                <button className="song_button" onClick={ this.addTrack }>Play</button>
            </div>
        )
    }
}
