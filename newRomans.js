function to_roman_old(n) {

  var result = "";

  while( n > 0) {
    if(n > 1000) {
      result += "M";
      n -= 1000;
      if( n > 900) {
        result += "CM";
      }
    } else if(n > 400) {
      result += "CD";
      n -= 400;
      if(n > 500) {
        result += "D";
        n -= 500;
      }
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
    } else if( n == 9) {
      result += "VIIII";
      n -= 9;
    }
    else if(n > 5) {
      result += "VI";
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
console.log(to_roman_old(573));
console.log(to_roman_old(4)); // VIIII
console.log(to_roman_old(13)); // XIII
console.log("1453 " + to_roman_old(1453)); // MCDLIII
console.log(to_roman_old(1646)); // MDCXLVI
console.log(to_roman_old(96)); // XIII
