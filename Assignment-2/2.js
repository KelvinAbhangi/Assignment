let remove =(str, arr) =>{
    let result = "";
   
    let removeSet = new Set(arr);
    
    for (let i = 0; i < str.length; i++) {
        if (!removeSet.has(str[i])) {
            result += str[i];
        }
    }
    return result;
}
console.log(remove("I am an example string", ["a", "x"]));
