// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
    // a = 97, z = 122
    function caesar(input, shift, encode = true) {
      const finish = []
      if(shift === 0 || shift > 25 || shift < -25 || !shift || !input)  return false;
      for(let i = 0; i < input.length; i++) {
        let code = input[i].toLowerCase().charCodeAt()
       console.log(code);
        if(encode===true) {
        if(code > 96 && code < 123) {
           code += shift;
          if(code > 96 && code < 123) {
            finish.push(String.fromCharCode(code));
          } else if(code <= 96) {
            code = code + 26;
            finish.push(String.fromCharCode(code))
          } else if(code >= 123) {
            code = code - 26;
            finish.push(String.fromCharCode(code))
          }
        } else { 
        finish.push(String.fromCharCode(code))
        } } else{if(code > 96 && code < 123) {
           code -= shift;
          if(code > 96 && code < 123) {
            finish.push(String.fromCharCode(code));
          } else if(code <= 96) {
            code = code + 26;
            finish.push(String.fromCharCode(code))
          } else if(code >= 123) {
            code = code - 26;
            finish.push(String.fromCharCode(code))
          }
        } else { 
        finish.push(String.fromCharCode(code))}
      }};
      return finish.join("");
    }
    return {
      caesar,
    };
  })();
  
  module.exports = { caesar: caesarModule.caesar };
  
