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
    assert.equal(global.window.text, 'Брошено.')
  });
  it('взять кошку', function () {
    this.game.input("взять кошку");
    assert.equal(global.window.text, 'Кошке это не понравится.')
  });
  it('дать кофе кошке', function () {
    this.game.input("дать кофе кошке");
    assert.equal(global.window.text, 'Взял')
  });
  it('взять статую', function () {
    this.game.input("взять статую");
    assert.equal(global.window.text, 'Ты берёшь статую.')
  });
  it('подарки кошке', function () {
    this.game.input("дать кота кошке");
    assert.equal(global.window.text, 'Взял')
    this.game.input("дать статуэтку кошке");
    assert.equal(global.window.text, 'Взял')
  });
})
