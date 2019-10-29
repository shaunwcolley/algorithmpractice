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

console.log(greatestSum(testOne, 3))  // return 16 + 7 + 4

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

console.log(autoComplete('ab'))
