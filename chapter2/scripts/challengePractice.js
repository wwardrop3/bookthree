const createWoodBlock = () => {
    const blockObject = {
        type:"wood block",
        length: 10,
        material: "Pine",
        purpose: "Flute",
    }
    return blockObject
}


const createBeautifulCarving = (woodBlock) => {
    const woodString = (`The ${woodBlock.length} inch, ${woodBlock.type} was carved into a wood ${woodBlock.purpose}.`)
    return woodString
}
const woodBlock = createWoodBlock()

const carvingString = createBeautifulCarving(woodBlock)

console.log(carvingString)