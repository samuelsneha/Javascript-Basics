const inputRanges = [...document.querySelectorAll('[data-sizing]')];
console.log(inputRanges);
const colorBar = document.querySelector('#colorBar');
console.log(colorBar);
const textColor = document.querySelector('#textColor');
console.log(textColor);
const imageBox = document.querySelector('#imageBox');
const image = document.querySelector('#imageBox img')

inputRanges.forEach(function(element){
    element.addEventListener('change', function(event){
        console.log(this.name, this.value )
        console.log(this.dataset.sizing);
        const suffix = this.dataset.sizing;
        if( this.name == 'spacing' ){
            console.log('yes its spacing')
            imageBox.style.padding = this.value+ `${suffix}`; // this also works
            //imageBox.style.setProperty (`--${this.name}`, this.value + suffix); //this also works
        }
        else{
            console.log('yes its blur')
            // image.style.filter = `--${this.name(this.value)}` + `${suffix}`; //? not working. How to do
            // image.style.filter = `blur(${this.value}px)`; //this is how we do it
            image.style = `--blur:${this.value}px`; //better way to do it
        }

    })
})
colorBar.addEventListener('change', function(event){
    console.log(this.name, this.value)
    imageBox.style.backgroundColor = this.value;
})