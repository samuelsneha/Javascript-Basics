// var triggers = document.querySelectorAll('.cool > li');
// var background = document.querySelector('.dropdownBackground');
// var nav = document.querySelector('.top');

// function handleEnter(){// D2 - Why arent we not putting event here in this and handleEnter function ? Where to put is confusing
//     console.log('enter');
//     this.classList.add('trigger-enter'); // here 'this' is the list-item
//     setTimeout(() => { //D3 - Why this doesnt works with non arrow functions? Sir said something like when you enter into a non arrow function, the value of 'this'changes. But in arrow function, the value of this is inhertited from the parent function which is exectly what we want.
//         console.log(this)
//         if(this.classList.contains('trigger-enter')){ //this is just an additional check we are putting so that the animations happens smoothly
//              this.classList.add('trigger-enter-active') // D4 - For about me this and leave function is not working
//         }
//     },150);
//     background.classList.add('open');//D5 - a) Doubt in the CSS Selector of writing this and other selectors b) open not working for About Me
//     var  dropdown = this.querySelector('.dropdowns');
//     console.log(dropdown);
//     var dropdownCoords = dropdown.getBoundingClientRect();
//     console.log(dropdownCoords);
//     var navCoords = nav.getBoundingClientRect();
//     console.log(navCoords);
//     var coords = {// D8 - Why are we using objects again here? Like how to understand where to use objects
//         height:dropdownCoords.height,
//         width:dropdownCoords.width,
//         top:dropdownCoords.top - navCoords.top, //D7 - Why are  subtracting navcoords at 17:45?
//         left:dropdownCoords.left - - navCoords.left,
//     };
//     background.style.setProperty( 'width', `${coords.width}px`); //D6- Why is it written like this in $ in all these
//     background.style.setProperty( 'height', `${coords.height}px`);
//     background.style.setProperty('transform',`translate(${coords.left}px, ${coords.top}px)`); //D8 -Not working this line at 18:00

//  }
// function handleLeave(){
//     console.log('leave');
//     this.classList.remove('trigger-enter','trigger-enter-active');
//     background.classList.remove('open');
// }

// triggers.forEach(element => element.addEventListener('mouseleave', handleLeave));
// triggers.forEach(element => element.addEventListener('mouseenter', handleEnter));



///YOU HAVEN'T IMPLEMENTED THE MAIN PART OF THE VIDEO WHICH IS THE BACKGROUND BOX BEING 1 BOX AND IT TAKES THE HEIGHT & WIDTH OF THE DROPDOWN BOX BOX ITS BEING HOVERED OF  
var boxes = [...document.querySelectorAll('.li-class')];//.outer-li-box wont work here because then it wont follow the hierarchy of classList.remove/add
console.log(boxes);
boxes.forEach( function(element){
    element.addEventListener('mouseenter', function(event){
        console.log('its clicked');
        element.classList.add('displayBoxes');
        setTimeout( function(){
            element.classList.add('displayOpaqueBoxes');
        }, 500);
    })
})
boxes.forEach( function(element){
    element.addEventListener('mouseleave', function(event){
        console.log('its left');
        element.classList.remove('displayBoxes', 'displayOpaqueBoxes');
    })
})