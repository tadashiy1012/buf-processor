[![Build Status](https://travis-ci.org/tadashiy1012/buf-processor.svg?branch=master)](https://travis-ci.org/tadashiy1012/buf-processor)
# buf-processor
It provides operations to the binary

## Installation
`npm install buf-processor`

## Example
```JavaScript
var Processor = require('buf-processor');
var buf = new Uint8Array([1, 2, 3, 0xff]);
var proc = new Processor(buf);
var str = proc.readAsHexString(0, 1); // '01'
var idx = proc.indexOf('01'); // 0
```

## License
MIT
