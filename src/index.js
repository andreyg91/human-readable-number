module.exports = function toReadable(number) {
    if (number === 0) {
        return "zero";
    }

    const numbers = {
        0: "",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };

    const tenNumbers = {
        0: "",
        1: "",
        2: "twenty ",
        3: "thirty ",
        4: "forty ",
        5: "fifty ",
        6: "sixty ",
        7: "seventy ",
        8: "eighty ",
        9: "ninety ",
    };

    let hundredsValue = Math.floor(number / 100),
        tensValue = Math.floor((number - hundredsValue * 100) / 10),
        onesValue = number - hundredsValue * 100 - tensValue * 10;

    const hundreds =
        hundredsValue > 0 ? numbers[hundredsValue] + " hundred " : "";

    if (tensValue === 1) {
        tensValue = 0;
        onesValue = number - hundredsValue * 100;
    }

    return (hundreds + tenNumbers[tensValue] + numbers[onesValue]).trim();
};
