const sumAll = function(min, max) {
    let ret=min;
    if(min>max){
        for(let i=min-1;i>=max;i--){
            ret+=i;
        }
    }
    else {
    for(let i=min+1;i<=max;i++){
        ret+=i;
    }
    }
    return ret < 0 || typeof(min)!=="number" || typeof(max)!=="number" ? "ERROR":ret
};

// Do not edit below this line
module.exports = sumAll;
