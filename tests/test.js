const spawn	= require('child_process').spawn;
//const fs = require('fs');
const assert = require('chai').assert;

describe('Тест игры', function () {
  it('Игра должна соответствовать прохождению', function (done) {
    const glk = 'ambiguity.ulx';
    this.game = spawn('/usr/bin/glulxe-term', [glk]);
    this.game.stdin.setEncoding = 'utf-8';
    this.out = "";
    this.game.stdout.on('data', function(data){
      let out = data.toString()+"\n"
      out = out.replace("\x1B[3d", "")
      out = out.replace("\x1B[21d", "")
      out = out.replace("\x1B[23d", "")
      out = out.replace("\x1B[3M", "")
      out = out.replace("\r", "\n")
      out = out.trim()
      assert.equal(out, 'eee');
      done()
    })
    this.game.stdin.write("осм\nвзять кошку\nконец\nда\n\n");
  });
});
