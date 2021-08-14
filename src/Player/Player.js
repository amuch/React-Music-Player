import React, { Component, Fragment } from 'react';
import AppContext from '../AppContext';
import './player.css';

export default class Player extends Component {
  static contextType = AppContext;
  constructor(props) {
      super(props);

      this.state = {
          audio: null,
          isPaused: false,
          toggleToMode: "Pause",
          currentTrack: "",
      };
  }

    componentDidMount() {
        this.setState();
    }

    playTrack = () => {
        if(!this.context.isPlaying && this.context.playList.length > 0) {
            this.setState({ currentTrack: this.context.playList[0].name });
            let { audio } = this.state;
            audio = new Audio(this.context.playList[0].location);
            audio.play();
            this.setState({ audio: audio });
            this.context.isPlaying = true;
            audio.addEventListener('ended', () => {
                this.setState({ currentTrack: "" });
                this.context.isPlaying = false;
                let tempArray = this.context.playList.splice(0, 1);
                this.setState({ playList: tempArray });
                this.playTrack();
            });
        }
    }

    togglePlayBack = () => {
        let { audio, isPaused, toggleToMode } = this.state;
        if(!isPaused) {
            audio.pause();
            this.setState({ isPaused: true, toggleToMode: "Resume" });
        }
        else {
            audio.play();
            this.setState({ isPaused: false, toggleToMode: "Pause" });
        }
    }

    render() {
        const { isPaused, toggleToMode, currentTrack } = this.state;
        return(
            <div className="player">
                <p>{ currentTrack }</p>
              <button onClick={ this.playTrack }>Play</button>
              <button onClick={ this.togglePlayBack }>{ toggleToMode }</button>
            </div>
        );
    }
}
