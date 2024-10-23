// Возможные имена для комментаторов
const NAMES = [
  'Артём',
  'Ольга',
  'Иван',
  'Мария',
  'Дмитрий',
  'Анна',
  'Елена',
  'Сергей',
  'Настя',
  'Максим',
  'Татьяна',
  'Ирина'
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

// Возможные описания фотографий
const DESCRIPTIONS = [
  'Закат над морем.',
  'Горный пейзаж.',
  'Семейный пикник.',
  'Морская прогулка.',
  'Техно-арт.',
  'На отдыхе.'
];

// Количество сгенерированных объектов
const SIMILAR_USER_COUNT = 25;

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const userCommentObject = () => ({
  id: getRandomInteger(1, 25),
  url: String('photos/' + getRandomInteger(1, 25) + '.jpg'),
  description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
  comments: {
    commentId: getRandomInteger(1, 25), // ? повторить значение id
    avatar: String('img/avatar-' + getRandomInteger(1, 6) + '.svg'),
    message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)], // ? случайно выбрать одно-два сообщения
    name: NAMES[getRandomInteger(0, NAMES.length - 1)],
  }
});

const similarUserObject = Array.from({ length: SIMILAR_USER_COUNT }, userCommentObject);

similarUserObject();
