const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

//1) should have a `totalBatteries` variable
//2) should have a number as a result
//3) should have made the sum of all assembled batteries

//THIS PASSES
const totalBatteries = batteryBatches.reduce((total, amount) => total + amount)

//THIS DOESN'T PASS
// returns 0 instead of 31 
//there's a way to make this work, 
// but it's OVERCOMPLICATED 
/*
const reducer = (accumulator, item) => {
    let total = 0
    const batteries = () => {
        let totalBatteries = 0
        totalBatteries = item
        return total += totalBatteries
    }
    batteries()
    return accumulator += total
}
batteryBatches.reduce(reducer)
*/