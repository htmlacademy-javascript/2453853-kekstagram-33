import { PHOTOS_MAX } from './constants.js';
import { createDataPhoto } from './data.js';

/* разметка в html:
  <!-- Шаблон изображения случайного пользователя -->
  <template id="picture">
    <a href="#" class="picture">
      <img class="picture__img" src="" width="182" height="182" alt="Случайная фотография">
      <p class="picture__info">
        <span class="picture__comments"></span>
        <span class="picture__likes"></span>
      </p>
    </a>
  </template>

  <!-- Контейнер для изображений от других пользователей -->
    <section class="pictures  container">
      <h2 class="pictures__title  visually-hidden">Фотографии других пользователей</h2>
*/


const listPictures = document.querySelector('.pictures');
const elementPicture = document.querySelector('#picture')
  .content
  .querySelector('.picture__img');
const dataPhoto = createDataPhoto(PHOTOS_MAX);

// dataPhoto.forEach((photo) => {
dataPhoto.forEach(() => {
  const createPictureElement = elementPicture.cloneNode(true);
  // createPictureElement.querySelector('.picture__img').src = photo.NAMES;
  // createPictureElement.querySelector('.picture__comments').textContent = photo.createComment;
  listPictures.appendChild(createPictureElement);
});
