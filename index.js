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
  return function bufProcessor(buffer) {
    self = this;
    this.buffer = buffer;
    this.readAsHexString = readAsHexString;
    this.readAsInt = readAsInt;
  };
})();