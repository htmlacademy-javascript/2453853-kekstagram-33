const thumbnailTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const userPhotos = document.querySelector('.pictures');

const createThumbnail = ({ url, description, likes, comments }, pictureClickHandler) => {
  // делаем глубокое клонирование каждой миниатюры
  const photoElement = thumbnailTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.alt = description;
  photoElement.querySelector('.picture__comments').comments = comments;
  photoElement.querySelector('.picture__likes').likes = likes;
  photoElement.addEventListener('click', () => {
    pictureClickHandler({ url, description, likes, comments });
  });
  return photoElement;
};

const renderPhoto = (similarPhoto, pictureClickHandler) => {
  const photoListFragment = document.createDocumentFragment();

  similarPhoto.forEach((picture) => {
    // для каждого объекта массива создаем разметку
    const newThumbnail = createThumbnail(picture, pictureClickHandler);
    // добавляет разметку в DOM
    photoListFragment.append(newThumbnail);
  });
  // добавляет разметку в DOM
  userPhotos.append(photoListFragment);
};

export { renderPhoto };
