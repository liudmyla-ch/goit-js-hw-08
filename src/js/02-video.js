import Player from '@vimeo/player';
console.log(Player);
import throttle from 'lodash.throttle';
console.log(throttle);



const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('timeupdate', throttle(function(currentTime) {
        localStorage.setItem('videoplayer-current-time', JSON.stringify(currentTime.seconds));
        console.log('played the video!');
    },1000));

    
    const timeToPlay = JSON.parse(localStorage.getItem("videoplayer-current-time"));
    console.log(timeToPlay);
      

    player.setCurrentTime(timeToPlay).then(function(seconds) {
        // seconds = the actual time that the player seeked to
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;
    
            default:
                // some other error occurred
                break;
        }
    });


 

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });