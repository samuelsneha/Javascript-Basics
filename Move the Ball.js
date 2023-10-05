var ball = document.getElementById('ball');

var bodyHeight = window.screen.height;
var bodyWidth = window.screen.width;
// console.log(bodyHeight, bodyWidth);

function currentCoordinates(){
    var ballCoords = ball.getBoundingClientRect();
    var ballBottomCoords = ballCoords.bottom;
    var ballRightCoords = ballCoords.right;
    console.log( ballBottomCoords, ballRightCoords );
    return [ballBottomCoords, ballRightCoords];//this is how you return more than one values in JS
}

document.addEventListener('keydown', function(event){
    if( event.keyCode === 87 || event.keyCode === 119 ){//move upwards
        console.log('w is pressed');
        var [bottom1, right1] = currentCoordinates();
        console.log(" current bottom is " +bottom1+ " and current right is " +right1);
        if( bodyHeight - bottom1 > 128 ){
            console.log('its safe');
                var updatedBottom = bottom1 - 1; //why bottom1-- didnt work?
                ball.style.position = "absolute";
                ball.style.top = updatedBottom + 'px'; //? whats the error here
                ball.style.left = right1 + 'px';
                console.log("updated bottom is " + updatedBottom + " and right is " + right1 )
        }
    }
    else if ( event.keyCode === 65){
        console.log( 'a is pressed ');
    }
    else if( event.keyCode === 83 ){
        console.log('s is pressed');
    }
    else if( event.keyCode === 68 ){
        console.log('d is pressed')
    }
});
//? comparision with the original method