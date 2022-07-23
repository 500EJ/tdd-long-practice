const { expect } = require("chai");
const { returnsThree, reciprocal } = require("../problems/number-fun");

describe("returnsThree()", () => {
  it("should return 3", () => {
    expect(returnsThree()).to.equal(3);
  });
});

describe("reciprocal(n)", () => {
  context("valid arguments", () => {
    it("should return the reciprocal of a number", () => {
      expect(reciprocal(5)).to.equal(0.2);
    });

    it("should work with decimals", () => {
      expect(reciprocal(2.5)).to.equal(0.4);
      expect(reciprocal(5 / 4)).to.equal(0.8);
    });
  });

  context(
    "arguments are too large or small (less than 1 or greater than 1,000,000)",
    () => {
      it("should throw a TypeError", () => {
        expect(() => reciprocal(0.5)).to.throw(
          TypeError,
          "Number must be greater than or equal to 1"
        );
        expect(() => reciprocal(10000000)).to.throw(
          TypeError,
          "Number must be less than or equal to 1,000,000"
        );
      });
    }
  );
});
