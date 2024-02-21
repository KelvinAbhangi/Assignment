let alternatecaps = (str) => {
     
    let char = str.split("");
     for (let i = 0; i < char.length; i++) {
        if (i % 2 === 1) { 
            char[i] = char[i].toUpperCase();
        } else { 
            char[i] = char[i].toLowerCase();
        }
    }
    return char.join("");
}
console.log(alternatecaps("I am a string")); 
