const arr = [];
var secretCode = 'sneha';

document.addEventListener( 'keydown', function ( event ){
    console.log( event.key );
    arr.push( event.key);
    // console.log( arr );

    if( arr.length > secretCode.length ){
        arr.shift();
        console.log( arr );
    }

    // if( arr.length > secretCode.length ){
    //     arr.splice( 0, 1);
    //     console.log( arr );
    // }

    var arrNew = arr.join(''); //joining the elements in arr by removing the commas and placing the elements next to each other
    console.log( arrNew );
    if( arrNew.match( secretCode ) ){
        console.log(' %c Task Accomplished', 'fontFamily: cursive; fontSize: 15px; fontStyle: italic; fontWeight: 500; color:blue; background:#fff0f5' );
        // cornify_add();
    }
    
});

