let timerCounter = 0;
let counter = 0;
const startText = document.querySelector('.startText');
const hzBlock = document.querySelector('.clicker');
const timeElm = document.querySelector('.timer');
const circleBlock = document.getElementById('btn-circle');
const out = document.getElementById('output');
const elem = document.querySelector('.timer'); 
const text = document.getElementById('text');
const restart = document.getElementById('again');


document.querySelector('.btn').onclick = function () {
    document.getElementById('btn1').hidden = true;
    document.querySelector('.btn').onclick = timer(30);
    startText.style.display = "none";
    text.style.display = "block";
    hzBlock.style.display = "flex";
    circleBlock.style.display = "block";
    circleBlock.onclick = clicks;
    out.onclick = clicks;
}

function clicks(){
    counter++;
    document.getElementById('output').innerText = counter;
}

function Clear(){
    circleBlock.style.display = 'none';
    text.style.display = 'none';
    restart.style.display = 'block';
    out.disabled = true;
    let outText = 'Your result:';
    document.querySelector('.outText').innerText = outText;
}

function timer(timerCounter) {
    if(timerCounter === -1) {
        Clear()
        return;
    }
    timeElm.innerHTML = timerCounter;
    return setTimeout(() => {timer(--timerCounter)}, 1000)
}
