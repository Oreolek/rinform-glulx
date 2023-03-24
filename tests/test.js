const assert = require('chai').assert;
const execSync = require('child_process').execSync;
const fs = require('fs');
const quixe = require('quixe');

class Game {
  constructor(game) {
    this.game = game;
    this.Q = new quixe();

    this.compileGame();
    this.Q.init(this.game+'.ulx', function(text) {
      global.window.text = ''
      if (text !== undefined && text[1] !== undefined && text[1].content !== undefined) {
        global.window.text = text[1].content[1]
      }
    });
  }

  /**
   * Компиляция игры
   */
  compileGame() {
    if (!fs.existsSync("./"+this.game+".ulx")) {
      console.log('Компилируем '+game);
      execSync(`inform +../library,../libext +language_name=Russian -DG -Cu '$DICT_CHAR_SIZE=4' _Sources/${this.game}.inf`, {
        'encoding': 'utf-8',
      });
    }
  }

  input(text) {
    this.Q.input(text);
  }
};

describe('Тест основных глаголов', function () {
  before(function(){
    this.game = new Game('basic_meta_verbs')
  })
  it('тест', function (done) {
    this.game.input("тест");
    assert.equal(global.window.text, 'Работает.');
  })
  it('тест2', function(done) {
    this.this.game.input("тест2");
    assert.equal(global.window.text, 'Всё ещё работает.')
  });
  it('конец', function(done) {
    this.this.game.input("конец");
    assert.equal(global.window.text, 'Вы хотите покинуть игру? ')
    this.this.game.input("д");
    assert.equal(global.window.text, '')
  })
});

describe('Тест 2', function() {
  before(function(){
    this.game = new Game('ambiguity');
  });

  it('тест', function (done) {
    // Тесты: ввод-вывод, первая ошибка прерывает программу
    this.game.input("взять себя");
    assert.equal(global.window.text, 'Ты всегда есть у себя.')
    this.game.input("взять пух");
    assert.equal(global.window.text, 'Ты берёшь пух.');
    this.game.input("взять кофе");
    assert.equal(global.window.text, 'Ты берёшь кофе.')
    this.game.input("кинуть кофе");
    assert.equal(global.window.text, 'Брошено.')
    this.game.input("взять кошку");
    assert.equal(global.window.text, 'Кошке это не понравится.')
    this.game.input("дать кофе кошке");
    assert.equal(global.window.text, 'Взял')
    this.game.input("взять статую");
    assert.equal(global.window.text, 'Ты берёшь статую.')
    this.game.input("дать кота кошке");
    assert.equal(global.window.text, 'Взял')
    this.game.input("дать статуэтку кошке");
    assert.equal(global.window.text, 'Взял')
    this.game.input("конец");
    this.game.input("да");
  });
})
