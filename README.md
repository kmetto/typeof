Fixed typeof
=========

## Usage

    var typeOf = require('typeof');

    typeOf(String()); // should return "string"
    typeOf(null) // should return "null"
    typeOf(undefined) // should return "undefined"
    typeOf(Number(123)) // should return "number"
    typeOf([]) // should return "array"
    typeOf({}) // should return "object"
    typeOf(function(){}) // should return "function"
    
## Tests

  `npm test`