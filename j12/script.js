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
//Dino`s
const dinoOne = document.getElementById('dinoOne');
const dinoTwo = document.getElementById('dinoTwo');
const dinoThree = document.getElementById('dinoThree');
const dinoFour = document.getElementById('dinoFour');
const dinoFive = document.getElementById('dinoFive');
const dinoSix = document.getElementById('dinoSix');
const dinoSeven = document.getElementById('dinoSeven');
const dinoEight = document.getElementById('dinoEight');
const dinoNine = document.getElementById('dinoNine');
const dinoTen = document.getElementById('dinoTen');
const dinoEleven = document.getElementById('dinoEleven');
const dinoTwelve = document.getElementById('dinoTwelve');
const dinoThirtn = document.getElementById('dinoThirtn');
const dinoFourtn = document.getElementById('dinoFourtn');
const dinoFivetn = document.getElementById('dinoFivetn');



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