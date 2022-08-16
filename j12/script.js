import Functions from './function.js';
//Const`s
const play = document.getElementById('play');
const choose = document.getElementById('choose');
const exit = document.getElementById('exit');
const back = document.getElementById('back');
const letsGo = document.getElementById('playDino');
const startBlock = document.querySelector('.start__block');
const playBlock = document.querySelector('.play__block');
const chooseBlock = document.querySelector('.choose__block');
const container = document.querySelectorAll(':is(.parent) img');



play.onclick = function () {
    startBlock.style.display = 'none';
    playBlock.style.display = 'block';
    letsGo.style.animation = 'pulsing 2s infinite';
}

choose.onclick = function () {
    startBlock.style.display = 'none';
    chooseBlock.style.display = 'block';
    for (const element of container) {
        element.style.display = 'block';
    }
}

exit.onclick = function () {
    alert("Goodbye!");
    location.reload();
}

back.onclick = function () {
    startBlock.style.display = 'flex';
    playBlock.style.display = 'none';
}
