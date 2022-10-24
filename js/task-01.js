const list = document.querySelector('#categories');

const listItems = document.querySelectorAll('#categories .item');
const listItemsArray = Array.from(listItems);

console.log(`У списку ${listItems.length} категорії.`);

listItemsArray.forEach((item) => {
    const titleElem = item.querySelector('h2');
    const categoryName = titleElem.textContent;
    const itemList = item.querySelector('ul');
    const itemListElements = itemList.querySelectorAll('li');
    const quantity = itemListElements.length;
    console.log(
        `Категорія: ${categoryName}
Кількість елементів: ${quantity}`)
});