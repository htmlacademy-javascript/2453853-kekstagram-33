// Проверка строки на максимальную длину
const isMaxLength = function (currentString, maxLength) {
  return currentString.lenght <= maxLength;
};
isMaxLength('Здесь 17 символов', 20);

// Проверка, является ли строка полиндромом, 1 вариант
function isPolindrom(currentString) {
  const changeString = currentString.replaceAll(' ', '').toUpperCase(currentString);
  let reverseString = '';
  for (let i = changeString.length - 1; i >= 0; i--) {
    reverseString += changeString.at(i);
  }
  return (changeString === reverseString) ? 'true' : 'false';
}

// Проверка, является ли строка полиндромом, 2 вариант
function isPolindrom2(currentString) {
  const changeString = currentString.replaceAll(' ', '').toLowerCase(currentString);
  const reverseString = changeString.split('').reverse().join('');
  return (changeString === reverseString) ? 'true' : 'false';
}
isPolindrom('топот'); // true
isPolindrom2('ДовОд'); // true
isPolindrom2('Кекс'); // false

// Склеивание цифр в одно число
// Приводим любое принятое значение к строке
function mergeNumbers(currentString) {
  let changeString;
  if (typeof (currentString) === 'number') {
    changeString = String(currentString);
  } else {
    changeString = currentString.replaceAll(' ', '');
  }
  let finishedNumber = '';
  for (let i = 0; i <= changeString.length; i++) {
    if (!isNaN(Number(changeString[i]))) {
      finishedNumber += changeString[i];
    }
  }
  return finishedNumber === '' ? NaN : Number(finishedNumber);
}
mergeNumbers('2023 год'); // 2023
mergeNumbers('ECMAScript 2022'); // 2022
mergeNumbers('1 кефир, 0.5 батона'); // 105
mergeNumbers('агент 007'); // 7
mergeNumbers('а я томат'); // NaN

// решение наставника
function extraDigit(input) {
  const str = String(input);
  const digits = str.match(/\d+/g);
  if (!digits) {
    return NaN;
  }
  return Number(digits.join(''));
}
extraDigit('2023 год');
