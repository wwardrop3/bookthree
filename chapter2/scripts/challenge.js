const chair = (chairMaterial) => {
    const chairObject = {
        type: "chair",
        color: "Yellow",
        material: chairMaterial,
        price: 50,
    }
    return chairObject
}


const ChairStringMaker = (chairObject) => {
    const chairStringRepresentation = `The ${chairObject.color}, ${chairObject.material} costs $${chairObject.price}`
    return chairStringRepresentation
}


chairString = (material) =>{
    const chairObject = chair(material)
    const result = ChairStringMaker(chairObject)
    return result
}


//yellowChairMaker function is invoked and provided a string as an argument
// yellowChairMaker makes an object and returns it
// The object is captured in a variable
// chairStringMaker function is invoked and provided an object as an argument by putting the variable from step 3 in the parenthesis.
// chairStringMaker creates a string representation of the object and returns it
// The string is captured in a variable

console.log (chairString("Oak"))