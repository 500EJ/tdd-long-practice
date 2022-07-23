function returnsThree() {
  return 3;
}

function reciprocal(n) {
  if (n < 1) throw TypeError("Number must be greater than or equal to 1");
  if (n > 1_000_000)
    throw TypeError("Number must be less than or equal to 1,000,000");
  return 1 / n;
}

module.exports = {
  returnsThree,
  reciprocal
};
