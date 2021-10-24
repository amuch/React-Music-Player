import React, { Component } from 'react';
import AppContext from '../AppContext';
import './playlist.css'
export default class Playlist extends Component {
    static contextType = AppContext;

    componentDidMount() {
        this.setState();
        // const { playList } = this.context;
    }

    render() {
        const { playList } = this.context;
        return(
            <div className="playlist">
            { playList.map((track) =>(
                <p key = { track.name + '_' + track.id }>{ track.name }</p>
            ))}
            </div>
        );
    }

}
