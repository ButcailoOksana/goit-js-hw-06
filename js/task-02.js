const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const listAllEl = document.querySelector('ul#ingredients');
console.log(listAllEl);

const itemEl = document.createElement('li');
const item = itemEl.classList.add('item');

const markup = ingredients.map(ingredient => `<li class="item">${ingredient}</li>`).join('');

console.log(markup);
listAllEl.innerHTML = markup;