let vowelornot = (str,index) =>{
    let vowel =["a","e","i","o","u"];
    for(let i = 0;i < str.length;i++){
        if(str[i] == str[index]){
            for(let j =0;j < vowel.length;j++){
                 if(str[i] == vowel [j]){
                    return "vowel";
                 }
                 else{
                    return "consonant";
                }

                // console.log(vowel[j]);
            }
        }
       
    }
}

console.log(vowelornot("hello",3));
console.log(vowelornot("cat",1));

