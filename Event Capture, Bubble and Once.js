var divs = document.querySelectorAll('div');
var button = document.querySelector('button');

function logText(event){
    console.log(this.classList.value); //You get three two one as the output because of event bubbling because bubbling is by default 
    console.log(this); 
   // event.stopPropagation();//this will stop bubbling the event when capture is false as bubbling is by default and you get only the one you clicked on like three if you have clicked on the centre element.It wont trigger on the parent elements.
    //this will stop capturing the event when capture is true. You get only the ancestor of the element you clicked on like one here if you have clicked on the centre/second centre/third centre element.It wont trigger on the child elements.                         
}

//bdocument.body.addEventListener('click', logText); //You get three two one body as the output because of event bubbling  because bubbling is by default 
// divs.forEach( div => div.addEventListener('click',logText));
//divs.forEach( div => div.addEventListener('click', logText,{ capture:true } )); //You get one two three as the output because of event capturing has been made true. So it flows from the ancestor of whatever element you have clicked.
// capture by default is false ie by default it is event bubbling  
divs.forEach( div => div.addEventListener('click', logText,{ capture:false, once:true } )); // it will perform click once and then unbind itself ie. removeEventListener() so that there is no future clicks on it until you reload the page.

button.addEventListener('click', () => {console.log('button clicked')},{ once:true});//button clicked will be displayed on console only once because of once:true. You can use it in places where you want user to click only once.

// How modern browsers work is - the browser will first design for capture ie. when you click on the element it will ripple down , it captures on all those events and then it starts from the bottom and does something called bubble.
// Capture goes from top - bottom, the events havent fired yet . It just captures where you clicked and then it bubbles up which means triggering the events as you go up.  