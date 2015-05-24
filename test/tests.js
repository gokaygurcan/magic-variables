/*!
 *    ---------------   ------  
 *  | Magic Variables | v0.7.0 |
 *    ---------------   ------  
 */

require('../magic-variables'); // __magic is in use after this point
var expect = (typeof chai != 'undefined') ? chai.expect : require('chai').expect;

describe('Paths:', function() {
  describe('__magic.package', function() {
    it('should return package.json', function() {
      expect(require(__magic.package).version).to.equal(require('../package.json').version);
    });
  });

  describe('__magic.base', function() {
    it('should return root path', function() {
      expect(__magic.base).to.equal(process.cwd());
    });
  });

  describe('__magic.file', function() {
    it('should return file path', function() {
      expect(__magic.file).to.equal(module.filename);
    });
  });
});

describe('Names:', function() {
  describe('__magic.filename', function() {
    it('should return file name', function() {
      expect(__magic.filename).to.equal(module.filename.split('/').slice(-1)[0]);
    });
  });
});

describe('Values:', function() {
  describe('__magic.extension', function() {
    it('should return file extension', function() {
      expect(__magic.extension).to.equal(module.filename.split('.').slice(-1)[0]);
    });
  });

  describe('__magic.line', function() {
    it('should return line number', function() {
      expect(__magic.line).to.equal(47); // the current line
    });
  });

  describe('__magic.column', function() {
    it('should return column number', function() {
      expect(__magic.column).to.equal(14); // the current column
    });
  });
});
