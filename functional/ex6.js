function countWords(inputWords) {

    return inputWords.reduce(function(accWord, word) {
        if (word in accWord) {
            accWord[word]++;
        } else {
            accWord[word] = 1
        }

        return accWord
    }, {})
}

module.exports = countWords
