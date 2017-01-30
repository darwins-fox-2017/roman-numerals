function to_roman_old (n) {
  // your code here
  var hasil = ""
  while (n>0){
    if(n>=1000){
      hasil = hasil + "M"
      n = n - 1000
    }else if(n>=500){
      hasil = hasil + "D"
      n = n - 500
    }else if(n>=400){
      hasil = hasil + "CD"
      n = n - 400
    }else if(n>=100){
      hasil = hasil + "C"
      n = n - 100
    }else if(n>=50){
      hasil = hasil + "L"
      n = n - 50
    }else if(n>=40){
      hasil = hasil + "XL"
      n = n - 40
    }else if(n>=10){
      hasil = hasil + "X"
      n = n - 10
    }else if(n>=5){
      hasil = hasil + "V"
      n = n-5
    }else{
      hasil = hasil + "I"
      n = n-1
    }
  }

  return hasil

}


function to_roman (n) {
  // your implementation code here
  var hasil = ""
  while (n>0){
    if(n>=1000){
      hasil = hasil + "M"
      n = n - 1000
    }else if(n>=500){
      hasil = hasil + "D"
      n = n - 500
    }else if(n>=400){
      hasil = hasil + "CD"
      n = n - 400
    }else if(n>=100){
      hasil = hasil + "C"
      n = n - 100
    }else if(n>=50){
      hasil = hasil + "L"
      n = n - 50
    }else if(n>=40){
      hasil = hasil + "XL"
      n = n - 40
    }else if(n>=10){
      hasil = hasil + "X"
      n = n - 10
    }else if(n>=9){
      hasil = hasil + "IX"
      n = n - 9
    }else if(n>=5){
      hasil = hasil + "V"
      n = n-5
    }else if(n>=4){
      hasil = hasil + "IV"
      n = n-4
    }else{
      hasil = hasil + "I"
      n = n-1
    }
  }

  return hasil
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
