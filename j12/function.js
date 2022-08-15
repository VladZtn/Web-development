const play = document.getElementById('play');
const choose = document.getElementById('choose');
const exit = document.getElementById('exit');
const back = document.getElementById('back');
const startBlock = document.querySelector('.start__block');
const playBlock = document.querySelector('.play__block');
const chooseBlock = document.querySelector('.choose__block');
const container = document.querySelectorAll(':is(.parent) img');
//Dino
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


let Functions = {

    0: function clear() {
        for (const element of container)
            element.style.display = 'none';
    },

    one: dinoOne.onclick = function () {
        for (const element of container)
            element.style.display = 'none';
        dinoOne.style.display = 'block';
        dinoOne.style.animation = 'pulsing 2s infinite';
    },

    two: dinoTwo.onclick = function () {
        for (const element of container)
            element.style.display = 'none';
        dinoTwo.style.display = 'block';
        dinoTwo.style.animation = 'pulsing 2s infinite';
    },

    three: dinoThree.onclick = function () {
        for (const element of container)
            element.style.display = 'none';
        dinoThree.style.display = 'block';
        dinoThree.style.animation = 'pulsing 2s infinite';
    },

    four: dinoFour.onclick = function () {
        for (const element of container)
            element.style.display = 'none';
        dinoFoure.style.display = 'block';
        dinoFour.style.animation = 'pulsing 2s infinite';
    },

    five: dinoFive.onclick = function () {
        for (const element of container)
            element.style.display = 'none';
        dinoFive.style.display = 'block';
        dinoFivee.style.animation = 'pulsing 2s infinite';
    },

    six: dinoSix.onclick = function () {
        for (const element of container)
            element.style.display = 'none';
        dinoSix.style.display = 'block';
        dinoSix.style.animation = 'pulsing 2s infinite';
    },

    seven: dinoSeven.onclick = function () {
        for (const element of container)
            element.style.display = 'none';
        dinoSeven.style.display = 'block';
        dinoSeven.style.animation = 'pulsing 2s infinite';
    },

    eight: dinoEight.onclick = function () {
        for (const element of container)
            element.style.display = 'none';
        dinoEight.style.display = 'block';
        dinoEight.style.animation = 'pulsing 2s infinite';
    },


    nine: dinoNine.onclick = function () {
        for (const element of container)
            element.style.display = 'none';
        dinoNine.style.display = 'block';
        dinoNine.style.animation = 'pulsing 2s infinite';
    },

    ten: dinoTen.onclick = function () {
        for (const element of container)
            element.style.display = 'none';
        dinoTen.style.display = 'block';
        dinoTen.style.animation = 'pulsing 2s infinite';
    },
    eleven: dinoEleven.onclick = function () {
        for (const element of container)
            element.style.display = 'none';
        dinoEleven.style.display = 'block';
        dinoEleven.style.animation = 'pulsing 2s infinite';
    },
    twelve: dinoTwelve.onclick = function () {
        for (const element of container)
            element.style.display = 'none';
        dinoTwelve.style.display = 'block';
        dinoTwelve.style.animation = 'pulsing 2s infinite';
    },
    thirteenth: dinoThirtn.onclick = function () {
        for (const element of container)
            element.style.display = 'none';
        dinoThirtn.style.display = 'block';
        dinoThirtn.style.animation = 'pulsing 2s infinite';
    },
    fourteenth: dinoFourtn.onclick = function () {
        for (const element of container)
            element.style.display = 'none';
        dinoFourtn.style.display = 'block';
        dinoFourtn.style.animation = 'pulsing 2s infinite';
    },
    fifteenth: dinoFivetn.onclick = function () {
        for (const element of container)
            element.style.display = 'none';
        dinoFivetn.style.display = 'block';
        dinoFivetn.style.animation = 'pulsing 2s infinite';
    }
}

export default Functions;