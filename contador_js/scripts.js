//--------------------modo 1
// let currentNumberWrapper = document.getElementById('currentNumber');
// let currentNumber = 0;

// function increment() {
//     currentNumber ++;
//     currentNumberWrapper.innerHTML = currentNumber;
// }

// function decrement() {
//     currentNumber --;
//     currentNumberWrapper.innerHTML = currentNumber;
// }

// ------------------modo 2 com addeventlistener
// exemplo
// element.addEventListener("click", myFunction);
// function myFunction() {
//   document.getElementById("demo").innerHTML = "Hello World";
// }

// let currentNumberWrapper = document.getElementById('currentNumber');
// let currentNumber = 0

// currentNumber.addEventListener("click");

// function decrement(){
//     currentNumber--;
//     currentNumberWrapper.innerHTML = currentNumber
// }

// function increment(){
//     currentNumber++;
//     currentNumberWrapper.innerHTML = currentNumber
// }

//--------------------modo 3 usando count
// let currentNumber = document.getElementById('currentNumber');
// let count = 0;

// function increment(){
//     count++; // count = count + 1
//     currentNumber.innerHTML = count
// }

// function decrement(){
//     count--;
//     currentNumber.innerHTML = count
// }

//------------mudando a cor
let currentNumber = document.getElementById('currentNumber');
let count = 0;

function increment(){
    count++;
    currentNumber.innerHTML = count;
    if (count > 0) {
        currentNumber.style.color = "black";
    }
}

function decrement() {
    count--;
    currentNumber.innerHTML = count;
    if (count < 0) {
        currentNumber.style.color = 'red';
    }
}


