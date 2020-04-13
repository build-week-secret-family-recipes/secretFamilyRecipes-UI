

const mouseEvent = document.querySelector("nav");
mouseEvent.addEventListener("mouseover", function(event) {
    event.target.style.color = "#e3e3e3";

    setTimeout(function() {
      event.target.style.color = "#a00000";
    }, 500);
});


