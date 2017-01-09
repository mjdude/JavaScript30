// Get elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progerssBar = player.querySelector('.progress__filled');    
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


// Build functions

function togglePlay(){
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function updateButton(){
    const icon = this.paused ? '►' : '▌▐';
    toggle.textContent = icon;
    console.log('Update the button');
}

function skip(){
    console.log(this.dataset);
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate(){
    console.log(this.name, this.value);
    if (this.name === 'volume') {
        video.volume = this.value;    
    };
    
    if (this.name === 'playbackRate') {
        video.playbackRate = this.value   
    };

}

// Hook up event listeners

video.addEventListener('click', updateButton);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach((button) => {
    button.addEventListener('click', skip);
});

ranges.forEach((range) => {
    range.addEventListener('click', handleRangeUpdate);
});