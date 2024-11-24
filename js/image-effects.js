import { imageUploadPreview } from './image-scale.js';
import { SLIDER_INITIAL_MIN, SLIDER_INITIAL_STEP, SLIDER_INITIAL_MAX, SLIDER_MARVIN_MAX, SLIDER_MARVIN_STEP, SLIDER_PHOBOS_MAX, SLIDER_HEAT_MIN, SLIDER_HEAT_MAX } from './constants.js';

const effectSliderContainer = document.querySelector('.img-upload__effect-level');
const levelEffectInput = effectSliderContainer.querySelector('.effect-level__value');
const effectSlider = effectSliderContainer.querySelector('.effect-level__slider');
const effectsList = document.querySelector('.effects__list');
const effectOriginal = document.querySelector('#effect-none');

const EffectConfig = {
  chrome: {
    style: 'grayscale', unit: '', sliderOptions: { min: SLIDER_INITIAL_MIN, max: SLIDER_INITIAL_MAX, step: SLIDER_INITIAL_STEP },
  },
  sepia: {
    style: 'sepia', unit: '', sliderOptions: { min: SLIDER_INITIAL_MIN, max: SLIDER_INITIAL_MAX, step: SLIDER_INITIAL_STEP },
  },
  marvin: {
    style: 'invert', unit: '%', sliderOptions: { min: SLIDER_INITIAL_MIN, max: SLIDER_MARVIN_MAX, step: SLIDER_MARVIN_STEP },
  },
  phobos: {
    style: 'blur', unit: 'px', sliderOptions: { min: SLIDER_INITIAL_MIN, max: SLIDER_PHOBOS_MAX, step: SLIDER_INITIAL_STEP },
  },
  heat: {
    style: 'brightness', unit: '', sliderOptions: { min: SLIDER_HEAT_MIN, max: SLIDER_HEAT_MAX, step: SLIDER_INITIAL_STEP },
  }
};

// Начальная конфигукция слайдера
const initialSliderOptions = {
  range: {
    min: SLIDER_INITIAL_MIN,
    max: SLIDER_INITIAL_MAX,
  },
  start: SLIDER_INITIAL_MAX,
  step: SLIDER_INITIAL_STEP,
  connect: 'lower',
  format: {
    to: (value) => Number.isInteger(value) ? value.toFixed(SLIDER_INITIAL_MIN) : value.toFixed(SLIDER_INITIAL_MAX),
    from: (value) => parseFloat(value),
  },
};

// Функция очистки от эффектов, приведение к начальному уровню
function resetEffect() {
  levelEffectInput.value = 0;
  imageUploadPreview.style.filter = null;
  effectSliderContainer.classList.add('hidden'); // скрытие слайдера
}

// Функция настройки слайдера под действием пользователя
function setEffect({ style, unit, sliderOptions }) {
  effectSlider.noUiSlider.updateOptions({
    range: {
      min: sliderOptions?.min, // используем optional chaining `?.` для безопасного обращения к свойству
      max: sliderOptions?.max,
    },
    start: sliderOptions?.max,
    step: sliderOptions?.step,
  });

  // Событие `update` вызывается каждый раз, когда пользователь перемещает ручку слайдера
  effectSlider.noUiSlider.on('update', () => {
    const saturationValue = effectSlider.noUiSlider.get(); // получаем текущее значение слайдера
    levelEffectInput.value = saturationValue;
    imageUploadPreview.style.filter = `${style}(${saturationValue}${unit})`;
  });
}

// Обработчик событий
function onEffectClick(evt) {
  // Если ничего не выбрали, слайдер останется в дефолтном состоянии
  if (evt.target.value === 'none') {
    resetEffect();
    return;
  }

  // функция определения родительсткого класса эффекта
  const effectInput = evt.target.closest('.effects__radio');
  effectSliderContainer.classList.remove('hidden');

  // родительский класс найден, то передаем значение эффекта с EffectConfig
  if (effectInput) {
    const effectValue = effectInput.value;
    setEffect(EffectConfig[effectValue]);
  }
}

function initializeEffectSlider() {
  effectSliderContainer.classList.add('hidden');
  effectsList.addEventListener('click', onEffectClick);
  noUiSlider.create(effectSlider, initialSliderOptions);
}

// Функция очистки от слайдера
function destroyEffectSlider() {
  effectSlider.noUiSlider.destroy();
}

effectOriginal.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    imageUploadPreview.style.filter = 'none';
    effectSliderContainer.classList.add('hidden');
    levelEffectInput.value = '';
  }
});

export { effectsList, initializeEffectSlider, destroyEffectSlider, effectSliderContainer };
