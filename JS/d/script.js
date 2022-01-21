// Pеализовать функцию get. Которая по пути ищет значение в объекте или в массиве.
// const exampleArr = [{a:{b:[{c:4}, {c:5}]},{a:{b:[{c:6},{c:7}]}];
// const exampleObj = { a:b:{c:5}}
// get(exampleArr, '0.a.b.1.c') // 5
// get(exampleObj, 'a.b') // {c:5}

//
const exampleArr = [
  { a: { b: [{ c: 4 }, { c: 5 }] } },
  { a: { b: [{ c: 6 }, { c: 7 }] } },
];

const exampleObj = { a: { b: { c: 5 } } };

function find(ob, str) {
  const keys = str.split('.');
  let current = ob;
  for (let i = 0; keys.length > 0; i++) {
    const k = keys.shift();
    if (k in current) {
      current = current[k];
    }
  }
  return current;
}

function get(...args) {
  console.log(find(...args));
}

get(exampleArr, '0.a.b.1.c'); // 5
get(exampleObj, 'a.b'); // {c:5}
