# chalkformat
formatted console loggibg with chalk for Node.js

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

Each format block is a value that is printed out, and a chalk style string.
if you specify a value with '$n', where n is a number, then a function argument
is used for output. In the example. the last format block uses $0, which would
print out the first argument passed to the generated function. 

