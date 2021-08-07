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

    render() {
        const { title, cover, artist, songs } = this.props;
        return (
            <Fragment>
                <h2>{ artist }</h2>
                <img src={ cover } alt={ title } className="album_cover" onClick={ this.showSongs } />
                <h3 onClick={ this.showSongs }>{ title }</h3>
                {   this.state.songsVisible ?
                    <Songs
                        songs = { songs }
                    />
                    :
                    null
                }
            </Fragment>
        )
    }
}
