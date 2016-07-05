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
```

## License
MIT
