/* eslint-disable operator-linebreak */

const Test = {
  assertEquals: (a, b) => [a === b, a, b],
  // eslint-disable-next-line eqeqeq
  assertSimilar: (a, b) => [a == b, a, b],
};

/**
 * friend
 * @param {string[]} friends The friends array
 * @returns {string[]} The returned friends
 */
const friend = (fs) => fs.filter((f) => f.length === 4);

console.log(
  Test.assertSimilar(friend(['Ryan', 'Kieran', 'Mark']), ['Ryan', 'Mark']),
);
console.log(
  Test.assertSimilar(friend(['Ryan', 'Jimmy', '123', '4', 'Cool Man']), [
    'Ryan',
  ]),
);
console.log(
  Test.assertSimilar(
    friend(['Jimm', 'Cari', 'aret', 'truehdnviegkwgvke', 'sixtyiscooooool']),
    ['Jimm', 'Cari', 'aret'],
  ),
);
console.log(
  Test.assertSimilar(friend(['Love', 'Your', 'Face', '1']), [
    'Love',
    'Your',
    'Face',
  ]),
);
