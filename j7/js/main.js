function name(){
    let NamesOfMale = ['Oliver','Jack','Harry','Richard','Charles','Joseph','Daniel','Paul','Timothy','Jose','Larry','Jeffrey','Frank','Eric','Stephen','Joshua','Raymond','Ryan'];
    let randomMale = Math.floor(Math.random()*NamesOfMale.length);
    let malevalue = NamesOfMale[randomMale];
        return malevalue
}

function RandomTime(){
    let min = 0.05;
    let max = 60;
    let randomTime = Math.random() * (max - min) + min; 
        return randomTime
}

function Runners(randomTime, malevalue){
let sum1,sum2,sum3;
let firstRunner = {
  name: name(),
  firstResult: RandomTime().toFixed(2),
  secondResult: RandomTime().toFixed(2),
  thirdResult: RandomTime().toFixed(2)
}
console.log(firstRunner)
document.getElementById('name1').innerHTML = firstRunner.name;
document.getElementById('1.1').innerHTML = firstRunner.firstResult;
document.getElementById('1.2').innerHTML = firstRunner.secondResult;
document.getElementById('1.3').innerHTML = firstRunner.thirdResult;


let secondRunner = {
  name: name(),
  firstResult: RandomTime().toFixed(2),
  secondResult: RandomTime().toFixed(2),
  thirdResult: RandomTime().toFixed(2)
}
console.log(secondRunner)
document.getElementById('name2').innerHTML = secondRunner.name;
document.getElementById('1.1').innerHTML = secondRunner.firstResult;
document.getElementById('2.2').innerHTML = secondRunner.secondResult;
document.getElementById('2.3').innerHTML = secondRunner.thirdResult;


let thirdRunner = {
    name: name(),
    firstResult: RandomTime().toFixed(2),
    secondResult: RandomTime().toFixed(2),
    thirdResult: RandomTime().toFixed(2)
  }
console.log(thirdRunner)
document.getElementById('name3').innerHTML = thirdRunner.name;
document.getElementById('3.1').innerHTML = thirdRunner.firstResult;
document.getElementById('3.2').innerHTML = thirdRunner.secondResult;
document.getElementById('3.3').innerHTML = thirdRunner.thirdResult;


sum1 = Number(firstRunner.firstResult) + Number(firstRunner.secondResult) + Number(firstRunner.thirdResult);
sum2 = Number(secondRunner.firstResult) + Number(secondRunner.secondResult) + Number(secondRunner.thirdResult);
sum3 = Number(thirdRunner.firstResult) + Number(thirdRunner.secondResult) + Number(thirdRunner.thirdResult);
console.log(' Время первого спортсмена - '+sum1.toFixed(2)+'\n Время второго спортсмена - '+sum2.toFixed(2)+'\n Время третьего спортсмена - '+sum3.toFixed(2));

let lazy = (sum1 < sum2 && sum1 < sum3)  ?  console.log('Самый медленный плавец - ' + firstRunner.name) 
:(sum2 < sum1 && sum2 < sum3)  ? console.log('Самый медленный плавец - ' + secondRunner.name) 
:(sum3 < sum1 && sum3< sum2) ? console.log('Самый медленный плавец - ' + thirdRunner.name): 'Error'

let speedy = (sum1 > sum2 && sum1 > sum3)  ?  console.log('Самый быстрый плавец - ' + firstRunner.name) 
:(sum2 > sum1 && sum2 > sum3)  ? console.log('Самый быстрый плавец - ' + secondRunner.name) 
:(sum3 > sum1 && sum3 > sum2) ? console.log('Самый быстрый плавец - ' + thirdRunner.name): 'Error'

}
name()
RandomTime()
Runners()


//3

// let gender = prompt('Enter your gender (Male  or Female)');

// let NamesOfMale = [
//   'Oliver','Jack','Harry','Jacob','Charley',
//   'Thomas','George','Oscar','James','William',
//   'Noah','Liam','Mason','Jacob','William',
//   'Ethan','Michael','Alexander','James','Daniel ',
//   'Abraham','Adam','John','Robert','David',
//   'Richard','Charles','Joseph','Daniel','Paul',
//   'Mark','Donald','Kenneth','Steven','Edward	',
//   'Brian','Ronald','Anthony','Kevin','Danny',
//   'Timothy','Jose','Larry','Jeffrey','Frank',
//   'Eric','Stephen','Joshua','Raymond','Ryan'
// ];

// let NamesOfFemale = [
//     'Agata','Agnes','HarrAdelaiday','Ida','Iris',
//     'Alice','Amanda','Amelia','Anastasia','Angelina',
//     'Ann','Ariel','Arya','Barbara','Beatrice',
//     'Bridget','Britney','Batty','Valery','Vanessa ',
//     'Wendy','Veronica','Vivian','Victoria','Viola',
//     'Gabriel','Gwen','Gwinnett','Gloria','Grace',
//     'Debra','Juliet','Jane','Janice	','Jenny	',
//     'Jennifer','Jessie','Jessica','Gill','Gina',
//     'Joan','Jodie','Joyce','Jocelyn','Judy',
//     'Julia','June','Diana','Dorothy','Eva'
// ];

// function random(){

// let max = 82;
// let min = 1;
// let age = Math.floor(Math.random()* (max - min) + min);

// if(gender === 'Male' || gender === 'male'){
//     let randomMale = Math.floor(Math.random()*NamesOfMale.length);
//     let malevalue = NamesOfMale[randomMale];
//     console.log('Name: ' + malevalue +', age: ' + age +', gender: male')
// }else if(gender === 'Female'|| gender === 'female'){
//     let randomFemale = Math.floor(Math.random()*NamesOfFemale.length);
//     let femalevalue = NamesOfFemale[randomFemale];
//     console.log('Name: ' + femalevalue +', age: ' + age +', gender: female')
   
// }
// }
// random()
