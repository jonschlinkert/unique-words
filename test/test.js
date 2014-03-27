var expect = require('chai').expect;
var unique = require('../');

describe('unique', function () {
  describe('when a string is passed:', function () {
    it('should return an array of unique words.', function () {
      var actual = unique('one two one two three two two one');
      var expected = ['one', 'two', 'three'];
      expect(actual).to.eql(expected);
    });
  });

  describe('when an array is passed:', function () {
    it('should return an array of unique words.', function () {
      var actual = unique([
        'foo',
        'foo',
        'foo bar',
        'bar',
        'bar baz foo'
      ]);
      var expected = ['foo', 'bar', 'baz'];
      expect(actual).to.eql(expected);
    });
  });
});

