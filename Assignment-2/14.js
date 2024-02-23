let sortnumber = (numbers, boolen) => {
  if (boolen === false) {
    for (let i = 0; i < numbers.length - 1; i++) {
      if (numbers[i] > numbers[i + 1]) {
        let temp = numbers[i];
        numbers[i] = numbers[i + 1];
        numbers[i + 1] = temp;
        i = -1;
        var asending = numbers;
      }
    }
    return asending;
  } else {
    for (let i = 0; i < numbers.length - 1; i++) {
      if (numbers[i] < numbers[i + 1]) {
        let temp = numbers[i];
        numbers[i] = numbers[i + 1];
        numbers[i + 1] = temp;
        i = -1;
        var desending = numbers;
      }
    }
    return desending;
  }
};
let numbers = [13, 23, 2, 1, 4, 3, 6, 5, 8, 7, 9, 12, 10, 11];
console.log(sortnumber(numbers, false));
console.log(sortnumber(numbers, true));
/************************************************** */
