const numbers =[-5,-2,-6,0,-1];
let largest = numbers[0];
for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
console.log(largest)
