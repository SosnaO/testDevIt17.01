// a Заполнить массив заданной длины различными простыми числами.Натуральное число, большее единицы,
//     называется простым, если оно делится только на себя и на единицу.

function primeArray(arrayLeng) {
  let number = arrayLeng + 100;
  let seive = [];
  let total = [];
  let result = [];
  for (let i = 2; i <= number; i++) {
    if (!seive[i]) {
      total.push(i);
      for (let j = i * 2; j <= number; j += i) {
        seive[j] = true;
      }
    }
    result = total.slice(0, arrayLeng);
  }
  return result;
}
console.log(primeArray(5)); // [2,3,5,7,11];
console.log(primeArray(7)); // [2,3,5,7,11,13,17];
