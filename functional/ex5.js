function checkUsersValid(goodUsers) {
    var usersIds = function(arr) {
        return arr.map((user) => {
            return user.id
        })
    };
    console.log(usersIds(goodUsers))
    return function allUsersValid(submittedUsers) {
        return usersIds(submittedUsers).every((subUse) => {
            return usersIds(goodUsers).includes(subUse)
        })
    };
}

module.exports = checkUsersValid
