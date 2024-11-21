import { isEscape, getNormalizedStringArray } from './util';
import { configureFormValidation } from './form-validation.js';
import { changeImageScale, imageUploadPreview } from './image-scale.js';
import { SCALE_DEFAULT, SCALE_MAX } from './constants.js';
import { effectsList, initializeEffectSlider, destroyEffectSlider } from './image-effects.js';
import { showDataError } from './alerts.js';
import { sendData } from './api.js';

const bodyElement = document.querySelector('body');
const uploadForm = document.querySelector('.img-upload__form');
const uploadInputElement = uploadForm.querySelector('.img-upload__input');
const imageEditionFormElement = uploadForm.querySelector('.img-upload__overlay');
const imageEditingFormCloseElement = imageEditionFormElement.querySelector('.img-upload__cancel');
const hashtagInputElement = imageEditionFormElement.querySelector('[name="hashtags"]');
const descriptionElement = imageEditionFormElement.querySelector('[name="description"]');
const submitButton = document.querySelector('.img-upload__submit');

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

// Проверка валидности формы перед отправкой формы
const setUserFormSubmit = (onSuccess) => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (isValidForm()) {
      hashtagInputElement.value = getNormalizedStringArray(hashtagInputElement.value);
      descriptionElement.value = descriptionElement.value.trim();
      resetValidate();
      submitButton.disable = true;
      sendData(
        () => {
          onSuccess();
          submitButton.disable = false;
        },
        () => {
          showDataError();
          submitButton.disable = false;
        },
        new FormData(evt.target),
      );
    } else {
      evt.preventDefault();
      showDataError();
    }
  });
};


uploadInputElement.addEventListener('change', (evt) => {
  if (evt.target.value) {
    openEditionImageForm();
  }
});

// Функция для открытия окна загрузки
function openEditionImageForm() {
  imageEditionFormElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  changeImageScale(SCALE_MAX);
  // changeImageScale, imageUploadPreview дублирование задач, определиться какую задачу убрать
  imageUploadPreview.style.transform = `scale(${SCALE_DEFAULT})`;
  effectsList.addEventListener('change', (initializeEffectSlider()));
  document.addEventListener('keydown', onDocumentKeydown);
  imageEditingFormCloseElement.addEventListener('click', closeEditingImageForm);
}

// Функция для закрытия окна формы
function closeEditingImageForm() {
  bodyElement.classList.remove('modal-open');
  imageEditionFormElement.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
  uploadForm.reset(); // Сброс значений и состояния формы редактирования
  resetValidate(); // Сброс ошибок в форме
  uploadInputElement.value = ''; // Сброс значений поля выбора файла
  effectsList.addEventListener('change', (destroyEffectSlider()));
}

export { setUserFormSubmit, closeEditingImageForm };
