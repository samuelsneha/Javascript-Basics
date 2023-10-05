const hands = document.getElementsByClassName('hand');
const secondsHand = document.querySelector('#secondsHand');
const minutesHand = document.querySelector('#minutesHand');
const hoursHand = document.querySelector('#hourHand');

let interval = setInterval(function(){
    // console.log('hi');
    // secondsHand.style.transform = `rotate(0.00027deg)`; //why this is not working
    let todayDate = new Date();
    let secondsNow = todayDate.getSeconds();
    let minutesNow = todayDate.getMinutes();
    let hoursNow = todayDate.getHours();
    // console.log( secondsNow, minutesNow, hoursNow );
    // let secondsDegree = ((secondsNow/60)*360) + 88;
    // secondsHand.style.transform = `rotate(${secondsDegree}deg)`;
    // let minutesDegree = ((minutesNow/60)*360) + 88;
    // minutesHand.style.transform = `rotate(${minutesDegree}deg)`;
    // let hoursDegree = ((hoursNow/12)*360) + 88;
    // hoursHand.style.transform = `rotate(${hoursDegree}deg)`;
    // console.log( secondsDegree, minutesDegree, hoursDegree);
    
    //Code with Harry Calculation
    let secondsDegree = 6*secondsNow + 88;
    let minutesDegree = 6*minutesNow + 88;
    let hoursDegree = (30*hoursNow + minutesNow/2) + 88;
    secondsHand.style.transform = `rotate(${secondsDegree}deg)`; //suppose initially you have to rotate 5 deg in 1st second, in the 2nd second you have to rotate 10deg. So from the position where it was after the first second, for the second second it will increment only the difference it has to render more to acheive the goal of 2nd second 
    minutesHand.style.transform = `rotate(${minutesDegree}deg)`;
    hoursHand.style.transform = `rotate(${hoursDegree}deg)`;
}, 1000);
// let count = 0;
// let interval1 = setInterval(function(){ //why this is not working
// const box = document.getElementById('#clockDiv');
// secondsHand.style.transform = `rotate(${6*count}deg)`;
// count += 1 
// }, 1000);    unless you dont put anything to increment the rotate works as a static. Meaning in the first second it will rotate 20deg but after that it will stay there only for the 2nd second onwards because acc to it its at 20deg only from its starting pont. It remembers its starting point only and not the final state of previous iteration