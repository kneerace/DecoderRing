// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // create alphabet list
    const alphaList = "abcdefghijklmnopqrstuvwxyz";
    // if shift not provided, or 0 or < -25 or > 25 return false
    if (!shift || shift=== 0 || shift < -25 || shift > 25) return false; 
    let result = "";   // placeholder for result
    
    //iterating the input string
    for (let i = 0; i<input.length; i++){
      // validating if the value in index i is alphabet, ignoring the case of it
        // since i have lower case alphabet list, converting to lowercase to validate using includes()
      if (alphaList.includes(input[i].toLowerCase())){
        //if present in the alphabet list finding the index position of it
        const charNo = alphaList.indexOf(input[i].toLowerCase());
        let shiftCharNo;  // placeholder for index value after encoding or decoding
        // validating encode to direct the path, whether to encode or decode
        if(encode){  // if encode is true
           shiftCharNo = (charNo +shift < 26) && (charNo +shift >= 0) ?  // after adding if the value between 0 to 25
                        charNo + shift :    // take the added value as final index value
                          charNo + shift <0 ?  // if added value is less than 0
                            charNo+shift +26 :  // add 26 to get the final index value
                              charNo+shift -26; // if the value is >26 subtract 26 to get the final index value
                                                // so that the final index value is within 0 to 25.
        }
        else{  // if encode is false
          // similar to encode but in decode we are substracting shift value rather than add
           shiftCharNo = charNo - shift < 0 ? charNo - shift + 26 : charNo-shift > 25 ? charNo - shift -26 : charNo - shift;
        } 
        
      const newChar = alphaList[shiftCharNo];  // fetting the value based on the final index number.
        // console.log(input[i], ' ', charNo, 'shift no ', shiftCharNo, ' newChar ', newChar);
        result+= newChar;  // concating the final value to the result String.
      }
      else {  // escaping the non alphabet 
        result += input[i]; // simply concating those non alpha to the result String
      }
    }
  
    return result;  // returning the final result.
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
