function permutation (str) {
  let results = []
  if(str.length == 1) {
    results.push(str)
    return results
  } else {
    for(let i = 0; i < str.length; i++) {
      console.log(str[i])
    }
  }
  return results
}

// let a = permutation('ab');
// console.log(a)

function getAllPermutations(string) {
  var results = [];

  if (string.length === 1) {
    results.push(string);
    return results;
  }

  for (var i = 0; i < string.length; i++) {
    var firstChar = string[i];
    var charsLeft = string.substring(0, i) + string.substring(i + 1);
    console.log(charsLeft)
    var innerPermutations = getAllPermutations(charsLeft);
    for (var j = 0; j < innerPermutations.length; j++) {
      results.push(firstChar + innerPermutations[j]);
    }
  }
  return results;
}

// does not implement the BigInt(x) type but could if needed
function aVeryBigSum(ar) {
    let sum = 0;
    for(let i = 0; i < ar.length; i++) {
      sum += ar[i];
    };
    return sum
}

function diagonalDifference(arr) {
    // Write your code here
    let firstDia = 0;
    let secondDia = 0;
    for(let i = 0; i < arr.length; i++) {
      firstDia += arr[i][i];
      secondDia += arr[i][arr.length -1 - i];
    }
    return Math.abs(firstDia - secondDia)
}

let testArray = [
  [1,2,3,4,5],
  [6,7,8,9,10],
  [1,2,3,4,5],
  [6,7,8,9,10],
  [1,2,3,4,5]
]
// 1,2,3,4,5
// 6,7,8,9,10
// 1,2,3,4,5
// 6,7,8,9,10
// 1,2,3,4,5
//
// 25 - 25
// ->
// diff = 0
//
// -4
// -2
// 0
// -2
// -2
// console.log('diagonalDifference:')
// console.log(diagonalDifference(testArray))

// give ratio as decimal of positives to amount, negatives to amount, and zeros to amount

function plusMinus(arr) {
  let pos = 0;
  let neg = 0;
  let zeros = 0;
  const length = arr.length
  for(let i = 0; i < arr.length; i ++) {
    if (arr[i] > 0) {
      pos++
    } else if (arr[i] < 0) {
      neg++
    } else {
      zeros++
    }
  }
  console.log(parseFloat((pos/length).toFixed(6)))
  console.log(parseFloat((neg/length).toFixed(6)))
  console.log(parseFloat((zeros/length).toFixed(6)))
}

const testArrayTwo = [0,1,-1,-2,-3,0]
//
// console.log('plusMinus')
// plusMinus(testArrayTwo)

// console.log('     #')
// console.log('    ##')
// console.log('   ###')
// console.log('  ####')
// console.log(' #####')
// console.log('######')

function staircase(n) {
  for(let i = 0; i < n; i++) {
    let step = ''
    for(let j = 0; j < (n - i - 1); j++){
      step += ' '
    }
    for (let j = 0; j < i + 1; j++) {
      step += "#"
    }
    console.log(step)
  }
}
//
// console.log('staircase right aligned:')
// staircase(5)

// array will always be 5 length
function miniMaxSum(arr) {
  let mini = 0;
  let max = 0;
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++){
      if (arr[j-1] > arr[j]) {
        let temp = arr[j-1];
        arr[j-1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  for(let i = 0; i< arr.length -1; i++) {
    mini += arr[i]
  }
  for(let i = 1; i< arr.length; i++) {
    max += arr[i]
  }
  console.log(mini + ' ' + max)
}

// miniMaxSum([1,2,3,7,-1])

// Birthday cake candles

function birthdayCakeCandles(ar) {
  // first I would find greatest number in ar
  let tallest = 0;
  let count = 0;
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] > tallest) {
      tallest = ar[i]
    }
  }
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] == tallest) {
      count++
    }
  }
  return count
}
// const bdayArray = [3,1,5,5,3,4]
// console.log(birthdayCakeCandles(bdayArray))

const time = "12:05:45AM"
function timeConversion(s) {
  /*
   * Write your code here.
   */
  let t = s.slice(0, -2)
  const suffix = s.slice(8)
  let a = t.split(':')
  if(suffix == 'PM' && a[0] != '12') {
    a[0] = parseInt(a[0]) + 12
    return a.join(':')
  }
  if (suffix == 'AM' && t == "12:00:00") {
    return "00:00:00"
  }
  if(suffix == "AM" && a[0] == '12') {
    a[0] = '00'
    return a.join(':')
  }
  return t
}

// console.log(timeConversion(time))

function countApplesAndOranges(s, t, a, b, apples, oranges) {

  function calcLanding(array, tree) {
    return array.map(location => {
      return tree + location
    })
  }

  function countOnHouse (locations, houseStart, houseEnd) {
    let fruitsOnHouse = 0;
    for(let i = 0; i < locations.length; i++) {
      if(locations[i] >= s && locations[i] <= t) {
        fruitsOnHouse++;
      }
    }
    return fruitsOnHouse;
  }


  let appleLanding = calcLanding(apples, a)
  let orangeLanding = calcLanding(oranges, b)

  let applesOnHouse = countOnHouse(appleLanding, s, t);
  let orangesOnHouse = countOnHouse(orangeLanding, s, t);

  console.log(applesOnHouse);
  console.log(orangesOnHouse);
}
//
// countApplesAndOranges(7, 11, 5, 15, [-2,2,1], [5,-6])

function kangaroo(x1, v1, x2, v2) {
  let cross = false;
  let startDistance = Math.abs(x2 - x1)
  while (!cross) {
    x1 += v1
    x2 += v2
    //calculate absolute because difference could be negative for a long time, i.e, second could start a really long way ahead of first
    let newDistance = Math.abs(x2 - x1)
    if (newDistance >= startDistance) {
      cross = true;
      return 'NO'
    }
    if(x1 === x2) {
      cross = true;
      return 'YES'
    }
  }
}

// will cross paths: 0 3 4 2
// will not: 0 2 5 3
// console.log(kangaroo(0, 2, 5, 3))
// console.log(kangaroo(7271, 2211, 7915, 2050))
// console.log(kangaroo(28, 8, 96, 2))

function findNumber(arr, k) {
    for(let i = 0; i < arr.length; i++) {
        if(k === arr[i]) {
            return 'YES'
        }
    }
    return 'NO'
}

function oddNumbers(l, r) {
    odds = []
    for(let i = l; i < r + 1 ; i++){
        if(i%2 !== 0) {
            odds.push(i)
        }
    }
    return odds
}

// console.log(oddNumbers(2,5))


function calculatePath(firstPath, secondPath) {
  let first = firstPath.split('/');
  let second = secondPath.split('/');
  if(first.length > second.length) {
     return '..'
  }
  if(first[1] == second[1]) {
    let path = []
     second.forEach((part, index) => {
      if(index > 1) {
        return path.push(part)
      }
    })
    return path.join('/')
  }
  if(first.length == second.length){
    return '../' + second[second.length - 1]
  }
  if(second.length > first.length) {
    let path = []
     second.forEach((part, index) => {
      if(index > 1) {
        return path.push(part)
      }
    })
    return '../' + path.join('/')
  }
  return second[second.length - 1];
}
// console.log(calculatePath(a,b))

function calcPath(firstPath, secondPath) {
  let first = firstPath.split('/');
  let second = secondPath.split('/');
  let path = []
  function checkPath(firstArray, secondArray, array) {
    for(let i = 0; i < firstArray.length || i < secondArray.length; i ++) {
      if(firstArray[i] != secondArray[i] && secondArray[i] != undefined) {
        for(i; i < secondArray.length; i++) {
          array.push(second[i])
        }
      }
    }
    return array
  }
  let dots = Math.abs(first.length - second.length)
  // checking if first is longer than second and that last one in second is not same as one in position in first
  if(first.length > second.length && first[first.length - (dots + 1)] != second[second.length - 1]) {
    for(let i = 0; i < dots; i++) {
      path.push('..')
    }
    path = checkPath(first, second, path)
    return path.join('/')
  }
  // first longer than second and no need to move down
  if(first.length > second.length) {
    for(let i = 0; i < dots; i++) {
      path.push('..')
    }
    return path.join('/')
  }
  // checking if second is longer than first and that last one in first is not same as one in position in second
  if(second.length > first.length && first[first.length - 1] != second[second.length - (dots + 1)]) {
    for(let i = 0; i < dots; i++) {
      path.push('..')
    }
    path = checkPath(first, second, path)
    return path.join('/')
  }
  // second longer than first just need to move up
  if(second.length > first.length) {
    path = checkPath(first, second, path)
    return path.join('/')
  }
  // checking if same length
  if(first.length == second.length) {
    for(let i = 0; i < first.length; i++) {
      if(first[i] != second[i]) {
        path.push('..')
      }
    }
    path = checkPath(first, second, path)
    return path.join('/')
  }
}

// need to check at what point a and b are no longer the same and the put dots and rest of b
let a = '/foo/baz/baz'
let b = '/foo/baz'
function calcPathTwo(firstPath, secondPath) {
  let first = firstPath.split('/');
  let second = secondPath.split('/');
  function checkIndex (one, two) {
    for(let i = 0; i < one.length || i < two.length; i++) {
      if(first[i] != second[i])
      return i
    }
  }
  function addParts(index, one, two) {
    let array = []
    for(let j = index; j < one.length; j++) {
      array.push('..')
    }
    for(let i = index; i < two.length; i++) {
      array.push(second[i])
    }
    return array
  }
  let i = checkIndex(first,second)
  return addParts(i, first, second).join('/')
}

// console.log(calcPathTwo(a,b))
