const range = document.querySelector('#font-size-control');
const textElem = document.querySelector('#text');

range.addEventListener('input', function(e){
    textElem.style.fontSize = e.target.value + 'px';
})