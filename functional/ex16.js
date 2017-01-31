function getDependencies(tree, returnArr) {
    var keyArray = Object.keys(tree),
        newTree = {};
    returnArr = returnArr || [];

    keyArray.forEach(function(key) {
        if (tree[key] instanceof Object && tree[key] !== null ) {

            Object.keys(tree[key]).forEach(function(dep) {
                if (key === 'dependencies') {
                    var stringDep = dep + '@' + tree[key][dep]['version']
                    returnArr.push(stringDep)
                    newTree[dep] = tree[key][dep]['dependencies']
                }
                console.log(newTree)

            })
        }
    });

    if (Object.keys(newTree).length) {
        return getDependencies(newTree, returnArr)
    }

    return returnArr
}

module.exports = getDependencies
