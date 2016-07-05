module.exports = (function() {
  let self;
  function readAsHexString(initIdx, length) {
    let line = '';
    for (let i = initIdx; i < (initIdx + length); i++) {
      const str = self.buffer[i].toString(16);
      if (str.length < 2) {
        line += ('0' + str);
      } else {
        line += str;
      }
    }
    return line;
  }
  function readAsInt(initIdx, length) {
    const hex = readAsHexString(initIdx, length);
    const num = parseInt(hex, 16);
    return num;
  }
  function indexOf(subject) {
    let ss = [];
    for (let j = 0; j < subject.length; j += 2) {
      ss.push(subject.substring(j, j + 2));
    }
    let check = [];
    for (let i = 0, idx = 0, s = ss[idx]; i < self.buffer.length; i++) {
      let str = readAsHexString(i, 1);
      if (s === str) {
        check.push(i);
        idx += 1;
        s = ss[idx];
      } else {
        if (check.length > 0) {
          break;
        }
      }
    }
    return check.length === ss.length ? check[0] : -1;
  }
  return function bufProcessor(buffer) {
    self = this;
    this.buffer = buffer;
    this.readAsHexString = readAsHexString;
    this.readAsInt = readAsInt;
    this.indexOf = indexOf;
  };
})();