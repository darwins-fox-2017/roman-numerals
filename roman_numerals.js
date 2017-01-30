function to_roman_old(n) {

  var result = "";

  while( n > 0) {
    if(n > 1000) {
      result += "M";
      n -= 1000;
    } else if(n > 500) {
      result += "D";
      n -= 500;
    }
    else if(n > 400) {
      result += "CD";
      n -= 400;

    } else if(n > 100) {
      result += "C";
      n -= 100;
    } else if(n > 50) {
      result += "L";
      n -= 50;
    } else if (n > 40) {
      result += "XL";
      n -= 40;
    } else if(n > 10) {
      result += "X";
      n -= 10;
    }
    // } else if( n == 9) {
    //   result += "VIIII";
    //   n -= 9;
    // }
    else if(n > 5) {
      result += "V";
      n -= 5;
    } else if(n == 4) {
      result += "IIII";
      n -= 4;
    }
    else {
      result += "I";
      n -= 1;
    }
  }
  return result;

}

function to_roman (n) {
  var result = "";

  while( n > 0) {
    if(n > 1000) {
      result += "M";
      n -= 1000;
    } else if(n > 500) {
      result += "D";
      n -= 500;

    } else if(n > 400) {
      result += "CD";
      n -= 400;
    } else if(n > 100) {
      result += "C";
      n -= 100;
    } else if(n > 50) {
      result += "L";
      n -= 50;
    } else if (n > 40) {
      result += "XL";
      n -= 40;
    } else if(n > 10) {
      result += "X";
      n -= 10;
    } else if( n >= 9) {
      result += "IX";
      n -= 9;
    }
    else if(n > 5) {
      result += "V";
      n -= 5;
    } else if(n >= 4) {
      result += "IV";
      n -= 4;
    }
    else {
      for(var i = 0; i < n; i++) {
        result += "I";
        n -= 1;
      }

    }
  }
  return result;
}


// Drive code
console.log('My totally sweet testing script\n')
console.log('input | expected | actual')
console.log('———|—————|———')
console.log('4     | IIII     | ', to_roman_old(4))
console.log('9     | VIIII    | ', to_roman_old(9))
console.log('13    | XIII     | ', to_roman_old(13))
console.log('1453  | MCDLIII  | ', to_roman_old(1453))
console.log('1646  | MDCXLVI  | ', to_roman_old(1646))

// console.log('My totally sweet testing script for new roman\n')
// console.log('input | expected | actual')
// console.log('———|—————|———')
// console.log('4     | IV       | ', to_roman(4))
// console.log('9     | IX       | ', to_roman(9))
// console.log('13    | XIII     | ', to_roman(13))
// console.log('1453  | MCDLIII  | ', to_roman(1453))
// console.log('1646  | MDCXLVI  | ', to_roman(1646))
