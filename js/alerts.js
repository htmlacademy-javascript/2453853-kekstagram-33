import { isEscape } from './util';
import { ALERT_SHOW_TIME } from './constants';

function showAlert(alertType) {
  const template = document.querySelector(`#${alertType}`).content; // Получаем шаблон в зависимости от типа
  const alertElement = template.cloneNode(true);
  document.body.append(alertElement);
  const alertMessage = document.querySelector(`.${alertType}`);
  const alertInner = document.querySelector(`.${alertType}__inner`);

  // Настраиваем обработчики событий
  document.querySelector(`.${alertType}__button`).addEventListener('click', onMessageRemove);
  document.addEventListener('keydown', onEventClose);
  document.addEventListener('click', onEventClose);

  function onMessageRemove() {
    alertMessage.remove();
    removeListeners();
  }
  function onEventClose(evt) {
    if (isEscape(evt) || !alertInner.contains(evt.target)) {
      onMessageRemove();
    }
  }
  // Убираем слушатели событий после удаления сообщения
  function removeListeners() {
    document.removeEventListener('keydown', onEventClose);
    document.removeEventListener('click', onEventClose);
  }
}

function showSuccessAlert() {
  showAlert('success');
}

function showErrorAlert() {
  showAlert('error');
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
