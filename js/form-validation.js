import { getNormalizedStringArray } from './util.js';
import { COMMENTS_LENGTH_MAX, MAX_HASHTAGS } from './constants.js';

// валидация хештегов регулярным выражением
const hashtagRegex = /^#[a-zа-яё0-9]{1,19}$/i;

// Сообщения о несоответствии хештегов и описания
const ErrorMessage = {
  HASHTAG_COUNT: `Количество хэштегов не должно быть более ${MAX_HASHTAGS}`,
  DUPLICATE_HASHTAGS: 'Хэштеги не должны повторяться',
  MAX_LENGTH_COMMENTS: `Длина комментария не должна превышать ${COMMENTS_LENGTH_MAX}`
};

// Создаем объект с массивами ошибок
const incorrectHashtagData = {
  invalid: [],
  duplicate: []
};

// Функция проверки хэштегов
function isValidTextHashtag(value) {
  // проверка пустого значания
  if (!value) {
    return true;
  }

  const hashtags = getNormalizedStringArray(value);
  incorrectHashtagData['invalid'].length = 0; // очищаем массив, если он был не пустой

  // валидация каждого хештега регулярным выражением
  hashtags.forEach((hashtag) => {
    if (!hashtagRegex.test(hashtag)) {
      incorrectHashtagData['invalid'].push(hashtag);
    }
  });

  return !incorrectHashtagData['invalid'].length;
}

function getErrorSyntaxMessage() {
  if (incorrectHashtagData['invalid'].length === 1) {
    return 'Введен невалидный  хэштег';
  } else if (incorrectHashtagData['invalid'].length > 1) {
    return 'Введены невалидные хэштеги';
  }
  return ''; // Возвращаем пустую строку, если валидные
}

// Функция подсчета валидных тегов
function validateHashtagCount(value) {
  const hashtags = getNormalizedStringArray(value);
  return hashtags.length <= MAX_HASHTAGS;
}

// Функция проверки дубликатов тегов
function validateHashtagDuplicate(value) {
  const hashtags = getNormalizedStringArray(value);
  incorrectHashtagData['duplicate'].length = 0;
  const uniqueHashtags = new Set();

  hashtags.forEach((hashtag) => {
    // Если он уже был добавлен, это дубликат
    if (uniqueHashtags.has(hashtag)) {
      incorrectHashtagData['duplicate'].push(hashtag);
    }

    // Добавляем хэштег в множество
    uniqueHashtags.add(hashtag);
  });

  return !incorrectHashtagData['duplicate'].length;
}

// Функция проверки длины комментария
const validateDescriptionLength = (value) => COMMENTS_LENGTH_MAX >= value.length;

function configureFormValidation(uploadForm, hashtagInput, descriptionInput) {
  const textValidator = new Pristine(uploadForm, {
    classTo: 'img-upload__field-wrapper',
    errorTextParent: 'img-upload__field-wrapper',
    errorTextClass: 'img-upload__field-wrapper--error'
  });

  textValidator.addValidator(hashtagInput, isValidTextHashtag, getErrorSyntaxMessage);
  textValidator.addValidator(hashtagInput, validateHashtagCount, ErrorMessage.HASHTAG_COUNT);
  textValidator.addValidator(hashtagInput, validateHashtagDuplicate, ErrorMessage.DUPLICATE_HASHTAGS);
  textValidator.addValidator(descriptionInput, validateDescriptionLength, ErrorMessage.MAX_LENGTH_COMMENTS);

  return {
    isValidForm: () => textValidator.validate(), // Проверка валидности формы
    resetValidate: () => textValidator.reset(), // Сброс валидации
  };
}

export { configureFormValidation };
