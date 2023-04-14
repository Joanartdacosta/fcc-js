function convertToRoman(num) {
  var numberValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanValue = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  var roman = "";

  for (var index = 0; index < numberValue.length; index++) {
    while (numberValue[index] <= num) {
      roman += romanValue[index];
      num -= numberValue[index];
    }
  }

  return roman;
}

convertToRoman(36);

module.exports = convertToRoman;
