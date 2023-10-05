const listItems = [ 'The Plot in you', 'The Devil wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bleed', 'Say Anything',
'The Midway Street', 'We Came as Romans', 'Counterparts','Oh Sleeper', 'A Skylit Drive', 'Anywhere but here', 'An Old Dog',
'An Elephant in the zoo', 'An Applepie'];

function replacingFun ( listItem ){
    const a = listItem.replace( /A |An |The /, '' )        
    // console.table(a)
    return a;
};

// var b = listItems.map(replacingFun);
// var b = listItems.forEach(replacingFun); //remember forEach does not store and catch its outputs. It only iterates.
// console.log(b);

var sortListItems = listItems.sort( function(first, second) {//works like bubble sort working on 2 elements
    // console.log( first, second );
    if( replacingFun(first) > replacingFun(second) ){ //see you want output to interchange right if plot.. > devil..., so then acc to MDN the two elements will be interchanged wrt the parameters in the sort function only if return value is greater than 0. 
        return 1; // interchange 
    } 
    else{
        return -1; // don't interchange
    }
});
//this is a beautiful technique to sort without articles at the same time not affecting the original list while displaying
console.log( sortListItems );

document.getElementById('ulId').innerHTML = 
                                            sortListItems
                                                .map( function (i) { 
                                                return` <li> ${i} </li>`})
                                                .join('') //this join will work on whatever is return ka output and not on sortListItems. Basically the flow is followed


// console.log(
//     "testing-->",
//     listItems.sort(function (first, second) {
//       return -1;
//     })
//   );




