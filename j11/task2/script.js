let counter = 0;
let timeElm = document.querySelector('.timer');
let circleBlock = document.getElementById('btn-circle');
const out = document.getElementById('output');
const elem = document.querySelector('.timer'); 
const text = document.getElementById('text');

document.querySelector('.btn').onclick = function () {
    document.getElementById('btn1').hidden = true;
    document.getElementById('text').style.display = "block";
    circleBlock.style.display = "block";
    circleBlock.onclick = clicks;
    document.getElementById('output').onclick = clicks;
}

function clicks(){
    counter++;
    document.getElementById('output').innerText = counter;
}

function Clear(){
    circleBlock.style.display = 'none';
    text.style.display = 'none';
    out.disabled = true;
    let outText = 'You`r result:';
    document.querySelector('.outText').innerText = outText;
}

function timer(x) {
    if(x === -1) {
        Clear()
        return;
    }
    timeElm.innerHTML = x;
    return setTimeout(() => {timer(--x)}, 1000)
}
timer(30)
