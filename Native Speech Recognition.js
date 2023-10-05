//SpeechRecognition is a global variable in the browser on top of the window. In Chrome, it lives at webkitSpeecgRecognition 
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; //Browsers currently support speech recognition with prefixed properties. Therefore at the start of our code we include these lines to allow for both prefixed properties and unprefixed versions that may be supported in future
const recognition = new SpeechRecognition(); //creating an instance of speech recognition for our application using the SpeechRecognition() constructor
console.log( recognition );
recognition.interimResults = true;// while I am speaking it will give you results. If its set to false, it will give results only when I stop speaking
recognition.continuous = false; //Controls whether continuous results are captured (true), or just a single result each time recognition is started (false).
recognition.maxAlternatives = 1;//Sets the number of alternative potential matches that should be returned per result. 

var sentenceBlock = document.querySelector('.sentencesBlock');
var p = document.createElement('p');
sentenceBlock.appendChild(p);

recognition.addEventListener( 'result', function(event){//with this usually once we start talking it detects and gives us the results.Butif we pause, take a break and then again start talking we wont gets the results. We get the results only during the first time we talk. To get the results for the second time also after a break we are doing 'end' event listener. 
    // console.log(event.results);
    const transcripts = [...event.results]; //we did this to get Arrays from Lists. You could also do Array.from()
    const transcript = transcripts
                            .map( function(i){  
                            return i[0]; 
                            })
                            .map( function (i) {
                                return i.transcript;
                            })
                            .join('')
    console.log(transcript);    

    p.textContent = transcript;
    if( transcripts[0].isFinal ){ //so that multiple p tags are created in the same div after every break/pause we take
        p = document.createElement('p');
        sentenceBlock.appendChild(p);
    }
    if( transcript.includes('internship')){ //extending the application and its use cases
        console.warn('Internship Appeared');
    }

});

recognition.addEventListener('end', startSppechRecognition );//so with this end event even if you speak after a break/pause it will be detected by the microphone and you can see the results

document.body.onclick = function(){ //make sure that the body has entire space of the screen, otherwise it wont work despite you clicking. You had done this mistake earlier.
    startSppechRecognition();
}
function startSppechRecognition(){
    recognition.start(); // first this is ececuted and only once this starts the result event is executed and then end event executes this again. That way the flow of the program continues.
    console.log('its started');  
}


