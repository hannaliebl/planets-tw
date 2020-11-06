export function convertDigitsToCol(number) {
  if (number.toString().length <= 3 || number === "unknown") {
    return number;
  } else {
    const digitsArr = number.toString().split("");
    const digitsWithSpaces = [];
    digitsArr.forEach((_, i) => {
      const remainingDigitsDivisibleByThree =
        (digitsArr.length - (i + 1)) % 3 === 0;
      const isNotLastDigit = i + 1 !== digitsArr.length;
      if (remainingDigitsDivisibleByThree && isNotLastDigit) {
        digitsWithSpaces.push(digitsArr[i], " ");
      } else {
        digitsWithSpaces.push(digitsArr[i]);
      }
    });
    return digitsWithSpaces.join("");
  }
}
