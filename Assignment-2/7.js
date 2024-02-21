let checkAlphorder = (str,temp = false) =>{
  let strarr = str.split("");
    if(temp){
        strarr.sort();
        // console.log(strarr);
    }
    else{
        strarr.sort().reverse();
    }
    strarr=strarr.join("");
    if(str === strarr){
      return false;
    }else{
      return true;
    }
}

console.log(checkAlphorder("abbcddeikl", false)); 
console.log(checkAlphorder("jheca", true)); 
console.log(checkAlphorder("abbcddeikl", true)); 