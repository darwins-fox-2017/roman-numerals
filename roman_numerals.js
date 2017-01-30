function to_roman_old (n) {
  // your code here
  var romawi1 = ['M','CM','D','CD','C','XC','L','XL','X','VIIII','V','IIII','I']
  var angka1 = ['1000','900','500','400','100','90','50','40','10','9','5','4','1']
  var hasil1 = '';
  for (var i = 0; i < romawi1.length; i++){
    while (n >= angka1[i]){
      hasil1 += romawi1[i];
      n -= angka1[i]
    }
  }
  return hasil1;
}

function to_roman(num) {

  var romawi2 = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']
  var angka2 = ['1000','900','500','400','100','90','50','40','10','9','5','4','1']
  var hasil2 = '';
  for (var i = 0; i < romawi2.length; i++){
    while (num >= angka2[i]){
      hasil2 += romawi2[i];
      num -= angka2[i]
    }
  }
  return hasil2;
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
console.log('3     | IX       | ', to_roman(3))
console.log('53    | XIII     | ', to_roman(53))
console.log('453  | MCDLIII  | ', to_roman(453))
console.log('1453  | MCDLIII  | ', to_roman(1453))
