import React, { Component, Fragment } from 'react';
import Album from './Album';

export default class Albums extends Component {
    constructor(props) {
        super(props);

        this.state = {
            albums: [],
        };

        this.getAlbums = this.getAlbums.bind(this);
    }

    async getAlbums() {
        const res = await fetch('http://192.168.0.200/music/api/albums/');
        const data = await res.json();
        return data;
    }

    async componentDidMount() {
        const albums = await this.getAlbums();
        this.setState({ albums });
    }

    render() {
        return (
            <Fragment>
                {this.state.albums.map((album) =>(
                    <Album
                        artist = { album.artist.name }
                        title = { album.title }
                        cover = { album.cover }
                        songs = { album.songs }
                        key = { album.artist.name + "_" + album.title }
                    />
                ))}
            </Fragment>
        );
    }
}
