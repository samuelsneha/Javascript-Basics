var box = document.getElementById('box');
var outerBox = document.getElementById('outerBox')
var bodyHeight = window.screen.height;
var bodyWidth = window.screen.width;
// var bodyHeight = window.innerHeight;
// var bodyWidth = window.innerWidth; innerHeight and innerWidth are not giving correct answers. window.innerHeight changes its values when we move the web developer tools
console.log( bodyHeight, bodyWidth );
outerBox.addEventListener('mouseenter', function(event){
    console.log('its entering');
    var randomHeight = Math.round((Math.random()* bodyHeight)) - 80;
    var randomWidth = Math.round((Math.random()* bodyWidth)) - 80;
    console.log(randomHeight, randomWidth)
    box.style.position = "absolute";
    box.style.top = randomHeight + 'px';
    box.style.left = randomWidth + 'px';
})
//doubts:
//1) why the innerheight and innerwidth is not giving correct values? comparision with the original method
//2) why is it going out of screen size despite subtracting by 80. And in console we get negative values also for randomHeight and randomWidth but the box is not out the page.
//3)  comparision with the original method and my method