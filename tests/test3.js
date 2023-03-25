const assert = require('chai').assert;
const Game = require('./game');

describe('Тест 3', function() {
  before(function(){
    this.game = new Game('walking');
  });

  it('ходьба', function () {
    const directions = ['с', 'ю', 'св', 'юз', 'в', 'з', 'юв', 'сз', 'север', 'юг', 'вв', 'вн', 'северо-восток', 'юго-запад', 'северовосток', 'югозапад', 'восток', 'запад', 'юго-восток', 'северо-запад', 'юговосток', 'северозапад', 'вверх', 'вниз', 'наверх', 'внутрь', 'наружу']
    const verbs = ['', 'идти', 'пойти', 'бежать', 'побежать', 'убежать', 'ехать', 'уехать', 'поехать']
    const prep = ['', 'на']
    let command = ''
    for (i = 0; i < directions.length; i++) {
      let dir = directions[i];
      for(j = 0; j < verbs.length; j++) {
        let verb = verbs[j];
        for(k = 0; k< prep.length; k++) {
          let p = prep[k];
          // пойти на север - на север - север
          command = [verb, p, dir].join(' ');
          this.game.input(command);
          //console.log(global.window);
          //assert.equal(global.window.text, 'Ты всегда есть у себя.')
          this.game.input('отмена')
        }
      }
    }
  });
})
