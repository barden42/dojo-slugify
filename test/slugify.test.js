'use strict';

let assert = require('assert'),
slugify = require('../slugify');

describe('slugify', () => {

    it('should be loaded', () => {
        assert.strictEqual(true, true);
    });

    it('should return a', () => {
        assert.strictEqual(slugify('A'), 'a');
    });

    it('should return ab', () => {
        assert.strictEqual(slugify('aB'), 'ab');
    });

    it('should return ab', () => {
        assert.strictEqual(slugify('A++++B'), 'ab');
    });

    it('should return a-b', () => {
        assert.strictEqual(slugify('A-B'), 'a-b');
    });

    it('should return a---b', () => {
        assert.strictEqual(slugify('A + + B'), 'a---b');
    });

    it('should return the-ultime-test', () => {
        assert.strictEqual(slugify('THE +++???ULtiMe++ TEsT'), 'the-ultime-test');
    });

});
