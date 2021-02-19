function spoonerize(words) {
  words = words.split(' ');
  words[0] = words[0].split('');
  words[1] = words[1].split('');
  const temp = words[0][0];
  // eslint-disable-next-line prefer-destructuring
  words[0][0] = words[1][0];
  words[1][0] = temp;
  words[0] = words[0].join('');
  words[1] = words[1].join('');
  words = words.join(' ');
  return words;
}

console.log(
  spoonerize('nit picking') === 'pit nicking',
  spoonerize('nit picking'),
  'pit nicking',
);
console.log(
  spoonerize('wedding bells') === 'bedding wells',
  spoonerize('wedding bells'),
  'bedding wells',
);
console.log(
  spoonerize('jelly beans') === 'belly jeans',
  spoonerize('jelly beans'),
  'belly jeans',
);
