


const mouseEvent = document.querySelectorAll("nav");
mouseEvent.addEventListener("mouseover", function(event) {
    event.target.style.color = "#a00000";

    setTimeout(function() {
        event.target.style.color = "#1f1f44";
    }, 900);

    mouseEvent();
});



// Move Logo

// TweenMax.to(moveLogo, 5, {x:179, y:1176, scale:2, skewX:45, rotation:360});


// // Set Timeout then move logo back to start

// setTimeout(() => {
// TweenMax.to(moveLogo, 5, {x:46, y:4, scale:2, skewX:45, rotation:360});

// }, 155000);