const repeatString = function(str, num) {
    if (num < 0) {
        return "ERROR!!!"
    }
    let phrase = ""
    for (let i = 1; i <= num; i++) {
        phrase += str + " "
    } 
    return phrase
};

console.log(repeatString("Toygun", 7))


// Do not edit below this line
module.exports = repeatString;
