// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function hasDuplicate(string){  // helper function to find duplicate
    const stringToSortedArray = string.split('').sort(); // spliting to for Array and sorting 
  
    return stringToSortedArray.some( (char, index, self) => { // using some to iterate through array
    return self.indexOf(char) !== index // if index of similar doesnot match then duplicate
  }) ;
  }
  function encodeDecode(message, base, reference){  // helper main function to encode or decode
    let result = "";   // placeholder for final result as String;
    
    for(let i=0; i<message.length; i++){  // iterating through input Message
      
      if (base.indexOf(message[i].toLowerCase()) >=0) { // if exists in base get the index
        result+=reference[base.indexOf(message[i].toLowerCase())]; // based on index find substitute based on index value
      }
      else{  // if not in base, simply add to the result.
        result+=message[i];
      }
    }
    return result; // return the result;
  }
  function substitution(input, alphabet, encode = true) {
      // your solution code here
    const universalAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    if(!alphabet || alphabet.length != 26 || hasDuplicate(alphabet)) return false;
  
    if (encode) {  // if encoding go through this block
      const base = universalAlphabet;  // for encoding taking universalAlphavet as base to get index
      const reference = alphabet;  // for encoddng this is reference to get char based on index
      return encodeDecode(input, base, reference);  // calling helper function
    }
    else {   // if decoding go through this block
      const base = alphabet;   // for decoding take input alphabet as base to get index
      const reference = universalAlphabet;  // for decoding taking universalAlphavet as reference to get char based on index
      return encodeDecode(input, base, reference);  // calling helper function 
    }
  };
  

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
