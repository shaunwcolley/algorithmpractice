
const s = [
  'ab',
  'abc',
  'abq',
  'ab',
  'abc',
  'ab',
  'xx',
  'y'
]

const q = [
  'abc',
  'xx',
  'qq',
  'ab'
]

// Brute force solution
// let's see if I can reduce this from O(n * m) to O(n + m)

// function matchingStrings(strings, queries) {
//   let results = [];
//   for (let i = 0; i < queries.length; i++) {
//     let count = 0;
//     for (let j = 0; j < strings.length; j++) {
//       if (queries[i] == strings[j]) {
//         count += 1;
//       }
//     }
//     results.push(count);
//   }
//   return results;
// }
//
// console.log(matchingStrings(s,q))


// trick is typically to use a dictionary
// here is a solution that is O(n + m) or at worse O(n) or O(m)
// depending on which array is larger

// what if arrays approach infinity?
// ideally the arrays would be sorted, so we could start counting the items
// and get a firm count for some of the 1st array
// and then start checking those few and pop out some result and do that over time.

function matchingStrings(strings, queries) {
  let table = {};
  let result = [];
  strings.forEach(item => {
    if(table[item]) {
      table[item] = table[item] + 1;
    } else {
      table[item] = 1;
    }
  })
  queries.forEach(item => {
    if(table[item]) {
      result.push(table[item])
    } else {
      result.push(0)
    }
  })
  return result;
}

console.log(matchingStrings(s,q))
