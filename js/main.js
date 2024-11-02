import './bigPicture.js';
import './renderPictures.js';
import { PHOTOS_MAX } from './constants.js';
import { createDataPhoto } from './data.js';
import { renderThumbnail } from './renderPictures.js';

renderThumbnail(createDataPhoto(PHOTOS_MAX));
