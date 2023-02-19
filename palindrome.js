function palindrome(word) {
  const regex = /[\W_]+/g,
    cleanedWord = word.replace(regex, ""),
    reversedWord = cleanedWord.split("").reverse().join("");

  return cleanedWord.toLowerCase() === reversedWord.toLowerCase();
}

module.exports = palindrome;
