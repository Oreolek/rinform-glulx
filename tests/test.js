const spawn	= require('child_process').spawn;
const assert = require('chai').assert;

function cleanString(input) {
  return input.replace(/[^а-яА-ЯЁё\.\?\! >]/g, '').trim()
}

const glk = 'ambiguity.ulx';
this.game = spawn('/usr/bin/glulxe-term', [glk]);
this.game.stdin.setEncoding = 'utf-8';
this.game.stdout.on('data', function(data){
  const out = cleanString(data.toString()).split(/\r?\n/)
  console.log(out)
  assert.equal(out, '');
})
this.game.stdin.write("взять кошку\n");
this.game.stdin.write("взять себя\n");
this.game.stdin.write("конец\nда\n\n");
