import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector('video')
const player = new MediaPlayer({ el: video, plugin: [new AutoPlay()]} )

const muteOrUnmuteButton = document.getElementById('muteButton')

const button = document.querySelector('button')
button.onclick = () => player.togglePlay()
muteOrUnmuteButton.onclick = () => player.toggleMute();
