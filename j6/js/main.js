document.querySelector('button').onclick = score;

function score(){
    let firstnumb, secondnumb, sumb, result;

    firstnumb = document.getElementById('first-numb').value;
    secondnumb = document.getElementById('second-numb').value;
    sumb = document.getElementById('select').value;

    let arr = {
        first: firstnumb,
        second: secondnumb,
        act: sumb
    };

    result = eval(arr.first + arr.act + arr.second);
    document.getElementById('output').innerHTML = result;
    
}
