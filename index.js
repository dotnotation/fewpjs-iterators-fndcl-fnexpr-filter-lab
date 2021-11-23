// all functions takes an array of drivers and a string as arguments

function findMatching(array, string){
    // returns the matching list of drivers
    // should be case insensitive 
    return array.filter(driver => driver.toUpperCase() === string.toUpperCase());
}

function fuzzyMatch(array, string){
    // returns all drivers whose name begin with the provided letters
    return array.filter(driver => driver.toUpperCase()[0] === string.toUpperCase()[0])
}

function matchName(array, string){
    // each element of the array is an Object that has a property of name
    // return each element whose name property matches the provided string argument
    return array.filter(driver => driver.name === string)
}