const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');
const listPictures = document.querySelector('.pictures');

const createThumbnail = (dataPhoto) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);

  const pictureThumbnail = thumbnail.querySelector('.picture__img');
  const pictureThumbnailComments = thumbnail.querySelector('.picture__comments');
  const pictureThumbnailLikes = thumbnail.querySelector('.picture__likes');
  pictureThumbnail.src = dataPhoto.url;
  pictureThumbnailComments.textContent = dataPhoto.comments.length;
  pictureThumbnailLikes.textContent = dataPhoto.likes;
  return thumbnail;
};

export const renderThumbnail = (dataPhotos) => {
  dataPhotos.forEach((photo) => {
    // для каждого объекта массива создаем разметку
    const newThumbnail = createThumbnail(photo);
    // добавляет разметку в DOM
    listPictures.append(newThumbnail);
  });
};

