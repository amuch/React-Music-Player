export default class Player {
    constructor() {
        // let audio;
        let isPlaying = false;
    }

    playTrack(url) {
        console.log("Play track");
        if(!this.isPlaying) {
            let audio = new Audio(url);
            this.isPlaying = true;
            audio.addEventListener('ended', () => {
                this.isPlaying = false;
            });
        }
    }
}
