import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
    


    player.on('timeupdate', throttle(function() {
        player.getCurrentTime()
        .then(function (seconds) {localStorage.setItem("videoplayer-current-time", JSON.stringify(seconds));})
        .catch(function (error) { });}, 1000));

    player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function(seconds) {}).catch(function(error) {
    switch (error.name) {
        case 'RangeError': break;
        default: break;
    }
});


