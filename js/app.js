let a = console.log
/* this block of code for make slider heighat like window height without the navbar */
const slider = document.querySelector(".slider");

slider.style.height = (window.innerHeight) - document.querySelector(".upper").clientHeight + "px";

document.querySelectorAll(".carousel-item").forEach(img => {

    img.style.height = (window.innerHeight) - document.querySelector(".upper").clientHeight + "px";

});


window.onresize = function (){
    
    slider.style.height = (window.innerHeight) - document.querySelector(".upper").clientHeight + "px";
    
    document.querySelectorAll(".carousel-item").forEach(img => {

        img.style.height = (window.innerHeight) - document.querySelector(".upper").clientHeight + "px";
    
    });
    
}

/* end slider height calculation */

