function duckCount() {
    return Array.prototype.slice.call(duckCount.arguments).filter( (elem) => {
        return Object.prototype.hasOwnProperty.call(elem, 'quack')
    }).length

}

module.exports = duckCount
