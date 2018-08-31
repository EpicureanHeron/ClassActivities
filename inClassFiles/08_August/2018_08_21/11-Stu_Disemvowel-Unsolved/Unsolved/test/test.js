var disemvowel = require("../disemvowel.js")
var expect = require("chai").expect
var assert = require("chai").assert


describe("disemvowel", function() {
    it("changes numbers to strings", function(){
        //this part is chai
        expect(disemvowel(4)).is.a("string");
    }),
    it("changes floats to strings", function (){
        expect(disemvowel(4.2)).is.a("string");

    }),
    it("keeps strings as strings", function (){
        expect(disemvowel(" this is a string ")).is.a("string");
    }),
    it("removes all 'o' upper and lowercase ", function (){
        expect(disemvowel("foOo")).to.equal("f")
    }),
    it("removes all vowels", function(){
        expect(disemvowel("aeiou")).equal("")
    })
})