import { isEscape } from './util';
import { COMMENTS_MIN, COMMENTS_VISIBLE } from './constants';
import {socialComments, renderComments} from './render-comments';

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImage = bigPicture.querySelector('.big-picture__img img');
const pictureCloseButton = bigPicture.querySelector('.big-picture__cancel');
const likesCount = bigPicture.querySelector('.likes-count');
const pictureDescription = bigPicture.querySelector('.social__caption');

const commentShownCount = document.querySelector('.social__comment-shown-count');
const commentTotalCount = document.querySelector('.social__comment-total-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');

let totalCountComments;
let countVisibleComments;

// Фунция открытия 5-ти комментариев к большой фотографии
const showVisibleComment = () => {
  if (totalCountComments.length > COMMENTS_VISIBLE) {
    countVisibleComments += COMMENTS_VISIBLE;
    renderComments(totalCountComments.splice(COMMENTS_MIN, COMMENTS_VISIBLE));
    commentsLoader.classList.remove('hidden');
  } else {
    countVisibleComments += totalCountComments.length;
    renderComments(totalCountComments);
    commentsLoader.classList.add('hidden');
  }
  commentShownCount.textContent = countVisibleComments;
};

// Кнопка для загрузки новой порции комментариев
commentsLoader.addEventListener('click', showVisibleComment);

// Функция для открытия большого окна
const openBigPicture = (dataPhoto) => {
  bigPicture.classList.remove('hidden');
  socialComments.textContent = '';
  countVisibleComments = COMMENTS_MIN;
  bigPictureImage.src = dataPhoto.url;
  likesCount.textContent = dataPhoto.likes;
  pictureDescription.innerHTML = dataPhoto.description;
  commentShownCount.textContent = dataPhoto.comments.length;
  commentTotalCount.textContent = dataPhoto.comments.length;
  totalCountComments = [...dataPhoto.comments];

  showVisibleComment();
  commentShownCount.textContent = countVisibleComments;
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

// Функция для закрытия большого окна
const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
};

// Функция для закрытия большого окна клавишей Escape
function onDocumentKeydown(evt) {
  if (isEscape(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
}

pictureCloseButton.addEventListener('click', closeBigPicture);

export { openBigPicture };
