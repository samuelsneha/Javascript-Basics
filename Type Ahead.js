
// var citiesA = [];
// fetch('https://countriesnow.space/api/v0.1/countries/population/cities')
// .then(response => {console.log(response);//this what we get  here is a stream object ie. readable string
//  //console.log(response.json());  We do .json() because jo data aata hai wo alag format mai hota hai, so for convience json mai convert karte hai. Yeh conversionn asynchronous hota hai. So we use async await/promise. response.json() returns a promise
//  return response.json(); }) // when we do .json() method, a Promise is returned since the reading of the stream will happen asynchronously.
// .then(data => { console.log(data);//this returns data in json format. Not promise. So no 3rd .then() BECAUSE WE ALREADY GOT IN JSON FORMAT
// console.log(data.data); 
// citiesA.push(data.data);// D3 - I didnt use spread.Is that okay ?  because we need to do some modifications to the data.data and not use it directly, we are storing it in a variable
// console.log(citiesA);//citiesA will be an array of objects
// });
// function findMatches( wordToMatch , citiesA ){ //the first statement of this function is a return statement, which means it will return something
//      return citiesA.filter( element => { //element will be an object. filter() creates a new array from the elements of the existing array which satsfy the condition 
//         var newPlace = new RegExp(wordToMatch, gi ); 
//         return element.city.matches( newPlace) || element.state.matches(newPlace) } )//D2 - a)Because its 2 statement, so we have a return right? I f it would had been just one statement there wouldnt be return right ? 
//                                                                         // b) why == doesnt work and .matches work ?
// }
// function displayMatches(){
//    var placeValue =  $('#place').val();
//    var matchedArray = findMatches( placeValue, citiesA ); //matchedArray will be an array of objects which must have matched the user's word
//    var suggestions = matchedArray.map( element => { //suggestions will be an array
//    var newRegex = new RegExp (this.value,gi); //D5 - a) Didnt understand the concept
//    var cityName = placeValue.replace(newRegex, `<span class = "h1">${this.value}</span>`)
//    var stateName = placeValue.replace(newRegex, `<span class = "h1">${this.value}</span>`)
//    return `<li>  ${cityName}, ${stateName} </li>` }).join('');// D4 - a) at 13:24, place.population doesnt exists b) why return for 1 statement c)if join wasnt there then?
//    console.log(suggestions);
//    document.getElementById('suggestionsWords').innerHTML = suggestions;
// }
// document.getElementById('place').addEventListener('change', displayMatches);
// document.getElementById('place').addEventListener('keyup', displayMatches);//D1 - Why keyup makes more sense than keydown?
// //D6 - 16:30, numberWithCommas ? why and what is hapenning?


const fetchSource = 'https://countriesnow.space/api/v0.1/countries/population/cities';
var suggestions = document.getElementById('suggestionsWords');
var places = [];
var typed;
fetch (fetchSource)
   .then(response => response.json())
   .then(data => {
      console.log(data.data) //initially you did this console outside the fetch and fetch being asynchronous would console it empty (since it was not yet completely fetched till now ) but had to be consoled
      // places.push([...data.data]) //creating an array as the 0th index element in  the places array. Thats what push does.
      // places.push(...data.data) //pushing the elements of data.data into places array
      places = data.data;  //places = [...data.data] can also be done
      console.log(places);
      console.log(places[0])
 
   });
 //this is a hack that once you get all the arrays from the API into this places array and then you filter them

 places.forEach((element) => {
   console.log(element)
   console.log('hi');
}); 
 
console.log('its working');

var input = document.getElementById('place');
input.addEventListener('input', function(){
   // console.log('its changed');
   //  console.log(input.value);
    typed = input.value;
    filterFunction(typed);
});
function filterFunction( typed ){

   if( typed != ''){ //had to put this condition because otherwise even if everything was backspaced in the input and nothing was there in it, it would take that nothing as typed and typed would match everything from places. Eventually the entire places array would come into filteredPlaces. So even if everything was backspaced, entire api would be visible
      console.log(typed)
      let a = new RegExp( typed, 'gi');//another way to create Regex
      var filteredPlaces =  places.filter( function(el){
         // console.log(el);
         return (el.city.match(a) || el.country.match(a) )
         })      
      console.log({filteredPlaces}); 
      displayFunction(filteredPlaces);
   }  
   else{
      displayNothing();
   }
     
}
function displayFunction(filteredPlaces){
   suggestions.innerHTML = ''; //necessary so that the li's from the previous input shouldn't stay in the DOM. So everytime there is change in input value, clear it and then render the filtered places 
   filteredPlaces.forEach( function (element){
   let newElement =  document.createElement('li'); //createElement is on document only. You can't do it on some other element
   newElement.innerHTML = `${element.city} , ${element.country}`
   suggestions.appendChild(newElement)
   })
} 
function displayNothing(){
   console.log('entered nothing');
   // suggestions.innerHTML = 'Kindly enter something'
   suggestions.innerHTML = '';
}
