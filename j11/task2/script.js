let timeCounter = 31;
let counter = 0;
let circleBlock = document.getElementById('btn-circle');
const elem = document.querySelector('.timer');
const timerId = setInterval(countdown, 1000);
    

document.querySelector('.btn').onclick = function () {
    document.getElementById('btn1').hidden = true;
    document.getElementById('text').style.display = "block";
    document.getElementById('btn-circle').style.display = "block";
    document.getElementById('btn-circle').onclick = clicks;
    document.getElementById('output').onclick = clicks;
}

function countdown() {
    while(timeCounter != 0){
        timeCounter--;
        document.querySelector('.timer').innerText = timeCounter;
    }clearInterval(timerId);
       
}

function clicks(){
    counter++;
    document.getElementById('output').innerText = counter;
}
