var holes = [...document.querySelectorAll('.hole')];
var moles = [...document.querySelectorAll('.mole')];
var button = document.querySelector('button');
var score = document.querySelector('#score');
console.log(holes);
console.log(moles)
var previousOne, randomHoleElement;

function randomHoleFunc(){
    var randomHoleNum = Math.round(Math.random()*5)//because of 0-5 indexes of the holes & moles array
   console.log(randomHoleNum);
    if( previousOne == randomHoleNum ){ //you couldnt think of this!
        console.log('its the same')
        return randomHoleFunc(); //?why without return over here it repeats itself but with repeat it does not repeats itself
    }
    randomHoleElement = holes[randomHoleNum];
    previousOne = randomHoleNum;
   console.log(randomHoleElement);
    return randomHoleNum;
    // randomHoleFunc()
}
 
function randomTime(min, max){
     return Math.floor( Math.random() * (max- min + 1) + min )    
}

function workFunc(){
    let myInterval = setInterval(function(){
        var hole = randomHoleFunc();
        var time = randomTime(200, 1000);//initially it was between 0-1000. But later on realized that because of this range even smaller durations like 44, 25 etc gets generated which is too small time even for the mole to come up. So then changed to 200.
        //console.log(hole,time);
        moles[hole].classList.add('moleup');
        setTimeout(function(){
            moles[hole].classList.remove('moleup');
        }, time)
    }, 1000)
    setTimeout(function(){
        clearInterval(myInterval)
        score.textContent = "Current Score is 0";
        moles.forEach( function(element) { //I added this because without this, after the clearInterval and alert gets executed, we could see the next mole pop up and then go down in few micro-seconds. Like it would come up and vanish. So I added this to make sure they dont come up at all after clear interval
           element.classList.remove('moleup');
        });            
        alert('Your session is over. Click on Whck Me to start over again');
    },20000);
}

button.addEventListener('click', function(event){
    score.textContent = "Current Score is 0";
    var count = 0;
    workFunc();
    moles.forEach( function(element) {
        element.addEventListener('click', function(event){
        if( event.isTrusted ){ //sometimes people can fake a click also and win the game
            console.log('its clicked');    
            count++;
            score.textContent = `Current Score is ${count}`;  
        }
        else{
            alert('Its a fake click')
        }
      })    
    })    
})
