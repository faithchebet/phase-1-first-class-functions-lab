
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

const driversArray = ['Driver1', 'Driver2', 'Driver3', 'Driver4'];
const firstTwoDrivers = returnFirstTwoDrivers(driversArray);

console.log(firstTwoDrivers);  


const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
console.log(selectingDrivers[0](driversArray)); 
console.log(selectingDrivers[1](driversArray)); 


const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
};

const fareDoubler = createFareMultiplier(2);{
console.log(fareDoubler(10)); }

const fareQuadrupler = createFareMultiplier(4);{
console.log(fareQuadrupler(10)); 
const originalFare = 10;
const doubledFare = fareDoubler(originalFare);}

console.log(doubledFare); 


function fareTripler (createFareMultiplier){4};{
    var originalFare = 10;
const tripleFares = fareTripler(originalFare);
}
console.log(tripledFare);


const selectDifferentDrivers = function(drivers, driverSelector) {
    // Call the provided driverSelector function with the array of drivers
    return driverSelector(drivers);
};
console.log(firstTwoDrivers);  
const lastTwoDrivers = selectDifferentDrivers(driversArray, returnLastTwoDrivers);
console.log(lastTwoDrivers);  
