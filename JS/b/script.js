// b)Найти в строке все числа. Учитывать дробные числа.

// Например текст: У Пети было 10 яблок, 2.5 он отдал Маше, 3.5 Васе и 4 оставил себе.
// Результат
//[10,2.5,3.5,4]

const message =
  'У Пети было 10 яблок, 2.5 он отдал Маше, 3.5 Васе и 4 оставил себе.';
const result = [];
let total = message.split(' ');
for (const el of total) {
  if (parseInt(el)) {
    result.push(el);
  }
}
console.log(result);
