const reverseString = function(string) {
    let stringSplit = string.split("");
    let reversedString='';
    for(let i=stringSplit.length-1;i>=0;i--) {
        reversedString += stringSplit[i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
