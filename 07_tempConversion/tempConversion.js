const ftoc = function(fah) {

    let celcius = ((fah - 32)*5)/9
    return Math.floor(celcius * 10)/10
    
};
console.log(ftoc(100))

const ctof = function(cel) {
    let fahren = (cel * 9/5 + 32)
    return Math.floor(fahren * 10)/10
}
console.log(ctof(-10))