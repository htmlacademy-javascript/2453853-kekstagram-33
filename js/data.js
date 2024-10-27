import { getRandomNumber, getRandomElement, getPhotoId, getCommentId } from './util.js';

// Основные магические числа
const PHOTOS_MIN = 1;
const PHOTOS_MAX = 25;
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const COMMENTS_MIN = 0;
const COMMENTS_MAX = 30;
const AVATAR_MIN = 1;
const AVATAR_MAX = 6;

// Возможные описания фотографий
const DESCRIPTIONS = [
  'Закат над морем.',
  'Горный пейзаж.',
  'Семейный пикник.',
  'Морская прогулка.',
  'Техно-арт.',
  'На отдыхе.'
];

// Возможные сообщения для комментариев
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

// Возможные имена для комментаторов
const NAMES = ['Артём', 'Ольга', 'Иван', 'Мария', 'Дмитрий', 'Анна', 'Елена', 'Сергей', 'Настя', 'Максим', 'Татьяна', 'Ирина'];

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

export { createDataPhoto, PHOTOS_MAX };
