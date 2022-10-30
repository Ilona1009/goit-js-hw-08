
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

    const iframe = document.querySelector('#vimeo-player');
    const player = new Vimeo.Player(iframe);

    const KEY_STORAGE = 'videoplayer-current-time';

    player.on('timeupdate', throttle(event => {
    localStorage.setItem(KEY_STORAGE, JSON.stringify(event.seconds));
}, 1000)
);

    // player.getVideoTitle().then(function(title) {
    //     console.log('title:', title);
    // });
