import {SCALE_MIN, SCALE_STEP, SCALE_MAX} from './constants';

const scaleControl = document.querySelector('.img-upload__scale');
const scaleButtonSmaller = scaleControl.querySelector('.scale__control--smaller');
const scaleButtonBigger = scaleControl.querySelector('.scale__control--bigger');
const scaleControlValue = scaleControl.querySelector('.scale__control--value');
const imageUploadPreview = document.querySelector('.img-upload__preview img');

function changeImageScale (scaleValue) {
  scaleButtonSmaller.addEventListener('click', () => {
    scaleValue -= SCALE_STEP;
    if(scaleValue < SCALE_MIN) {
      scaleValue = SCALE_MIN;
    }

    scaleControlValue.value = `${scaleValue}%`;
    imageUploadPreview.style.transform = `scale(${scaleValue / 100})`;
  });

  scaleButtonBigger.addEventListener('click', () => {
    scaleValue += SCALE_STEP;
    if(scaleValue > SCALE_MAX) {
      scaleValue = SCALE_MAX;
    }

    scaleControlValue.value = `${scaleValue}%`;
    imageUploadPreview.style.transform = `scale(${scaleValue / 100})`;
  });
}

export {changeImageScale, imageUploadPreview};
