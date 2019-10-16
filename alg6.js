// Given 2 strings, write a function to decide if one is a permutation of the other

let test1 = "abcd"
let test2 = "dbca"
let test3 = "abce"
let test4 = "apple"
let test5 = "elpea"
let test6 = "elppa"

// write a separte function to return a map of characters and count

const mapString = (string) => {
  let map = {};

  for (let i = 0; i < string.length; i++) {
    let char = string[i]
    if (!map[char]) {
      map[char] = 1;
    } else {
      map[char] = 1 + map[char];
    }
  }
  return map
}


// write function to map maps and perform check in maps

const checkPerm = (s1, s2) => {

  // checking that input even exists
  if(!s1 || !s2 || s1.length !== s2.length) {
    return false;
  }

  // allocate memory storage if input is legit

  let map1 = mapString(s1);
  let map2 = mapString(s2)


  for (let i = 0; i < s1.length; i++) {
    let char = s1[i]
    if (map1[char] !== map2[char]) {
      return false
    }
  }
  return true
}

console.log(checkPerm(test1, test2)); // logs true
console.log(checkPerm(test1, test3)) // logs false
console.log(checkPerm(test1)) // logs false
console.log(checkPerm(test4, test5)) // logs false
console.log(checkPerm(test4, test6)) // logs true

//
