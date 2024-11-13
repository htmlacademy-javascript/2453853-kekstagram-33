import { isEscape } from './util';
import {COMMENTS_LENGTH_MAX } from './constants';

const body = document.querySelector('body');
const imgCloseButton = document.querySelector('.img-upload__cancel');
const imgUploadInput = document.querySelector('.img-upload__input');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const uploadTextDescription = document.querySelector('.text__description');
const uploadTextHashtags = document.querySelector('.text__hashtags');

// Функция для открытия окна загрузки
const openImgUpload = () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

// Функция для закрытия окна загрузки
const closeImgUpload = () => {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
};

// Функция для закрытия окна загрузки клавишей Escape
function onDocumentKeydown(evt) {
  if (isEscape(evt)) {
    evt.preventDefault();
    imgUploadInput.value = '';
    imgUploadOverlay.classList.add('hidden');
  }
}

// открытие окна загрузки
imgUploadInput.addEventListener('change', () => {
  openImgUpload();
});

// кнопка закрытия окна
imgCloseButton.addEventListener('click', () => {
  closeImgUpload();
});

// Валидация модулем Pristine
const imgUploadForm = document.querySelector('.img-upload__form');

const textValidor = new Pristine(imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

// Ограничение длины комментария
function isValidLength(text) {
  return text.length < COMMENTS_LENGTH_MAX;
}

textValidor.addValidator(uploadTextDescription, isValidLength, `Длина комментария больше ${COMMENTS_LENGTH_MAX} символов`);

// валидация хештегов регулярным выражением
const validValue = /^#[a-zа-яё0-9]{1,19}$/i;

function isValidTextHashtag(hashtagText) {
  if (validValue.test(hashtagText)) {
    return hashtagText;
  }
}

textValidor.addValidator(uploadTextHashtags, isValidTextHashtag, 'Введён невалидный хэштег');
