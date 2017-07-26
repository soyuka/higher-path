# Higher Path

Higher allowed path based on a root and a given path

```
const assert = require('assert')
const higherPath = require('heigher-path')

assert.equal(higherPath('/some/path', '/some'), '/some/path')
assert.equal(higherPath('/some/path', '/some/path/../../'), '/some/path')
assert.equal(higherPath('/some/path', '../../'), '/some/path')
assert.equal(higherPath('/some/path', '/'), '/some/path')
assert.equal(higherPath('/some/path', '/foo'), '/some/path')
assert.equal(higherPath('/some/path', '/some/path/foo'), '/some/path/foo')
assert.equal(higherPath('/some/path', 'foo'), '/some/path/foo')
```
