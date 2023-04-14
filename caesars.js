const allLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function rot13(str) {
  let code = "";

  for (let i = 0; i < str.length; i++) {
    const LetterOfMyWord = str[i];

    const SearchLetterArray = allLetters.includes(LetterOfMyWord);

    if (!SearchLetterArray) {
      code += LetterOfMyWord;
    } else {
      const SearchIndexOfLetter = allLetters.findIndex(
        (letter) => letter === LetterOfMyWord
      );
      code +=
        allLetters[SearchIndexOfLetter + 13] ||
        allLetters[SearchIndexOfLetter - 13];
    }
  }

  return code;
}

rot13("SERR PBQR PNZC");

module.exports = rot13;
