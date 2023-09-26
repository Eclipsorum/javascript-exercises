const findTheOldest = function(arr) {
    return arr.reduce((accu, item) => {
        let accuDeath = accu.yearOfDeath, itemDeath = item.yearOfDeath;
        if(accuDeath === undefined) { accuDeath = new Date().getFullYear(); }
        if(itemDeath === undefined) { itemDeath = new Date().getFullYear(); }
        return (accuDeath - accu.yearOfBirth) > (itemDeath - item.yearOfBirth) ? accu : item          
    });
};

// Do not edit below this line
module.exports = findTheOldest;
