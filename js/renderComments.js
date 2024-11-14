const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const bigPicture = document.querySelector('.big-picture');
const socialComments = bigPicture.querySelector('.social__comments');

// Функция создания комментарием к фотографии
const createComments = ({ avatar, name, message }) => {
  // делаем глубокое клонирование каждого комментария
  const commentsElement = commentTemplate.cloneNode(true);
  commentsElement.querySelector('.social__picture').src = avatar;
  commentsElement.querySelector('.social__picture').alt = name;
  commentsElement.querySelector('.social__text').textContent = message;
  return commentsElement;
};


// Функция создания всех комментариев к большой фотографии
const renderComments = (comments) => {
  const commentsListFragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const commentElement = createComments(comment);
    commentsListFragment.append(commentElement);
  });
  socialComments.append(commentsListFragment);
};

export {socialComments, renderComments};
