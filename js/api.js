import { showSuccessAlert, showDataError } from './alerts.js';
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

const sendData = (onSuccess, onFail, body) => {
  fetch(`${BASE_URL}${Route.SEND_DATA}`,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
        showSuccessAlert();
      } else {
        onFail();
        throw new Error('Данные не валидны');
      }
    })
    .catch(() => {
      onFail();
      showDataError();
    });
};

export { getData, sendData };
