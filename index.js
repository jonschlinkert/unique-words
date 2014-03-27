/**
 * unique-words <https://github.com/assemble/unique-words>
 * Return the unique words in a string or array.
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

module.exports = function(arr) {
  arr = !Array.isArray(arr) ? [arr] : arr;
  arr = arr.join(' ').split(' ');

  var obj = {},
    uniq = [];
  for (var i = 0, l = arr.length; i < l; ++i) {
    if (obj.hasOwnProperty(arr[i])) {
      continue;
    }
    uniq.push(arr[i]);
    obj[arr[i]] = 1;
  }
  return uniq;
};