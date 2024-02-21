let repeatingchar = (str,repetitioncount) =>{
     let repeatingChars = [];
     let charCount = {};
     
     for (let i = 0; i < str.length; i++) {
          let char = str[i];
  
          if (charCount[char] !== undefined) {
              charCount[char]++;
          } else {
              charCount[char] = 1;
          }
  
          if (charCount[char] === repetitioncount) {
              repeatingChars.push(char);
          }
      }
  
      return repeatingChars;
  }
console.log(repeatingchar("abcddef",2));
console.log(repeatingchar("tfghhhplffzaaa",3));
