/*!
 * strip-use-strict <https://github.com/jonschlinkert/strip-use-strict>
 *
 * Copyright (c) 2016, Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

require('mocha');
var assert = require('assert');
var strip = require('./');

describe('strip', function () {
  it('should strip the "use strict" statement from a string', function () {
    assert.equal(strip('"use strict";'), '');
  });

  it('should strip the "use strict" statement from a function', function () {
    assert.equal(strip('function (a, b, c) {\n  "use strict";\n}'), 'function (a, b, c) {\n  \n}');;
  });
});
