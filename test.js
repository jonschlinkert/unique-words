/**
 * unique-words <https://github.com/jonschlinkert/unique-words>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

const assert = require('assert');
const unique = require('./');

describe('unique', () => {
  describe('when a string is passed', () => {
    it('should return an array of unique words', () => {
      assert.deepEqual(unique('a b a b c b b a'), ['a', 'b', 'c']);
    });
  });

  describe('when a list of arguments is passed', () => {
    it('should return an array of unique words', () => {
      assert.deepEqual(unique(['a', 'b', 'a', 'b c b a']), ['a', 'b', 'c']);
      assert.deepEqual(unique(['a', 'b'], ['a'], 'b c b a'), ['a', 'b', 'c']);
    });
  });

  describe('when an array is passed', () => {
    it('should return an array of unique words', () => {
      assert.deepEqual(unique(['foo', 'foo', 'foo bar', 'bar', 'bar baz foo']), ['foo', 'bar', 'baz']);
    });
  });
});

describe('unique.counts', () => {
  it('should get the number of occurrences of each word', () => {
    assert.deepEqual(unique.counts('one two one two three'), {
      one: 2,
      three: 1,
      two: 2
    });

    const str = `Permission is hereby granted, free of charge, to any person
      obtaining a copy of this software and associated documentation
      files (the "Software"), to deal in the Software without
      restriction, including without limitation the rights to use,
      copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the
      Software is furnished to do so, subject to the following
      conditions:

      The above copyright notice and this permission notice shall be
      included in all copies or substantial portions of the Software.

      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
      EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
      OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
      NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
      HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
      WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
      FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
      OTHER DEALINGS IN THE SOFTWARE.`;
    assert.deepEqual(unique.counts(str.toLowerCase()), {
      permission: 2,
      is: 4,
      hereby: 1,
      granted: 1,
      free: 1,
      of: 8,
      charge: 1,
      to: 8,
      any: 3,
      person: 1,
      obtaining: 1,
      a: 2,
      copy: 2,
      this: 2,
      software: 9,
      and: 5,
      associated: 1,
      documentation: 1,
      files: 1,
      the: 14,
      deal: 1,
      in: 6,
      without: 3,
      restriction: 1,
      including: 2,
      limitation: 1,
      rights: 1,
      use: 2,
      modify: 1,
      merge: 1,
      publish: 1,
      distribute: 1,
      sublicense: 1,
      or: 9,
      sell: 1,
      copies: 2,
      permit: 1,
      persons: 1,
      whom: 1,
      furnished: 1,
      do: 1,
      so: 1,
      subject: 1,
      following: 1,
      conditions: 1,
      above: 1,
      copyright: 2,
      notice: 2,
      shall: 2,
      be: 2,
      included: 1,
      all: 1,
      substantial: 1,
      portions: 1,
      provided: 1,
      as: 1,
      warranty: 1,
      kind: 1,
      express: 1,
      implied: 1,
      but: 1,
      not: 1,
      limited: 1,
      warranties: 1,
      merchantability: 1,
      fitness: 1,
      for: 2,
      particular: 1,
      purpose: 1,
      noninfringement: 1,
      no: 1,
      event: 1,
      authors: 1,
      holders: 1,
      liable: 1,
      claim: 1,
      damages: 1,
      other: 2,
      liability: 1,
      whether: 1,
      an: 1,
      action: 1,
      contract: 1,
      tort: 1,
      otherwise: 1,
      arising: 1,
      from: 1,
      out: 1,
      connection: 1,
      with: 1,
      dealings: 1
    });
  });
});
