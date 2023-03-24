const {decode} = require('punycode');

const spawn	= require('child_process').spawn;
//const fs = require('fs');
const assert = require('chai').assert;

function cleanString(input) {
  return input.replace(/[^а-яА-Я\.\?\! ]/g, '').replace("\r", "\n").trim()
}

describe('Тест игры', function () {
  it('Игра должна соответствовать прохождению', function (done) {
    const glk = 'ambiguity.ulx';
    this.game = spawn('/usr/bin/glulxe-term', [glk]);
    this.game.stdin.setEncoding = 'utf-8';
    this.out = "";
    this.game.stdout.on('data', function(data){
      let out = data.toString()+"\n"
      out = cleanString(out);
      console.log(out)
      assert.equal(out, 'eee');
      done()
    })
    this.game.stdin.write("взять кошку\nконец\nда\n\n");
  });
});
