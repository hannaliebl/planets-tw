export function convertUnknowns(input) {
  return input === "unknown" ? "?" : input;
}

export function groupDigitsByThree(number) {
  if (number.toString().length <= 3) {
    return number;
  } else {
    const digitsArr = number.toString().split("");
    return digitsArr.map((digit, i) => {
      const remainingDigitsDivisibleByThree =
        (digitsArr.length - (i + 1)) % 3 === 0;
      const isNotLastDigit = i + 1 !== digitsArr.length;
      if (remainingDigitsDivisibleByThree && isNotLastDigit) {
        return `${digit} `;
      } else {
        return digit;
      }
    });
  }
}
