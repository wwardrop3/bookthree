const step1 = "Buy some milk chocolate"
const step2 = "Add some mint flavoring"
const step3 = "Combine the chocolate and mint"
const step4 = "Bake the mixture"
const step5 = "Break the hardened sheet into 6 pieces"
const step6 = "Enjoy!"

const steps = [step1,step2,step3,step4, step5,step6]
const buyMilkChocolate = () => {
    const candy = {
        type: "Milk Chocolate",
    }
    
    return candy
}

const addFlavor = (candyObject) => {
    candyObject.flavor = "Mint"
    return candyObject
}

const makeBarkMixture = (candyObject) => {
    if (candyObject.flavor === "Mint") {
        candyObject.mixed = true
    } else 
    {
        candyObject.mixed = false
    }
    return candyObject
}

const bakeCandy = (candyObject) => {
    if (candyObject.mixed === true) {
        candyObject.baked = true
    } else
    {
        candyObject.baked = false
    }
    return candyObject
}

const breakBark = (candyObject) => {
    if (candyObject.baked === true) {
        console.log(steps)
    }
}


let candy = buyMilkChocolate()

candy = addFlavor(candy)
candy = makeBarkMixture(candy)
candy = bakeCandy(candy)
candy = breakBark(candy)

