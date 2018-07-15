/**
 * unique-words <https://github.com/jonschlinkert/unique-words>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

const split = (...args) => [].concat.apply([], args).join(' ').split(/\W+/);

module.exports = (...args) => [...new Set(split(...args))];

module.exports.counts = (...args) => {
  return split(...args).reduce((acc, word) => {
    if (word) acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});
};
