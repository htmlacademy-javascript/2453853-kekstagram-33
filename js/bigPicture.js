import { isEscape } from './util';
import { listPictures } from './renderPictures';

const bigPictureOpenElement = document.querySelector('.big-picture');
// const thumblePictureElement = document.querySelector('.picture__img');
const bigPictureCloseElement = document.querySelector('.big-picture__cancel');
// const bigPictureImage = bigPictureOpenElement.querySelector('.big-picture__img');
// const bigPictureLikesCount = bigPictureOpenElement.querySelector('.likes-count');
// const bigPictureCommentCount = bigPictureOpenElement.querySelector('.social__comment-shown-count');
// const bigPictureCommentTotalCount = bigPictureOpenElement.querySelector('.social__comment-total-count');
// const bigPictureSocialComments = bigPictureOpenElement.querySelector('.social__comments');
// const bigPictureSocialCaption = bigPictureOpenElement.querySelector('.social__caption');
// const bigPictureSocialCommentCount = bigPictureOpenElement.querySelector('.social__comment-count');
// const bigPictureCommentsLoader = bigPictureOpenElement.querySelector('.comments-loader');

const onDocumentKeydown = (evt) => {
  if (isEscape(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

// const clearBigPictureList = () => {
//   bigPictureOpenElement.innerHTML = '';
// };

function openBigPicture() {
  bigPictureOpenElement.classList.remove('hidden');
  // clearBigPictureList ();
  // bigPictureImage.src = thumblePictureElement.src;
  // bigPictureLikesCount.textContent = dataPhoto.comments;
  // console.log(thumblePictureElement.src);
  document.addEventListener('keydown', onDocumentKeydown);
}

function closeBigPicture() {
  bigPictureCloseElement.addEventListener('click', () => {
    bigPictureOpenElement.classList.add('hidden');
  });
}

listPictures.addEventListener('click', () => {
  openBigPicture();
});

bigPictureCloseElement.addEventListener('click', () => {
  closeBigPicture();
});

