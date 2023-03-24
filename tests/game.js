const execSync = require('child_process').execSync;
const fs = require('fs');
const quixe = require('quixe');

class Game {
  constructor(game) {
    this.game = game;
    this.Q = new quixe();

    this.compileGame();
    this.Q.init(this.game+'.ulx');
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
    this.Q.input(text, function(text) {
      global.window.text = ''
      if (text !== undefined && text[1] !== undefined && text[1].content !== undefined) {
        global.window.text = text[1].content[1]
      }
    });
  }
};

module.exports = Game
