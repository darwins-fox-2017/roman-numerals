function to_roman_old (n) {
  // your code here
  var angka = n;
  var romawi = '';

  while (angka > 0) {
    if (angka >= 1000 && angka <= 3000) {
      angka = angka - 1000;
      romawi += 'M';
    } else if (angka >= 500 && angka <= 999) {
      angka = angka - 500;
      romawi += 'D';
    } else if (angka >= 400 && angka <= 499) {
      angka = angka - 400;
      romawi += 'CD';
    } else if (angka >= 100 && angka <= 399) {
      angka = angka - 100;
      romawi += 'C';
    } else if (angka >= 50 && angka <= 99) {
      angka = angka - 50;
      romawi += 'L';
    } else if (angka >= 40 && angka <= 49) {
      angka = angka - 40;
      romawi += 'XL';
    } else if (angka >= 10 && angka <= 39) {
      angka = angka - 10;
      romawi += 'X';
    } else if (angka >= 5 && angka <= 9) {
      angka = angka - 5;
      romawi += 'V';
    } else if (angka >= 1 && angka <= 4) {
      angka = angka - 1;
      romawi += 'I';
    }
  }
  return romawi;
}

function to_roman (n) {
  // your implementation code here
  var angka = n;
  var romawi = '';

  while (angka > 0) {
    if (angka >= 1000 && angka <= 3000) {
      angka = angka - 1000;
      romawi += 'M';
    } else if (angka >= 500 && angka <= 999) {
      angka = angka - 500;
      romawi += 'D';
    } else if (angka >= 400 && angka <= 499) {
      angka = angka - 400;
      romawi += 'CD';
    } else if (angka >= 100 && angka <= 399) {
      angka = angka - 100;
      romawi += 'C';
    } else if (angka >= 50 && angka <= 99) {
      angka = angka - 50;
      romawi += 'L';
    } else if (angka >= 40 && angka <= 49) {
      angka = angka - 40;
      romawi += 'XL';
    } else if (angka >= 10 && angka <= 39) {
      angka = angka - 10;
      romawi += 'X';
    } else if (angka == 9) {
      angka = angka - 9;
      romawi += 'IX';
    } else if (angka >= 5 && angka <= 9) {
      angka = angka - 5;
      romawi += 'V';
    } else if (angka == 4) {
      angka = angka - 4;
      romawi += 'IV';
    } else if (angka >= 1 && angka <= 4) {
      angka = angka - 1;
      romawi += 'I';
    }
  }
  return romawi;
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
//
console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('———|—————|———')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
