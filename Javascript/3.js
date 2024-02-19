function addPy(str) {
    if (str.startsWith("Py")) {
        return str;
    } else {
        return "Py" + str;
    }
}
console.log(addPy("Python")); 
console.log(addPy("Java"));
