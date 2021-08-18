const expect = require("chai").expect;
const polybius = require("../src/polybius").polybius;

describe("polybiusFalse", () =>
        it("should return false if there is no input", () =>{
 const expected = false;
 const actual = polybius();
  expect(actual).to.equal(expected);
}));
describe("polybius: False conditions",()=>{
        it("should return false if the input is not a string", ()=> {
            const text = 3435
            const expected = false;
            const actual = polybius(text);
            expect(actual).to.equal(expected)
        });
        it("should return false while decoding if the number of characters is odd.", ()=> {
            const text = "4567562"
            const expected = false
            const actual = polybius(text,0);
            expect(actual).to.equal(expected)
        });
        it("should encrypt even if original message is all UpperCase letters", ()=> {
 const expected = "11213141"
 const actual = polybius("ABCD");
  expect(actual).to.equal(expected)
});
    it("'I' and 'J' should share a space. Both letters are encoded to 42 but show both letters when decoded", () => {
		const text = "4432423352125413";
		const expected = "th(i/j)nkful";
		const actual = polybius(text, false);
		expect(actual).to.equal(expected);
	});
  it("should return false if the input numbers do not match the numbers in the cipher object", () => {
    const expected = false
    const actual = polybius(16273849)
    expect(actual).to.equal(expected)
  });
});
