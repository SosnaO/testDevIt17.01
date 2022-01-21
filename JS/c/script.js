// Замена подряд идущих букв на их количество.
// assdssddffffrrreeeweggggg // => 'as2ds2d2f4r3e3weg5'

const message = 'assdssddffffrrreeeweggggg';
let total = [];
let result;
let value = 0;
for (let i = 0; i <= message.length; i++) {
  if (message[i] === message[i + 1]) {
    value++;
  } else {
    if (value >= 2) {
      total.push(message[i] + value);
      value = 1;
    } else {
      value = 1;
      total.push(message[i]);
    }
  }
  result = total.join('');
}
console.log('result=', result);
