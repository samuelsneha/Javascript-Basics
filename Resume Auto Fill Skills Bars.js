var skillSection = document.getElementById('skills');
var contactUsSection = document.getElementById('CONTACTUS');
var skills = [...document.querySelectorAll('.widthcolor')];
console.log(contactUsSection);
console.log(skillSection);
console.log(skills);
// var desiredTop = skillSection.getBoundingClientRect().top;
// console.log(desiredTop); //? why is this giving negative values
var desiredTop = skillSection.offsetTop;
console.log(desiredTop);
var desiredDown = contactUsSection.offsetTop;
console.log(desiredDown);

document.addEventListener('scroll', function(event){
    console.log('its scrolling');
    if( window.scrollY >= desiredTop  && window.scrollY < desiredDown ){
        console.log('its reached');
        skills.forEach( function(element){
            element.classList.add('added');//? why is the logic not working and they have used setInterval again?
        });                                //same doubt related to transition in Online Resume Project
    }
});
