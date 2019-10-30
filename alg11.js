// sliding window problem

// find greatest sum of n items in an array

let testOne = [16,7,4,2,3];

// one Loop!! :

const greatestSum = (array, num) => {
  let result = 0;
  let temp = 0;
  for (let i = 0; i < num; i++) {
    temp += array[i]
  }
  if (result < temp){
    result = temp;
  }
  for (let i = 0; i < array.length - num; i++) {
     temp -= array[i]
     temp += array[i + num]
     if (result < temp){
       result = temp;
     }
  }
  return result;
}

// console.log(greatestSum(testOne, 3))  // return 16 + 7 + 4

// autocomplete class that returns all dictionary words with a prefix

const dict = {
  'abc': 'abc',
  'acd': 'acd',
  'bcd': 'bcd',
  'def': 'def',
  'a': 'a',
  'aba': 'aba',
}

const words = ['abc','acd','bcd','def','a','aba']

const autoComplete = (input) => {
  let result = []
  for (let i = 0; i < words.length; i++ ) {
    let word = words[i];
    let temp = ''
    for (let j = 0; j < input.length; j++) {
      temp += word[j]
    }
    if (temp === input) {
      result.push(word)
    }
  }
  return result
}

// console.log(autoComplete('ab'))

// next exercise

// swap two integers with out using any variables
const swap = (x,y) => {
  x = x + y // add them up
  y = x - y // y is total minus y
  x = x - y // x is total minus new y
  return [x,y]
}

// console.log(swap(2,3))

// given an array containin g all numbers from 1 to n, expect 2 find missing 2 numbers

// array can be unsorted

testTwo = [4, 2, 3]

const findMissingTwo = (array) => {
  let one;
  let two;

  // first let's find max possible number, this will be length + 2
  let n = array.length + 2

  // now let's map all the values in the array
  let numbers = {}
  for (let i = 0; i < array.length; i++) {
    numbers[array[i]] = array[i];
  }

  // now if element is missing from 1 to n, then it will be added to numbers
  for (let i = 1; i < n + 1; i++) {
    if (!numbers[i] && !one) {
      one = i
    } else if (!numbers[i]) {
      two = i
    }
  }


  return `${one}, ${two}`
}


console.log(findMissingTwo(testTwo))
