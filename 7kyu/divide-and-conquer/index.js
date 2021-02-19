/**
 * divCon
 * @param {(string | number)[]} nums The numbers tod
 */
function divCon(nums) {
  let nonStringTotal = 0;
  let stringTotal = 0;
  let output = 0;

  nums.forEach((n) => {
    if (typeof n === 'string') stringTotal += parseInt(n, 10);
    else if (typeof n === 'number') nonStringTotal += n;
  });

  output = nonStringTotal - stringTotal;

  return output;
}

const Test = {
  assertEquals: (a, b) => [a === b, a, b],
  // eslint-disable-next-line eqeqeq
  assertSimilar: (a, b) => [a == b, a, b],
};

console.log(...Test.assertEquals(divCon([9, 3, '7', '3']), 2));
console.log(
  ...Test.assertEquals(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14),
);
console.log(
  ...Test.assertEquals(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']), 13),
);
