let a = '';
let b = '';
let sign = '';
let finish = 'false';
const output = document.querySelector('.calc-screen p');
const ac = document.querySelector('.ac');
const btns = document.querySelector('.buttons');

const numbers = ['0','1','2','3','4','5','6','7','8','9','.'];
const act = ['-','+','X','/','%'];

ac.onclick = function Clear(){
    let a = '';
    let b = '';
    let sign = '';
    let finish = 'false';
    output.textContent = '0';
};

btns.onclick = (event) => {
    if(!event.target.classList.contains('btn')) return;
    if(event.target.classList.contains('ac')) return;

    output.textContent = '';

    const key = event.target.textContent;

    if(numbers.includes(key)){
        if(b === '' && sign === ''){
            a+=key;
            console.log(a, b, sign);
            output.textContent = a;
        }
        else if(a !=='' && b !== '' && finish){
            b = key;
            finish = false;
            output.textContent = b;
        }
        else{
             b+= key;
             output.textContent = b;
        }     
        console.log(a, b, sign);
        return;
    }

    if(act.includes(key)){
        sign = key;
        output.textContent = sign;
        console.log(sign);
        return;
    }

    if(key === '='){
        if(b === '') b = a;
        switch (sign){
            case "+":
                a = (+a) + (+b);
                break;

            case "-":
                a = (+a) - (+b);
                break;

            case "X":
                a = (+a) * (+b);
                break;
                    
            case "/":
                if(b === '0'){
                    output.textContent = 'Error!';
                    a = '';
                    b = '';
                    sign = '';
                    return
                }
                a = (+a) / (+b);
                break;

            case "%":
                a = (+a) / 100;
                break;
        }
        finish = true;
        output.textContent = a;
        console.log(a, b, sign)
    }


}