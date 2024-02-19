let findlongstword = (str) =>{
        let words = str.split(' ');

        let longstword = "";

        for(let i = 0;i < words.length;i++){
            for (j=i+1;j < words.length;j++){
                if(words[i].length >= words[j].length){
                    longstword = words[i];
                }
                else{
                    longstword= words[j];
                }
            } 
        }          
     return longstword; 
}
console.log(findlongstword("Web Devlopment Tutorial"));