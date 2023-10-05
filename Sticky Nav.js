var nav = document.getElementById('nav-id');
// console.log(scrollTillHere);
var a = nav.offsetTop; //offsetTop and offsetY are two different things. The offsetTop property returns the top position relative to the parent , basically the top space outside the element nav.. Whereas, OffsetY is basically the vartical margin of an element and is a mouse event
// console.log(a);
document.addEventListener('load', onLoadFunc() );

function onLoadFunc(){
    console.log('its onloaded');
    document.addEventListener('scroll', function(event){
        // console.log('its scrolling');
        let scrolled = window.pageYOffset; //pageYOffset and scrollY are alias of each other. Just that pageYOffset is more cross compatible across browsers and is applied on window only and not on document
        // console.log(scrolled);
        if( scrolled >= a ){
            console.log('threshold is touched');
            nav.classList.add('fixed-nav', 'li-added');//if you also get a jump by the body element in fututre while implementing the fixed-nav, add a paddingTop equal to nav height. Watch the video to understand more. 
        }
        else{
            nav.classList.remove('fixed-nav', 'li-added');
        }
    })
}
//I have put nav element before clasList but the css effects need not be only on the nav element. You can go deep inside the hierarchy of the nav element also and create adjustments on child elements of nav also when you add a class
//element.offsetHeight returns the height of an element, including vertical padding and borders, scrollbars as an integer in pixels. It does not include the height of pseudo-elements such as ::before or ::after
//scrollY/X - (based on window) The read-only scrollY property of the Window interface returns the number of pixels that the document is currently scrolled vertically. Whereas, scrollTop/Left - (based on element) The scrollLeft and scrollTop properties return the number of pixels that the element’s content is scrolled from its left and top edges. ScrollTop is basically can be get and set, where as scrollY of window's only can be get.
//getBoundingClientRect() also needs to be explored