let shufflestr = (str) =>{
    let arr = str.split("");
        for(let i = arr.length - 1; i > 0 ;i--){
            let j = Math.floor(Math.random() * (i+1));

            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        } 

        return arr.join("");
}
console.log(shufflestr("hello"));