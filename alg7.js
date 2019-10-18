// coderbyte challenges!
// longest word in a sentence, return 1st longest word
// if same length, return first one

function longestWord(sen) {

  //breaking words apart
  let words = sen.split(' ');

  //replacing non-alphabetic chars
  for(let i = 0; i< words.length; i++) {
    words[i] = words[i].replace(/[^a-zA-Zsd]/g, '');
  }

  let result = words[0];

  //finding longest word
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > result.length) {
      result = words[i];
    }
  }
  return result;

}

// above needs to account for this case:
let test1 = "a confusing /:sentence:/[ this is not!!!!!!!~"

// keep this function call here
// console.log(longestWord(test1));


// letter changes

// Have the function LetterChanges(str) take the str parameter being passed
// and modify it using the following algorithm.
// Replace every letter in the string with the letter following it in the alphabet
// (ie. c becomes d, z becomes a).
// Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.
//
// Examples
//
// Input: "hello*3"
// Output: Ifmmp*3
// Input: "fun times!"
// Output: gvO Ujnft!

function letterChanges(str) {

  let letters = 'abcdefghijklmnopqrstuvwxyz'
  let result = '';
  for(let i = 0; i < str.length; i++) {
    let letter = str[i];
    let index = letters.indexOf(letter)
    if (index === 25) {
      result += letters[0];
    } else if (index < 0) {
      result += letter;
    } else {
      letter = letters[index + 1]
      if (letter === 'a') {
        letter = 'A'
      }
      if (letter === 'e') {
        letter = 'E'
      }
      if (letter === 'i') {
        letter = 'I'
      }
      if (letter === 'o') {
        letter = 'O'
      }
      if (letter === 'u') {
        letter = 'U'
      }
      result += letter
    }
  }
  return result;

}

// console.log(letterChanges('hi!'));

// adding 1 and every number including input (max, 1000):

function simpleAdding(num) {

  // code goes here
  let result = 0;
  for(let i = 1; i <= num; i++) {
    result += i;
  }
  return result;

}

function letterCapitalize(str) {

  let words = str.split(' ');
  let results = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let letter = word[0].toUpperCase()
    let end = word.slice(1)
    let newWord = letter + end
    results.push(newWord)
  }
  return results.join(' ');

}

// console.log(letterCapitalize('apple is here'));


// simple Symbols

function simpleSymbols(str) {

  let letters = 'abcdefghijklmnopqrstuvwxyz';
  let i = 0;
  let valid = true

  while(valid && i < str.length) {
    if(letters.indexOf(str[i]) >= 0) {
      if(str[i-1] !== '+' || str[i+1] !== '+') {
        valid = false
      }
    }
    i++
  }

  return valid;

}

// console.log(simpleSymbols('+a='));

// Check Nums
function checkNums(num1,num2) {

  if(num1 < num2) {
    return true;
  }
  if (num1 > num2) {
    return false;
  }
  return -1;

}



// Time Convert

// function should return hours : minutes of a given number
// e.g., 126 => 2:6;

function timeConvert(num) {

  let min = num % 60
  let hour = Math.floor(num/60)

  return hour + ':' + min

}


// Alphabet soup

// alphabetize a given string
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let alphabetKeyMap = {}
let alphabetValueMap = {}
for(let i = 0; i < alphabet.length; i++) {
  alphabetKeyMap[alphabet[i]] = i;
  alphabetValueMap[i] = alphabet[i];
}


function alphabetSoup(str) {

  let values = [];

  for(let i = 0; i < str.length; i++) {
    values.push(parseInt(alphabetKeyMap[str[i]]))
  }

  let sortedKeys = values.sort((a,b) => a-b)
  let result = ''
  for(let i = 0; i < sortedKeys.length; i++) {
    let key = sortedKeys[i]
    result += alphabetValueMap[key]
  }
  return result
}

// more elegant solution!
// time complexity is O(n log(n) + n + n) => O(n log(n)) based on sort array in js
// complexity of my first solution is also O(n log(n)) because of use of sort.
const alphabetSort = (str) => {
  let array = str.split("");
  let reverse = array.sort();
  let result = reverse.join("");
  return result
}


// console.log(alphabetSort('hooplah')) // print ahhloop


// different algorithm from coderbyte

// reverse polish notation

// input will be a string, separated by a space
// series of numbers followed by operators

const reversePol = (str) => {
  let inputStack = str.split(' ');
  let numberStack = [];
  for(let i = 0; i < inputStack.length; i++){

    let el = inputStack[i];

    if (el === '+'){
      let a = parseInt(numberStack.pop())
      let b = parseInt(numberStack.pop())
      let c = b + a
      numberStack.push(c)
    } else if (el === '-') {
      let a = parseInt(numberStack.pop())
      let b = parseInt(numberStack.pop())
      let c = b - a
      numberStack.push(c)
    } else if (el === '*') {
      let a = parseInt(numberStack.pop())
      let b = parseInt(numberStack.pop())
      let c = b * a
      numberStack.push(c)
    } else if (el === '/') {
      let a = parseInt(numberStack.pop())
      let b = parseInt(numberStack.pop())
      let c = b / a
      numberStack.push(c)
    } else {
      numberStack.push(el)
    }
  }
  if (numberStack.length > 1 || !numberStack[0]) {
    return 'Invalid input'
  }
  return numberStack[0]
}

const testRP = '6 8 2 1 + - *'

console.log(reversePol(testRP));


//
