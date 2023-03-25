const assert = require('chai').assert;
const Game = require('./game');

describe('Тест 2', function() {
  before(function(){
    this.game = new Game('ambiguity');
  });

  it('проверка себя', function () {
    // Тесты: ввод-вывод, первая ошибка прерывает программу
    this.game.input("взять себя");
    assert.equal(global.window.text, 'Ты всегда есть у себя.')
  });
  it('взять пух', function () {
    this.game.input("взять пух");
    assert.equal(global.window.text, 'Ты берёшь пух.');
  });
  it('взять кофе', function () {
    this.game.input("взять кофе");
    assert.equal(global.window.text, 'Ты берёшь кофе.')
    this.game.input("кинуть кофе");
    assert.equal(global.window.text, 'Брошены.')
  });
  it('взять кошку', function () {
    this.game.input("взять кошку");
    assert.equal(global.window.text, 'Полосатой кошке это вряд ли понравится.')
  });
  it('дать кофе кошке', function () {
    this.game.input("дать кофе кошке");
    // TODO здесь нужно проверять несколько строк
    assert.equal(global.window.text, "(сначала взяв кофе)")
  });
  it('подарки кошке', function () {
    this.game.input("взять кота");
    this.game.input("дать кота кошке");
    assert.equal(global.window.text, 'Полосатую кошку это не заинтересовало.')
    this.game.input("взять статуэтку");
    assert.equal(global.window.text, 'Ты берёшь странную статую.')
    this.game.input("дать статуэтку кошке");
    assert.equal(global.window.text, 'Полосатую кошку это не заинтересовало.')
  });
})
