import { imageUploadPreview } from './image-scale.js';
import { SLIDER_INITIAL_MIN, SLIDER_INITIAL_STEP, SLIDER_INITIAL_MAX } from './constants.js';

const effectSliderContainer = document.querySelector('.img-upload__effect-level');
const levelEffectInput = effectSliderContainer.querySelector('.effect-level__value');
const effectSlider = effectSliderContainer.querySelector('.effect-level__slider');
const effectsList = effectSliderContainer.querySelector('.effects__list');
const effectOriginal = document.querySelector('#effect-none');
// const effectsRadioInputs = document.querySelectorAll('.effects__radio:not(#effect-none)');

/*
effectSlider.style.display = 'none';

noUiSlider.create(effectSlider, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower'
});

for (const effectInput of effectsRadioInputs) {
  effectInput.addEventListener('change', function () {
    effectSlider.style.display = 'block';
    effectSlider.noUiSlider.updateOptions({
      range: {
        min: parseFloat(this.dataset.min),
        max: parseFloat(this.dataset.max)
      },
      start: parseFloat(this.dataset.max),
      step: parseFloat(this.dataset.step)
      // format: {
      //   to: (value) => value.toFixed(1),
      //   from: (value) => parseFloat(value)
      // } Вопрос, нужно ли данное приведение?
    });


    effectSlider.noUiSlider.on('update', () => {
      imageUploadPreview.style.filter = `${effectInput.dataset.effect}(${effectSlider.noUiSlider.get()}${effectInput.dataset.measure})`;
      levelEffectInput.value = effectSlider.noUiSlider.get();
    });
  });
}
*/

const EffectConfig = {
  chrome: {
    style: 'grayscale', unit: '', sliderOptions: { min: 0, max: 1, step: 0.1 },
  },
  sepia: {
    style: 'sepia', unit: '', sliderOptions: { min: 0, max: 1, step: 0.1 },
  },
  marvin: {
    style: 'invert', unit: '%', sliderOptions: { min: 0, max: 100, step: 1 },
  },
  phobos: {
    style: 'blur', unit: 'px', sliderOptions: { min: 0, max: 3, step: 0.1 },
  },
  heat: {
    style: 'brightness', unit: '', sliderOptions: { min: 1, max: 3, step: 0.1 },
  }
};

// Конфигурация для инициализации слайдера
const initialSliderOptions = {
  range: {
    min: SLIDER_INITIAL_MIN,
    max: SLIDER_INITIAL_MAX,
  },
  start: SLIDER_INITIAL_MAX,
  step: SLIDER_INITIAL_STEP,
  connect: 'lower',
  format: {
    to: (value) => Number.isInteger(value) ? value.toFixed(0) : value.toFixed(1),
    from: (value) => parseFloat(value),
  },
};

// Функция переключения эффектов, приведение к начальному уровню
function resetEffect() {
  levelEffectInput.value = 0;
  imageUploadPreview.style.filter = null;
  effectSliderContainer.classList.add('hidden');
}

// Функция настройки слайдера для управления эффектом изображения
const setEffect = ({ style, unit, sliderOptions }) => {
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
};

const onEffectClick = (evt) => {
  if (evt.target.value === 'none') {
    resetEffect();
    return;
  }

  const effectInput = evt.target.closest('.effects__radio');
  effectSliderContainer.classList.remove('hidden');

  if (effectInput) {
    const effectValue = effectInput.value;
    setEffect(EffectConfig[effectValue]);
  }
};

const initializeEffectSlider = () => {
  effectSliderContainer.classList.add('hidden');
  effectsList.addEventListener('click', onEffectClick);
  noUiSlider.create(effectSlider, initialSliderOptions);
};

// initializeEffectSlider();

// function destroyEffectSlider() {
//   effectSlider.noUiSlider.destroy();
// }

/*
effectOriginal.addEventListener('click', () => {
  imageUploadPreview.style.filter = 'none';
  effectSlider.style.display = 'none';
  levelEffectInput.value = '';
});
*/
export { initializeEffectSlider };
