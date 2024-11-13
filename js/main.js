import { PHOTOS_MAX } from './constants.js';
import { createDataPhoto } from './data.js';
import { renderPhoto } from './thumbnail.js';
import { openBigPicture } from './bigPicture.js';
import './imageUpload.js';

const pictureClickHandler = (dataPhoto) => {
  openBigPicture(dataPhoto);
};

renderPhoto(createDataPhoto(PHOTOS_MAX), pictureClickHandler);
