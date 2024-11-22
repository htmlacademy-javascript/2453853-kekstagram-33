const thumbnailTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');
const photoListFragment = document.createDocumentFragment();

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
  let image = picturesContainer.querySelector('.picture');
  while(image) {
    image.remove();
    image = picturesContainer.querySelector('.picture');
  }
  similarPhoto.forEach((picture) => {
    // для каждого объекта массива создаем разметку
    const newThumbnail = createThumbnail(picture, pictureClickHandler);
    // добавляет разметку в DOM
    photoListFragment.append(newThumbnail);
  });
  // добавляет разметку в DOM
  picturesContainer.append(photoListFragment);
};

export { renderPhoto };
