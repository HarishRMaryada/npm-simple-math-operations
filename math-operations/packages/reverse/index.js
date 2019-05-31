"use strict";

const reverseInteger = function(options) {
  return options.bit && options.bit <= 53
    ? intHasBit(options.number, options.signed, options.bit)
    : options.number < Number.MIN_SAFE_INTEGER ||
      options.number > Number.MAX_SAFE_INTEGER
    ? 0
    : signedIntReverse(options.number);
};

const signedIntReverse = number => {
  return (
    parseInt(
      Math.abs(number)
        .toString()
        .split("")
        .reverse()
        .join("")
    ) * Math.sign(number)
  );
};
const unSignedIntReverse = number => {
  return (
    parseInt(
      Math.abs(number)
        .toString()
        .split("")
        .reverse()
        .join("")
    )
  );
};

const intHasBit = (number, signed, bit) => {
  let reversed = 0;
  if (signed) {
    reversed = signedIntReverse(number);
  } else {
    reversed = unSignedIntReverse(number);
  }
  return reversed <= Math.pow(2, bit) - 1 && reversed >= -Math.pow(2, bit) + 1
    ? reversed
    : 0;
};

const Reverse = {
  reverseInteger
};
module.exports = Reverse;
