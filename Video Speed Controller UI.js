const speedBox = document.querySelector('#speedControllerBox');
const speedBar = document.querySelector('#speedController');
const video = document.querySelector('#videoBox');
console.log( speedBox, speedBar, video );

speedBox.addEventListener('mousemove', function(event){
    console.log('its moving');
    var distanceMoved = event.pageY - this.offsetTop; //Understand it. This is the basic method to find how much a mouse pointer has moved inside an element.
    console.log( event.pageY, this.offsetTop );
    var percentageMoved = (distanceMoved/this.offsetHeight)*100;
    var percentageMoved = (distanceMoved/this.offsetHeight)*100;
    console.log( percentageMoved );
    var min = 0.4;
    var max = 4;
    speedBar.style.height = `${percentageMoved}%`; //here initially i tried doing px, rem instead of % and realised why bg color was not coming proper
    speedBar.style.backgroundColor = 'yellow';
    var playBackRate = percentageMoved * 0.01 * (max-min) + min; // 0.01 is basically used to divide by 100 because thats what it is supposed to do. (max-min)+min formula is basically used to make that speedcontroller box between the range of max(4) and min(0.4). It is used to offset the height
    console.log(playBackRate);
    speedBar.textContent = (playBackRate).toFixed(2) + 'x';
    video.playbackRate = playBackRate;
    
});