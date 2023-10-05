var keys = [...document.querySelectorAll('.keys')];
console.log(keys);

document.addEventListener('keydown', function(event) {
    console.log(`${event.key} is pressed`)
    console.log(event); //have the habbit of logging the event also
    console.log(event.keyCode);
    let keyCode = event.keyCode;
    let audioElement = document.querySelector(`audio[data-key = '${keyCode}']`);//audio tag element with data-key attribute. Also the value of custon data attribute has to be in quotes.
    console.log(audioElement);
    if( !audioElement ){
          alert( 'Works only on A S D F G H J K');
          return; //can do return inside addEventListener also since its also a function
    }
    audioElement.currentTime = 0; //so that when we play the audio, even if we press the key multiple times, the audio doesnt wait for its duration to complete in the first turn and then play for the second third... time. Basically we can rewind it over and over again as soon as we want and dont need to wait for the audio to complete its previous round.  
    audioElement.play();
    let divElement = document.querySelector(`.keys[data-key = '${keyCode}']`);// element with .keys class and data-key attribute. Could have also done document.querySelector(`div[data-key = '${keyCode}']`). Also the value of custon data attribute has to be in quotes.
    console.log(divElement);
    divElement.classList.add('playing');
});

for( let i = 0; i < keys.length; i++ ){ //can also use keys.forEach here
    keys[i].addEventListener('transitionend', function(event){ //similarly there is also an animationend event which fires when an animation is completed
    console.log('its keyup', event); //have the habbit of logging the event also
//     document.addEventListener('keyup', function(event){
//     let keyCode = event.keyCode;
//     let divElement = document.querySelector(`.keys[data-key = '${keyCode}']`);
//     divElement.classList.remove('playing');//this doesnt really work because even before the transition is complete the keyup event is fired and hence we can't really see the transition happening on the elements
       if( event.propertyName == 'transform'){ //it is not necessary to be done on trasform property only 
            keys[i].classList.remove('playing');
       }
    })
}