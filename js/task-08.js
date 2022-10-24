const boxes = document.querySelector('#boxes');

const input = document.querySelector('#controls input');
const btn1 = document.querySelector('#controls button[data-action="render"]')
const btn2 = document.querySelector('#controls button[data-action="destroy"]')

const elements = [];

btn1.addEventListener('click', function(){
    const quantity = input.value;
    for (let i = 0; i < quantity; i++) {
        if(elements.length !== 0){
            elements.push({color: `rgb(${randomNumber(0, 255)}, ${randomNumber(0, 255)}, ${randomNumber(0, 255)})`, width: (elements[elements.length - 1].width+10), height: (elements[elements.length - 1].height+10)});
            console.log(elements);
        } else{
            elements.push({color: `rgb(${randomNumber(0, 255)}, ${randomNumber(0, 255)}, ${randomNumber(0, 255)})`, width: 30, height: 30});
        }
    }
    
    showBoxes(elements);
})
btn2.addEventListener('click', function(){
    const quantity = input.value;
    for (let i = 0; i < quantity; i++) {
        elements.pop()
    }
    
    showBoxes(elements);
})

function showBoxes(elements){
    boxes.innerHTML = '';
    elements.forEach(elem => {
        boxes.innerHTML += `<div style="background: ${elem.color};width: ${elem.width}px; height: ${elem.height}px"></div>`
    });
}

function randomNumber(min, max) { 
    return Math.random() * (max - min) + min;
} 