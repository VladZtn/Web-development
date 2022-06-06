// 4. Чек-методи Створити масив, який описує чек у магазині. Кожен елемент масиву складається із назви товару, кількості та ціни за одиницю товару. Написати такі функції.

// Роздруківка чека на екран.

// Підрахунок загальної суми покупки.

// Отримання найдорожчої покупки у чеку.

// Підрахунок середньої вартості одного товару у чеку.


let count0 = Number(prompt('Введите количество буханок хлеба'));
let count1 = Number(prompt('Введите количество бутылок с молоком'));
let count2 = Number(prompt('Введите количество яблок'));

var arr = [
  {
    name: 'Bread',
    amt: count0,
    price: 12
  },
  {
    name: 'Milk',
    amt: count1,
    price: 24
  },
  {
    name: 'Apple',
    amt: count2,
    price: 6
  }
]

let cost0 = arr[0].amt * arr[0].price;
let cost1 = arr[1].amt * arr[1].price;
let cost2 = arr[2].amt * arr[2].price;

var check = function(){
console.log('Наименнование продукта: '+arr[0].name +', ' +' Количество:', arr[0].amt +', ' + 'Цена:', cost0 +' UAH')
console.log('Наименнование продукта: '+arr[1].name +', ' +' Количество:', arr[1].amt +', ' + 'Цена:', cost1 +' UAH')
console.log('Наименнование продукта: '+arr[2].name +', ' +' Количество:', arr[2].amt +', ' + 'Цена:', cost2 +' UAH')
}


var all = function(){
    var all_cost = cost0 + cost1 + cost2;
    console.log('Общая сумма покупок: ' +all_cost + ' UAH');
}

var expensive = function(){
    var max = Math.max(cost0, cost1, cost2)
        console.log('Самая дорогая покупка: ' +max+ ' UAH');
}  

var average = function(){
    var medium0 = arr[0].price / cost0;
    var medium1 = arr[1].price / cost1;
    var medium2 = arr[2].price / cost2;
    console.log('Средняя цена Хлеба - ' + Math.round(medium0) +' UAH , ' 
    + 'Средняя цена Молока - '+ Math.round(medium1) +' UAH , '
    + 'Средняя цена Яблок - ' + Math.round(medium2) +' UAH');
}

check()
all()
expensive()
average()
