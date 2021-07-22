import jsonmenu from './my-file.json';
import './css/styles.css';

// вывести списком этот отсортированный список
const ulJsEl = document.querySelector('.js-menu');

//  вывести все, что дороже 240 кредитов
const filteredPrice = jsonmenu.filter(({ price }) => {
  // if (price > 240) {
  //   console.log(price);
  // так вывожу в консоль 2 цены, которые больше, чем 240
  // }

  return price > 240; //так вывожу в консоль массив из 2х объектов, где цена больше,чем 240

  // переменная filteredPrice - в неё не надо ничего передавать, это уже отфильтрованый массив, возвращает его же
  // переменная filterPrice - функция, возвращает функцию
});

console.log(filteredPrice);

// вывести все, в чем нет помидоров в ингридиентах
const filteredNoTomatos = jsonmenu.filter(({ ingredients }) => {
  // if (!ingredients.includes('Помидоры')) {
  //   console.log(ingredients);
  // }

  return !ingredients.includes('Помидоры');
});
console.log(filteredNoTomatos);

// сортировка цены по возрастанию
const sortedPriceUp = jsonmenu.sort(function (a, b) {
  return a.price - b.price;
});
console.log(sortedPriceUp);

// сортировка имени в алфавитном порядке
const sortedNameAlphabetically = jsonmenu.sort(function (a, b) {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();

  //сортируем строки по возрастанию
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  return 0; // Никакой сортировки
});
console.log(sortedNameAlphabetically);

//   добавить в DOM только те элементы, которые подходят под условие(в createGalleryItems(название переменной))
function createGalleryItems(items) {
  return items.reduce((acc, { name, description, image, price, ingredients }) => {
    acc = `${acc} <li class="menu__item">
  <article class="card">
    <img
      src="${image}"
      alt="${name}"
      class="card__image"
    />
    <div class="card__content">
      <h2 class="card__name">${name}</h2>
      <p class="card__price">
        <i class="material-icons"> monetization_on </i>
        ${price} кредитов
      </p>

      <p class="card__descr">
        ${description}
      </p>

      <ul class="tag-list">
        <li class="tag-list__item">${ingredients[0]}</li>
        <li class="tag-list__item">${ingredients[1]}</li>
        <li class="tag-list__item">${ingredients[2]}</li>
        <li class="tag-list__item">${ingredients[3]}</li>
        <li class="tag-list__item">${ingredients[4]}</li>
        <li class="tag-list__item">${ingredients[5]}</li>
      </ul>
    </div>

    <button class="card__button button">
      <i class="material-icons button__icon"> shopping_cart </i>
      В корзину
    </button>
  </article>
</li>
      `;
    return acc;
  }, '');
}
ulJsEl.insertAdjacentHTML('beforeend', createGalleryItems(filteredPrice));
