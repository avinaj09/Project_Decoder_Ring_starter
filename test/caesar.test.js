const expect = require("chai").expect;
const caesar = require("../src/caesar").caesar;

describe("ceasarFalse",()=>
        it("should return false if the shift value is 0", ()=> {
            const text = "fhjh"
            const expected = false;
            const actual = caesar(text,0,true);
            expect(actual).to.equal(expected)
        }));
        it("should return false if the shift value is greater than 25", ()=> {
          const text = "fhjh"
          const expected = false
          const actual = caesar(text,43,true);
        expect(actual).to.equal(expected)
        });
        it("should return false if the shift is less than -25", ()=> {
  const text = "fhjh"
  const expected = false
  const actual = caesar(text,-43,true);
  expect(actual).to.equal(expected)
});
        it("should encrypt even if original message is all UpperCase letters", ()=> {
  const expected = "wklqnixo"
  const actual = caesar("THINKFUL", 3, true);
  expect(actual).to.equal(expected)
});
        it("should encrypt by shifting letters by 10", () => {
    const expected = "oxmbizd"
    const actual = caesar("encrypt", 10, true)
  expect(actual).to.equal(expected)
});
it("should keep spaces and special characters while encoding", ()=> {
           const expected = 'bpqa qa i amkzmb umaaiom!';
           const actual = caesar("This is a secret message!", 8);
            expect(actual).to.equal(expected)
        });
it("should return false is no shift if given", () => {
        const text = "thinkful"
	 	const expected = false;
		const actual = caesar(text);
		expect(actual).to.equal(expected);
	});
        it("should return false if no input is given", () => {
  const expected = false
  const actual = caesar("", 3)
  expect(actual).to.equal(expected)
});
        it("should decode encryption", () => {
  const expected = "encrypt"
  const actual = caesar("oxmbizd", -10)
  expect(actual).to.equal(expected)
  
});
        it("should return false if numbers are given for input", () => {
  const expected = false
  const actual = caesar(1234)
  expect(actual).to.equal(expected)
});
       
