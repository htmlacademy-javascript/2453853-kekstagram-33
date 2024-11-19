import { PHOTOS_MAX } from './constants.js';
import { createDataPhoto } from './data.js';
import { renderPhoto } from './thumbnail.js';
import { openBigPicture } from './big-picture-comments.js';
import './image-form.js';
import './form-validation.js';
import './image-effects.js';
import './image-scale.js';

const pictureClickHandler = (dataPhoto) => {
  openBigPicture(dataPhoto);
};

renderPhoto(createDataPhoto(PHOTOS_MAX), pictureClickHandler);
