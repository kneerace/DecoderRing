// Write your tests here!
const {expect} = require("chai");
const {polybius} = require("../src/polybius");

describe ("Test for Polybius square", () => {
    describe("Encoding a Message", () => {
        it("should encode message to numerical pair as String", () =>{
            const message = "abcxyz";
            const actual = polybius(message);
            expect(actual).to.equal("112131354555");
            expect(actual).to.be.a('String');
        });

        it("should encode same value to i and j ", () => {
            const message = "ijijij";
            const actual = polybius(message);
            expect(actual).to.equal("424242424242");
        });

        it("should encode message with spaces as of input", () => {
            const message = "i love coding";
            const actual = polybius(message);
            const expected = "42 13431551 314341423322";
            expect(actual).to.equal(expected);
            expect(actual).to.include(" ");
        });

        it("should encode ignoring the case", () => {
            const message = "I LovE Coding";
            const actual = polybius(message);
            const expected = "42 13431551 314341423322";
            expect(actual).to.equal(expected);
        });
    })

    describe("Decoding a Message", () => {
        it("should return false when input number are not pair i.e. odd", () =>{
            const message = "12141145474";
            const actual = polybius(message, false);
            
            expect(actual).to.be.false;
        });

        it("should decode to alphabet for each pair number in input, output as String", () =>{
            const message = "112131354555";
            const actual = polybius(message, false);

            expect(actual).to.equal("abcxyz");
        });

        it("should return spaces as it is in input", () =>{
            const message = "324325 112451 454354";
            const actual = polybius(message, false);
            const expected = "how are you";

            expect(actual).to.equal(expected);
            expect(actual).to.include(" ");
        });

        it("should return both i and j for 42", () =>{
            const message = "421542";
            const actual = polybius(message, false);
            
            expect(actual).to.include("i");
            expect(actual).to.include("j");
        });
    });
});
