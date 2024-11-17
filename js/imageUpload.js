import { isEscape, getNormalizedStringArray } from './util';
import { configureFormValidation } from './form-validation.js';

const bodyElement = document.querySelector('body');
const uploadForm = document.querySelector('.img-upload__form');
const uploadInputElement = uploadForm.querySelector('.img-upload__input');
const imageEditionFormElement = uploadForm.querySelector('.img-upload__overlay');
const imageEditingFormCloseElement = imageEditionFormElement.querySelector('.img-upload__cancel');
const hashtagInputElement = imageEditionFormElement.querySelector('[name="hashtags"]');
const descriptionElement = imageEditionFormElement.querySelector('[name="description"]');

// Функция для закрытия окна загрузки клавишей Escape
function onDocumentKeydown(evt) {
  if (isEscape(evt)) {
    evt.preventDefault();
    if (![hashtagInputElement, descriptionElement].includes(document.activeElement)) {
      closeEditingImageForm();
    }
  }
}

const { isValidForm, resetValidate } = configureFormValidation(uploadForm, hashtagInputElement, descriptionElement);

// Проверка валидности формы
uploadForm.addEventListener('submit', (evt) => {
  if (isValidForm()) {
    hashtagInputElement.value = getNormalizedStringArray(hashtagInputElement.value);
    descriptionElement.value = descriptionElement.value.trim();
    resetValidate();
  } else {
    evt.preventDefault();
  }
});

uploadInputElement.addEventListener('change', (evt) => {
  if (evt.target.value) {
    openEditionImageForm();
  }
});

// Функция для открытия окна загрузки
function openEditionImageForm() {
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  imageEditingFormCloseElement.addEventListener('click', closeEditingImageForm);
  imageEditionFormElement.classList.remove('hidden');
}

// Функция для закрытия окна формы
function closeEditingImageForm() {
  bodyElement.classList.remove('modal-open');
  imageEditionFormElement.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
  uploadForm.reset(); // Сброс значений и состояния формы редактирования
  resetValidate(); // Сброс ошибок в форме
  uploadInputElement.value = ''; // Сброс значений поля выбора файла
}
