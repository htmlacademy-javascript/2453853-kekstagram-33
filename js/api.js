import { openSuccessSendMessage, openDataError } from './alerts.js';
import { BASE_URL } from './constants.js';

const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/'
};

const getData = (onSuccess) => {
  fetch(`${BASE_URL}${Route.GET_DATA}`)
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
    });
};

const sendData = (body) =>
  fetch(`${BASE_URL}${Route.SEND_DATA}`, {
    method: 'POST',
    body,
  })
    .then((response) => {
      if (response.ok) {
        openSuccessSendMessage(); // Показываем успешное сообщение, если нужно
        return response; // Возвращаем ответ для дальнейшей обработки, если нужно
      } else {
        throw new Error('Данные не валидны'); // Если ответ не успешный, выбрасываем ошибку
      }
    })
    .catch(() => {
      openDataError(); // Обработка ошибки
    });

export { getData, sendData };
