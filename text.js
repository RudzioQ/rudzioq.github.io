let i = 0;
let text = "Nice to meet U.";
const elem = document.getElementById("text");

function type() {
    if (i < text.length) {
        elem.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 80);
    }
}

let opacity_ = 0;
const elem2 = document.getElementById("content");

function opacity() {
    if (opacity_ < 100) {
        opacity_++;
        elem2.style.setProperty('opacity', `${opacity_}%`);
        setTimeout(opacity, 35 - (opacity_/ 1.5));
    } else {
        elem.innerHTML = "";
        elem.style.setProperty('opacity', `100%`);
        type();
    }
}

setTimeout(opacity, 700);
