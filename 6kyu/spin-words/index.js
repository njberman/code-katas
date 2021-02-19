/* eslint-disable implicit-arrow-linebreak */
const Test = {
  assertEquals: (a, b) => [a === b, a, b],
  // eslint-disable-next-line eqeqeq
  assertSimilar: (a, b) => [a == b, a, b],
};

// /**
//  * spinWords
//  * @param {string} words The words
//  */
// function spinWords(words) {
//   return words.split(' ').map((word) => {
//     if (word.length >= 5) return word.split('').reverse().join('');
//     return word;
//   }).join(' ');
// }
/**
 * spinWords
 * @param {string} x The words
 */
const spinWords = (x) =>
  x
    .split(' ')
    .map((y) => (y.length >= 5 ? y.split('').reverse().join('') : y))
    .join(' ');

console.log(Test.assertEquals(spinWords('Welcome'), 'emocleW'));
console.log(
  Test.assertEquals(spinWords('Hey fellow warriors'), 'Hey wollef sroirraw'),
);
console.log(Test.assertEquals(spinWords('This is a test'), 'This is a test'));
console.log(
  Test.assertEquals(spinWords('This is another test'), 'This is rehtona test'),
);
console.log(
  Test.assertEquals(
    spinWords('You are almost to the last test'),
    'You are tsomla to the last test',
  ),
);
console.log(
  Test.assertEquals(
    spinWords('Just kidding there is still one more'),
    'Just gniddik ereht is llits one more',
  ),
);
console.log(
  Test.assertEquals(
    spinWords('Seriously this is the last one'),
    'ylsuoireS this is the last one',
  ),
);
