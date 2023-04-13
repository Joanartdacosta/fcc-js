const rot13 = require("./alphabet");

test("SERR PBQR PNZC return FREE CODE CAMP", () => {
  const result = rot13("SERR PBQR PNZC");
  expect(result).toBe("FREE CODE CAMP");
});

test("SERR CVMMN! return FREE PIZZA!", () => {
  const result = rot13("SERR CVMMN!");
  expect(result).toBe("FREE PIZZA!");
});

test("SERR YBIR? return FREE LOVE?", () => {
  const result = rot13("SERR YBIR?");
  expect(result).toBe("FREE LOVE?");
});

test("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT. return THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.", () => {
  const result = rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
  expect(result).toBe("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.");
});
