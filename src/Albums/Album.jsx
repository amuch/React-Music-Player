import React, { Component, Fragment } from 'react';
import AppContext from "../AppContext";
import './album.css'
import Songs from '../Songs/Songs';


export default class Album extends Component {
    static contextType = AppContext;
    constructor(props) {
        super(props);
        this.state = {
            songsVisible: false,
        }
    }

    componentDidMount() {
        this.setState();

    }

    showSongs = () => {
        this.setState({ songsVisible: !this.state.songsVisible });
        this.context.hideAllSongs();
    }

    addAlbum = () => {
        const { songs } = this.props;
        for(let i = 0; i < songs.length; i++) {
            this.context.addSongToPlaylist(songs[i].title, songs[i].song);
        }
    }

    render() {
        const { title, cover, artist, songs } = this.props;
        return (
            <Fragment>
                <h2 className="album_artist">{ artist }</h2>
                <img src={ cover } alt={ title } className="album_cover" onClick={ this.showSongs } />
                {
                    this.state.songsVisible ?
                    <Fragment>
                        <div className="album_div">
                            <h3 className="album_title" onClick={ this.showSongs }>{ title }</h3>
                            <button className="add_album" onClick={ this.addAlbum }>Add All</button>
                        </div>
                        <Songs
                            songs = { songs }
                        />
                    </Fragment>
                    :
                    null
                }
            </Fragment>
        )
    }
}
