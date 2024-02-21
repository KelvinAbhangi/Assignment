let reverseString = (str) => {
    let reversestr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversestr += str[i];
    }
    return reversestr;
}
console.log(reverseString("I am a string")); 
