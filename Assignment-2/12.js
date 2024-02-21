let extractquote = (quote) =>{
    
    let parts = quote.split(' - ');
    // console.log(parts)
    let text = parts[0].slice(1, -1); 
    let author = parts[1];
    return [text, author];
}

const quote = `"The unexamined life is not worth living." - Socrates`;
console.log(extractquote(quote)); 
