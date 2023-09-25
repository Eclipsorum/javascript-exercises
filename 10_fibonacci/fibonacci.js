const fibonacci = function(n) {
    if (n < 0) return "OOPS";
    let fib = 0, prevFib = 0;
    for(let i = n; i > 0; i--) {
        fib == 0 ? fib++ : fib = fib + prevFib;
        i == n ? "" : prevFib = fib - prevFib;
    }
    return fib;
};

// Do not edit below this line
module.exports = fibonacci;
