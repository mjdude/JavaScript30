// additional task : Try and make the full screen button work

// Get elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');    
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
    // you could do it this way
    // if (this.name === 'volume') {
    //     video.volume = this.value;    
    // };
    
    // if (this.name === 'playbackRate') {
    //     video.playbackRate = this.value   
    // };

    // Alternativly 
    video[this.name] = this.value;
}

function handleProgress(){
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e){
    console.log(e);
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}
// Hook up event listeners

video.addEventListener('click', updateButton);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach((button) => {
    button.addEventListener('click', skip);
});

ranges.forEach((range) => {
    range.addEventListener('change', handleRangeUpdate);
});

ranges.forEach((range) => {
    range.addEventListener('mousemove', handleRangeUpdate);
});


// check mousedown to make sure we arent always running scrub when we dont need to
let mouseDown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mouseDown && scrub(e));
progress.addEventListener('mousedown', mouseDown = true );
progress.addEventListener('mouseup', mouseDown = false );
