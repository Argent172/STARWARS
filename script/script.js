function start() {
    supernova.style.animation = "Explosion 1s linear";
    btn.style.display = "none";
    wrapper.style.display = "flex";
    title.style.animation = "MoveTitle 12s 0.5s";
    setTimeout(function() {
        var audio = new Audio('title1.mp3');
        audio.play();
    }, 2000);
}


// document.addEventListener("DOMContentLoaded", function() {
    btn.addEventListener('click', start);
// });