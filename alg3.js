// recursive practice with fibonacci

// first a sum of all numbers up to input:

// solution that I would first adopt with time complexity of O(n) and space complexity greater than recursive solution:

const forLoopSumToInput = (n) => {
  sum = 0
  for(let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum
}
// console.log(forLoopSumToInput(10)) // returns 55

// recursive solution:

const sumToInput = (n) => {
  if(n === 1) return 1;
  return n + sumToInput(n-1);
}

// console.log(sumToInput(10)) // returns 55

// fibonacci takes previous to numbers of sequence and adds them: e.g., 0,1,1,2,3,5,8,13, etc.

// this function checks to see if input is on fib sequence
// input 13 => On sequence

const forLoopPrevFib = (n) => {
  let a = 0;
  let b = 1;
  for(let i = 1; i <= n; i++){
    if (n === b) {
      return {answer: true};
    }
    if(b > n) {
      return { answer: false, numberLower: a, numberHigher: b };
      break
    }
    let temp = b;
    b = a + b;
    a = temp;
  }
}

// console.log(forLoopPrevFib(2585))

//recursive solution
// running fib recursively to give number at nth degree, but this doesn't tell us if a number is on sequence
const fib = (n) => {
  if(n === 0) return 0;
  if(n <= 1) return 1;
  return fib(n - 1) + fib(n-2)
}
// console.log(fib(10))

// only invokes one recursive function so it gets same efficiency as for loop and better efficiency than above recursive
const bestFib = (n,a=0,b=1) => {
  if (n) return bestFib(n-1, b, a+b);
  return a;
}

// console.log(bestFib(10))

// base case if(n === 0 || n === 1) return true

// recursive to check if in fibonacci

const inFib = (n, a=0, b=1) => {
  // if n is lowest input it is true and then a will become b and so on. We must pass a, b and n as variables because we need them in the second call
  if(a === n) {
    return {answer: true}
  }
  if(b > n) {
    return { answer: false, numberLower: a, numberHigher: b }
  }
  // we must keep in constant and we do not need to check if n because it is now a constant throughout.
  return inFib(n, b, a+b);
}

// console.log(inFib(10946))

//dynamic Programming of fibonacci

// This is an example of dynamic programming with retrun fibonacci

let f = [0,1]

const dynamicFib = (n) => {
  if(f[n]) return f[n];
  for (let i = 0; i < n; i ++) {
    f.push(f[i] + f[i+1])
  }
  return f[n]
}

// this seems the most costly to do a check, it seems better to do a simple for loop, unless size of data stored is huge.
const dynamicFibCheck = (n) => {
  console.log(f.length)
  for(let i = 0; i < f.length; i++) {
    console.log(f[i])
    if(f[i] === n) {
      return true
    }
  }
  if(f[f.length-1] > n){
    return false
  }
  let a = f[f.length-2];
  let b = f[f.length-1];
  for(let i = f.length; i < n; i++) {
    console.log(f[i-1])
    if(n === b) return true;
    if (b > n) return false;
    let temp = b;
    b = a + b;
    a = temp;
    f[i] = b
  }
}
// because it takes a little time to modify the array we must wait for result to finish
(async () => {
  let answer = await dynamicFib(2)
  let checkAnswer = dynamicFibCheck(11)
  console.log(checkAnswer)
})()
.then()
