function to_roman_old(n) {
  var number = n,
      index_number = String(n),
      hitung = number,
      tampung = "",
      roman = ["I", "V", "X", "L", "C", "D", "M"];

  while(number > 0) {
    if ( number >= 1000 && number <= 3000 ) {
      number = number - 1000;
      tampung += "M";
    }

    else if ( number >= 500 && number <= 999 ) {
      number = number - 500;
      tampung += 'D';
    }

    else if ( number >= 400 && number <= 499) {
      number = number - 400;
      tampung += 'CD';
    }

    else if ( number >= 100 && number <= 399) {
      number = number - 100;
      tampung += 'C';
    }

    else if ( number >= 50 && number <= 99) {
      number = number - 50;
      tampung += "L";
    }

    else if ( number >= 40 && number <= 49) {
      number = number - 40;
      tampung += 'XL';
    }

    else if ( number >= 10 && number <= 39) {
      number = number - 10;
      tampung += "X";
    }

    else if ( number >= 5 && number <= 9) {
      number = number - 5;
      tampung += 'V';
    }

    else if ( number >= 1 && number <= 4) {
      number = number - 1;
      tampung += 'I';
    }
  }
  return tampung
}

function to_roman(n) {
  // your implementation code here
  var number = n,
      index_number = String(n),
      hitung = number,
      tampung = "",
      roman = ["I", "V", "X", "L", "C", "D", "M"];

  while(number > 0) {
    if ( number >= 1000 && number <= 3000 ) {
      number = number - 1000;
      tampung += "M";
    }

    else if ( number >= 500 && number <= 999 ) {
      number = number - 500;
      tampung += 'D';
    }

    else if ( number >= 400 && number <= 499) {
      number = number - 400;
      tampung += 'CD';
    }

    else if ( number >= 100 && number <= 399) {
      number = number - 100;
      tampung += 'C';
    }

    else if ( number >= 50 && number <= 99) {
      number = number - 50;
      tampung += "L";
    }

    else if ( number >= 40 && number <= 49) {
      number = number - 40;
      tampung += 'XL';
    }

    else if ( number >= 10 && number <= 39) {
      number = number - 10;
      tampung += "X";
    }

    else if ( number == 9) {
      number = number - 9;
      tampung += 'IX';
    }

    else if ( number >= 5 && number <= 9) {
      number = number - 5;
      tampung += 'V';
    }

    else if ( number == 4) {
      number = number - 4;
      tampung += 'IV';
    }

    else if ( number >= 1 && number <= 4) {
      number = number - 1;
      tampung += 'I';
    }
  }
  return tampung
}

// Drive code
console.log("My totally sweet testing script\n");
console.log("input | expected | actual");
console.log("———|—————|———");
console.log("4     | IIII     | ", to_roman_old(4));
console.log("9     | VIIII    | ", to_roman_old(9));
console.log("13    | XIII     | ", to_roman_old(13));
console.log("1453  | MCDLIII  | ", to_roman_old(1453));
console.log("1646  | MDCXLVI  | ", to_roman_old(1646));

console.log("My totally sweet testing script for new roman\n");
console.log("input | expected | actual");
console.log("———|—————|———");
console.log("4     | IV       | ", to_roman(4));
console.log("9     | IX       | ", to_roman(9));
console.log("13    | XIII     | ", to_roman(13));
console.log("1453  | MCDLIII  | ", to_roman(1453));
console.log("1646  | MDCXLVI  | ", to_roman(1646));
