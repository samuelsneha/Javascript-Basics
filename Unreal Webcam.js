const video = document.querySelector('.player');//the video from the webcam will come over here
const canvas = document.querySelector('.photo');// and every 16 millisecond, we will take a snapshot of that video and put it into the canvas 
const ctx = canvas.getContext('2d');// and once we get the picture into the canvas, we can manipulate the picture using pixels. In the context 2d is where all the work happens. 
const strip = document.querySelector('.strip');//in the strip we will upload the snaphots taken from the video and maanipulate them 
const snap = document.querySelector('.snap'); //this makes the picture clicked sound 
 
function getVideo(){
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
    navigator.mediaDevices.getUserMedia({video: true, audio: false})//prompts the user for permission to use a media input which produces a MediaStream. It returns a Promise that resolves to a MediaStream object
    .then( localMediaStream => { //resolving the promise
        console.log(localMediaStream);
        // video.src =window.URL.createObjectURL( localMediaStream );
        video.srcObject = localMediaStream;//assigning the video stream to video. It sets the object which serves as the source of the media. The object can be a MediaStream, a MediaSource, a Blob, or a File
        video.play()
    })
    .catch(error => {//rejecting the promise
         console.error('You need to accept the permissions', error)
    });
}
getVideo();//1) - asking the user permission to start the webcam and getting the webcam data into your html video element

function paintToCanvas(){
    const width = video.videoWidth;
    const height = video.videoHeight;
    //console.log(width, height); this is the height and width of the video coming from the webcam
    canvas.height = height;//its important that we set the height and width of the canvas equal to the h & w of the video
    canvas.width= width;
    return setInterval(()=>{ //taking image from the video every 16ms
        ctx.drawImage( video, 0, 0, height, width );//the way it works is you pass any video or image element to the top left corner of the canvas and that will be drawn  
        //take the pixel out
        let pixels = ctx.getImageData(0,0,width,height);//returns an ImageData object representing the underlying pixel data for a specified portion of the canvas.
        //console.log(pixels); we get an array of large numbers. Here  4 indexes represent every pixel in the image, the first one being Red, second one being Green and third one being Blue and last Alpha. So like this for every pixel each 4 indexes will be there in a continuous manner, eventually leading to a large array
        //mess with them
        //pixels = redEffect(pixels);  
        pixels = rgbSplit(pixels);  
        //pixels = greenScreen(pixels);  
        ctx.globalAlpha = 0.1;//?
        //put them back
        ctx.putImageData( pixels, 0, 0 );
    },16)
}
video.addEventListener('canplay', paintToCanvas); //2) - taking a snapshot from the video obtained from the webcam and put it inside the canvas element on the screen. The event canplay will be fired when the media (video) emits

function takePhoto(){ //3) - clicking the photo on click and putting it in the strip area of the DOM
    snap.currentTime = 0; //?
    snap.play();
    //take the data out of the canvas
    const data = canvas.toDataURL('image/jpeg');//returns a data URL containing a representation of the image in the format specified by the type parameter
    //console.log(data) you get a text based representation of your picture in base-64
    const link = document.createElement('a'); //? creating an anchor tag
    link.href  = data;
    link.setAttribute('download', 'Image_from_Webcam'); //The download attribute specifies that the target (the file specified in the href attribute) will be downloaded when a user clicks on the hyperlink rather than navigating to it
    link.textContent = 'Download Image';
    link.innerHTML = `<img src="${data}" alt="Image_from_Webcam"/>`;
    strip.insertBefore(link, strip.firstChild);//The insertBefore() method of the Node interface inserts a node before a reference node as a child of a specified parent node. firstChild returns the first child node
}

function redEffect(pixels) { //4) - taking the pixel out of the canvas and manipulating with its RGB values
    for(let i = 0; i < pixels.data.length; i+=4) {//i += 4 coz after 4 indexes the colors for next pixel will come. T here is no logic behind the +200, -50 and *0.5. Its all just random to manipulate the pixels
        pixels.data[i + 0] = pixels.data[i + 0] + 200; //Red
        pixels.data[i + 1] = pixels.data[i + 1] - 50; //Green
        pixels.data[i + 2] = pixels.data[i + 2] * 0.5; //Blue
    }
    return pixels;
}
function rgbSplit(pixels){//4) - here also there is no logic behind the -150, +100 and -150. Its all just random to manipulate the pixels
    for(let i = 0; i < pixels.data.length; i+=4) { //since this is a special kind of array and not ike the regular array of js, we can use forEach and all here
        pixels.data[i - 150] = pixels.data[i + 0] ; //Red
        pixels.data[i + 100] = pixels.data[i + 1] ; //Green
        pixels.data[i - 150] = pixels.data[i + 2] ; //Blue
    }
    return pixels;
}
function greenScreen(pixels) { //4) - this works like give me all colors between this particular RGB value and take them out 
    const levels = {};

    document.querySelectorAll('.rgb input').forEach((input) => {
        levels[input.name] = input.value; //?
    });
    for (i = 0; i < pixels.data.length; i = i + 4) {
        red = pixels.data[i + 0]; //figuring out which are the R, G and B values
        green = pixels.data[i + 1];
        blue = pixels.data[i + 2];
        alpha = pixels.data[i + 3];

        if (red >= levels.rmin  //?
            && green >= levels.gmin
            && blue >= levels.bmin
            && red <= levels.rmax
            && green <= levels.gmax
            && blue <= levels.bmax) { //if its anywhere between the min and max values of the i/p selected
                //take it out
                pixels.data[i + 3] = 0; //making the 4th pixel (alpha one) transparent
        }
    }
    return pixels;
}
