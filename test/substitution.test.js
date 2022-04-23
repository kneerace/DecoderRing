// Write your tests here!
const {expect} = require("chai");
const {substitution} = require("../src/substitution");

describe("Test for Substitution", () =>{
    describe("Generic test for substitution alphabet", () =>{
        it("should return false if substitution alphabet length < 26", () => {
            const message = "thinkful" ;
            const substitutionAlpha = "xoyqmcgrukswaflnthdjpzbev" ;
            const actual = substitution(message, substitutionAlpha);

            expect(actual).to.be.false;
        });

        it("should return false if substitution alphabet length > 26", () => {
            const message = "thinkful" ;
            const substitutionAlpha = "xoyqmcgrukswaflnthdj pzibev" ; // space here
            const actual = substitution(message, substitutionAlpha);

            expect(actual).to.be.false;
        });

        it("should return false if substitution alphabet has duplicate ", () => {
            const message = "thinkful" ;
            const substitutionAlpha = "xoyqmcgrvkswaflnthdjpzibev" ; // v duplicate here
            const actual = substitution(message, substitutionAlpha);

            expect(actual).to.be.false;
        });
    });

    describe("Encoding the message", () =>{
        it("should be encoded based on the substitution alphabet", () => {
            const message ="niresh";
            const substitutionAlpha = 'xoyqmcgrukswaflnthdjpzibev';
            const actual = substitution(message, substitutionAlpha); //> 'fuhmdr'

            expect(actual).to.equal("fuhmdr");
        });

        it("should have spaces in output as in input", () => {
            const message ="coding blues";
            const substitutionAlpha = '$wae&zrdxtfcygvuhbijnokmpl';
            const actual = substitution(message, substitutionAlpha); //> 

            expect(actual).to.include(" ");
            expect(actual).to.equal("avexgr wcn&i");

        });
        
        it("should have special char in output as in input", () => {
            const message ="This is it!.";  // to make sure it takes upper case
            const substitutionAlpha = '$wae&zrdxtfcygvuhbijnokmpl';
            const actual = substitution(message, substitutionAlpha); //> 'fuhcjr'
            
            expect(actual).to.equal("jdxi xi xj!.");
            expect(actual).to.include("!");
            expect(actual).to.include(".");
        });

        
    });

    describe("Decoding the message", () =>{
        it("should have spaces in output as in input", () => {
            const message = "y&ii$r& jv pvn";
            const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
            const actual = substitution(message, alphabet, false);
            
            expect(actual).to.include(" ");
            expect(actual).to.equal("message to you")
        });
        
        it("should have special char in output as in input", () => {
            const message = "gv xe&.!!!";
            const alphabet = ".wae&zrdxtfcygvuhbijnokmpl";
            const actual = substitution(message, alphabet, false);
            
            expect(actual).to.include('!!!');
            expect(actual).to.equal("no idea!!!");
        });

        it("should be encoded based on the substitution alphabet", () => {
            const message = "y&ii$r&";
            const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
            const actual = substitution(message, alphabet, false);

            expect(actual).to.equal("message");

        });
    });
    

});
