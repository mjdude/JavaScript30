// Get elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progerssBar = player.querySelector('.progress__filled');    
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelector('[data-skip]');
const ranges = player.querySelector('.player__slider');


// Build functions

function togglePlay(){
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function updateButton(){
    const icon = this.paused ? '►' : '▌ ▐';
    toggle.textContent = icon;
    console.log('Update the button');
}

// Hook up event listeners

video.addEventListener('click', updateButton);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', togglePlay);