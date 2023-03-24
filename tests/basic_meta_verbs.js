import Test from './class_test'
import { assert } from 'chai'

export default class Test_Basic extends Test {
  run() {
    this.Q.input("тест");
    assert.equal(global.window.text, 'Работает.')
    this.Q.input("тест2");
    assert.equal(global.window.text, 'Всё ещё работает.')
    this.Q.input("конец");
    assert.equal(global.window.text, 'Вы хотите покинуть игру? ')
    this.Q.input("д");
    assert.equal(global.window.text, '')
  }
}
