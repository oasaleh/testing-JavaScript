export function sum(a, b) {
  return a + b;
}

export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function reverseString(string) {
  if (string == '') {
    return string;
  } else {
    return reverseString(string.substr(1)) + string.charAt(0);
  }
}

export const calculate = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b,
  mul: (a, b) => a * b,
  div: (a, b) => a / b,
};

export function caesarCipher(string, shift) {
  if (shift == 0 || shift == 26) {
    return string;
  } else {
    let encryptedMessage = '';
    [...string].forEach((char) => {
      if (char.charCodeAt() > 96 && char.charCodeAt() < 123) {
        encryptedMessage += String.fromCharCode(((char.charCodeAt() - 97 + shift) % 26) + 97);
      } else if (char.charCodeAt() > 64 && char.charCodeAt() < 91) {
        encryptedMessage += String.fromCharCode(((char.charCodeAt() - 65 + shift) % 26) + 65);
      } else {
        encryptedMessage += String.fromCharCode(char.charCodeAt());
      }
    });
    return encryptedMessage;
  }
}

export function arrayAnalysis(array) {
  array.sort();
  const object = {
    min: Math.min(...array),
    max: array[array.length - 1],
    length: array.length,
    average: array.reduce((a, b) => a + b, 0) / array.length,
  };
  return object;
}
