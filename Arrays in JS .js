const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Issac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
];
const people = [ 
    'Beecher, Henry', 'Beethoven, Ludwig','Begin, Menachem','Belloc, Hilaire', 'Bellow, Saul','Benchley, Robert',
    'Benenson, Peter','Ben-Gurion, David', 'Benjamin, Walter','Benn, Tony', 'Bennington, Chester','Benson, Leana', 
    'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric','Bergman, Ingmar', 'Berio, Luciano', 'Berlie, Wilton', 'Berlin, Irving',
    'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell','Bethea, Erin', 'Bevan, Aneurin', 
    'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh',  'Biondo, Frank','Birrell, Augustine',
    'Black, Elk', 'Blair, Robert',  'Blair, Tony', 'Blake, William'
];
const people2 = [
    { name:'Wes' , year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 },
];
const comments = [
    { text: 'Love this!' , id: 523423 },
    { text: 'Super Good' , id: 823423 },
    { text: 'You are the best' , id: 2039842 },
    { text: 'Ramen is my favourite food ever' , id: 123523 },
    { text: 'Nice Nice Nice!' , id: 542328 },
];

///forEach does the work of just iterating. You can't store and catch forEach values 

//1. filter() the list of inventors who were born in 1500
const inventorsBorn1500 = inventors.filter( function (i) {
    if( i.year >= 1500 && i.year <= 1599 ){
        return true;
    }
    // return (i.year >= 1500 && i.year <= 1599 )
});
console.log(inventorsBorn1500);
console.table(inventorsBorn1500);

//2. map() the list of inventors first and last names
const inventorsFirstLastNames = inventors.map( function (i) {
    return ( i.first + " " + i.last);
});
console.log(inventorsFirstLastNames);
console.table(inventorsFirstLastNames);

//3. sort() inventors by birthdate oldest to youngest
const inventorsByBirthdate =  inventors.sort( function(a, b) {
    return (b.year - a.year);
});
console.log(inventorsByBirthdate);
console.table(inventorsByBirthdate);

//4. reduce() how many years the inventors lived
const inventorsYearsLived = inventors.reduce( function ( totalYears, i ){
    return (totalYears + (i.passed - i.year));
}, 0 );
console.log(inventorsYearsLived);

//5. sort() the inventors by the years lived
const inventorsSortByLivedAsc = inventors.sort( function( a, b) {
    let livedFirstPerson = a.passed - a.year;
    let livedSecondPerson = b.passed - b.year;
    return ( livedFirstPerson - livedSecondPerson);
});
console.log(inventorsSortByLivedAsc);
console.table(inventorsSortByLivedAsc);
const inventorsSortByLivedDesc = inventors.sort( function( a, b) {
    let livedFirstPerson = a.passed - a.year;
    let livedSecondPerson = b.passed - b.year;
    return ( livedSecondPerson - livedFirstPerson );
});
console.log(inventorsSortByLivedDesc);
console.table(inventorsSortByLivedDesc);

//6. create a list of boulevards in Paris that contains 'de' anywhere in the name (https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris)
/*const boxes = Array.from(document.querySelectorAll('.mw-category-group a')); //make a habit to use Array.from whenever you do querySelectorAll
const textContents = boxes.map( function(i) { ///map returns an array and works on an array
    return ( i.innerText );
});
const delists = textContents.filter( function(i) {
    if( i.match(/de/i) )
        return true;
});*/

//7. sort() people alphabetically ///didnt understand the video explanation
const peopleSortedLastName = people.sort();
console.log( peopleSortedLastName );
///JUST AN ATTEMPT
/*const random = people.map( function( i ){
    var first = i.split(',');
    console.table(`${first[0]} ${first[1]}`);
    const random2 = people.map( function( i ){
        var temp = `${first[0]}`;
        `${first[0]}` = `${first[1]}`;
        `${first[1]}`= temp;
        console.log(random2);
    });
});*/

//8. reduce() the sum of each of these instances
const data = [ 'car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'scooter'];
const dataReduce = data.reduce( function( obj, i ){//obj accumulates the results from previous iterations into the next iteration
    // console.log( obj );
    if( !obj[i] ){
        obj[i] = 0;
    }
    obj[i]++;
    return obj;
}, {});
console.log(dataReduce);
console.table(dataReduce);

//1. some() atleast one person is an adult
const isAdultSome = people2.some( function( i ) {
    const presentDate = new Date();
    const presentYear = presentDate.getFullYear();
    if( presentYear -  i.year >= 18 ){
         return true;
    }
});
console.log({isAdultSome});

//2. every() is everyone an adult
const isAdultEvery = people2.every( function( i ) {
    const presentDate = new Date();
    const presentYear = presentDate.getFullYear();
    if( presentYear -  i.year >= 18 ){
         return true;
    }
});
console.log({isAdultEvery});

//3. find() find the comment with id 823423
const findID = comments.find( function( i ){
    return ( i.id === 823423 );
});
console.log( findID );

//4. findIndex() find the comment with id  823423 and then delete it 
const findIndexID = comments.findIndex( function( i ){
    return ( i.id === 823423 );
});
// console.log({findIndexID});
console.log( findIndexID );
comments.splice( findIndexID, 1);
console.table(comments);
// var newComments = [...comments.slice(0, findIndexID) , ...comments.slice( findIndexID + 1 )];
// console.log({newComments});
// console.table( newComments );
