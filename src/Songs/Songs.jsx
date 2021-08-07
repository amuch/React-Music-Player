import React, { Component, Fragment } from 'react';
import Song from './Song';

export default class Songs extends Component {

    render() {
        // const { songs } = this.props;
        return (
            <Fragment>
                {this.props.songs.map((song) =>(
                    <Song
                        track = { song.track }
                        title = { song.title }
                        song = { song.song }
                        key = { song.track + "_" + song.title }
                    />
                ))}
            </Fragment>
        );
    }
}
