```js
var unique = require('unique-words');
var str = 'one two one two three';

console.log(unique(str));
// => ['one', 'two', 'three']

var arr = [
  'foo',
  'foo',
  'foo bar',
  'bar',
  'bar baz foo'
];

console.log(unique(arr));
// => ['foo', 'bar', 'baz']
```
