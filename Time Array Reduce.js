const liTags = [...document.querySelectorAll('li[date-time]')];
//const liTags = [...document.querySelectorAll('li')];
//console.log( liTags );
//const liTime = liTags.querySelectorAll('[date-time]'); you cant do this because querySelectorAll works only on valid DOM Element or document object
//To check if querySelectorAll can be applied to an element check the given three conditions and only if all three are correct you can continue. 1) typeof liTags === 'object' 2) liTags !== null 3) 'querySelectorAll' in liTags
const liTime = liTags
                 .map( function(i){
                     return (i.getAttribute('date-time'))
                 })
                //  console.log( liTime )
                 .map( function(i){
                     return(i.split(':').map(parseFloat)) 
                 })
                //  console.log( liTime )

const timeSeconds = liTime.map( function(i){
                        return ((i[0]*60)+ i[1]);
                });
let totalSeconds = timeSeconds.reduce( function( totalSeconds, i){
    return ( totalSeconds = totalSeconds + i)
},0);

const hours = Math.round(totalSeconds/3600);
totalSeconds = (totalSeconds%3600);
const minutes = Math.round(totalSeconds/60);
const seconds = (totalSeconds%60);
console.log(hours, minutes, seconds);
//Remember - mod can be used whenever we want the leftovers after equally dividing a particular number. Like here we used it to find the leftover seconds after equally diving it with 3600




