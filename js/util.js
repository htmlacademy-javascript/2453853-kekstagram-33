// создание уникального идентификатора ID, искользуем корирование, замыкаемся на счетчики и вызываем эту функцию
const getSequentNumber = () => {
  let lastNumber = 0;
  return function () {
    lastNumber++;
    return lastNumber;
  };
};

const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// фукция генерации случайного элемента
const getRandomElement = (elements) =>
  elements[getRandomNumber(elements.length - 1, 0)];

const getPhotoId = getSequentNumber();
const getCommentId = getSequentNumber();

const isEscape = (evt) => evt.key === 'Escape';

export { getRandomNumber, getRandomElement, getPhotoId, getCommentId, isEscape };
