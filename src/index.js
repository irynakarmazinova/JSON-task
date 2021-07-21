import jsonmenu from './my-file.json';
import './css/styles.css';

// вывести списком этот отсортированный список
const ulJsEl = document.querySelector('.js-menu');

function createGalleryItems(items) {
  return items.reduce((acc, { name, image }) => {
    acc = `${acc} <li class="menu__item">
      <article class="card">
        <img
          src="${image}"
          alt="${name}"
          class="card__image"
        />
       
      </article>
    </li>
        `;
    return acc;
  }, '');
}
ulJsEl.insertAdjacentHTML('beforeend', createGalleryItems(jsonmenu));

//  вывести все, что дороже 240 кредитов
const filterPrice = jsonmenu.filter(({ price }) => {
  if (price > 240) {
    console.log(price);

    //   как вывести только те карточки, которые подхоят под условие?
  }
});

// вывести все, в чем нет помидоров в ингридиентах
// const filterNoTomatos = jsonmenu.filter(({ ingredients }) => {
//   if (!ingredients.includes('Помидоры')) {
//     console.log(ingredients);
//   }
// });

// сортировка цены по возрастанию
// const sortPriceUp = jsonmenu.sort(function (a, b) {
//   return a.price - b.price;
// });
// console.log(sortPriceUp);

// созтировка имени в алфавитном порядке
// const sortNameAlphabetically = jsonmenu.sort(function (a, b) {
//   const nameA = a.name.toLowerCase();
//   const nameB = b.name.toLowerCase();

//   //сортируем строки по возрастанию
//   if (nameA < nameB) {
//     return -1;
//   }
//   if (nameA > nameB) {
//     return 1;
//   }

//   return 0; // Никакой сортировки
// });
// console.log(sortNameAlphabetically);
