// Given 2 strings, write a function to decide if one is a permutation of the other

let test1 = "abcd"
let test2 = "dbca"
let test3 = "abce"


const checkPerm = (s1, s2) => {
  let hashMap = {};
  // checking that input even exists
  if(!s1 || !s2 || s1.length !== s2.length) {
    return false;
  }

  for (let i = 0; i < s1.length; i++) {
    hashMap[s1[i]] = s1[i];
  }
  for (let i = 0; i < s2.length; i++) {
    if (!hashMap[s2[i]]) {
      return false
    }
  }
  return true
}

console.log(checkPerm(test1, test2)); // logs true
console.log(checkPerm(test1, test3)) // logs false
console.log(checkPerm(test1)) // logs false


//
