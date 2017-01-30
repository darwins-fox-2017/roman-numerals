function to_roman_old (n) {
  // your code here
  let a = '';
  while(n > 0) {
    if(n / 1000 > 1) {
      a += 'M';
      n -= 1000;
    }
    else if (n / 500 > 1) {
      if (n >= 500)
      a += 'D';
      n -= 500;
    }
    else if (n / 400 > 1) {
      a += 'CD';
      n -= 400;
    }
    else if (n / 100 > 1) {
      a += 'C';
      n -= 100;
    }
    else if (n / 50 > 1) {
      a += 'L';
      n -= 50;
    }
    else if (n / 40 > 1) {
      a += 'XL';
      n -= 40;
    }
    else if (n / 10 > 1) {
      a += 'X';
      n -= 10;
    }
    else if (n / 5 > 1) {
      a += 'V';
      n -= 5;
    }
    else if (n >= 1) {
      a += 'I';
      n -= 1;
    }
  }
  return a
}

function to_roman (n) {
  // your implementation code here
  let a = '';
  while(n > 0) {
    if(n / 1000 > 1) {
      a += 'M';
      n -= 1000;
    }
    else if (n / 500 > 1) {
      if (n >= 500)
      a += 'D';
      n -= 500;
    }
    else if (n / 400 > 1) {
      a += 'CD';
      n -= 400;
    }
    else if (n / 100 > 1) {
      a += 'C';
      n -= 100;
    }
    else if (n / 50 > 1) {
      a += 'L';
      n -= 50;
    }
    else if (n / 40 > 1) {
      a += 'XL';
      n -= 40;
    }
    else if (n / 10 > 1) {
      a += 'X';
      n -= 10;
    }
    else if (n / 5 > 1) {
      a += 'V';
      n -= 5;
    }
    else if (n / 4 >= 1) {
      a += 'IV';
      n -= 4;
    }
    else if (n >= 1) {
      a += 'I';
      n -= 1;
    }
  }
  return a
}


console.log('My totally sweet testing script\n')
console.log('input | expected | actual')
console.log('———|—————|———')
console.log('4     | IIII     | ', to_roman_old(4))
console.log('9     | VIIII    | ', to_roman_old(9))
console.log('13    | XIII     | ', to_roman_old(13))
console.log('1453  | MCDLIII  | ', to_roman_old(1453))
console.log('1646  | MDCXLVI  | ', to_roman_old(1646))

console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('———|—————|———')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
