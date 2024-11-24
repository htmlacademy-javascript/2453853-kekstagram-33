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

// функция генерации случайного элемента
const getRandomElement = (elements) =>
  elements[getRandomNumber(elements.length - 1, 0)];

const getPhotoId = getSequentNumber();
const getCommentId = getSequentNumber();

const isEscape = (evt) => evt.key === 'Escape';

const openSomeModal = (currentElement, onEscape) => {
  currentElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onEscape);
};

const closeSomeModal = (currentElement, onEscape) => {
  currentElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscape);
};

// функция генерации случайных элементов массива
const sortArrayRandom = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// фукнция создания из строки массива элементов
const getNormalizedStringArray = (string) => string
  .toString() // Приводим к строке
  .toLowerCase() // Приводим к нижнему регистру
  .trim() // обрезка пробелов в начале и конце строки
  .replace(/\s+/g, ' ') // заменяем  любой пробельный символ (\s+) на одиночный пробел
  .split(' '); // разделяем на массив

// 	Функция debounce для устранения дребезга
function debounce(callback, timeoutDelay = 500) {
  // Используем замыкания, чтобы id таймаута у нас навсегда приклеился
  // к возвращаемой функции с setTimeout, тогда мы его сможем перезаписывать
  let timeoutId;

  return (...rest) => {
    // Перед каждым новым вызовом удаляем предыдущий таймаут,
    // чтобы они не накапливались
    clearTimeout(timeoutId);

    // Затем устанавливаем новый таймаут с вызовом колбэка на ту же задержку
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);

    // Таким образом цикл «поставить таймаут - удалить таймаут» будет выполняться,
    // пока действие совершается чаще, чем переданная задержка timeoutDelay
  };
}

export { getRandomNumber, getRandomElement, getPhotoId, getCommentId, isEscape, getNormalizedStringArray, sortArrayRandom, debounce, openSomeModal, closeSomeModal };
