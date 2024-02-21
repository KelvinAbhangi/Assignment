let capitalfirstletter = (str) =>{
   
    let words = str.split(" ");  
     let string = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
      let fullstr = string.join(" ");
    
      return fullstr;
}

console.log(capitalfirstletter("i am a string"));




