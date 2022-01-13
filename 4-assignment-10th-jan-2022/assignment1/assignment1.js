// Write a function that flattens an array. The array can be nested to any level.
// Input: [1, 2, 3, [4], 5]
// Ouptut: [1, 2, 3, 4, 5]. The nesting can be till n level so write your logic accordingly.

const nested = [
  1,
  2,
  3,
  [[4], [5]],
  [6, [7, [8, [9]]]],
  "abc",
  null,
  false,
  true,
  [{ animal: "cat" }, [{ bird: "parrot" }]],
];
const flattened = flattenArray(nested, []);
console.log(flattened);

function flattenArray(sourceArr, resultArr) {
  for (let element of sourceArr) {
    if (Array.isArray(element)) {
      flattenArray(element, resultArr);
    } else {
      resultArr.push(element);
    }
  }
  return resultArr;
}