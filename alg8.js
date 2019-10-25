// print duplicate characters from string

const printDup = (str) => {
  let map = {};
  let result = '';

  for(let i = 0; i < str.length; i++) {
    if (map[str[i]]) {
      result += str[i];
    } else {
      map[str[i]] = str[i];
    }
  }


  return result;
}

const test1 = "aabbccdeeffggh"

console.log(printDup(test1));


// check if anagram

const anagramCheck = (one, two) => {
  if (one.length !== two.length) return false
  const map1 = {};
  const map2 = {};
  for (let i = 0; i < one.length; i++) {
    map1[one[i]] = map1[one[i]] ? map1[one[i]] + 1 : 1;
    map2[two[i]] = map2[two[i]] ? map2[two[i]] + 1 : 1;
  }
  for (let i = 0; i < one.length; i++) {
    let letter = one[i]
    if (map1[letter] !== map2[letter]) {
      return false;
    }
  }
  return true
}

console.log(anagramCheck('silent', 'listen'));
console.log(anagramCheck('palindrome', 'impronalde'))
