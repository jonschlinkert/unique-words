/**
 * unique-words <https://github.com/assemble/unique-words>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var unique = require('array-unique');

module.exports = function() {
  var words = [].concat.apply([], arguments);
  return unique(words.join(' ').split(' '));
};
