const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', function(e){
    if(e.target.value !== ''){
        output.textContent = e.target.value;
    } else{
        output.textContent = 'незнакомец';
    }
})