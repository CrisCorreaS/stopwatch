const START_BTN = document.querySelector(".start-btn");
const STOP_BTN = document.querySelector(".stop-btn");
const RESET_BTN = document.querySelector(".reset-btn");
const HOURS = document.querySelector(".hour");
const MINUTES = document.querySelector(".minute");
const SECONDS = document.querySelector(".second");

let time = [0, 0, 0];
let timerId = 0;

START_BTN.addEventListener("click", start, false);

function start() {
    START_BTN.classList.add("disable");

    if (timerId != 0) {
        return;
    }

    timerId = setInterval(() => { 
        time[2]++;

        if (time[2] == 60) {
            time[2] = 0;
            time[1]++;
        }

        if (time[1] == 60) {
            time[1] = 0;
            time[0]++;
        }

        printTime();
    }, 1000);
}

function printTime() {
    HOURS.innerText = time[0].toString().padStart(2, "0").padEnd(4, " :");
    MINUTES.innerText = time[1].toString().padStart(2, "0").padEnd(4, " :");
    SECONDS.innerText = time[2].toString().padStart(2, "0");
}