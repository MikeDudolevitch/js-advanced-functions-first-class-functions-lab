// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    let newDrivers = drivers.slice(0, 2)
    return newDrivers
}
const returnLastTwoDrivers = function(drivers) {
    let lastDrivers = drivers.slice(-2)
    return lastDrivers
}
const selectingDrivers = [
    returnFirstTwoDrivers, returnLastTwoDrivers
]
const createFareMultiplier = function(i) {
    return function(x) {
        return i * x
    }
    }
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)
const selectDifferentDrivers = (drivers, returned) => {
    return returned(drivers)
}