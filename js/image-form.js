import { isEscape, openSomeModal, closeSomeModal } from './util';
import { textValidator, configureFormValidation } from './form-validation.js';
import { changeImageScale, imageUploadPreview } from './image-scale.js';
import { SCALE_DEFAULT, SCALE_MAX, FILE_TYPES } from './constants.js';
import { initializeEffectSlider, destroyEffectSlider, effectSliderContainer } from './image-effects.js';
import { openSuccessSendMessage, openErrorSendMessage } from './alerts.js';
import { sendData } from './api.js';

// const bodyElement = document.querySelector('body');
const uploadForm = document.querySelector('.img-upload__form');
const imageUpload = uploadForm.querySelector('.img-upload__input');
const imageEditionFormElement = uploadForm.querySelector('.img-upload__overlay');
const imageEditingFormCloseElement = imageEditionFormElement.querySelector('.img-upload__cancel');
const hashtagInputElement = imageEditionFormElement.querySelector('[name="hashtags"]');
const descriptionElement = imageEditionFormElement.querySelector('[name="description"]');
const submitButton = document.querySelector('.img-upload__submit');
const effectOriginal = document.querySelector('#effect-none');
const imagePreview = document.querySelector('.img-upload__preview img');
const effectsPreviews = document.querySelectorAll('.effects__preview');

const { isValidForm, resetValidate } = configureFormValidation(hashtagInputElement, descriptionElement);

const resetImageForm = (currentForm, currentFormValidator) => {
  currentFormValidator.reset();
  currentForm.reset();
  changeImageScale(SCALE_MAX);
  imageUploadPreview.style.transform = `scale(${SCALE_DEFAULT})`;
  imageUploadPreview.style.filter = 'none';
  effectSliderContainer.classList.add('hidden');
  effectOriginal.checked = true;
};

resetImageForm(uploadForm, textValidator);

// Функция для закрытия окна загрузки клавишей Escape
function onDocumentKeydown(evt) {
  if (isEscape(evt) && ![hashtagInputElement, descriptionElement].includes(document.activeElement)) {
    evt.preventDefault();
    closeImageUploadOverlay();
    resetImageForm(uploadForm, textValidator);
  }
}

const openImageUploadOverlay = () => {
  openSomeModal(imageEditionFormElement, onDocumentKeydown);
};

function closeImageUploadOverlay() {
  closeSomeModal(imageEditionFormElement, onDocumentKeydown);
}

imageUpload.addEventListener('change', () => {
  openImageUploadOverlay();
  const file = imageUpload.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  initializeEffectSlider();
  if (matches) {
    imagePreview.src = URL.createObjectURL(file);
  }

  effectsPreviews.forEach((effect) => {
    effect.style.backgroundImage = `url('${imagePreview.src}')`;
  });
});

imageEditingFormCloseElement.addEventListener('click', () => {
  closeImageUploadOverlay();
  resetImageForm(uploadForm, textValidator);
  destroyEffectSlider();
  resetValidate();
});

// Проверка валидности формы перед отправкой формы
uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  if (isValidForm()) {
    configureFormValidation(hashtagInputElement, descriptionElement);
    submitButton.disabled = true;

    sendData(new FormData(evt.target))
      .then(() => {
        // Успешная обработка
        openSuccessSendMessage();
        resetImageForm(uploadForm, textValidator);
      })
      .catch(() => {
        // Обработка ошибки
        openErrorSendMessage(openImageUploadOverlay);
      })
      .finally(() => {
        closeImageUploadOverlay();
        // Восстановление состояния кнопки
        submitButton.disabled = false;
      });
  }
});
