let counterValue = 0;
const valueElement = document.querySelector('#value');

const button1 = document.querySelector('button[data-action="decrement"]');

const button2 = document.querySelector('button[data-action="increment"]');

function decrement(){
    counterValue--;
    showResult()
}
function increment(){
    counterValue++;
    showResult()
}

function showResult(){
    valueElement.textContent = counterValue;
}

button1.addEventListener('click', function(){
    decrement();
});

button2.addEventListener('click', function(){
    increment();
});