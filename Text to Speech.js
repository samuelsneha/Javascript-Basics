//This Sppech Synthesis  API comes in most modern browsers  
const msg = new SpeechSynthesisUtterance();//whatever the person will talk, this SpeechSynthesisUtterance will contain it and its info like its rate , pitch , which type of voice etc. represents a speech request.SpeechSynthesisUtterance basically contains the content the speech service should read and information about how to read it (e.g. language, pitch and volume.). We are putting all this info into msg variable.
//The SpeechSynthesisUtterance() constructor of the SpeechSynthesisUtterance interface returns a new SpeechSynthesisUtterance object instance.
let voices = [];
let voicesDropdown = document.querySelector('[name=voice]');
let options = document.querySelectorAll('[type=range], [name=text]');
let stopB = document.querySelector('#stop');
let speakB = document.querySelector('#speak');
console.log( voicesDropdown, options, stopB, speakB );
msg.text = document.querySelector('[name=text]').value; //text -> Gets and sets the text that will be synthesized when the utterance is spoken.


speechSynthesis.addEventListener('voiceschanged', populateVoices );//adding an event listener to the global variable speechSynthesis. This voiceschanged could be used to repopulate a list of voices that the user can choose between when the event fires.
function populateVoices(){
    voices = speechSynthesis.getVoices();// getVoices() returns a list of speechSynthesisVoice objects representing all the available voices on the current device. You could also do this.getVoices()
    // voices = voices.filter( function(i){ //not necessary to do
    //     return i.lang === 'en-US'
    // })
    console.log(voices);
    //speechSynthesis variable, when it gets loaded fires the voiceschanged event. 
    voices.forEach( function(element){
        var options = document.createElement('option');
        options.textContent = element.name + element.lang;
        voicesDropdown.appendChild(options); 
    })
}
voicesDropdown.addEventListener('change', updateVoice ); //to enable the chosen voice to speak
function updateVoice(){
    console.log('its changed');
    const voice = voices.find( function (element){
        return element.name === this.value;
    });
    msg.voice = voice; //The voice property of the SpeechSynthesisUtterance interface gets and sets the voice that will be used to speak the utterance. This should be set to one of the SpeechSynthesisVoice objects returned by SpeechSynthesis.getVoices()
    toggleVoice(); //if you change the voice then cancel the current one and update the speak property with the latest one
} 
function toggleVoice(){ 
    speechSynthesis.cancel();
    speechSynthesis.speak(msg);// The speak() method of the SpeechSynthesis interface adds an utterance to the utterance queue; it will be spoken when any other utterances queued before it have been spoken. speak(utterance) is the syntax where utterance is a SpeechSynthesisUtterance object.
}
options.forEach( function(element){
    element.addEventListener('change', updateOptions)
})
function updateOptions(){
    console.log( this.value, this.name );
    msg[this.name] = this.value;//The pitch property of the SpeechSynthesisUtterance interface gets and sets the pitch at which the utterance will be spoken at. The rate property of the SpeechSynthesisUtterance interface gets and sets the speed at which the utterance will be spoken at.
    toggleVoice();
}
stopB.addEventListener('click', function(event){
    console.log('clicked on stop')
    speechSynthesis.cancel();
})
speakB.addEventListener('click', function(event){
    console.log('clicked on speak')
    toggleVoice();
})