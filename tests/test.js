const assert = require('chai').assert;
const Game = require('./game');

describe('Тест основных глаголов', function () {
  before(function(){
    this.game = new Game('basic_meta_verbs')
  })
  it('тест', function () {
    this.game.input("тест");
    assert.equal(global.window.text, 'Работает.');
  })
  it('тест2', function() {
    this.game.input("тест2");
    assert.equal(global.window.text, 'Всё ещё работает.')
  });
  it('конец', function() {
    this.game.input("конец");
    assert.equal(global.window.text, 'Вы хотите покинуть игру? ')
    this.game.input("д");
    assert.equal(global.window.text, '')
  })
});
