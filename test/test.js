const assert = require('power-assert');
const Processor = require('../index.js');
describe('buf-processor test', () => {
  it('test1', () => {
    const buf = new Uint8Array([1, 2, 3, 0xff]);
    const proc = new Processor(buf);
    const str1 = proc.readAsHexString(0, 1);
    assert(str1 === '01');
    const str2 = proc.readAsHexString(3, 1);
    assert(str2 === 'ff');
    const str3 = proc.readAsHexString(0, 4);
    assert(str3 === '010203ff');
    const num1 = proc.readAsInt(0, 1);
    assert(num1 === 1);
    const num2 = proc.readAsInt(0, 2);
    assert(num2 === 258);
  });
});