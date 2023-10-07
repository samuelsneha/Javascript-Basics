var aTags = [...document.querySelectorAll('a')];
console.log(aTags)
var body = document.querySelector('body');
var whiteBox = document.createElement('div');
whiteBox.classList.add('white');
body.append(whiteBox);
aTags.forEach( function(element){
    element.addEventListener('mouseenter', function(event){
        // console.log(event, element);
        var coords = element.getBoundingClientRect();
        console.log(coords);

        // var coordsObj = {
        //     top: coords.top + window.scrollY,
        //     left: coords.left + window.scrollX
        // }
        whiteBox.style.height = `${coords.height}px`;
        whiteBox.style.width = `${coords.width}px`;
        // whiteBox.style.position = 'f';
        whiteBox.style.top = `${coords.top}px`;//here earlier you had done the mistake that there was a space before px. Thats why it was not working.
        whiteBox.style.left = `${coords.left}px`;
        // element.style.color = '#FFF';
        // whiteBox.style.transform = `translate(${coordsObj.left}px, ${coordsObj.top}px)`;
    })
})