import { isEscape } from "./util";
import { ALERT_SHOW_TIME } from './constants';

function showSuccessAlert() {
  const successTemplate = document.querySelector('#success').content;
  const successElement = successTemplate.cloneNode(true);
  document.body.append(successElement);
  const successMessage = document.querySelector('.success');
  const successInner = document.querySelector('.success__inner');
  document.querySelector('.success__button').addEventListener('click', onMessageRemove);
  document.addEventListener('keydown', onEventClose);
  document.addEventListener('click', onEventClose);
  function onMessageRemove() {
    successMessage.remove();
  }
  function onEventClose(evt) {
    if (isEscape(evt) || !successInner.contains(evt.target)) {
      onMessageRemove();
    }
  }
}

function showErrorAlert() {
  const errorTemplate = document.querySelector('#error').content;
  const errorElement = errorTemplate.cloneNode(true);
  document.body.append(errorElement);
  const errorMessage = document.querySelector('.error');
  const errorInner = document.querySelector('.error__inner');
  document.querySelector('.error__button').addEventListener('click', onMessageRemove);
  document.addEventListener('keydown', onEventClose);
  document.addEventListener('click', onEventClose);
  function onMessageRemove() {
    errorMessage.remove();
  }
  function onEventClose(evt) {
    if (isEscape(evt) || !errorInner.contains(evt.target)) {
      onMessageRemove();
    }
  }
}

function showDataError() {
  const dataErrorTemplate = document.querySelector('#data-error').content;
  const dataErrorElement = dataErrorTemplate.cloneNode(true);
  document.body.append(dataErrorElement);
  const dataErrorMessage = document.querySelector('.data-error');
  setTimeout(() => {
    dataErrorMessage.remove();
  }, ALERT_SHOW_TIME);
}

export { showSuccessAlert, showErrorAlert, showDataError };
