var isSixtyNine = require("./index");
var assert = require('assert');

describe("is-sixty-nine", () => {
    it('returns false for falsy values', function () {
        assert.equal(false, isSixtyNine(null));
        assert.equal(false, isSixtyNine(undefined));
        assert.equal(false, isSixtyNine(0));
        assert.equal(false, isSixtyNine(false));
        assert.equal(false, isSixtyNine(NaN));
        assert.equal(false, isSixtyNine(""));
    });

    it ('returns "nice" for 69', () => {
        assert.equal("nice", isSixtyNine(69));
    });
    it ('returns "nice" for "69"', () => {
        assert.equal("nice", isSixtyNine("69"));
    });
    it ('returns "nice" for "SiXTY NINe"', () => {
        assert.equal("nice", isSixtyNine("SiXTY NINe"));
    });
    it ('returns "nice" for "SiXTYNINe"', () => {
        assert.equal("nice", isSixtyNine("SiXTYNINe"));
    });
    it ('returns "nice" for "sixty-nine"', () => {
        assert.equal("nice", isSixtyNine("sixty-nine"));
    });
    it ('returns "nice" for "LXIX"', () => {
        assert.equal("nice", isSixtyNine("LXIX"));
    });

    it ('returns false for "lxix"', () => {
        assert.equal(false, isSixtyNine("lxix"));
    });
    it ('returns false for 68', () => {
        assert.equal(false, isSixtyNine(68));
    });
    it ('returns false for 68.999999999', () => {
        assert.equal(false, isSixtyNine(68.9999999999));
    });
});
