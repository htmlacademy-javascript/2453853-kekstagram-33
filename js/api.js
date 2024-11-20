
/*
const createLoader = (onSuccess, onError) => () =>
  fetch('https://32.javascript.htmlacademy.pro/kekstagram/data',
    {
      method: 'GET',
      credentials: 'same-origin',
      // body: new FormData(),
    },
  )
    .then((response) => {
      if (response.ok) {
        console.log(response.status);
        return response.json();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((data) => {
      console.log('Результат', data);
    })
    .catch((err) => {
      console.error(err);
    });

export { createLoader };
*/
