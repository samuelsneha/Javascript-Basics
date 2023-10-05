const playerOuterBox = document.querySelector('#videoPlayerOuterBox');
const video = playerOuterBox.querySelector('#video');
const progressBox = playerOuterBox.querySelector('.upperControl');
const progressDone = playerOuterBox.querySelector('#progressDone');
const playPause = playerOuterBox.querySelector('#playPause');
const ranges = [...playerOuterBox.querySelectorAll('.ranges')];
const skipButtons = [...playerOuterBox.querySelectorAll('.skipButtons')]; 
console.log( playerOuterBox, video, progressBox, progressDone, playPause, ranges, skipButtons );

function playPauseVideo(){
    console.log('video is clicked from PlayPauseVideo');
    if( !video.paused){
        video.pause();
    }
    else{
        video.play();
    }
}
function updatePlayPause(){
    console.log('video is clicked from updatePLayPause');
    //console.log(this.dataset);
    if( video.paused){
        playPause.textContent = "Paused";
    }
    else{
        playPause.textContent = "Playing";
    }

}
function skipVideo(){
    console.log('video is skipped');
    console.log(this.dataset);// provides read/write access to custom data attributes (data-*) on elements. So basically it can be used only on elements which have data- attributes
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip); //this.dataset.skip is a string. So you do parse.Float() to convert it into a number 
}
function handleRangeUpdate(){
    console.log(this.name);//here the name of the range ie. volume or playbackRate is displayed
    console.log(this.value); //here the value of the range ie. 0.5 or 1 or 2.5 etc is displayed
    video[this.name] = this.value; //video has a property of volume or playbackRate. Thats why we are doing like this.
}
function handleProgress(){
    var percent = (video.currentTime/video.duration)*100; //currentTime and duration are properties of the video
    progressDone.style.width = `${percent}%`;
}
function runTillHere(event){
    console.log(event);
    console.log('progress is clicked')
    var tillHere = (event.offsetX/progressBox.offsetWidth)*video.duration; //offsetX provides us with where we licked on the progressDone and offsetWidth provides us with the width of the entire element
    video.currentTime = tillHere;
}

//video.addEventListener('click', playPauseVideo); //not working
video.addEventListener('play', updatePlayPause);
video.addEventListener('pause', updatePlayPause); 
playPause.addEventListener('click', playPauseVideo); 
skipButtons.forEach( function(element){
    element.addEventListener('click', skipVideo );
}); 
ranges.forEach(function(element){
    element.addEventListener('change', handleRangeUpdate);
});
ranges.forEach(function(element){
    element.addEventListener('mousemove', handleRangeUpdate);
});
video.addEventListener('timeupdate', handleProgress);//The timeupdate event is fired when the time indicated by the currentTime attribute has been updated. 
progressBox.addEventListener('click', runTillHere);//here we are adding event on the entire progressBox and not just on the progressDone element
let mousedown = false;//this is used basically to - if we drag and click the mouse somewhere in the progressDone then our video should play from that point we clicked
progressBox.addEventListener('mouseup', function(event){
    mousedown = false;
})
progressBox.addEventListener('mousedown', function(event){
    mousedown = true;
})
progressBox.addEventListener('mousemove', function(event){//this is used basically to - if we drag and click the mouse somewhere in the progressDone then our video should play from that point we clicked
    if(mousedown){
        runTillHere();
    }
})



