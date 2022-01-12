//Completing a Ford Fever

const createChassis = () => {
    const newChassisObject = {  }
    return newChassisObject
}




const addWheels = (chassisObject) => {
    chassisObject.wheels = 4
    return chassisObject

}

const addEngine = (chassisObject) => {
    chassisObject.engine = "4.8L"
    return chassisObject
}

const addSteeringWheel = (chassisObject) => {
    chassisObject.steeringWheel = "Tilting"
    return chassisObject
}

const addDriveTrain = (chassisObject) => {
    chassisObject.addDriveTrain = "Two wheel drive"
    return chassisObject
}

const newChassis = createChassis ()
console.log(newChassis)

const chassisWheels = addWheels (newChassis)
console.log(chassisWheels)

const chassisEngine = addEngine (chassisWheels)
console.log (chassisEngine)

const chassisSteeringWheel = addSteeringWheel (chassisEngine)
console.log(chassisSteeringWheel)

const chassisDriveTrain = addDriveTrain (chassisSteeringWheel)
console.log(chassisDriveTrain)


