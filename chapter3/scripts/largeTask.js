//Practice for building calculator

const add = (firstNumber, secondNumber) => {
    const sum = firstNumber + secondNumber
    return sum

}

//MUST STORE FUNCTION RESULT IN ANOTHER VARIABLE!


const subtract = (firstNumber, secondNumber) => {
    const sum = firstNumber - secondNumber
    return sum
}

const divide = (firstNumber, secondNumber) => {
    const division = firstNumber/secondNumber
    return division
}

const multiply = (firstNumber,secondNumber) => {
    const product = firstNumber*secondNumber
    return product
}

const square = (firstNumber) => {
    const squared = firstNumber * firstNumber
    return squared
}

let num1 = 4
let num2 = 6


// console.log(add(num1, num2))
// console.log(subtract(num1, num2))
// console.log(divide(num1,num2))
// console.log(multiply(num1, num2))
// console.log(square(num1))


//LEGS PROBLEM
//A quarter of the animals on a farm have four legs. The remaining three quarters of the animals have two legs. 
//If there are 60 legs overall, how many animals are there on the farm?



let twoLegs = 2
let twoLegsFraction = .75
let fourLegs = 4
let fourLegsFraction = .25
let totalLegs = 60


const avgTwoLegs = multiply(twoLegs, twoLegsFraction)
const avgFourLegs = multiply(fourLegs, fourLegsFraction)

const avgLegs = add(avgTwoLegs, avgFourLegs)
const totalAnimals = divide(totalLegs, avgLegs)

console.log(totalAnimals)



const legs = (totalLegs) => {
    
    return totalAnimals
}

console.log(legs(60))