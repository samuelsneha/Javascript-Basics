const first = document.querySelector('#first');
const third = document.querySelector('#third')
const thirdP = document.querySelector('#third p')
const fourthP = document.querySelector('#fourth p')
navigator.geolocation.getCurrentPosition((data) => { //success callback of this Geolocation API. When the user gives permission to access their location it will run. But if the user denies permission then the error function will run.
    console.log(data);
    thirdP.innerHTML = `Latitude is${data.coords.latitude}  <br\>  Longitude is${data.coords.longitude} <br\> Accuracy is ${data.coords.accuracy} <br\> Timestamp is ${data.timestamp} <br\>  `
}, (error =>{
    console.log('You need to allow permissions for access purpose', error )
})
)
navigator.geolocation.watchPosition(showLocation); //we can remove this handler using .clearWatch()
function showLocation(position) {
    console.log(position);
    fourthP.innerHTML = `Latitude is${position.coords.latitude}  <br\>  Longitude is${position.coords.longitude} <br\>  Speed is ${position.coords.speed} <br\> Timestamp is ${position.timestamp} <br\> Heading is ${position.coords.heading} `
}  
