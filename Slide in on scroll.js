//this debounce code is wierd hence you are not getting the output. Ignore this project and just understand the concept of debounce.
var images = [...document.querySelectorAll('.images')]
console.log( images );
//implementing debounce
document.addEventListener('scroll', debounce(scrollFunc,500));
let counter = 0;
function scrollFunc(event){
    console.log(event,  counter++)
    images.forEach( function(element){
    var slideTillFromTop = (window.scrollY + window.innerHeight ) - (element.height/2); //total length when you scroll 50% of the images height
    console.log(slideTillFromTop);
    var slidedFromBottom = element.offsetTop + element.height; //total scrolled from the bottom of the page
    console.log(slidedFromBottom);
    if( slideTillFromTop > element.offsetTop && window.scrollY < slidedFromBottom ){
        element.classList.add('bouncing')
    }
    else{
        element.classList.remove('bouncing')
    }
    })
}
function debounce( func, delay, immediate = true ){
    var timeout;
    return function(){
        var context = this, args = arguments;
        var later = function(){
            timeout = null;
            if(!immediate ) func.apply( context, args );
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout( later, delay );
        if( callNow ) func.apply(context,args);
    }
}
