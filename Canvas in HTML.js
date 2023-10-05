const canvas = document.querySelector('#outerBox');
canvas.width = window.innerWidth;
canvas.height = window.innerWidth;
const ctx = canvas.getContext('2d');// It is is used to access the 2D drawing functions of a canvas tag. The getContext() method takes one parameter, the type of context. There is also a 3d context
ctx.strokeStyle = 'black'; //specifies the color, gradient, or pattern to use for the strokes (outlines) around shapes
ctx.lineJoin = 'miter'; //set or return the type of corner created when two lines meet.
ctx.lineCap = 'round'; //The lineCap property in HTML5 Canvas is used to set or return the style of the end caps of a line. The possible values are butt, round, or square. The default value is butt.
ctx.lineWidth = 50;
ctx.globalCompositeOperation = 'lighter'; //strokeStyle, lineJoin, lineCap, lineWidth,globalCompositeOperation can have other options also.It your choice which one you want to pick    

let isDrawing = false;
let startX = 0;
let startY = 0;
let hue = 0;
let direction = true;

function letsDraw(event){
    if( isDrawing ){
        console.log(event);
        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
        ctx.beginPath(); //start drawing
        ctx.moveTo(startX, startY); //the starting point of the line should be this
        ctx.lineTo(event.offsetX, event.offsetY ); // the ending point of the line should be this
        ctx.stroke(); //this actually draws the line
        startX = event.offsetX;
        startY = event.offsetY; //we could have also done [startX,startY] = [event.offsetX,event.offsetY]
        hue++;
        if( hue > 360 ){
            hue = 0;
        }
        //this is smart logic! try to implement it somewhere!
        if( ctx.lineWidth > 100 || ctx.lineWidth <= 1 ){ //? If I put < 1 this doesnt seem to work. Why ? 
        //Zero, negative, Infinity, and NaN values are ignored in lineWidth. This value is 1.0 by default.    
            direction = !direction;
        }
        if(direction){
            ctx.lineWidth--;
        }
        else{
            ctx.lineWidth++;
        }
    }
}

canvas.addEventListener('mousedown', function(event){
    isDrawing = true;
    [startX, startY] = [event.offsetX, event.offsetY];
})
canvas.addEventListener('mouseup', function(event){
    isDrawing = false;
})
canvas.addEventListener('mouseout', function(event){
    isDrawing = false;
})
canvas.addEventListener('mousemove', letsDraw);

