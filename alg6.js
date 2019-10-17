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

// let's create a class and extend it, and instatiate it

class Vehicle {
  constructor(make,model,fuel = false){
    this.make = make;
    this.model = model;
    this.fuel = fuel
  }
}

class ElectricCar extends Vehicle {
  constructor(battery, ...args) {
    super(...args);
    this.battery = battery
    this.fuel = false
  }
}

let tesla1 = new ElectricCar(true, "telsa", "S")
console.log(tesla1)
let volt1 = new ElectricCar(true, "Chevy", "Volt");
console.log(volt1)
let fit = new Vehicle("Honda", "fit", "gas");
console.log(fit)

// quick sort implementation in JS

console.log('--------------------');
console.log('Quick Sort results:');

let testArray = [5,3,7,6,2,9,1];

// this is a bad implementation of sort because it uses last index as pivot.
const quickSort = (array) => {
  const pivotIndex = Math.ceil(array.length/2);
  let lPointer = 0;
  let rPointer = array.length - 1;

  while (lPointer < pivotIndex && rPointer > pivotIndex) {
    let pivot = array[pivotIndex];
    let left = array[lPointer];
    let right = array[rPointer];

    if (left < pivot) {
      lPointer += 1
    } else if (left > pivot) {
      if (right > pivot) {
        rPointer -= 1;
      } else if (right < pivot) {
        array[lPointer] = right;
        array[rPointer] = left;
        if(lPointer < pivotIndex - 1) {
          lPointer += 1;
        } else {
          rPointer += 1
        }
      }
    }
  }

  return array;
}


const defaultComparator = (a,b) => {
  if (a < b){
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}

const recQuickSort = (
  unsortedArray,
  comparator = defaultComparator
) => {

  const sortedArray = [...unsortedArray];

  const recursiveSort = (start, end) => {
    if (end - start < 1) {
      return;
    }

    const pivot = sortedArray[end];
    let splitIndex = start;

    for (let i = start; i < end; i++) {
      const sort = comparator(sortedArray[i], pivot);
      if (sort === -1) {

        if (splitIndex !== i) {
          const temp = sortedArray[splitIndex];
          sortedArray[splitIndex] = sortedArray[i];
          sortedArray[i] = temp;
        }
        splitIndex++;
      }
    }
    sortedArray[end] = sortedArray[splitIndex];
    sortedArray[splitIndex] = pivot;

    recursiveSort(start, splitIndex - 1);
    recursiveSort(splitIndex + 1, end);

  }

  recursiveSort(0, unsortedArray.length -1)

  return sortedArray;
}


console.log(recQuickSort(testArray));
