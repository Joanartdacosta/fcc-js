const convertToRoman = require("./convertroman");

test("2 returns II", () => {
  const result = convertToRoman("2");
  expect(result).toBe("II");
});

test("3 returns III", () => {
  const result = convertToRoman("3");
  expect(result).toBe("III");
});

test("4 returns IV", () => {
  const result = convertToRoman("4");
  expect(result).toBe("IV");
});

test("5 returns V", () => {
  const result = convertToRoman("5");
  expect(result).toBe("V");
});

test("9 returns IX", () => {
  const result = convertToRoman("9");
  expect(result).toBe("IX");
});

test("12 returns XII", () => {
  const result = convertToRoman("12");
  expect(result).toBe("XII");
});

test("16 returns XVI", () => {
  const result = convertToRoman("16");
  expect(result).toBe("XVI");
});

test("29 returns XXIX", () => {
  const result = convertToRoman("29");
  expect(result).toBe("XXIX");
});

test("44 returns XLIV", () => {
  const result = convertToRoman("44");
  expect(result).toBe("XLIV");
});

test("45 returns XLV", () => {
  const result = convertToRoman("45");
  expect(result).toBe("XLV");
});

test("68 returns LXVIII", () => {
  const result = convertToRoman("68");
  expect(result).toBe("LXVIII");
});

test("83 returns LXXXIII", () => {
  const result = convertToRoman("83");
  expect(result).toBe("LXXXIII");
});

test("97 returns XCVII", () => {
  const result = convertToRoman("97");
  expect(result).toBe("XCVII");
});

test("99 returns XLIV", () => {
  const result = convertToRoman("99");
  expect(result).toBe("XCIX");
});

test("400 returns CD", () => {
  const result = convertToRoman("400");
  expect(result).toBe("CD");
});

test("500 returns D", () => {
  const result = convertToRoman("500");
  expect(result).toBe("D");
});

test("501 returns DI", () => {
  const result = convertToRoman("501");
  expect(result).toBe("DI");
});

test("649 returns DCXLIX", () => {
  const result = convertToRoman("649");
  expect(result).toBe("DCXLIX");
});

test("798 returns DCCXCVIII", () => {
  const result = convertToRoman("798");
  expect(result).toBe("DCCXCVIII");
});

test("891 returns DCCCXCI", () => {
  const result = convertToRoman("891");
  expect(result).toBe("DCCCXCI");
});

test("1000 returns M", () => {
  const result = convertToRoman("1000");
  expect(result).toBe("M");
});

test("1004 returns MIV", () => {
  const result = convertToRoman("1004");
  expect(result).toBe("MIV");
});

test("1006 returns MVI", () => {
  const result = convertToRoman("1006");
  expect(result).toBe("MVI");
});

test("1023 returns MXXIII", () => {
  const result = convertToRoman("1023");
  expect(result).toBe("MXXIII");
});

test("2014 returns MMXIV", () => {
  const result = convertToRoman("2014");
  expect(result).toBe("MMXIV");
});

test("3999 returns MVI", () => {
  const result = convertToRoman("3999");
  expect(result).toBe("MMMCMXCIX");
});
