'use strict';

// Functions part 6
// EX:1Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A,
// E, I, O, and U.

const removeVowels = function (str) {
  let count = 0;

  //   for loop
  for (let i = 0; i < str.length; i++) {
    if (
      str[i].toLowerCase() === 'a' ||
      str[i].toLowerCase() === 'e' ||
      str[i].toLowerCase() === 'i' ||
      str[i].toLowerCase() === 'o' ||
      str[i].toLowerCase() === 'u' ||
      str[i].toLowerCase() === 'y'
    ) {
      count++;
    }
  }

  //   pre-defined
  //   str.split('').forEach(function (el) {
  //     if (
  //       el.toLowerCase() === 'a' ||
  //       el.toLowerCase() === 'e' ||
  //       el.toLowerCase() === 'i' ||
  //       el.toLowerCase() === 'o' ||
  //       el.toLowerCase() === 'u' ||
  //       el.toLowerCase() === 'y'
  //     ) {
  //       count++;
  //     }
  //   });
  return count;
};

console.log(removeVowels('My random string'));

// EX:2 Write a function that combines two arrays by alternatingly taking elements.

const combineArray = function (arr, arr1) {
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    // if (arr[i] === undefined || arr1[i] === undefined) ;
    newArray.push(arr[i]);
    newArray.push(arr1[i]);
  }

  return newArray.filter(el => el !== undefined);
  //   in for loop start from the end and pop while newArray[i]===undefined
};

console.log(combineArray([1, 2, 3], ['a', 'b']));

// EX:3 Write a function that rotates a list by k elements.

const rotateArray = function (arr, n) {
  //   while (n < arr.length) {
  //     for (let i = 0; i < arr.length; i++) {
  //       newArray.push(arr[i]);
  //     }

  //     n = n + n;
  //   }

  for (let i = 0; i < n; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
};

console.log(rotateArray([1, 2, 3, 4, 5, 6], 2));

// EX: 4 write a function that returns array of its digits

const returnDigits = function (num) {
  let digitString = num + '';
  let digitArray = [];

  for (let i = 0; i < digitString.length; i++) {
    digitArray.push(+digitString[i]);
  }

  //   return digitString.split('').map(el => el - 0); - pre defined

  return digitArray;
};

console.log(returnDigits(1234));

// EX:5 Write a program that prints a multiplication table for numbers up to 12.

const multiplacation = function (n) {
  let newArray = [];

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      newArray.push(i * j);
    }
    // console.log(`Multiplication for number ${i}`);
    newArray.push('/');
  }
  return newArray;
};

console.log(multiplacation(12));

// EX:6 (0°C × 9/5) + 32 = 32°F

const celsiusToF = function (n) {
  return (n * 9) / 5 + 32;
};

console.log(celsiusToF(0));

// EX:7 Write a function to find the maximum element in array of numbers. Filter out all non-number
// elements.

const findMax = function (arr) {
  let max = -Infinity;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!isFinite(arr[i])) continue;
    if (arr[i] > max) {
      max = arr[i];
      //   newArr.push(arr[i]);
    }
  }
  console.log(max, arr);
  return max;
};

console.log(findMax([1, 22, 35, 'b', 'b3', 133, 'p']));
// console.log(findMax(['b', 'b3', 'p']));

// EX:8 Write a function to find the maximum and minimum elements. Function returns an array.

// max/min in for loop

// pre defined

const findMaxAndMin = function (arr) {
  return [Math.max(...arr), Math.min(...arr)];
};

console.log(findMaxAndMin([23, 44, 222, 335, 1, 22]));

// let test = [1, 22, 35, 'b', 'b3', 133, 'p'];

// const [a, b, c] = [...test];
// console.log(a);

// EX:9 find the median

const findMedian = function (arr) {
  arr.sort((a, b) => a - b);
  if (arr.length % 2 !== 0) {
    return arr[parseInt(arr.length / 2)];
  }

  if (arr.length % 2 === 0) {
    return (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;
  }
};
console.log(findMedian([3, 13, 2, 34, 11, 26, 47]));
console.log(findMedian([3, 13, 2, 34, 11, 26, 47, 5]));
console.log(findMedian([3, 13, 2, 34, 11, 26, 47, 5, 10]));
console.log(findMedian([3, 13, 2, 34, 11, 26, 47, 5, 10, 5]));
console.log(findMedian([3, 13, 2, 34, 11, 26, 47, 5, 10, 5, 221]));

// EX:10

// EX:11 Write a function to find and return the first, middle and last element of an array if the array
// has odd number of elements. If number of elements is even, return just the first and the
// last. In other cases (empty array), input array should be returned.

const returnNumbers = function (arr) {
  if (arr.length % 2 !== 0) {
    return [arr[0], arr[arr.length - 1], arr[parseInt(arr.length / 2)]];
  }
  if (arr.length % 2 === 0 && arr.length > 0) {
    return [arr[0], arr[arr.length - 1]];
  }

  return arr;
};

console.log(returnNumbers([22, 11, 33, 44, 55]));
console.log(returnNumbers([22, 11, 33, 44]));
console.log(returnNumbers([]));

// EX:12 find average of n elements

const findAvg = function () {
  //   console.log(arguments);
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum / arguments.length);
  return sum / arguments.length;
};

findAvg(123, 2121, 323, 12312, 32312);

// EX:13

const findNumbAvg = function (arr) {
  let sorted = arr.reduce((a, b) => a + b, 0);
  return sorted / arr.length;
};

console.log(findNumbAvg([11, 22, 33]));

// EX:14 BMI = MASS/(HEIGHT*HEIGHT)

const calcBMI = function (weight, height) {
  let BMI = weight / (height * height);
  console.log(weight / (height * height));
  if (BMI <= 15) return 'Starvation';
  if (BMI <= 17.5 && BMI > 15) return 'Anorexic';
  if (BMI < 18.5 && BMI > 17.5) return 'Underweight';
  if (BMI < 25 && BMI > 18.5) return 'Ideal';
  if (BMI >= 25 && BMI > 30) return 'Overweight';
  if (BMI >= 30 && BMI > 40) return 'Obese';
  if (BMI <= 40) return 'Morbidly obese';
};

console.log(calcBMI(80, 1.85));

// EX:15 Write a function that takes a list of strings and prints them, one per line, in a rectangular
// frame.:

const fancyPrint = function (arr) {
  console.log('*******');
  for (let i = 0; i < arr.length; i++) {
    console.log('* ' + arr[i] + ' *');
  }
  return console.log('*******');
};

console.log(fancyPrint(['Hello', 'World', 'In', 'a', 'frame']));
