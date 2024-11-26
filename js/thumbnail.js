const thumbnailTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');
const photoListFragment = document.createDocumentFragment();

const createThumbnail = (picture, pictureClickHandler) => {
  // делаем глубокое клонирование каждой миниатюры
  const photoElement = thumbnailTemplate.cloneNode(true);
  const pictureInfo = photoElement.querySelector('.picture__info');
  const pictureImg = photoElement.querySelector('.picture__img');
  pictureImg.src = picture.url;
  pictureImg.alt = picture.description;
  pictureInfo.querySelector('.picture__comments').textContent = picture.comments.length;
  pictureInfo.querySelector('.picture__likes').textContent = picture.likes;
  photoElement.addEventListener('click', () => {
    pictureClickHandler(picture);
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
