var button = document.getElementById('percentageButton');
document.addEventListener('DOMContentLoaded', function(event){
    console.log('its loaded');
    document.addEventListener('scroll', function(event){
        console.log('its scrolling');
        var scrolledTill = window.scrollY + (this.body.offsetHeight - this.body.clientHeight);//? how to get the scroll height properly?
        console.log(scrolledTill); 
        var actualHeight = this.body.offsetHeight
        console.log(actualHeight);
        var percent = Math.round((scrolledTill/actualHeight)*100);
        console.log(percent);
        button.textContent = percent + '%';
    })

})