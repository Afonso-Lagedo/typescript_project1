const input1 = document.getElementById('num1') as HTMLInputElement;
const input2 = document.getElementById('num2') as HTMLInputElement;

const btnSum =document.getElementById('btnSum') as HTMLElement;
const btnSub =document.getElementById('btnSub') as HTMLElement;

function sum (a:number, b:number){
    return a + b;
}

function sub(a:number, b:number){
    return a - b;
}

btnSum.addEventListener('click', function(){
    const result = sum(Number(input1.value),Number(input2.value));
    console.log(result) 
})

btnSub.addEventListener('click', function(){
    const result = sub(Number(input1.value),Number(input2.value));
    console.log(result) 
})