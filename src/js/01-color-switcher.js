
const btnStart = document.querySelector("button[data-start]");
const btnStop = document.querySelector("button[data-stop]");
const body = document.querySelector("body");

let timer = null

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnStart.addEventListener('click',() => {
timer = setInterval(() => {
    body.style.backgroundColor = `${getRandomHexColor()}`
},1000);
btnStart.disabled = true;
btnStop.disabled = false;
})

btnStop.addEventListener('click',() => {
    clearInterval(timer);
    btnStop.disabled = true;
    btnStart.disabled = false;
})

  