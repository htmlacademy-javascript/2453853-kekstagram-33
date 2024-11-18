import { imageUploadPreview } from './image-scale.js';

const effectSlider = document.querySelector('.effect-level__slider');
const effectsRadioInputs = document.querySelectorAll('.effects__radio:not(#effect-none)');
const effectOriginal = document.querySelector('#effect-none');
const levelEffectInput = document.querySelector('.effect-level__value');

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

    // if (this.dataset.effect === 'invert') {
    //   effectSliderContainer.noUiSlider.updateOptions({
    //     format: {
    //       to: (value) => value.toFixed(0),
    //       from: (value) => parseFloat(value)
    //     }
    //   });
    // } Вопрос, нужно ли данное приведение?

    effectSlider.noUiSlider.on('update', () => {
      imageUploadPreview.style.filter = `${effectInput.dataset.effect}(${effectSlider.noUiSlider.get()}${effectInput.dataset.measure})`;
      levelEffectInput.value = effectSlider.noUiSlider.get();
    });
  });
}

effectOriginal.addEventListener('click', () => {
  imageUploadPreview.style.filter = 'none';
  effectSlider.style.display = 'none';
  levelEffectInput.value = '';
});
