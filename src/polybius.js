// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // initiating cordinate for all alphabet in lowercase as object
    const alphaObject = {
      'a':11, 'b':21, 'c': 31, 'd':41, 'e':51,
      'f':12, 'g':22, 'h': 32, 'i':42, 'j': 42, 'k':52, 
      'l':13, 'm':23, 'n': 33, 'o':43, 'p':53, 
      'q':14, 'r':24, 's': 34, 't':44, 'u':54, 
      'v':15, 'w':25, 'x': 35, 'y':45, 'z':55,     
    }

    let result = "";  // placeholder for result string
  
    if (!encode) {  // if its decode go through this loop
      // if the numerical digit is odd return false
      if (input.replace(/\s/g,'').length % 2 !== 0) return false;

        // checek if any spaces or other char then numbers, if skip
        //search for key based on numerical value
      for (let x=0; x<input.length; x++){  // iterating through input String
        if(/[0-9]/.test(input[x])){   // validating the input in this instance is number, not space
          const combineNum = parseInt(input[x] + input[x+1]);  // if number, take two of it and concatinate as String.
          x++; // increasing the counter, so that we are iterating every other index

          // getting the alphabet based on the two digit, w.r.t. values in the alphaObject. 
              // first getting keys as array and iterating through array to get values and matching the values with the concat number
          let numConvert = Object.keys(alphaObject).find((k)=> alphaObject[k]===combineNum);
          
          // if its i or j, replacing it to populate both as "(i/j)"
          numConvert = numConvert.replace(/[ij]/,'(i/j)')
          result += numConvert;  // concatinating the alphabet to the result
        }
        else{  // if its other than the number go throught this block
          result += input[x];  // no decoding just concatinate to the result. 
        }
      }
    }
    else{  // if encode is true go thought this block
      for(let i=0; i<input.length; i++){   // iterating through input String
        if(/[a-zA-Z]/.test(input[i])){   // if the iterator Char is alphabet, validating using regex and test()
          const convertNum = alphaObject[input[i].toLowerCase()];   // if capital converting to lower and getting the values from alphaObject 
          result+=convertNum;  // concatinating the numerical value to the result String. 
        }
        else{ // if the iterator is not alphabet go through this block
          result+=input[i];  // concatinating the iterator value to the result String as it is. 
        }
       }
    }
  return result;  // returning the result;
}
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
