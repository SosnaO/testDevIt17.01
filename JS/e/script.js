// Создать функцию которая при каждом вызове вернет случайное число от 0 до 100 без повторений.
// Если закончились варианты вернет ошибку.Реализовать через замыкание.

function random(value) {
  function repetition() {
    let result = [];
    while (result.length <= value) {
      let i = Math.floor(Math.random() * (value + 1));
      if (result.includes(i)) {
        continue;
      } else {
        result.push(i);
      }
      if (result.length > value) break;
    }
    console.log('result', result);
    return result;
  }
  repetition();
}
random(100);
