/**
 * unique-words <https://github.com/assemble/unique-words>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var unique = require('array-unique');

module.exports = function(arr) {
  arr = !Array.isArray(arr) ? [arr] : arr;
  arr = arr.join(' ').split(' ');

  return unique(arr);
};
