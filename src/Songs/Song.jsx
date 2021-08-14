import React, { Component } from 'react';
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

    render() {
        const { track, title } = this.props;
        return (
            <div className="song_div">
                <h5 className="song_track">{ track }. { title }</h5>
                <button className="song_button" onClick={ this.addTrack }>Add</button>
            </div>
        )
    }
}
