// import { PHOTOS_MAX } from './constants.js';
// import { createDataPhoto } from './data.js';
import { renderPhoto } from './thumbnail.js';
import { openBigPicture } from './big-picture-comments.js';
import './image-form.js';
import './form-validation.js';
import './image-effects.js';
import './image-scale.js';
import './api.js';
import { setUserFormSubmit, closeEditingImageForm } from './image-form.js';
// import { createLoader } from './api.js';

const pictureClickHandler = (dataPhoto) => {
  openBigPicture(dataPhoto);
};

// renderPhoto(createDataPhoto(PHOTOS_MAX), pictureClickHandler);
// console.log(createDataPhoto(PHOTOS_MAX));
// console.log(renderPhoto(createDataPhoto(PHOTOS_MAX), pictureClickHandler));

fetch('https://32.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    renderPhoto(data, pictureClickHandler);
  });

setUserFormSubmit(closeEditingImageForm);
