// Создать функцию которая при каждом вызове вернет случайное число от 0 до 100 без повторений.
// Если закончились варианты вернет ошибку.Реализовать через замыкание.

function random(value) {
  function repetition() {
    let result = [];
    for (let i = 0; i <= value; i++) {
      let i = Math.floor(Math.random() * value) + 1;
      if (!result.includes(i)) {
        result.push(i);
      } else {
        console.log('result', result);
        return console.log('Ошибка!!!');
      }
    }
    return result;
  }
  repetition();
}
random(100);
