const input = document.querySelector('#validation-input');
const sybmolsCount = parseInt(input.dataset.length);

input.addEventListener('change', function(e){
    if(e.target.value.length === sybmolsCount){
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else{
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
})