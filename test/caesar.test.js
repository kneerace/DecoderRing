// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("Test for Caesar Shift", () =>{
    describe("Validatin of Shift input", ()=>{
        it("should not be zero", ()=>{
            const input = "abcd";
            const actual = caesar(input, 0 );

            expect(actual).to.be.false;
        });

        it("should not be less than -25", ()=>{
            const input = "abcd";
            const actual = caesar(input, -27 );

            expect(actual).to.be.false;
        });

        it("should not be greater than 25", ()=>{
            const input = "abcd";
            const actual = caesar(input, 26 );

            expect(actual).to.be.false;

        });
    });

    describe("Encoding the message using Caesar Shift", () =>{
        it("should encode based on valid shift provided > 0 && < 26",()=>{
            const input = "abyzu";
            const actual = caesar(input, 5 );

            expect(actual).to.equal("fgdez");
        });

        it("should encode based on valud shift provided < 0 && >-25",()=>{
            const input = "abyzu";
            const actual = caesar(input, -5 );

            expect(actual).to.equal("vwtup");
        });

        it("should ignore case while encoding",()=>{
            const input = "AbyZu";
            const actual = caesar(input, -5 );

            expect(actual).to.equal("vwtup");
        });

        it("should have spaces as is in input message ",()=>{
            const input = "this is it";
            const actual = caesar(input, 2 );

            expect(actual).to.include(' ');
            expect(actual).to.equal("vjku ku kv");
        });

        it("should have all non alpha intact in the coded message ",()=>{
            const input = "#this is it!!!";
            const actual = caesar(input, 2 );

            expect(actual).to.include(' ');
            expect(actual).to.include('#');
            expect(actual).to.include('!!!');
            expect(actual).to.equal("#vjku ku kv!!!");
        });

    });

    describe("Decoding the message usiing Caesar Shift", () =>{
        it("should decode based on valid shift provided > 0 && < 26",()=>{
            const input = "fgdez";
            const actual = caesar(input, 5, false );

            expect(actual).to.equal("abyzu");
        });

        it("should decode based on valud shift provided < 0 && >-25",()=>{
            const input = "vwtup";
            const actual = caesar(input, -5, false );

            expect(actual).to.equal("abyzu");
        });

        it("should ignore case while decoding",()=>{
            const input = "vwTup";
            const actual = caesar(input, -5, false );

            expect(actual).to.equal("abyzu");
        });

        it("should have spaces as is in input message ",()=>{
            const input = "vjku ku kv";
            const actual = caesar(input, 2, false );

            expect(actual).to.include(' ');
            expect(actual).to.equal("this is it");
        });

        it("should have all non alpha intact in the decoded message ",()=>{
            const input = "#vjku ku kv!!!";
            const actual = caesar(input, 2, false );

            expect(actual).to.include(' ');
            expect(actual).to.include('#');
            expect(actual).to.include('!!!');
            expect(actual).to.equal("#this is it!!!");
        });

    });
});

