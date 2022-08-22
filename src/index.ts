const input1 = document.getElementById('num1') as HTMLInputElement;
const input2 = document.getElementById('num2') as HTMLInputElement;

const btnSum =document.getElementById('btnSum') as HTMLElement;
const btnSub =document.getElementById('btnSub') as HTMLElement;


interface Values{
    a:number;
    b:number;
}

/*function sum (value:Values): number{
    return value.a + value.b;
}*/
//OR
function sum ({a,b}:Values):number{
    return a +b;
}

function sub({a,b}:Values):number{
    return a - b;
}

btnSum.addEventListener('click', function(){
    const result = sum({
        a: Number(input1.value),
        b: Number(input2.value),
    });
    console.log(result) 
})

btnSub.addEventListener('click', function(){
    const result = sub({
        a: Number(input1.value),
        b: Number(input2.value),
    });
    console.log(result) 
})