const example18 = 'Привет, здесь 18с.';
const example7 = 'Привет!';


/* Строка короче 20 символов
имяФункции('проверяемая строка', 20); // true*/
/*const fun20 = (a, b) => {
  if (a.length < b) {
    return console.log('true');
  } else {
    return console.log('false');
  }
};*/
/*const fun20 = (a, b) => {
  if (a.length < b) {
    return console.log('true');
  } return console.log('false');
};*/

function funLess20(a, b) {
  return (a.length < b) ? console.log('true') : console.log('false');
}
funLess20(example18, 20);

/* Длина строки ровно 18 символов
имяФункции('проверяемая строка', 18); // true*/
function funEqual18(a, b) {
  return (a.length === b) ? console.log('true') : console.log('false');
}
funEqual18(example18, 18);

/* Строка длиннее 10 символов
имяФункции('проверяемая строка', 10); // false */
function funMore10(a, b) {
  return (a.length > b) ? console.log('true') : console.log('false');
}
funMore10(example7, 10);


/* Строка является палиндромом
имяФункции('топот'); // true */
function palindrom(a) {
  a = a.replaceAll(' ', '').toUpperCase(a);
  let b = '';
  for (let i = a.length - 1; i >= 0; i--) {
    b += a.at(i);
  }
  return (a === b) ? console.log('true') : console.log('false');
}
palindrom('топот');

/* Несмотря на разный регистр, тоже палиндром
имяФункции('ДовОд'); // true */
palindrom('ДовОд');

/* Это не палиндром
имяФункции('Кекс');  // false */
palindrom('Кекс');

//Дополнительное задание
/*Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN
имяФункции('2023 год');            // 2023
имяФункции('ECMAScript 2022');     // 2022
имяФункции('1 кефир, 0.5 батона'); // 105
имяФункции('агент 007');           // 7
имяФункции('а я томат');           // NaN */

function funAdditional(a) {
  /* if (!Number.isNaN(a)) {
    return console.log(parseFloat(a));
  }
  return console.log('NaN'); */
  const b = a.replaceAll(' ', '');
  return (!Number.isNaN(a)) ? console.log(b, parseFloat(b)) : console.log('NaN');
}
funAdditional('2023 год');
funAdditional('ECMAScript 2022');
funAdditional('1 кефир, 0.5 батона');
funAdditional('агент 007');
funAdditional('а я томат');
