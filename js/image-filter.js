const imageFilters = document.querySelector('.img-filters');
const imageFilterButtons = document.querySelectorAll('.img-filters__button');

function changeFilter(filterButton) {
  imageFilterButtons.forEach((button) => {
    button.classList.remove('img-filters__button--active');
  });
  filterButton.classList.add('img-filters__button--active');
  return filterButton.id;
}

export {imageFilters, changeFilter, imageFilterButtons};
