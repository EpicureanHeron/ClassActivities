var expect = require("chai").expect;
var calculateTax = require("../tax");

// Write tests for the calculateTax function here

describe("tax", function() {
    it("returns the total price + 8%,. when price is an integer", function(){
        //this part is chai
        expect(calculateTax(1)).equals(1.08);
    }),

    it("returns the total price + 8%,. when price is a float", function(){
        expect(calculateTax(2.0)).equals(2.16);
    }),

    it("returns fail if not an integer or float", function(){
        expect(calculateTax("mosnter")).to.throw("fail");
    })
    // it("changes floats to strings", function (){
    //     expect(disemvowel(4.2)).is.a("string");

    // }),
    // it("keeps strings as strings", function (){
    //     expect(disemvowel(" this is a string ")).is.a("string");
    // }),
    // it("removes all 'o' upper and lowercase ", function (){
    //     expect(disemvowel("foOo")).to.equal("f")
    // }),
    // it("removes all vowels", function(){
    //     expect(disemvowel("aeiou")).equal("")
    // })
})