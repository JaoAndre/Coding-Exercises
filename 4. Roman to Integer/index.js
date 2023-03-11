const romanToInt = function (s) {
  const romanToDecimalMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let decimal = 0;
  let previousValue = 0;

  for (const currentChar of s) {
    const currentValue = romanToDecimalMap[currentChar];

    if (currentValue > previousValue) {
      decimal += currentValue - (2 * previousValue);
    } else {
      decimal += currentValue;
    }

    previousValue = currentValue;
  }

  return decimal;
};

console.log(romanToInt("MMV")); // 2005
console.log(romanToInt("MCMXCIV")); // 1994