const input1 = document.getElementById('num1') as HTMLInputElement;
const input2 = document.getElementById('num2') as HTMLInputElement;

const btnSum =document.getElementById('btnSum') as HTMLElement;
const btnSub =document.getElementById('btnSub') as HTMLElement;

type Operations = "SUM" | "SUB";

interface Values{
    tipo: Operations;
    a:number;
    b:number;
}


function operations ({tipo, a, b}:Values):number{
    if (tipo ==="SUM"){
        return a+b;
    }else{
        return a-b;
    }
}



btnSum.addEventListener('click', function(){
    const result = operations({
        tipo: "SUM",
        a: Number(input1.value),
        b: Number(input2.value),
    });
    console.log(result) 
})

btnSub.addEventListener('click', function(){
    const result = operations({
        tipo: "SUB",
        a: Number(input1.value),
        b: Number(input2.value),
    });
    console.log(result) 
})