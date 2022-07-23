const { expect } = require("chai");
const reverseString = require("../problems/reverse-string");

describe("reverseString(string)", () => {
  it("should return the passed in string reversed", () => {
    expect(reverseString("fun")).to.equal("nuf");
  });

  it("should throw a TypeError if a string is not passed in", () => {
    expect(() => reverseString(42)).to.throw(TypeError, "Expected a string");
  });
});
