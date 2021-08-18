const expect = require("chai").expect;
const substitution = require("../src/substitution").substitution;

it("The input could include spaces, letters and special characters", () => {
		const text = "yp y&ii$r&";
		const expected = "my message";
		const actual = substitution(text, "$wae&zrdxtfcygvuhbijnokmpl", false);
		expect(actual).to.equal(actual);
	});
describe("substitution: False conditions",()=>{
        it("should return false if no input is provided", ()=> {
            const expected = false;
            const actual = substitution();
            expect(actual).to.equal(expected);
        });
        it("should return false if the input is not a string", ()=> {
            const text = 3435;
            const alphabet = "xoyqmcgrukswaflnthdjpzibev"
            const expected = false;
            const actual = substitution(text,alphabet);
            expect(actual).to.equal(expected);
        });
        it("should return false while decoding if the number of characters of alphabet is fewer than 26.", ()=> {
            const text = "thinkful";
            const alphabet = "rukswafln"
            const expected = false;
            const actual = substitution(text,alphabet);
            expect(actual).to.equal(expected);
        });
          it("should return false if the alphabet contains duplicate characters", () => {
            const text = "welcome";
            const alphabet = "xoyxoygrukgruglnthdjpzibev"
            const expected = false;
            const actual = substitution(text,alphabet);
            expect(actual).to.equal(expected);
        });
          it("should encode even if input is all uppercase letters", () => {
            const expected = "jrufscpw"
            const actual = substitution("THINKFUL", "xoyqmcgrukswaflnthdjpzibev")
            expect(actual).to.equal(expected);
          });
         it("should decode even if letters in the alphabet array are uppercase", () => {
           const expected = "message"
           const actual = substitution("y&ii$r&", "$WAE&ZRDXTFCYGVUHBIJNOKMPL", false)
           expect(actual).to.equal(expected)
         });
  });
