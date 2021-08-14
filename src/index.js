const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};


function decode(expr) {
    let result = [];
    let arr = expr.split("");
    while (arr.length) {
      let str = arr.splice(-10);
      let morse = "";
      if (str.join("") === "**********") {
        result.push(" ");
      }
        for (let j = 0; j < str.length; j += 2) {
          let chars = str.slice(j, j + 2).join("");
        if (chars === "10") {
          morse += ".";
        } else if (chars === "11") {
            morse += "-";
        } else morse += "";
      }
      result.push(MORSE_TABLE[morse]);
    } 
    return result.reverse().join("");
  }

module.exports = {
    decode,
};
