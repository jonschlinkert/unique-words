/**
 * unique-words <https://github.com/assemble/unique-words>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var should = require('should');
var uniqueWords = require('./');

describe('unique-words', function() {
  describe('when a string is passed:', function() {
    it('should return an array of unique words.', function() {
      var actual = uniqueWords('a b a b c b b a');
      actual.should.eql(['a', 'b', 'c']);
    });
  });

  describe('when a list of arguments is passed:', function() {
    it('should return an array of unique words.', function() {
      uniqueWords('a', 'b', 'a', 'b c b a').should.eql(['a', 'b', 'c']);
      uniqueWords(['a', 'b'], ['a'], 'b c b a').should.eql(['a', 'b', 'c']);
    });
  });

  describe('when an array is passed:', function() {
    it('should return an array of unique words.', function() {
      var actual = uniqueWords(['foo', 'foo', 'foo bar', 'bar', 'bar baz foo']);
      actual.should.eql(['foo', 'bar', 'baz']);
    });
  });
});
