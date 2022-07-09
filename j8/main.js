
// 2 Круг
// Реализуйте класс, описывающий круг. В классе должны находиться следующие компоненты:
// поле, сохраняющее радиус окружности;
// get-свойство, возвращающее радиус окружности;
// set-свойство, задающее радиус окружности;
// get-свойство, возвращающее диаметр окружности;
// метод, вычисляющий площадь круга;
// метод, вычисляющий длину круга.
// Продемонстрируйте работу свойств и методов.

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get radius() {
        return this.quality;
    }
    set radius(quality) {
        this.quality = quality;
    }
    get bore() {
        return this.quality * 2;
    }
    square() {
        return Math.PI * (this.quality ** 2);
    }
    circumference() {
        return Math.PI * this.quality * 2;
    }
}

let FirstCircle = new Circle(10);
console.log('радиус: ' + FirstCircle.radius);
console.log('диаметр: ' + FirstCircle.bore);
console.log('площадь: ' + FirstCircle.square().toFixed(2));
console.log('длина окружности: ' + FirstCircle.circumference().toFixed(2));

//3
// Подсчет IP-адресов
// Реализуйте функцию, которая получает два IPv4-адреса и возвращает количество адресов между ними 
//(включая первый, исключая последний).
// Все входные данные будут действительными IPv4-адресами в виде строк. Последний адрес всегда будет больше первого.
// Примеры ipsBetween("10.0.0.0", "10.0.0.50") === 50 ipsBetween("10.0.0.0", "10.0.1.0") === 256 ipsBetween("20.0.0.10", "20.0.1.0" ) === 246

const ipBetween = (ip1, ip2) => {
    let res = 0; const Ip1 = ip1.split("."); const Ip2 = ip2.split(".");
    for (i = 0; i < 4; i++) {
        if (isNaN(Ip1[i]) || isNaN(Ip2[i]) || Ip1[i] < 0 || Ip1[i] > 255 || Ip2[i] < 0 || Ip2[i] > 255) {
            return "Invalid IP!"
        }
        res += (Ip1[i] - Ip2[i]) * (256 ** (3 - i));
    }
    return Math.abs(res);
}

console.log(ipBetween("192.167.1.0", "192.168.1.1"));