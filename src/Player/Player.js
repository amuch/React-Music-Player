import React, { Component, Fragment } from 'react';
import AppContext from "../AppContext";

export default class Player extends Component {
  static contextType = AppContext;

    componentDidMount() {
      console.log(this.context);
    }

    playTrack() {
      console.log(this.context);
        // if(!this.context.isPlaying && this.state.playList.length > 0) {
        //     let audio = new Audio(this.state.playList[0]);
        //     this.context.isPlaying = true;
        //     audio.addEventListener('ended', () => {
        //         this.context.isPlaying = false;
        //         let tempArray = this.state.playList.splice(0, 1);
        //         this.setState( {playList: tempArray} );
        //     });
        // }
    }

    render() {

        return(
            <Fragment>
              <button onClick={ this.playTrack }>Play</button>
            </Fragment>
        );
    }
}
