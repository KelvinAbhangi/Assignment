let validateEmail = (email)=> {
    let emailid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     return emailid.test(email);
}

console.log(validateEmail("somebody@somewhere")); 
console.log(validateEmail("person@company.com")); 
