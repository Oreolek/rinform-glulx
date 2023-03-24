const execSync	= require('child_process').execSync;
const quixe = require('quixe');
const assert = require('chai').assert;

function cleanString(input) {
  return input.replace(/[^а-яА-ЯЁё\.\?\! >]/g, '').trim()
}

const Q = new quixe()
execSync('inform', ['+../../library,../../libext', '+language_name=Russian', '-DG', '-Cu', '$DICT_CHAR_SIZE=4', '_Sources/ambiguity.inf']);
Q.init('ambiguity.ulx', function(text) {
  global.window.text = text[1].content[1]
});
Q.input("взять себя");
assert.equal(global.window.text, 'Ты всегда есть у себя.')
Q.input("взять кошку");
assert.equal(global.window.text, 'Взял')
Q.input("конец");
Q.input("да");
