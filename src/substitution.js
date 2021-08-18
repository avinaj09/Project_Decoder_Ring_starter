// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const cipher = ["a","b","c","d","e",
                  "f","g","h","i","j",
                  "k","l","m","n","o",
                  "p","q","r","s","t",
                  "u","v","w","x","y","z"];
  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if( !alphabet || alphabet.length !==26 || typeof(alphabet) !== "string") return false;
    if(typeof(input) !== "string" || !input) return false;
    const alphabetArr = alphabet.toLowerCase().split('');
    const duplicate = alphabetArr.some((al, i) => alphabetArr.indexOf(al) !== i);
    if(duplicate) return false;
    
    let result = "";
    for(let i=0; i<input.length; i++){
      if (encode){
      const inputs = input.toLowerCase();
        const codeLttr = alphabetArr[cipher.indexOf(inputs[i])];
        //console.log(codeLttr)
        if(codeLttr){
          result += codeLttr;
        }else{
          result += " "
        }
      } if (encode===false) {
         const inputs = input.toLowerCase();
        const codeLttr = cipher[alphabetArr.indexOf(inputs[i])]
        //console.log(codeLttr)
        if(codeLttr){
          result += codeLttr
        }else{
          result += " "
        }
      }
    }
  return result
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
