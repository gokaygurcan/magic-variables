/*!
 *    ---------------   ------  
 *  | Magic Variables | v0.1.0 |
 *    ---------------   ------  
 */

var path = require('path'); // Stability: 3 as of Node.js v0.12.3

// temporary object, will be deleted at the end
var __magic = {};

/*!
 *  Returns package.json file
 */
Object.defineProperty(__magic, 'package', {
  __proto__: null,
  get: function() {
    return process.cwd() + '/package.json'; 
  }
});

// assign to the correct place and remove the temporary object
global.__magic = __magic;
delete __magic;
