const fillGasTank = (gallons) => {
    if (gallons>15){
        console.log("You can't put that much gas in the tank.")
    } else {
        console.log(`I filled the tank with ${gallons} gallons`)
    }
    
}

fillGasTank(24)