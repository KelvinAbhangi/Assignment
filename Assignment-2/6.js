let sortstr = (str,boolen) => {
    let strarr = str.split("");
    if(boolen == false){
        strarr.sort();
    }
    else{
        strarr.sort().reverse();
    }
    strarr=strarr.join("");
    return strarr;
}

console.log(sortstr("bacd",false));
console.log(sortstr("axedzpq",true));

