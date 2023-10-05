var panels = [...document.querySelectorAll('.panel')];
console.log(panels);
panels.forEach( function(element){
    element.addEventListener('click', function(event){
        // console.log(event);
        event.target.classList.toggle('clicked');
        event.target.classList.toggle('open');
  
    });
});

panels.forEach( function(element){
    element.addEventListener('transitionend', function(event){
       console.log(event);   
       event.target.classList.add('unclicked')
    });
});