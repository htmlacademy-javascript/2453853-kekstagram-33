// Основные магические числа
const PHOTOS_MIN = 1;
const PHOTOS_MAX = 25;
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const COMMENTS_MIN = 0;
const COMMENTS_VISIBLE = 5;
const COMMENTS_MAX = 30;
const COMMENTS_LENGTH_MAX = 140;
const AVATAR_MIN = 1;
const AVATAR_MAX = 6;
const MAX_HASHTAGS = 3;

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

export { PHOTOS_MIN, PHOTOS_MAX, LIKES_MIN, LIKES_MAX, COMMENTS_MIN, COMMENTS_VISIBLE, COMMENTS_MAX, COMMENTS_LENGTH_MAX, AVATAR_MIN, AVATAR_MAX, DESCRIPTIONS, MESSAGES, NAMES, MAX_HASHTAGS };
