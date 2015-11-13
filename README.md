# chalkformat
formatted console logging with chalk for Node.js

# Usage
```javascript
var parseFormats = require("chalkformat");

var logger = parseFormats([
   {value:'[', styles:'bold.red'},
   {value:'ERROR', styles:'bold.yellow'},
   {value:']', styles:'bold.red'},
   {value:'$0',styles:'bold.cyan'}
]);

console.log(logger('oops, I did it again'));
```
which would result in this:

![screenshot](https://github.com/MaudDibb/chalkformat/blob/master/img/test.png?raw=true)

Each format block is a value that is printed out, and a chalk style string.
if you specify a value with '$n', where n is a number, then a function argument
is used for output. In the example. the last format block uses $0, which would
print out the first argument passed to the generated function. 

Styles can be chained. just separate them with periods. The example above is using
both a bold and a color style on each value.

If the style string is not a valid chalk style, or empty, then the value in the format
object is returned unmodified.

