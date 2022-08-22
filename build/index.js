"use strict";
const input1 = document.getElementById('num1');
const input2 = document.getElementById('num2');
const btnSum = document.getElementById('btnSum');
const btnSub = document.getElementById('btnSub');
function sum(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
btnSum.addEventListener('click', function () {
    const result = sum(Number(input1.value), Number(input2.value));
    console.log(result);
});
btnSub.addEventListener('click', function () {
    const result = sub(Number(input1.value), Number(input2.value));
    console.log(result);
});
