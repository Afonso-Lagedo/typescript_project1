"use strict";
const input1 = document.getElementById('num1');
const input2 = document.getElementById('num2');
const btnSum = document.getElementById('btnSum');
const btnSub = document.getElementById('btnSub');
function operations({ tipo, a, b }) {
    if (tipo === "SUM") {
        return a + b;
    }
    else {
        return a - b;
    }
}
btnSum.addEventListener('click', function () {
    const result = operations({
        tipo: "SUM",
        a: Number(input1.value),
        b: Number(input2.value),
    });
    console.log(result);
});
btnSub.addEventListener('click', function () {
    const result = operations({
        tipo: "SUB",
        a: Number(input1.value),
        b: Number(input2.value),
    });
    console.log(result);
});
