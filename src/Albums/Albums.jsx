import React, { Component, Fragment } from 'react';
import Album from './Album';

const ROAD_URL = 'http://muchserver.ddns.net/music/api/albums/';
const HOME_URL = 'http://192.168.0.200/music/api/albums/';

export default class Albums extends Component {
    constructor(props) {
        super(props);

        this.state = {
            albums: [],
        };

        this.getAlbums = this.getAlbums.bind(this);
    }

    getURL = () => {
        if(window.location.href.includes('much'))
            return ROAD_URL;
        else
            return HOME_URL;
    }


    async getAlbums() {
        const res = await fetch(this.getURL());
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
