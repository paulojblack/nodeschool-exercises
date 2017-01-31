function repeat(operation, num) {
    console.log(num)
    if (num <= 0) return
    operation()
    return repeat(operation, --num)
}

function trampoline(fn) {
    console.log(fn.toString())
    var result = fn()

    while (fn instanceof Function) {
        result = result()
    }
    return fn();
}

// function factorial (n) {
//   var _factorial = trampoline( function myself (acc, n) {
//     return n
//     ? function () { return myself(acc * n, n - 1); }
//     : acc
//   });
//
//   return _factorial(1, n);
// }

module.exports = function(operation, num) {
    return trampoline(repeat(operation, num))
}
