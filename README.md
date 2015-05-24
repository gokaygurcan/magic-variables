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

Simply add this to your top-most file, something like bootloader. No need to assign it to a variable, it can be accessible globally. i.e:

```javascript
require('magic-variables');

console.log(__magic.package);   // => /Users/gokaygurcan/Projects/magic-variables/package.json
// or
console.log(require(__magic.package).version); // => 0.8.0

console.log(__magic.base);      // => /Users/gokaygurcan/Projects/magic-variables/

console.log(__magic.filename);  // => magic-variables.js

console.log(__magic.file);      // => /Users/gokaygurcan/Projects/magic-variables/magic-variables.js

console.log(__magic.extension); // => js

console.log(__magic.line);      // => 42

console.log(__magic.column);    // => 7

console.log(__magic.function);  // => (anonymous) || function_name
```

## TODO

Planned features: 
```javascript
__magic.class     // => null || class_name
__magic.info      // => /Users/gokaygurcan/Projects/magic-variables/magic-variables.js:42:7
```

On top of these ones, there's also another plan: putting a file at the root of the project named `.magicrc` and inside of it mapping variables with the desired directories or files. i.e: 

```javascript
{
  "api" : "routes/api",
  "config" : "config.js",
  ...
}
```

and they will be accessible as `__magic.api` or `__magic.config`. 

## Contribution

Any contributions are more than welcome!

## License
Can be found here: [LICENSE](LICENSE)

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
