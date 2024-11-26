import { isEscape } from './util';
import { ALERT_SHOW_TIME } from './constants';


const successSendMessageTemp = document.querySelector('#success');
const successSendMessage = successSendMessageTemp.content.querySelector('.success');
const successButton = successSendMessageTemp.content.querySelector('.success__button');
const errorSendMessageTemp = document.querySelector('#error');
const errorSendMessage = errorSendMessageTemp.content.querySelector('.error');
const errorButton = errorSendMessageTemp.content.querySelector('.error__button');
const dataErrorTemplate = document.querySelector('#data-error');
const dataErrorMessage = dataErrorTemplate.content.querySelector('.data-error');

const onMessageKeyClick = (currentElement, onClose) => (evt) => {
  if (isEscape(evt)) {
    evt.preventDefault();
    closeMessage(currentElement, onClose);
  }
};

const onAnyFieldClick = (currentElement, onClose) => (evt) => {
  if (!currentElement.children[0].contains(evt.target)) {
    closeMessage(currentElement, onClose);
  }
};

let onMessageKeyClickCallback;
let onAnyFieldClickCallback;

const openMessage = (currentMessage, onClose) => {
  onMessageKeyClickCallback = onMessageKeyClick(currentMessage, onClose);
  onAnyFieldClickCallback = onAnyFieldClick(currentMessage, onClose);
  document.body.append(currentMessage);
  document.addEventListener('keydown', onMessageKeyClickCallback);
  document.addEventListener('click', onAnyFieldClickCallback);
};

function closeMessage(currentMessage, onClose) {
  currentMessage.remove();
  if (onClose !== undefined) {
    onClose();
  }
  document.removeEventListener('keydown', onMessageKeyClickCallback);
  document.removeEventListener('click', onAnyFieldClickCallback);
}

const openSuccessSendMessage = () => {
  openMessage(successSendMessage);

  successButton.addEventListener('click', () => {
    closeMessage(successSendMessage);
  });
};

const openErrorSendMessage = (onClose) => {
  openMessage(errorSendMessage, onClose);

  errorButton.addEventListener('click', () => {
    closeMessage(errorSendMessage, onClose);
  });
};

const openDataError = () => {
  document.body.append(dataErrorMessage);

  setTimeout(() => {
    dataErrorMessage.remove();
  }, ALERT_SHOW_TIME);
};

export { openSuccessSendMessage, openErrorSendMessage, openDataError };
