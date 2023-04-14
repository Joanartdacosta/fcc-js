const telephoneCheck = require("./telephone");

test("1 555-555-5555 returns true", () => {
  const result = telephoneCheck("1 555-555-5555");
  expect(result).toBe(true);
});

test("1 (555) 555-5555 returns true", () => {
  const result = telephoneCheck("1 (555) 555-5555");
  expect(result).toBe(true);
});

test("5555555555 returns true", () => {
  const result = telephoneCheck("5555555555");
  expect(result).toBe(true);
});

test("555-555-5555 returns true", () => {
  const result = telephoneCheck("555-555-5555");
  expect(result).toBe(true);
});

test("(555)555-5555 returns true", () => {
  const result = telephoneCheck("(555)555-5555");
  expect(result).toBe(true);
});

test("1(555)555-5555 returns true", () => {
  const result = telephoneCheck("1(555)555-5555");
  expect(result).toBe(true);
});

test("555-5555 returns false", () => {
  const result = telephoneCheck("555-5555");
  expect(result).toBe(false);
});

test("5555555 returns false", () => {
  const result = telephoneCheck("5555555");
  expect(result).toBe(false);
});

test("1 555)555-5555 returns false", () => {
  const result = telephoneCheck("1 555)555-5555");
  expect(result).toBe(false);
});

test("1 555 555 5555 returns true", () => {
  const result = telephoneCheck("1 555 555 5555");
  expect(result).toBe(true);
});

test("1 456 789 4444 returns true", () => {
  const result = telephoneCheck("1 456 789 4444");
  expect(result).toBe(true);
});

test("123**&!!asdf# returns false", () => {
  const result = telephoneCheck("123**&!!asdf#");
  expect(result).toBe(false);
});

test("55555555 returns false", () => {
  const result = telephoneCheck("55555555");
  expect(result).toBe(false);
});

test("(6054756961) returns false", () => {
  const result = telephoneCheck("(6054756961)");
  expect(result).toBe(false);
});

test("2 (757) 622-7382 returns false", () => {
  const result = telephoneCheck("2 (757) 622-7382");
  expect(result).toBe(false);
});

test("0 (757) 622-7382 returns false", () => {
  const result = telephoneCheck("0 (757) 622-7382");
  expect(result).toBe(false);
});

test("-1 (757) 622-7382 returns false", () => {
  const result = telephoneCheck("-1 (757) 622-7382");
  expect(result).toBe(false);
});

test("2 757 622-7382 returns false", () => {
  const result = telephoneCheck("2 757 622-7382");
  expect(result).toBe(false);
});

test("10 (757) 622-7382 returns false", () => {
  const result = telephoneCheck("10 (757) 622-7382");
  expect(result).toBe(false);
});

test("27576227382 returns false", () => {
  const result = telephoneCheck("27576227382");
  expect(result).toBe(false);
});

test("(275)76227382 returns false", () => {
  const result = telephoneCheck("(275)76227382");
  expect(result).toBe(false);
});

test("2(757)6227382 returns false", () => {
  const result = telephoneCheck("2(757)6227382");
  expect(result).toBe(false);
});

test("2(757)622-7382 returns false", () => {
  const result = telephoneCheck("2(757)622-7382");
  expect(result).toBe(false);
});

test("555)-555-5555 returns false", () => {
  const result = telephoneCheck("555)-555-5555");
  expect(result).toBe(false);
});

test("(555-555-5555 returns false", () => {
  const result = telephoneCheck("(555-555-5555");
  expect(result).toBe(false);
});

test("(555)5(55?)-5555 returns false", () => {
  const result = telephoneCheck("(555)5(55?)-5555");
  expect(result).toBe(false);
});

test("55 55-55-555-5 returns false", () => {
  const result = telephoneCheck("55 55-55-555-5");
  expect(result).toBe(false);
});

test("11 555-555-5555 returns false", () => {
  const result = telephoneCheck("11 555-555-5555");
  expect(result).toBe(false);
});
