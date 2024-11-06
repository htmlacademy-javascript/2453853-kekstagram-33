import { isEscape } from './util';

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImage = bigPicture.querySelector('.big-picture__img img');
const pictureCloseButton = bigPicture.querySelector('.big-picture__cancel');
const likesCount = bigPicture.querySelector('.likes-count');
const pictureDescription = bigPicture.querySelector('.social__caption');
const socialComments = bigPicture.querySelector('.social__comments');
// const peopleAvatar = bigPicture.querySelector('.social__picture');
// const peopleMessage = bigPicture.querySelector('.social__text');

const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');

const commentTotalCount = document.querySelector('.social__comment-shown-count');

// Создание комментария к фотографиям
const createComments = ({ url, name, message }) => {
  // делаем глубокое клонирование каждого комментария
  const commentsElement = commentTemplate.cloneNode(true);
  commentsElement.querySelector('.social__picture').src = url;
  commentsElement.querySelector('.social__text').alt = name;
  commentsElement.textContent = message;
  return commentsElement;
};

// рендер комментариев к фотографиям
const renderComments = (comments) => {
  const commentsListFragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    const commentElement = createComments(comment);
    commentsListFragment.append(commentElement);
  });

  socialComments.textContent = '';
  socialComments.append(commentsListFragment);
};

export const openBigPicture = (dataPhoto) => {
  bigPicture.classList.remove('hidden');

  bigPictureImage.src = dataPhoto.url;
  likesCount.textContent = dataPhoto.likes;
  pictureDescription.innerHTML = dataPhoto.description;
  commentTotalCount.textContent = dataPhoto.comments.length;
  renderComments(dataPhoto.comments);
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown(evt){
  if (isEscape(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
}

pictureCloseButton.addEventListener('click', closeBigPicture);
