const execSync	= require('child_process').execSync;
const quixe = require('quixe');
const assert = require('chai').assert;

function cleanString(input) {
  return input.replace(/[^а-яА-ЯЁё\.\?\! >]/g, '').trim()
}

const Q = new quixe(2)
execSync('inform', ['+../../library,../../libext', '+language_name=Russian', '-DG', '-Cu', '$DICT_CHAR_SIZE=4', '_Sources/ambiguity.inf']);
Q.init('ambiguity.ulx', function(text) {
  console.log(text)
});
Q.input("взять кошку");
Q.input("взять себя");
Q.input("конец\nда\n\n");
