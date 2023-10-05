//This project can be achieved in three phases mentioned below. Understand them.
var links = [...document.querySelectorAll('.navbarLI')];
console.log(links);
links.forEach( function(element){
    element.addEventListener('click', function(event){
        console.log('its clicked');
        console.log(event.target.id);
        //1)mapping the clicks with the sections - Remember for mapping we need to have something common betwwen both the elements. The logic used here for mapping is amazing
        var id  = (event.target.id).toUpperCase();
        var section = document.getElementById(id);
        console.log(section);
        //2) Finding the position of the target 
        //offsetTop and getBoundingClientRect().top both are giving equal values //? why both are giving same values
        // var offsettop = section.offsetTop;
        // console.log(offsettop);
        var boundingClientRecttop = section.getBoundingClientRect().top;
        console.log(boundingClientRecttop);
        //3) Scrolling till the target
        window.scrollTo({ //? 1) why others have used setInterval to achieve this
            top:boundingClientRecttop,
            behavior:"smooth"
        });
    })
})