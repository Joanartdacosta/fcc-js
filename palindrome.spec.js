const palindrome = require("./palindrome");

test("eye returns true", () => {
  const result = palindrome("eye");
  expect(result).toBe(true);
});

test("_eye returns true", () => {
  const result = palindrome("_eye");
  expect(result).toBe(true);
});

test("race car returns true", () => {
  const result = palindrome("race car");
  expect(result).toBe(true);
});

test("not a palindrome returns false", () => {
  const result = palindrome("not a palindrome");
  expect(result).toBe(false);
});

test("A man, a plan, a canal. Panama returns true", () => {
  const result = palindrome("A man, a plan, a canal. Panama");
  expect(result).toBe(true);
});

test("never odd or even returns true", () => {
  const result = palindrome("never odd or even");
  expect(result).toBe(true);
});

test("nope returns false", () => {
  const result = palindrome("nope");
  expect(result).toBe(false);
});

test("almostomla returns false", () => {
  const result = palindrome("almostomla");
  expect(result).toBe(false);
});

test("My age is 0, 0 si ega ym. returns true", () => {
  const result = palindrome("My age is 0, 0 si ega ym.");
  expect(result).toBe(true);
});

test("1 eye for of 1 eye. returns false", () => {
  const result = palindrome("1 eye for of 1 eye.");
  expect(result).toBe(false);
});

test("0_0 (: /- :) 0-0 returns true", () => {
  const result = palindrome("0_0 (: /- :) 0-0");
  expect(result).toBe(true);
});

test("five|_/|four returns false", () => {
  const result = palindrome("five|_/|four");
  expect(result).toBe(false);
});
