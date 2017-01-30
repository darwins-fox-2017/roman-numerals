function to_roman_old(n) {

  var arabic = [1000, 500, 100, 50, 10, 5, 1];
  var hurufArabic = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];

  var result = "";

  for(var i = 0; i < arabic.length; i++) {

    if(n > arabic[i]) {
        // console.log('awal '+n);

      result += hurufArabic[i]
      // for()
      //
      console.log(n);
      n -= arabic[i]




      // console.log(arabic[i] + " " + n)


    }
  }
  return result;

}
console.log(to_roman_old(573));
