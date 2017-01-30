function to_roman_old (n) {
  // your code here
  let angkaRomawi = '';

  while(n!=0){
    if(n>=1000){
      angkaRomawi = angkaRomawi + "M"
      n = n-1000;
    }else if(n>=500){
      angkaRomawi = angkaRomawi + "D"
      n = n-500;
    }else if(n>=400){
      angkaRomawi = angkaRomawi + "CD"
      n = n-400;
    }else if(n>=100){
      angkaRomawi = angkaRomawi + "C"
      n = n-100;
    }else if(n>=50){
      angkaRomawi = angkaRomawi + "L"
      n = n-50;
    }else if(n>=40){
      angkaRomawi = angkaRomawi + "XL"
      n = n-40;
    }else if(n>=10){
      angkaRomawi = angkaRomawi + "X"
      n = n-10;
    }else if (n>=5) {
      angkaRomawi = angkaRomawi + "V"
      n = n-5;
    }else{
      for(var i = 0; i<n; i++){
        angkaRomawi = angkaRomawi + "I"
        n = n-1;
      }
    }
  }
  return angkaRomawi;
}

function to_roman (n) {
  // your implementation code here
  let roman = '';
  while(n!=0){
    if(n>=1000){
      roman = roman + "M"
      n = n-1000;
    }else if(n>=500){
      roman = roman + "D"
      n = n-500;
    }else if(n>=400){
      roman = roman + "CD"
      n = n-400;
    }else if(n>=100){
      roman = roman + "C"
      n = n-100;
    }else if(n>=50){
      roman = roman + "L"
      n = n-50;
    }else if(n>=40){
      roman = roman + "XL"
      n = n-40;
    }else if(n>=10){
      roman = roman + "X"
      n = n-10;
    }else if (n>=9){
      roman = roman + "IX"
      n = n-9;
    }else if (n>=5) {
      roman = roman + "V"
      n = n-5;
    }else if (n>=4) {
      roman = roman + "IV"
      n = n-4;
    }else{
      for(var i = 0; i<n; i++){
        roman = roman + "I"
        n = n-1;
      }
    }
  }
  return roman;
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

console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('———|—————|———')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
