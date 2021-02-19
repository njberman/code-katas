/* eslint-disable no-param-reassign */

/**
 * First Letter Uppercase
 * @param {string} w The word to uppercase first letter
 * @returns {string} The uppercased word
 */
const firstLetterUppercase = (w) => w.charAt(0).toUpperCase() + w.slice(1);

/**
 * Title Case
 * @param {string} title The title
 * @param {string} minorWords The words to filter
 */
function titleCase(title, minorWords = '') {
  title = title.toLowerCase();
  const output = title.split(' ').map((w) => firstLetterUppercase(w));
  if (minorWords.length > 0) {
    minorWords.split(' ').forEach((minorWord) => {
      minorWord = minorWord.toLowerCase();
      if (title.includes(minorWord)) {
        const index = title.split(' ').indexOf(minorWord, 1);
        output[index] = minorWord;
      }
    });
  }
  return output.join(' ');
}

console.log(
  titleCase('a clash of KINGS', 'a an the of') === 'A Clash of Kings',
  titleCase('a clash of KINGS', 'a an the of'),
  'A Clash of Kings',
);

console.log(titleCase('') === '', titleCase(''), '');
console.log(
  titleCase('THE WIND IN THE WILLOWS', 'The In') === 'The Wind in the Willows',
  titleCase('THE WIND IN THE WILLOWS', 'The In'),
  'The Wind in the Willows',
);
console.log(
  titleCase('the quick brown fox') === 'The Quick Brown Fox',
  titleCase('the quick brown fox'),
  'The Quick Brown Fox',
);
