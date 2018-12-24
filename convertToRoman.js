/* Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case. */

function convertToRoman(num) {
    let numerals = [['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
    ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
    ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
    ['', 'M', 'MM', 'MMM']];

    const digits = String(num).split('');
    let romanNum = '';
    let j = 0;

    for (let i = digits.length; i >= 1 ; i--) {
        romanNum += numerals[i-1][parseInt(digits[j])];
        j++;
    }

    return romanNum;
}
   
convertToRoman(36);
