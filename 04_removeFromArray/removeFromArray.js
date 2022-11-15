const removeFromArray = function(array, remove) {
    let strArray = array.toString()
    strArray = strArray.replace(remove + ",", "")
    let joinedArray = strArray.split(",")
    return joinedArray
};

console.log(removeFromArray([1, 2, 3, 4], 4))

// Do not edit below this line
module.exports = removeFromArray;
