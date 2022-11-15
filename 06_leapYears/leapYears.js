const leapYears = function(year) {
    
    if (isNaN(year) === true ) return "ERROR!!!"

    if (year % 4 === 0 && (year % 400 === 0 || year % 100 !== 0)) {
        return true
    } else {
        return false
    }
}

console.log(leapYears(600))


// Do not edit below this line
module.exports = leapYears;
