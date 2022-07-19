//1

//Маркер 2
// Реалізувати клас, що описує маркер, що заправляється, успадкувавши його 
// від простого маркера і додавши метод для заправки маркера. Продемонструвати роботу написаних методів

// class Marker {
//     constructor(color, rate) {
//       this.color = color;
//       this.rate = rate;
//     }

//     print(line) {
//       let t = document.getElementById("content");
//       for (let i = 0; i < line.length; i++) {
//         if (this.rate != 0) {
//           if (line[i] == " ") {
//             this.rate += 0.5;
//           }
//           t.innerHTML += line[i];
//           t.style.color = this.color;
//           this.rate -= 0.5;
//         } else {
//           document.write("Marker is empty");
//           break;
//         }
//       }
//     }
//   }

//   class FillMarker extends Marker {
//     fill(rate) {
//       if (rate > 100) {
//         rate = 100;
//       } else {
//         this.rate += rate;
//       }
//     }
//   }

//   let marker = new FillMarker("purple", 2);
//   marker.fill(75);
//   const l = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque officia itaque, vero voluptatum soluta unde, nemo dolor eos maxime, perferendis eligendi? A fugiat explicabo ea blanditiis atque asperiores ipsam tenetur.`;
//   marker.print(l);

// let message = ".... . -.-- .--- ..- -.. .";
// let Morse_alphabet = {
//     "-----": "0",
//     ".----": "1",
//     "..---": "2",
//     "...--": "3",
//     "....-": "4",
//     ".....": "5",
//     "-....": "6",
//     "--...": "7",
//     "---..": "8",
//     "----.": "9",
//     ".-": "a",
//     "-...": "b",
//     "-.-.": "c",
//     "-..": "d",
//     ".": "e",
//     "..-.": "f",
//     "--.": "g",
//     "....": "h",
//     "..": "i",
//     ".---": "j",
//     "-.-": "k",
//     ".-..": "l",
//     "--": "m",
//     "-.": "n",
//     "---": "o",
//     ".--.": "p",
//     "--.-": "q",
//     ".-.": "r",
//     "...": "s",
//     "-": "t",
//     "..-": "u",
//     "...-": "v",
//     ".--": "w",
//     "-..-": "x",
//     "-.--": "y",
//     "--..": "z",
//     "/": " ",
//     "-.-.--": "!",
//     ".-.-.-": ".",
//     "--..--": ","
// };
// let messageConverted = [];

// message.split("   ").map(function (word) {
//     word.split(" ").map(function (letter) {
//         messageConverted.push(Morse_alphabet[letter]);
//     });
//     messageConverted.push(" ");
// });

// console.log(messageConverted.join("")); //heyjude 

//3

// Клікер
// Створити html-сторінку з клікером.
// При кліку на кнопку "Додати" рахунок додається на 1
// При кліку на кнопку "Відняти" рахунок віднімається на 1

// let count = 0;

// let plus = function(){
//     count ++;
//     document.getElementById('result').innerHTML = count;
// }
// let minus = function(){
//     count --;
//     document.getElementById('result').innerHTML = count;
// }

// document.getElementById('btn1').onclick = plus;
// document.getElementById('btn2').onclick = minus;