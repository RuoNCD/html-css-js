function startTimer() {
    startButton.disabled = true;
    stopButton.disabled = false;
    timerInterval = setInterval(() => {
        updateTimer();
    }, 10);
}
function updateTimer() {
    milisecond += 1;
    if (milisecond >= 100) {
        milisecond = 0;
        second++;
        if (second === 60) {
            second = 0;
            minute++;
            if (minute >= 60) {
                minute = 0;
                hours++;
            }
        }
    }
    timer.textContent = `${formatTimer(hours)}:${formatTimer(minute)}:${formatTimer(second)}.${formatTimer(milisecond)}`;
}
function formatTimer(number, width = 2) {
    return String(number).padStart(width, '0');
}
function resetTimer() {
    clearInterval(timerInterval);
    hours = 0;
    minute = 0;
    second = 0;
    milisecond = 0;
    timer.textContent = "00:00:00";
    startButton.disabled = false;
    stopButton.disabled = true;
}
function stopTimer() {
    clearInterval(timerInterval);
    stopButton.disabled = true;
    startButton.disabled = false;
}


const timer = document.getElementById("timer");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
let hours = 0;
let minute = 0;
let second = 0;
let milisecond = 0;
stopButton.disabled = true;
startButton.addEventListener("click", () => {
    startTimer();
});
stopButton.addEventListener("click", () => {
    stopTimer();
})
resetButton.addEventListener("click", () => {
    resetTimer();
})
