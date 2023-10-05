window.onload = function(){
    displayLists();
}

var typeBox = document.getElementById('typeBox');
console.log(typeBox);
var submit = document.getElementById('addItem');
console.log(submit);
var formSubmit = document.getElementById('formId');
console.log( formSubmit );
var ulBox = document.getElementById('ul-box');
var newCount = 0
var ulLi;

formSubmit.addEventListener('submit', function( event ){  //submit event fires on form only, not on button/input
    event.preventDefault();
    console.log('add item clicked');
    let text = typeBox.value;//you could also do input event on addEventListener
    console.log(text);
    if( text === ''){
        alert('Enter some text');
    }
    else{
    
        console.log( 'create element from the text');
        let newElement = document.createElement('li');
        newElement.innerHTML = text;
        newElement.setAttribute('data-index', newCount);
        newCount++;
        ulBox.appendChild(newElement);
        let deleteElement = document.createElement('span');
        deleteElement.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
        newElement.appendChild(deleteElement);
        typeBox.value = '';
        //save
        saveLists();

    }
});

ulBox.addEventListener('click', function( event ){
    // console.log('li clicked');
    if( event.target.tagName === 'LI' ){
        console.log('li clicked');
        event.target.classList.toggle('toggleClass');
        console.log(event.target.index);
        // var ulLi = document.querySelectorAll('#ul-box li');
        // console.log(ulLi);
    }

    if( event.target.tagName === 'I' ){
        console.log('I clicked')
        // event.target.getElementsByTagName('li').innerHTML = ' ';
        // event.target.getElementsByTagName('li').remove();
        event.target.parentElement.parentElement.remove();
        updateDataAttr()
        saveLists();
    }
})

ulBox.addEventListener( 'click', function(event){
    
    //  var firstIndex, secondIndex;  //couldn't do this logic 
    // if( event.shiftKey){
    //     // console.log('shift key is pressed');
    //     secondIndex = event.target.getAttribute('data-index');
    //     console.log('second index: ' +  secondIndex );
    // }
    // if( event.altKey ){
    //     firstIndex = event.target.getAttribute('data-index');    
    //     console.log( 'first index: ' +  firstIndex );
    // }    
    
    // console.log(firstIndex, secondIndex)
    // var max = Math.max(firstIndex, secondIndex)
    // console.log(max);
    // ulLi= [...document.querySelectorAll('#ul-box li')];
    // let newArr = ulLi.slice( firstIndex , secondIndex );
    // console.log(newArr);
    if( event.shiftKey){
        var index = event.target.getAttribute('data-index');
        console.log(index);
        ulLi= [...document.querySelectorAll('#ul-box li')];
        let newArr = ulLi.slice( index );
        if( newArr.length > 1 )
            deleteAllFunc(newArr);
        console.log(newArr);
        newArr.forEach( function (element){
            element.classList.add('toggleClass', 'strikeThrough');

        });
    }
});

function updateDataAttr(){
    console.log('update attr')
    newCount = 0
    ulLi= [...document.querySelectorAll('#ul-box li')];
    console.log(ulLi)
    ulLi.forEach( function (element){
        element.setAttribute('data-index', newCount);
        newCount++;
    })
    console.log(newCount)
}
function deleteAllFunc(newArr){
    var deleteAll = document.createElement('button');
    deleteAll.innerText = 'Delete All The Selected';
    deleteAll.classList.add('deleteBtn');
    deleteAll.setAttribute('id', 'deleteBtnId')
    ulBox.appendChild(deleteAll);
    deleteAll.addEventListener('click', function(event){
        newArr.forEach( function(element){
            element.remove();
        })
    })
    deleteAll.remove();
    updateDataAttr();
    saveLists();
}
function saveLists(){
    localStorage.setItem('ulBox', JSON.stringify(ulBox.innerHTML));
}

function displayLists(){
    ulBox.innerHTML = JSON.parse(localStorage.getItem('ulBox')); //this is how JSON.parse should be 
    // console.log(ulLists);
}

