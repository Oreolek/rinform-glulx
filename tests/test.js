const assert = require('chai').assert;

const test1 = new BasicTest();
// Интерпретатор Quixe
Q.init('ambiguity.ulx', function(text) {
  global.window.text = text[1].content[1]
});

// Тесты: ввод-вывод, первая ошибка прерывает программу
Q.input("взять себя");
assert.equal(global.window.text, 'Ты всегда есть у себя.')
Q.input("взять пух");
assert.equal(global.window.text, 'Ты берёшь пух.')
Q.input("взять кофе");
assert.equal(global.window.text, 'Ты берёшь кофе.')
Q.input("кинуть кофе");
assert.equal(global.window.text, 'Брошено.')
Q.input("взять кошку");
assert.equal(global.window.text, 'Кошке это не понравится.')
Q.input("дать кофе кошке");
assert.equal(global.window.text, 'Взял')
Q.input("взять статую");
assert.equal(global.window.text, 'Ты берёшь статую.')
Q.input("дать кота кошке");
assert.equal(global.window.text, 'Взял')
Q.input("дать статуэтку кошке");
assert.equal(global.window.text, 'Взял')
Q.input("конец");
Q.input("да");
