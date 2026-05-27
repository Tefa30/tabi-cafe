let slides = document.querySelectorAll(".carousel img");
let index = 0;

setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}, 3000); // cambia cada 3 segundos
const video = document.getElementById("storyVideo");

let usuarioInteractuo = false;

/* Detecta primer clic */

document.addEventListener("click", () => {

    usuarioInteractuo = true;

}, { once: true });

function controlarVideo() {

    const rect = video.getBoundingClientRect();

    const visible =
        rect.top < window.innerHeight * 0.7 &&
        rect.bottom > window.innerHeight * 0.3;

    if (visible && usuarioInteractuo) {

        video.play();

    } else {

        video.pause();
    }
}

window.addEventListener("scroll", controlarVideo);

window.addEventListener("load", controlarVideo);