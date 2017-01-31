module.exports = function arrayMap(arr, fn) {
    return arr.reduce( (array, elem) => {
        console.log(array)
        array.push(fn(elem));
        return array
    },[])
}
