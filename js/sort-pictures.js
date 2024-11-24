import { changeFilter, imageFilterButtons } from './image-filter.js';
import { renderPhoto } from './thumbnail.js';
import { sortArrayRandom, debounce } from './util.js';
import { PHOTOS_RANDOM, DEBOUNCE_IMAGES_DELAY } from './constants.js';

const sortArrayByComments = (a, b) => b.comments.length - a.comments.length;

const sortPictures = (pictures, onPictureClick) => {
  const sortImagesCallback = (filterType) => {
    let sortingPictures = pictures;
    switch (filterType) {
      case 'filter-random':
        sortingPictures = sortArrayRandom(pictures).slice(0, PHOTOS_RANDOM);
        break;
      case 'filter-discussed':
        sortingPictures = pictures.slice().sort(sortArrayByComments);
        break;
      default:
        sortingPictures = pictures;
        break;
    }
    renderPhoto(sortingPictures, onPictureClick);
  };
  imageFilterButtons.forEach((filterButton) => {
    const sortPicturesWithDebounce = debounce(sortImagesCallback, DEBOUNCE_IMAGES_DELAY);
    filterButton.addEventListener('click', () => {
      const filterType = changeFilter(filterButton);
      sortPicturesWithDebounce(filterType);
    });
  });
};

export { sortPictures };
