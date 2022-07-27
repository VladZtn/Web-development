//Elements
const hourElem = document.querySelector('.hour');
const minElem = document.querySelector('.min');
const secElem = document.querySelector('.sec');
const millsecElem = document.querySelector('.mills');
//Buttons
const startButton = document.querySelector('.start');
const pauseButton = document.querySelector('.pause');
const circleButton = document.querySelector('.circle');
const stopButton = document.querySelector('.stop');
//StartButton
startButton.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
});

//PauseButton
pauseButton.addEventListener('click', () => {
    clearInterval(interval);
});

//CircleButton
circleButton.addEventListener('click', () => {
    clearInterval(interval);
    const result = document.querySelector('.output');
    const block = document.createElement('div');
    block.innerText = `Result: ${hour}:${minute}:${second}:${milliesecond}`;
    result.append(block);
    clear();
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
});
//StopButton
stopButton.addEventListener('click', () => {
    clearInterval(interval);
    clear();
});
//Var
let interval;
let hour = 00;
let minute = 00;
let second = 00;
let milliesecond = 00;

function startTimer() {
    milliesecond++;
    //Milliseconds
    if (milliesecond < 9) {
        millsecElem.innerText = '0' + milliesecond;
    }
    if (milliesecond > 9) {
        millsecElem.innerText = milliesecond;
    }
    if (milliesecond > 99) {
        second++;
        secElem.innerText = '0' + second;
        milliesecond = 0;
        millsecElem.innerText = '0' + milliesecond;
    }
    //Seconds
    if (second < 9) {
        secElem.innerText = '0' + second;
    }
    if (second > 9) {
        secElem.innerText = second;
    }
    if (second > 59) {
        minute++;
        minElem.innerText = '0' + minute;
        second = 0;
        secElem.innerText = '0' + second;
    }
    //Minutes
    if (minute < 9) {
        minElem.innerText = '0' + minute;
    }
    if (minute > 9) {
        minElem.innerText = minute;
    }
    if (minute > 59) {
        hour++;
        hourElem.innerText = '0' + hour;
        minute = 0;
        minElem.innerText = '0' + minute;
    }
    //Hours
    if (hour < 9) {
        hourElem.innerText = '0' + hour;
    }
    if (hour > 9) {
        hourElem.innerText = hour;
    }
    if (hour > 60) {
        hour++;
        hourElem.innerText = '0' + hour;
        hour = 0;
        hourElem.innerText = '0' + hour;
    }
}
//ClearTimer
function clear() {
    hour = 00;
    minute = 00;
    second = 00;
    milliesecond = 00;
    hourElem.textContent = '00';
    minElem.textContent = '00';
    secElem.textContent = '00';
    millsecElem.textContent = '00';
}