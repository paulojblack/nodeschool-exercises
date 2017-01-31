function getShortMessages(messages) {
    return messages.map( (obj) => { return obj.message; }).filter((mess) => {return mess.length < 50})
}

module.exports = getShortMessages
