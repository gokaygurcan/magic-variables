/*!
 *    ---------------   ------  
 *  | Magic Variables | v0.10.0 |
 *    ---------------   ------  
 */

var path = require('path'); // Stability: 3 as of Node.js v0.12.4
var fs = require('fs'); // Stability: 3 as of Node.js v0.12.4

var __magic = Object.create(null); // Temporary object, will be deleted at the end

/*!
 *  __magic.package
 *
 *  Returns package.json file path
 */
Object.defineProperty(__magic, 'package', {
  __proto__: null,
  get: function() {
    return path.normalize(process.cwd() + '/package.json');
  }
});

/*!
 *  __magic.base
 *
 *  Returns root path
 */
Object.defineProperty(__magic, 'base', {
  __proto__: null,
  get: function() {
    return process.cwd();
  }
});

/*!
 *  __magic.magicrc
 *
 *  Returns .magicrc file path
 */
Object.defineProperty(__magic, 'magicrc', {
  __proto__: null,
  get: function() {
    return path.normalize(this.base +'/.magicrc');
  }
});

/*!
 *  this.stack
 *
 *  Returns StackTrace (internal use only, will be deleted at the end)
 */
Object.defineProperty(__magic, 'stack', {
  __proto__: null,
  get: function() {
    var originalStackTrace = Error.prepareStackTrace;

    Error.prepareStackTrace = function(_, stack) {
      return stack;
    };

    var error = new Error();
    Error.captureStackTrace(error, arguments.callee); // bye bye strict mode

    var stack = error.stack;
    Error.prepareStackTrace = originalStackTrace;

    return stack;
  }
});

/*!
 *  __magic.filename
 *
 *  Returns file name with its extension
 */
Object.defineProperty(__magic, 'filename', {
  __proto__: null,
  get: function() {
    return this.stack[1].getFileName().split('/').slice(-1)[0];
  }
});

/*!
 *  __magic.file
 *
 *  Returns file path 
 */
Object.defineProperty(__magic, 'file', {
  __proto__: null,
  get: function() {
    return this.stack[1].getFileName();
  }
});

/*!
 *  __magic.extension
 *
 *  Returns file extension 
 */
Object.defineProperty(__magic, 'extension', {
  __proto__: null,
  get: function() {
    return this.stack[1].getFileName().split('.').slice(-1)[0];
  }
});

/*!
 *  __magic.line
 *
 *  Returns line number
 */
Object.defineProperty(__magic, 'line', {
  __proto__: null,
  get: function() {
    return this.stack[1].getLineNumber();
  }
});

/*!
 *  __magic.column
 *
 *  Returns column number
 */
Object.defineProperty(__magic, 'column', {
  __proto__: null,
  get: function() {
    return this.stack[1].getColumnNumber() - '__magic.'.length;
  }
});

/*!
 *  __magic.info
 *
 *  Returns info, file : line : column
 */
Object.defineProperty(__magic, 'info', {
  __proto__: null,
  get: function() {
    return this.stack[1].getFileName() +':'+ this.stack[1].getLineNumber() +':'+ (this.stack[1].getColumnNumber() - '__magic.'.length);
  }
});

/*!
 *  __magic.function
 *
 *  Returns function name or (anonymous)
 */
Object.defineProperty(__magic, 'function', {
  __proto__: null,
  get: function() {
    /* Alternative solution: https://gist.github.com/lordvlad/ec81834ddff73aaa1ab0
       return arguments.callee.caller && arguments.callee.caller.name || '(anonymous)'; */
    return this.stack[1].getFunctionName() || '(anonymous)';
  }
});

/*!
 *  Check if .magicrc file exist
 *  
 *  ATTENTION: This is a sync operation. Use it with caution!
 *  
 *  If so read it and assign the variables according to their key:value pairs
 */
fs.exists(__magic.magicrc, function(exists) {
  if (exists === true) {
    fs.readFile(__magic.magicrc, 'utf8', function(err, data) {
      if (!err) {
        if (typeof data !== 'undefined' && (data !== '' || data !== null)) {
          try {
            var m = JSON.parse(data.toString());
          }
          catch (e) {
            // e.message
          }

          if (m && typeof m === 'object') {
            Object.keys(m).forEach(function(element) {
              Object.defineProperty(__magic, element, {
                __proto__: null,
                get: function() {
                  return path.normalize(this.base +'/'+ m[element]);
                }
              });
            });
          }
        }

        assign();
      }
    });
  }
  else {
    assign(); // .magicrc is not there
  }
});

/*!
 *  assign()
 *  
 *  Assign everything to their correct places and remove the temporary objects
 */
function assign() {
  global.__magic = __magic;
  delete __magic;
  delete global.__magic.stack; // I told you
}
