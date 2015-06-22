# magic-variables

Magic variables for Node.js

[![npm version][npm-image]][npm-url]
[![npm downloads][downloads-image]][downloads-url]
[![travis ci][travis-image]][travis-url]
[![npm devDependencies][dev-image]][dev-url]
[![github license][license-image]][license-url]

## Installation

```bash
npm install --save magic-variables
```

## Usage

Simply add this to your top-most file, something like bootloader. No need to assign it to a variable, it can be accessible globally.

Basic variables: 

```javascript
require('magic-variables');

console.log(__magic.package);   // => /Users/gokaygurcan/Projects/magic-variables/package.json
// or
console.log(require(__magic.package).version); // => 0.10.0

console.log(__magic.base);      // => /Users/gokaygurcan/Projects/magic-variables/

console.log(__magic.filename);  // => magic-variables.js

console.log(__magic.file);      // => /Users/gokaygurcan/Projects/magic-variables/magic-variables.js

console.log(__magic.extension); // => js

console.log(__magic.line);      // => 38

//          |  where column number points
//          V
console.log(__magic.column);    // => 13

//          |
//          V
console.log(__magic.info);      // => /Users/gokaygurcan/Projects/magic-variables/magic-variables.js:46:13

console.log(__magic.function);  // => (anonymous) || function_name
```

Mapping: 

Create `.magicrc` file in your application root and put these lines in it:
```JSON
{
  "api" : "routes/api",
  "config" : "config.js",
  "lib" : "lib/"
}
```
**Note:** Do not use the reserved words: _package_, _base_, _filename_, _file_, _extension_, _line_, _column_, _info_ and _function_. Also, not _class_ or _method_ too which are reserved for planned features.

```javascript
console.log(__magic.api);    // => /Users/gokaygurcan/Projects/magic-variables/routes/api

console.log(__magic.config); // => /Users/gokaygurcan/Projects/magic-variables/config.js

console.log(__magic.lib);    // => /Users/gokaygurcan/Projects/magic-variables/lib/
```

## TODO

Planned features: 
```javascript
__magic.class     // => null || class_name
__magic.method    // => null || method_name
```

## Contribution

Any contributions are more than welcome!

## License
[MIT](LICENSE) © [Gökay Gürcan](http://www.gokaygurcan.com)

[npm-image]: https://img.shields.io/npm/v/magic-variables.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/magic-variables
[downloads-image]: https://img.shields.io/npm/dm/magic-variables.svg?style=flat-square
[downloads-url]: https://www.npmjs.com/package/magic-variables
[travis-image]: https://img.shields.io/travis/gokaygurcan/magic-variables.svg?style=flat-square
[travis-url]: https://travis-ci.org/gokaygurcan/magic-variables
[dev-image]: https://img.shields.io/david/dev/gokaygurcan/magic-variables.svg?style=flat-square
[dev-url]: https://github.com/gokaygurcan/magic-variables
[license-image]: https://img.shields.io/github/license/gokaygurcan/tisikkirlir.js.svg?style=flat-square
[license-url]: https://raw.githubusercontent.com/gokaygurcan/magic-variables/master/LICENSE
