function repeat(operation, num) {

    if (num <= 0) return

    operation()
    return new Promise(resolve => {
        resolve(repeat(operation, --num));
    })
}

module.exports = repeat;
