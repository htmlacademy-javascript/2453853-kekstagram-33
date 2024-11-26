import { openSuccessSendMessage } from './alerts.js';
import { BASE_URL } from './constants.js';

const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/'
};

const getData = () => new Promise((resolve, reject) => {
  fetch(`${BASE_URL}${Route.GET_DATA}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      resolve(data);
    })
    .catch((error) => {
      reject(error);
    });
});

const sendData = (body) =>
  fetch(`${BASE_URL}${Route.SEND_DATA}`, {
    method: 'POST',
    body,
  })
    .then((response) => {
      if (response.ok) {
        openSuccessSendMessage(); // Показываем успешное сообщение
        return response; // Возвращаем ответ для дальнейшей обработки
      } else {
        throw new Error('Данные не валидны'); // Если ответ не успешный, выбрасываем ошибку
      }
    });

export { getData, sendData };
