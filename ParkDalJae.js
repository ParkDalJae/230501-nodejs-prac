example = [[1, 2, 3], [4, [5, 6]], 7, [8, 9]];

function exampleOne(array) {
  const flattened = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flattened.push(...exampleOne(array[i]));
    } else {
      flattened.push(array[i]);
    }
  }
  return flattened;
}

console.log(exampleOne(example) + "확인");
let a = [];
a.push(
  ...example[0],
  ...[example[1][0]],
  ...example[1][1],
  ...[example[2], ...example[3]]
);
console.log(a);
