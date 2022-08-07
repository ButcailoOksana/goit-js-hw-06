const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// const listAllEl = document.querySelector('ul.gallery');
// console.log(listAllEl);

// const itemEl = document.createElement('li');
// const item = itemEl.classList.add('item');
// const imageEl = document.createElement('img');
// const img = imageEl.classList.add('img');

// const markup = images
//   .map(image => `<li class="item"><img class="img" src="${image.url}" alt="${image.alt}"/></li>`)
//   .join('');
// console.log(markup);

// listAllEl.insertAdjacentHTML('beforeend', markup);

const listEl = document.querySelector(".gallery");

const markup = images
  .map(
    (image) =>
      `<li><img src = "${image.url}" alt = "${image.alt}" width = 320 height   ></li>`
  )
  .join("");

listEl.insertAdjacentHTML("beforeend", markup);
