/* eslint-disable implicit-arrow-linebreak */
const letters = { a: 'b', b: 'a', c: 'c' };

/**
 * switcheroo
 * @param {string} s The string
 * @returns {string}
 */
const switcheroo = (s) =>
  s
    .split('')
    .map((l) => letters[l])
    .join('');

console.log(switcheroo('abc') === 'bac', switcheroo('abc'), 'bac');
console.log(
  switcheroo('aaabcccbaaa') === 'bbbacccabbb',
  switcheroo('aaabcccbaaa'),
  'bbbacccabbb',
);
console.log(switcheroo('ccccc') === 'ccccc', switcheroo('ccccc'), 'ccccc');
