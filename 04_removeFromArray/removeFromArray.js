const removeFromArray = function(...args) {
    let myArr = args[0];
    for(let i=1;i<args.length;i++){
        if(myArr.findIndex(element => element === args[i]) !== -1) {
        myArr.splice(myArr.findIndex(element => element === args[i]),1);
        }
    }

    return myArr;
};

// Do not edit below this line
module.exports = removeFromArray;
