const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const list = document.querySelector('#ingredients');

function createElem(name){
  const item = document.createElement('li');
  item.textContent = name;
  return item;
}

function createElements(list){
  const items = [];
  list.forEach(name => {
      items.push(createElem(name))
  });
  return items;
}

function setIngredients(){
  const items = createElements(ingredients);
  list.append(...items);
}

setIngredients();