function start() {
    supernova.style.animation = "Explosion 1s linear";
    btn.style.display = "none";
    setTimeout(function() {
    wrapper.style.display = "flex";
    title.style.animation = "MoveTitle 12s 0.5s";
    }, 800);
    setTimeout(function() {
        var audio = new Audio('title1.mp3');
        audio.play();
    }, 2400);
}
    btn.addEventListener('click', start);