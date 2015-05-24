/*!
 *    ---------------   ------  
 *  | Magic Variables | v0.9.0 |
 *    ---------------   ------  
 */

// temporary object, will be deleted at the end
var __magic = {};

/*!
 *  __magic.package
 *
 *  Returns package.json file path
 */
Object.defineProperty(__magic, 'package', {
  __proto__: null,
  get: function() {
    return process.cwd() + '/package.json';
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
    return this.stack[1].getColumnNumber() - '__magic.'.length+1;
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
    return this.stack[1].getFileName() +':'+ this.stack[1].getLineNumber() +':'+ (this.stack[1].getColumnNumber() - '__magic.'.length+1);
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
    /* alternative solution: https://gist.github.com/lordvlad/ec81834ddff73aaa1ab0
       return arguments.callee.caller && arguments.callee.caller.name || '(anonymous)'; */
    return this.stack[1].getFunctionName() || '(anonymous)';
  }
});


// assign to the correct place and remove the temporary object
global.__magic = __magic;
delete __magic;
delete global.__magic.stack; // i told you
