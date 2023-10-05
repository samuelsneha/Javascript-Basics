const speedBox = document.querySelector('#speedControllerBox');
const speedBar = document.querySelector('#speedController');
const video = document.querySelector('#videoBox');
console.log( speedBox, speedBar, video );

speedBox.addEventListener('mousemove', function(event){
    console.log('its moving');
    var distanceMoved = event.pageY - this.offsetTop; //Understand it. This is the basic method to find how much a mouse pointer has moved inside an element.
    // console.log( distanceMoved );
    var percentageMoved = Math.round((distanceMoved/this.offsetHeight)*100);
    console.log( percentageMoved );
    var min = 0.4;
    var max = 4;
    speedBar.style.height = `${percentageMoved}%`; //here initially i tried doing px, rem instead of % and realised why bg color was not coming proper
    speedBar.style.backgroundColor = 'yellow';
    var playBackRate = percentageMoved * (max-min) + min; //this formula was also used in CSS Text Shadow Mouse Move Effect, understand it from there. It is used to offset the height
    console.log(playBackRate);
    speedBar.textContent = (playBackRate).toFixed(2) + 'x';
    video.playbackRate = playBackRate;
    
});