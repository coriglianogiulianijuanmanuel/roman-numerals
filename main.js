const input = document.querySelector("input");
const output = document.querySelector("output");

// It takes a roman numeral and converts it into an integer.

// This only works with the "standard form" of roman numerals (https://en.wikipedia.org/wiki/Roman_numerals#Standard_form).

function romanToInt(s) {
  s = s.toUpperCase();

  let solution = 0;

  for (i = 0; i < s.length; i++) {
    if (s[i] === "I" && s[i + 1] === "V") {
      solution += 4;
      i += 1;
    } else if (s[i] === "I" && s[i + 1] === "X") {
      solution += 9;
      i += 1;
    } else if (s[i] === "X" && s[i + 1] === "L") {
      solution += 40;
      i += 1;
    } else if (s[i] === "X" && s[i + 1] === "C") {
      solution += 90;
      i += 1;
    } else if (s[i] === "C" && s[i + 1] === "D") {
      solution += 400;
      i += 1;
    } else if (s[i] === "C" && s[i + 1] === "M") {
      solution += 900;
      i += 1;
    } else if (s[i] === "I") solution += 1;
    else if (s[i] === "V") solution += 5;
    else if (s[i] === "X") solution += 10;
    else if (s[i] === "L") solution += 50;
    else if (s[i] === "C") solution += 100;
    else if (s[i] === "D") solution += 500;
    else if (s[i] === "M") solution += 1000;
  }

  return solution;
}

output.textContent = `Value: ${romanToInt(input.value)}`;

input.addEventListener("input", () => {
  output.textContent = `Value: ${romanToInt(input.value)}`;
});
