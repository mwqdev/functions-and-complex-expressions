// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// A:

function max(num1, num2){
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// A:

function maxOfThree(num1, num2, num3){
    return Math.max(num1, num2, num3);
}


// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// A:

function isVowel(char){

    let vowels = ['a','e','i','o','u','y'];
    let vowel;

    var n = vowels.indexOf(char.toLowerCase());

    if (n != -1) {
      vowel = true;
    } else {
      vowel = false;
    }

    return vowel;
}

  //   for (i = 0; i < vowels.length; i++)
  //     if(char.toLowerCase() == vowels[i]) {
  //     vowel = true;
  //   } else if (char.toLowerCase() != vowels[i]) {
  //     vowel = false;
  //   }
  //   return vowel;
  // }


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// A:

function sum(num1, num2) {
  return num1 + num2;
}



// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// A:
function avg(num1, num2, num3) {
  return ((num1 + num2 + num3) / 3);
}


// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// A:

function getLength(word) {
  return word.length;
}


// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// A:

function greaterThan(num1, num2) {
  if (num2 > num1) {
    return true;
  } else {
    return false;
  }
}



// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// A:

function greet(param) {
  return 'Hello, ' + param + '!';
}



// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// A:

function madlib(word1, word2, word3, word4) {
  return 'The ' + word1 + ' brown ' + word2 + ' jumps over ' + word3 + ' lazy ' + word4;
}
