let mostcommonchar = (str) => { 
    let chars = {};
  let count = 0;
  let commonchar = '';

  for (let char of str) {
    chars[char] = (chars[char] || 0) + 1;
    if (chars[char] > count || (chars[char] === count && char < commonchar)) {
      count = chars[char];
      commonchar = char;
    }
  }

  return commonchar;
}

console.log(mostcommonchar("abcddefg")); 
console.log(mostcommonchar("heggbdeff")); 
