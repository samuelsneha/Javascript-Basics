var form = document.getElementById('displayForm');
var userHours = document.getElementById('hrs');
var userMinutes = document.getElementById('mins');
var userSeconds = document.getElementById('sec');
var boxes = document.getElementsByClassName('displayBoxesCover');
// console.log(belowBoxes);
var hoursBox = document.getElementById('hoursDisplay');
var minutesBox = document.getElementById('minutesDisplay');
var secondsBox = document.getElementById('secondsDisplay');
var secondsBoxBelow = document.getElementById('secondsDisplayBelow');

var displayInterval;
var secondsLeft1, secondsLeft2, hoursToDispay, minutesToDisplay, secondsToDisplay; 

form.addEventListener('submit', function(event){
    event.preventDefault();
    if( userHours.value === '' && userMinutes.value === '' && userSeconds.value === ''){ //you get value of an input tag only inside an event like submit here
        alert('Enter a valid time');
    }

    var userEnteredHours = userHours.value;
    var userEnteredMinutes = userMinutes.value;
    var userEnteredSeconds = userSeconds.value;
    console.log( userEnteredHours, userEnteredMinutes, userEnteredSeconds)
    userHours.value = '';
    userMinutes.value = '';
    userSeconds.value = '';
    var now = Date.now();// var dateNow1 = (new Date()).getTime(); both are exactly similar
    console.log(now);
    var userTotalSeconds = Math.round((userEnteredHours * 3600) + (userEnteredMinutes * 60) + (userEnteredSeconds)); //something is going wrong here
    console.log(userTotalSeconds);
    var total = now + userTotalSeconds;
    secondsLeft1 = total - now;

    setIntervalFunction(); //a hack to call setInterval first time without delay 
    function setIntervalFunction(){
        secondsLeft1 = secondsLeft1 - 1;
        secondsLeft2 = secondsLeft1;
        // console.log(secondsLeft1);
        // console.log( secondsLeft1, secondsLeft2 );

        displayTime( secondsLeft2); 
        animateTime(); 
        if( secondsLeft1 === 0 ){
            hoursBox.innerHTML = 0;
            minutesBox.innerHTML = 0;
            secondsBox.innerHTML = 0;
            clearInterval(displayInterval);
            setTimeout(alertFunction , 500); //alertFunction is wrapped in setTimeout so that the above statements of innerHTML gets executed first and then after half a second the alert gets executed 
            // alertFunction();
        }
    }
    displayInterval = setInterval( setIntervalFunction, 1000);
});

function displayTime(secondsLeft2){
    hoursToDispay = Math.round(secondsLeft2/3600);
    secondsLeft2 = secondsLeft2 % 3600;
    minutesToDisplay = Math.round(secondsLeft2/60);
    secondsToDisplay = secondsLeft2 % 3600;
    console.log(hoursToDispay, minutesToDisplay, secondsToDisplay);
    setTimeout( function(){
    hoursBox.innerHTML = hoursToDispay;
    minutesBox.innerHTML = minutesToDisplay;
    secondsBox.innerHTML = secondsToDisplay;
   }, 500);
    secondsBoxBelow.innerHTML = secondsToDisplay + 1;
}

function animateTime(){
    for( let i = 0; i < boxes.length; i++ ){
        boxes[i].classList.add('animate'); //didnt get the transition property properly
    }
    // console.log('its animating')
    setTimeout( function() {
        for( let i = 0; i < boxes.length; i++ ){
        boxes[i].classList.remove('animate');
        }
        // console.log('its removed');
    },500)    
}
function alertFunction(){
    alert('Timer is completed');
}




