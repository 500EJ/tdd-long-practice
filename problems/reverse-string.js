module.exports = function reverseString(string) {
  if (typeof string !== "string") throw TypeError("Expected a string");
  return string.split("").reverse().join("");
};
