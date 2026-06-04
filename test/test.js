let Anagram = require("../index.js");
let assert = require("assert");

describe("Phrase", function(){
    describe("#anagram", function(){
        it("should return false for non-anagram", function(){
            let word = new Anagram("secure");
            assert(!word.isAnagramOf("security"));
        });
        it("should return true for plain anagram", function(){
            let word = new Anagram("secure");
            assert(word.isAnagramOf("rescue"));
        })
        it("should return true for anagram with different cases", function(){
            let word = new Anagram("battle");
            assert(word.isAnagramOf("TaBlEt"));
        })
        it("should return true for anagram with space and punctuation", function(){
            let word = new Anagram("Dormitory");
            assert(word.isAnagramOf("Dirty room!"));
        })
        it("should return true for unsensible anagram with space and punctuation", function(){
            let word = new Anagram("securesecure");
            assert(word.isAnagramOf("rescue, rescue ???"));
        })
    });
});
