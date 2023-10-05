const outerBox = document.querySelector('#outerBox');
const innerText = document.querySelector('#innerText');
const walk = 100; //100px

outerBox.addEventListener('mousemove', function(event){
    var height = outerBox.offsetHeight;
    var width = outerBox.offsetWidth;
    let x = event.offsetX; //wrt the outerBox element where your pointer is 
    let y = event.offsetY; //wrt the outerBox element where your pointer is 
    //console.log("x and y are", x,y); //wrt the outerBox element where your pointer is 
    //console.log("height and width are", height,width); //wrt the window, at what height and width your element is situated. How much every you move the mouse inside that particular element, the offsetHeight and offsetWidth remains the same.
    //console.log(this, event.target);//this will give you outerBox element only but event.target will give the target on which you placed the mouse like it can be outerBox element or innerText or other elements
    if( this != event.target ){
    //    console.log(event.target.offsetTop, event.target.offsetLeft); //? why offsetX and offsetY wont work here ? its giving me undefined
        x = x + event.target.offsetTop; //? didnt understand this logic
        y = y + event.target.offsetLeft; //? didnt understand this logic
    }
    //console.log(x, y);    
    const xWalk = Math.round((x/width*walk) - (walk/2)); //?
    const yWalk = Math.round((y/height*walk) - (walk/2)); //?
    //console.log(xWalk, yWalk);
    innerText.style.textShadow = `${xWalk}px ${yWalk}px 0 red, ${xWalk * -1}px ${yWalk}px 0 pink, ${yWalk}px ${xWalk * -1}px 0 blue, ${yWalk*-1}px ${xWalk}px 0 yellow`;
    
})