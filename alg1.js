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

console.log(timeConversion(time))
