function loadUsers(userIds, load, done) {
    var users = userIds.map( (id) => {
        return load(id);
    })

    return users
}

module.exports = loadUsers
