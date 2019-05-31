


let mouseEvent = document.getElementsByTagName("nav");
mouseEvent.addEventListener("mouseover", function(event) {
    event.target.style.color = "#e3e3e3";

    setTimeout(function() {
        event.target.style.color = "#521eb3";
    }, 900);

    mouseEvent();
});

// Move Logo

// TweenMax.to(moveLogo, 5, {x:179, y:1176, scale:2, skewX:45, rotation:360});


// // Set Timeout then move logo back to start

// setTimeout(() => {
// TweenMax.to(moveLogo, 5, {x:46, y:4, scale:2, skewX:45, rotation:360});

// }, 155000);

// ///-------------------------------------------------------------------------------
// // .preventDefault() nav bar links home is set to a link that would open new page
// document.querySelector('a').addEventListener('click',function(event){
//  event.preventDefault();
// });
