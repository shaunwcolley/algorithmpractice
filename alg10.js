// playing with class inheritance and calling parent function instead of child via child instance

class Car {
  constructor(make,model) {
    this.make = make
    this.model = model
  }

  emitCarbon() {
    return true
  }

}

class Hybrid extends Car {
  constructor(...args) {
    super(...args)
  }
  emitCarbon() {
    return false
  }
  emitCarbonTwo() {
    return super.emitCarbon();
  }
}

let jesse = new Hybrid('toyota','prius')

// // option1:
// console.log(jesse.__proto__.__proto__.emitCarbon.call(jesse))
// // option2 but I do not need to include jesse as a parameter:
// console.log(Car.prototype.emitCarbon.call(jesse))

// find median of two *sorted* arrays
let arrayOne = [1,2,3,4,5,6,7]
let arrayTwo = [30,31,32,33,35,40,45]

const median = (a, b) => {
  // need to combine arrays first
  let i = 0;
  let j = 0;
  let combination = []
  while (combination.length < a.length + b.length) {
    let first = a[i]
    let second = b[j]
    if(!first) {
      combination.push(second)
      j++
    } else if (!second) {
      combination.push(first)
      i++
    } else {
      if(first < second) {
        combination.push(first)
        i++
      } else if (second < first) {
        combination.push(second)
        j++
      } else {
        combination.push(first)
        combination.push(second)
        i++
        j++
      }
    }


  }
  // once combined, then I need to check if odd/even, if odd, return middle element
  if (combination.length % 2 === 1) {

    let middle = Math.floor(combination.length/2)
    return combination[middle]
  } else {
    // if even return average of middle two elements
    let middle = combination.length/2
    let median = (combination[middle] + combination[middle - 1])/2
    return median
  }
}

console.log(median(arrayOne, arrayTwo))
