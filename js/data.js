import { AVATAR_MAX, AVATAR_MIN, COMMENTS_MAX, COMMENTS_MIN, DESCRIPTIONS, LIKES_MAX, LIKES_MIN, MESSAGES, NAMES, PHOTOS_MAX, PHOTOS_MIN } from './constants.js';
import { getRandomNumber, getRandomElement, getPhotoId, getCommentId } from './util.js';

const createComment = () => ({
  id: getCommentId(),
  avatar: `img/avatar-${getRandomNumber(AVATAR_MIN, AVATAR_MAX)}.svg`,
  message: getRandomElement(MESSAGES), // случайно выбрать одно-два сообщения
  name: getRandomElement(NAMES),
});

//функция, которая возвращает массив комментариев
const createComments = () => {
  const commentsAmount = getRandomNumber(COMMENTS_MIN, COMMENTS_MAX);
  return Array.from({ length: commentsAmount }, createComment);
};

const createPhoto = () => ({
  id: getPhotoId(),
  url: `photos/${getRandomNumber(PHOTOS_MIN, PHOTOS_MAX)}.jpg`,
  description: getRandomElement(DESCRIPTIONS),
  likes: getRandomNumber(LIKES_MIN, LIKES_MAX),
  comments: createComments(),
});

const createDataPhoto = (amount) =>
  Array.from({ length: amount }, createPhoto);

export { createDataPhoto };
