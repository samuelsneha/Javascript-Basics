//only when you click and drag you want this project to work
//understand what pagex, clientx, screenx, offsetx are - All these are mouse events first of all and some mouse event should occur to use them
// pageX/Y coordinates are relative to the top left corner of the whole rendered page (including parts hidden by scrolling), The pageX property is equivalent to the clientX value plus the scrollLeft value of the document
//while clientX/Y coordinates are relative to the top left corner of the visible part of the page, "seen" through browser window.
//screenX/Y are relative to the physical screen.
//Offset is basically the margin of an element ie. the distance an element has from its outer space. Only margin affects the offset value of an element. Padding and Border has no effect on it. 
const outerBox = document.getElementsByClassName('outerBox');
console.log(outerBox)
let startPoint;
// let scrollLeft;
let isClicked = false;

outerBox[0].addEventListener('mousedown', function(event){
    // console.log('mouse is pressed') 
    isClicked = true;  
    outerBox[0].classList.add('clickedClass'); 
    //var pageX = event.pageX; this gives the value of the clicked point right from the start of the page
    //var offsetLeft =  outerBox[0].offsetLeft //would give us the left margin for the outerBox element in px. Basically the left space outside the element outerBox[0].
    // so basically if you analyze, you will see that by subtracting the pageX from offsetLeft you will get the point where you actually clicked inside the outerBox element 
    // console.log(pageX, offsetLeft, event.screenX, event.clientX);
    //Also understand why other things such as clientX, screenX are not applicable here in this case
    startPoint = event.pageX - outerBox[0].offsetLeft;
    console.log(startPoint);
    scrollDistanceFromLeftEdge = outerBox[0].scrollLeft;
    // console.log(scrollDistanceFromLeftEdge); distance scrolled from left edge by the outerBox[0] element
})


outerBox[0].addEventListener('mouseup', function(event){
    // console.log('mouse is released')   
    isClicked = false;
    outerBox[0].classList.remove('clickedClass'); 
    // var endPoint = event.pageX - outerBox[0].offsetLeft;
    // console.log(endPoint);
    // var distance = endPoint-startPoint;
    // console.log(distance) gives the same value as distanceMoved
    ;
})


outerBox[0].addEventListener('mouseleave', function(event){
    // console.log('mouse has left the box') 
    isClicked = false;
})


outerBox[0].addEventListener('mousemove', function(event){
    // console.log('mouse is moving around the box') 
    // if( isClicked === false )
    //     return;
       if( isClicked === true ){
        event.preventDefault();
           var mouseMoveStartPoint = event.pageX - outerBox[0].offsetLeft;//current distance at run time when the mouse is moving
        //    console.log( startPoint, mouseMoveStartPoint); 
           var distanceMoved = mouseMoveStartPoint - startPoint; //moving point at run time minus the start point
           console.log(distanceMoved);
        //    console.log(scrollDistanceFromLeftEdge);
           outerBox[0].scrollLeft = distanceMoved;

       }    
})