const first = Number(prompt('Введите первое значение диапазона (от 10 до 99)'));
const second = Number(prompt('Введите второе значение диапазона (от 10 до 99)'));

if(first <10 || first >90 || second <10 || second >90 ){
  alert('Введите правильное значение!');
}else{
  for(i = first; i < second; i++){
    const str = String(i);
    str[0] === str[1] && console.log(i);
  }
}


// 2. Рисование в консоли
// Создайте веб-приложение, в котором пользователь вводит ширину и символ. 
// Вывести в консоль линию заданной ширины заданным символом

var len = Number(prompt('Введите длину отрезка'));
var symbol = prompt('Введите символ');
var str = "";
while(len--){
    str += symbol;
}
console.log(str);
