    
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  const numbersOfA = names.reduce((accumulator, current) => {
    return accumulator + current.toLowerCase().split('').filter((element) => element === 'a').length;
  }, 0);
  return numbersOfA;
}

assert.deepEqual(containsA(), 20);