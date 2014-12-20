/**
 * unique-words <https://github.com/assemble/unique-words>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var uniqueWords = require('./index');

describe('unique-words', function () {
  describe('when a string is passed:', function () {
    it('should return an array of unique words.', function () {
      var actual = uniqueWords('one two one two three two two one');
      var expected = ['one', 'two', 'three'];
      actual.should.eql(expected);
    });
  });

  describe('when an array is passed:', function () {
    it('should return an array of unique words.', function () {
      var actual = uniqueWords([
        'foo',
        'foo',
        'foo bar',
        'bar',
        'bar baz foo'
      ]);
      var expected = ['foo', 'bar', 'baz'];
      actual.should.eql(expected);
    });
  });
});

