import { renderPhoto } from './thumbnail.js';
import { openBigPicture } from './big-picture-comments.js';
import './image-form.js';
import './form-validation.js';
import './image-effects.js';
import './image-scale.js';
import {getData} from './api.js';
import { setUserFormSubmit, closeEditingImageForm } from './image-form.js';
import {imageFilters} from './image-filter.js';
import {sortPictures} from './sort-pictures.js';

const pictureClickHandler = (dataPhoto) => {
  openBigPicture(dataPhoto);
};

getData((data) => {
  renderPhoto(data, pictureClickHandler);
  sortPictures(data, pictureClickHandler);
  imageFilters.classList.remove('img-filters--inactive');
});

setUserFormSubmit(closeEditingImageForm);
