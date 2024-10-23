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

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//	id, число от 1 до 25.
// url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25
// comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии. Количество комментариев к каждой фотографии — случайное число от 0 до 30

const createComment = () => {
  const randomNameIndex = getRandomInteger(0, NAMES.length - 1);
  const randomMessageIndex = getRandomInteger(0, MESSAGES.length - 1);

  return {
    id: '',
    avatar: '',
    message: MESSAGES[randomMessageIndex],
    name: NAMES[randomNameIndex],
  };
};

console.log(
  createComment()
);
