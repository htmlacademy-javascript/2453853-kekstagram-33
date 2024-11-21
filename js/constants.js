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
const SCALE_DEFAULT = 1;
const SCALE_MIN = 25;
const SCALE_STEP = 25;
const SCALE_MAX = 100;
const SLIDER_INITIAL_MIN = 0;
const SLIDER_INITIAL_STEP = 0.1;
const SLIDER_INITIAL_MAX = 1;
const SLIDER_MARVIN_MAX = 100;
const SLIDER_MARVIN_STEP = 1;
const SLIDER_PHOBOS_MAX = 3;
const SLIDER_HEAT_MIN = 1;
const SLIDER_HEAT_MAX = 3;
const ALERT_SHOW_TIME = 5000;
const BASE_URL = 'https://32.javascript.htmlacademy.pro/kekstagram';

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

export { PHOTOS_MIN, PHOTOS_MAX, LIKES_MIN, LIKES_MAX, COMMENTS_MIN, COMMENTS_VISIBLE, COMMENTS_MAX, COMMENTS_LENGTH_MAX, AVATAR_MIN, AVATAR_MAX, DESCRIPTIONS, MESSAGES, NAMES, MAX_HASHTAGS, SCALE_DEFAULT, SCALE_MIN, SCALE_STEP, SCALE_MAX, SLIDER_INITIAL_MIN, SLIDER_INITIAL_STEP, SLIDER_INITIAL_MAX, SLIDER_MARVIN_MAX, SLIDER_MARVIN_STEP, SLIDER_PHOBOS_MAX, SLIDER_HEAT_MIN, SLIDER_HEAT_MAX, ALERT_SHOW_TIME, BASE_URL };
